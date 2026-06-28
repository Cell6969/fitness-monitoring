export const prerender = false;
import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";


export const POST: APIRoute = async ({request, cookies, redirect}) => {
    const formData = await request.formData();
    const weight = formData.get("weight")?.toString();
    const date = new Date().toISOString();

    if (!weight) {
        return new Response("Weight is required", { status: 400 });
    }

    const accessToken = cookies.get("SB_ACCESS_TOKEN")?.value;
    if (!accessToken) {
        return new Response("Unauthorized", { status: 401 });
    }

    const session = await supabase.auth.setSession({ access_token: accessToken, refresh_token: cookies.get("SB_REFRESH_TOKEN")?.value || "" });

    const userId = session.data?.user?.id;
    if (!userId) {
        return new Response("Unauthorized", { status: 401 });
    }

    const { data, error } = await supabase.from("weights").insert([
        { weight: Number(weight), date, user_id: userId }
    ]).select().single();

    if (error) {
        return redirect(`/weight-tracker?toast=${encodeURIComponent(error.message || "Unable to save weight")}&toastType=error`);
    }

    return redirect(`/weight-tracker?toast=${encodeURIComponent("Weight saved successfully")}&toastType=success`);
}

export const GET: APIRoute = async ({ cookies }) => {
    const accessToken = cookies.get("SB_ACCESS_TOKEN")?.value;
    if (!accessToken) {
        return new Response("Unauthorized", { status: 401 });
    }
    const session = await supabase.auth.setSession({ access_token: accessToken, refresh_token: cookies.get("SB_REFRESH_TOKEN")?.value || "" });

    const userId = session.data?.user?.id;

    if (!userId) {
        return new Response("Unauthorized", { status: 401 });
    }

    const { data, error } = await supabase.from("weights").select("*").eq("user_id", userId).order("date", { ascending: false });

    if (error) {
        console.error("Error fetching weights:", error);
        return new Response(error.message, { status: 500 });
    }

    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
    });
}

export const PATCH: APIRoute = async ({ request, cookies }) => {
    const formData = await request.formData();
    const weightId = formData.get("weightId")?.toString();
    const newWeight = formData.get("newWeight")?.toString();

    if (!weightId || !newWeight) {
        return new Response("Weight ID and new weight are required", { status: 400 });
    }

    const accessToken = cookies.get("SB_ACCESS_TOKEN")?.value;
    if (!accessToken) {
        return new Response("Unauthorized", { status: 401 });
    }

    const session = await supabase.auth.setSession({ access_token: accessToken, refresh_token: cookies.get("SB_REFRESH_TOKEN")?.value || "" });

    const userId = session.data?.user?.id;
    if (!userId) {
        return new Response("Unauthorized", { status: 401 });
    }

    console.log("Updating weight for user:", userId, "weightId:", weightId, "newWeight:", newWeight);

    const { data: existingWeight, error: fetchError } = await supabase.from("weights").select("*").eq("id", weightId).single();

    const { data, error } = await supabase.from("weights").update({ weight: Number(newWeight) }).eq("id", weightId).select().single();

    if (error) {
        return new Response(error.message, { status: 500 });
    }

    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
    });
}
