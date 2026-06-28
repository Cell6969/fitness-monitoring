export const prerender = false;
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const redirectTo = formData.get("redirect")?.toString() || "/";

    if (!email || !password) {
        return redirect(`/signin?toast=${encodeURIComponent("Email and password are required")}&toastType=error&redirect=${encodeURIComponent(redirectTo)}`);
    }

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return redirect(`/signin?toast=${encodeURIComponent(error.message || "Login failed")}&toastType=error&redirect=${encodeURIComponent(redirectTo)}`);
    }

    const { access_token, refresh_token } = data.session;
    const displayName = data.user.user_metadata?.full_name || data.user.email?.split("@")[0] || "there";

    cookies.set("SB_ACCESS_TOKEN", access_token, { path: "/", sameSite: "strict", httpOnly: true });
    cookies.set("SB_REFRESH_TOKEN", refresh_token, { path: "/", sameSite: "strict", httpOnly: true });
    cookies.set("SB_USER_NAME", displayName, { path: "/", sameSite: "strict" });

    return redirect(redirectTo);
}