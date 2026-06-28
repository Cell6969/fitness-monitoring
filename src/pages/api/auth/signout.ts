export const prerender = false;
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ cookies, redirect }) => {
    cookies.delete("SB_ACCESS_TOKEN", { path: "/" });
    cookies.delete("SB_REFRESH_TOKEN", { path: "/" });
    cookies.delete("SB_USER_NAME", { path: "/" });

    return redirect("/");
};
