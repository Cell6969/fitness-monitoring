import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
//#region src/pages/api/auth/signout.ts
var signout_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var POST = async ({ cookies, redirect }) => {
	cookies.delete("SB_ACCESS_TOKEN", { path: "/" });
	cookies.delete("SB_REFRESH_TOKEN", { path: "/" });
	cookies.delete("SB_USER_NAME", { path: "/" });
	return redirect("/");
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/auth/signout@_@ts
var page = () => signout_exports;
//#endregion
export { page };
