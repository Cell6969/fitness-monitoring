import { C as createAstro, _ as renderHead, a as renderComponent, f as renderTemplate, g as maybeRenderHead, h as generateCspDigest, l as renderSlot, t as spreadAttributes, v as addAttribute, w as createComponent, x as unescapeHTML } from "./server_BK3W4eAQ.mjs";
import "./compiler_diwuff8S.mjs";
//#region node_modules/astro/dist/assets/runtime.js
function createSvgComponent({ meta, attributes, children, styles }) {
	const hasStyles = styles.length > 0;
	const Component = createComponent({
		async factory(result, props) {
			const normalizedProps = normalizeProps(attributes, props);
			if (hasStyles && result.cspDestination) for (const style of styles) {
				const hash = await generateCspDigest(style, result.cspAlgorithm);
				result._metadata.extraStyleHashes.push(hash);
			}
			return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
		},
		propagation: hasStyles ? "self" : "none"
	});
	Object.defineProperty(Component, "toJSON", {
		value: () => meta,
		enumerable: false
	});
	return Object.assign(Component, meta);
}
var ATTRS_TO_DROP = [
	"xmlns",
	"xmlns:xlink",
	"version"
];
var DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
	for (const attr of ATTRS_TO_DROP) delete attributes[attr];
	return attributes;
}
function normalizeProps(attributes, props) {
	return dropAttributes({
		...DEFAULT_ATTRS,
		...attributes,
		...props
	});
}
//#endregion
//#region src/assets/background.svg
var background_default = createSvgComponent({
	"meta": {
		"src": "/_astro/background.BPKAcmfN.svg",
		"width": 1440,
		"height": 1024,
		"format": "svg"
	},
	"attributes": {
		"width": "1440",
		"height": "1024",
		"fill": "none"
	},
	"children": "<path fill=\"url(#a)\" fill-rule=\"evenodd\" d=\"M-217.58 475.75c91.82-72.02 225.52-29.38 341.2-44.74C240 415.56 372.33 315.14 466.77 384.9c102.9 76.02 44.74 246.76 90.31 366.31 29.83 78.24 90.48 136.14 129.48 210.23 57.92 109.99 169.67 208.23 155.9 331.77-13.52 121.26-103.42 264.33-224.23 281.37-141.96 20.03-232.72-220.96-374.06-196.99-151.7 25.73-172.68 330.24-325.85 315.72-128.6-12.2-110.9-230.73-128.15-358.76-12.16-90.14 65.87-176.25 44.1-264.57-26.42-107.2-167.12-163.46-176.72-273.45-10.15-116.29 33.01-248.75 124.87-320.79Z\" clip-rule=\"evenodd\" style=\"opacity:.154\" /><path fill=\"url(#b)\" fill-rule=\"evenodd\" d=\"M1103.43 115.43c146.42-19.45 275.33-155.84 413.5-103.59 188.09 71.13 409 212.64 407.06 413.88-1.94 201.25-259.28 278.6-414.96 405.96-130 106.35-240.24 294.39-405.6 265.3-163.7-28.8-161.93-274.12-284.34-386.66-134.95-124.06-436-101.46-445.82-284.6-9.68-180.38 247.41-246.3 413.54-316.9 101.01-42.93 207.83 21.06 316.62 6.61Z\" clip-rule=\"evenodd\" style=\"opacity:.154\" /><defs><linearGradient id=\"b\" x1=\"373\" x2=\"1995.44\" y1=\"1100\" y2=\"118.03\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#D83333\" /><stop offset=\"1\" stop-color=\"#F041FF\" /></linearGradient><linearGradient id=\"a\" x1=\"107.37\" x2=\"1130.66\" y1=\"1993.35\" y2=\"1026.31\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#3245FF\" /><stop offset=\"1\" stop-color=\"#BC52EE\" /></linearGradient></defs>",
	"styles": []
});
//#endregion
//#region src/assets/panda.png
var panda_default = new Proxy({
	"src": "/_astro/panda.BleqkQJA.png",
	"width": 612,
	"height": 408,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/kerjaan/sidejob/diet/src/assets/panda.png";
	return target[name];
} });
//#endregion
//#region src/components/Navbar.astro
createAstro("https://astro.build");
var $$Navbar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Navbar;
	const accessToken = Astro.cookies.get("SB_ACCESS_TOKEN")?.value;
	const userName = Astro.cookies.get("SB_USER_NAME")?.value;
	const isSignedIn = Boolean(accessToken);
	return renderTemplate`${maybeRenderHead($$result)}<nav class="nav" role="navigation" aria-label="Main navigation" data-astro-cid-l7arcky5><div class="container" data-astro-cid-l7arcky5><a class="brand" href="/" data-astro-cid-l7arcky5>Healthy Diet</a><div class="nav-actions" data-astro-cid-l7arcky5><ul class="links" data-astro-cid-l7arcky5><li data-astro-cid-l7arcky5><a href="#meals" data-astro-cid-l7arcky5>Meals</a></li><li data-astro-cid-l7arcky5><a href="#activities" data-astro-cid-l7arcky5>Activities</a></li><li data-astro-cid-l7arcky5><a href="#tips" data-astro-cid-l7arcky5>Tips</a></li><li data-astro-cid-l7arcky5><a href="#faq" data-astro-cid-l7arcky5>FAQ</a></li></ul>${isSignedIn ? renderTemplate`<div class="auth-actions" data-astro-cid-l7arcky5><span class="user-pill" data-astro-cid-l7arcky5>Hi, ${userName ?? "there"}</span><form method="post" action="/api/auth/signout" class="signout-form" data-astro-cid-l7arcky5><button type="submit" class="signout-btn" data-astro-cid-l7arcky5>Sign out</button></form></div>` : renderTemplate`<a href="/signin" class="signin-link" data-astro-cid-l7arcky5>Sign in</a>`}</div></div></nav>`;
}, "D:/kerjaan/sidejob/diet/src/components/Navbar.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="site-footer" data-astro-cid-jo6i4kqk><div class="inner" data-astro-cid-jo6i4kqk><p data-astro-cid-jo6i4kqk>© ${(/* @__PURE__ */ new Date()).getFullYear()} Healthy Diet — Informational only.</p></div></footer>`;
}, "D:/kerjaan/sidejob/diet/src/components/Footer.astro", void 0);
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	return renderTemplate`<html lang="en" data-astro-cid-ju4pidww><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro.generator, "content")}><title>Program Diet</title>${renderHead($$result)}</head><body data-astro-cid-ju4pidww><img id="background"${addAttribute(background_default.src, "src")} alt="" fetchpriority="high" data-astro-cid-ju4pidww>${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-ju4pidww": true })}<div id="toast-root" class="toast-root" aria-live="polite" aria-atomic="true" data-astro-cid-ju4pidww></div><main data-astro-cid-ju4pidww>${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ju4pidww": true })}<img class="panda"${addAttribute(panda_default.src, "src")} alt="Panda mascot" data-astro-cid-ju4pidww></body></html><script>
	window.showToast = function (message, type = 'info') {
		const root = document.getElementById('toast-root');
		if (!root || !message) return;

		const toast = document.createElement('div');
		toast.className = \`toast toast-\${type}\`;
		toast.textContent = message;
		root.appendChild(toast);

		requestAnimationFrame(() => toast.classList.add('show'));
		window.setTimeout(() => {
			toast.classList.remove('show');
			window.setTimeout(() => toast.remove(), 220);
		}, 2600);
	};
<\/script>`;
}, "D:/kerjaan/sidejob/diet/src/layouts/Layout.astro", void 0);
//#endregion
export { $$Layout as t };
