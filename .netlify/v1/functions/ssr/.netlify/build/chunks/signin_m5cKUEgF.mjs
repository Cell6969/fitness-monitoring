import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { C as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute, w as createComponent } from "./server_BK3W4eAQ.mjs";
import "./compiler_diwuff8S.mjs";
import { t as $$Layout } from "./Layout_CpGoYtDX.mjs";
//#region src/pages/signin.astro
var signin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Signin,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Signin = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Signin;
	const redirectTo = Astro.url.searchParams.get("redirect") || "/";
	Astro.url.searchParams.get("toast");
	Astro.url.searchParams.get("toastType");
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Sign In",
		"data-astro-cid-nv3kv2t6": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="signin-page" data-astro-cid-nv3kv2t6><div class="signin-card" data-astro-cid-nv3kv2t6><p class="eyebrow" data-astro-cid-nv3kv2t6>Welcome back</p><h1 data-astro-cid-nv3kv2t6>Sign in to your account</h1><form action="/api/auth/signin" method="post" class="signin-form" data-astro-cid-nv3kv2t6><input type="hidden" name="redirect"${addAttribute(redirectTo, "value")} data-astro-cid-nv3kv2t6><label for="email" data-astro-cid-nv3kv2t6>Email</label><input type="email" name="email" id="email" placeholder="you@example.com" required data-astro-cid-nv3kv2t6><label for="password" data-astro-cid-nv3kv2t6>Password</label><input type="password" name="password" id="password" placeholder="Enter your password" required data-astro-cid-nv3kv2t6><button type="submit" data-astro-cid-nv3kv2t6>Login</button></form></div></section>` })}<script>
  const params = new URLSearchParams(window.location.search);
  const message = params.get('toast');
  if (message) {
    window.showToast(decodeURIComponent(message), params.get('toastType') || 'error');
  }
<\/script>`;
}, "D:/kerjaan/sidejob/diet/src/pages/signin.astro", void 0);
var $$file = "D:/kerjaan/sidejob/diet/src/pages/signin.astro";
var $$url = "/signin";
//#endregion
//#region \0virtual:astro:page:src/pages/signin@_@astro
var page = () => signin_exports;
//#endregion
export { page };
