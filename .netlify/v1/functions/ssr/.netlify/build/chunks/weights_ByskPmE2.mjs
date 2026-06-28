import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { t as supabase } from "./supabase_0JPEjubT.mjs";
//#region src/pages/api/weights.ts
var weights_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	PATCH: () => PATCH,
	POST: () => POST,
	prerender: () => false
});
var POST = async ({ request, cookies, redirect }) => {
	const weight = (await request.formData()).get("weight")?.toString();
	const date = (/* @__PURE__ */ new Date()).toISOString();
	if (!weight) return new Response("Weight is required", { status: 400 });
	const accessToken = cookies.get("SB_ACCESS_TOKEN")?.value;
	if (!accessToken) return new Response("Unauthorized", { status: 401 });
	const userId = (await supabase.auth.setSession({
		access_token: accessToken,
		refresh_token: cookies.get("SB_REFRESH_TOKEN")?.value || ""
	})).data?.user?.id;
	if (!userId) return new Response("Unauthorized", { status: 401 });
	const { data, error } = await supabase.from("weights").insert([{
		weight: Number(weight),
		date,
		user_id: userId
	}]).select().single();
	if (error) return redirect(`/weight-tracker?toast=${encodeURIComponent(error.message || "Unable to save weight")}&toastType=error`);
	return redirect(`/weight-tracker?toast=${encodeURIComponent("Weight saved successfully")}&toastType=success`);
};
var GET = async ({ cookies }) => {
	const accessToken = cookies.get("SB_ACCESS_TOKEN")?.value;
	if (!accessToken) return new Response("Unauthorized", { status: 401 });
	const userId = (await supabase.auth.setSession({
		access_token: accessToken,
		refresh_token: cookies.get("SB_REFRESH_TOKEN")?.value || ""
	})).data?.user?.id;
	if (!userId) return new Response("Unauthorized", { status: 401 });
	const { data, error } = await supabase.from("weights").select("*").eq("user_id", userId).order("date", { ascending: false });
	if (error) {
		console.error("Error fetching weights:", error);
		return new Response(error.message, { status: 500 });
	}
	return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
};
var PATCH = async ({ request, cookies }) => {
	const formData = await request.formData();
	const weightId = formData.get("weightId")?.toString();
	const newWeight = formData.get("newWeight")?.toString();
	if (!weightId || !newWeight) return new Response("Weight ID and new weight are required", { status: 400 });
	const accessToken = cookies.get("SB_ACCESS_TOKEN")?.value;
	if (!accessToken) return new Response("Unauthorized", { status: 401 });
	const userId = (await supabase.auth.setSession({
		access_token: accessToken,
		refresh_token: cookies.get("SB_REFRESH_TOKEN")?.value || ""
	})).data?.user?.id;
	if (!userId) return new Response("Unauthorized", { status: 401 });
	console.log("Updating weight for user:", userId, "weightId:", weightId, "newWeight:", newWeight);
	const { data: existingWeight, error: fetchError } = await supabase.from("weights").select("*").eq("id", weightId).single();
	const { data, error } = await supabase.from("weights").update({ weight: Number(newWeight) }).eq("id", weightId).select().single();
	if (error) return new Response(error.message, { status: 500 });
	return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/weights@_@ts
var page = () => weights_exports;
//#endregion
export { page };
