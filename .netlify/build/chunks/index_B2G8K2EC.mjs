import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { C as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, n as renderScript, o as Fragment, v as addAttribute, w as createComponent } from "./server_BK3W4eAQ.mjs";
import "./compiler_diwuff8S.mjs";
import { t as $$Layout } from "./Layout_CpGoYtDX.mjs";
//#region src/components/Hero.astro
createAstro("https://astro.build");
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Hero;
	const trackerHref = Boolean(Astro.cookies.get("SB_ACCESS_TOKEN")?.value) ? "/weight-tracker" : "/signin?redirect=/weight-tracker";
	return renderTemplate`${maybeRenderHead($$result)}<section id="hero" aria-labelledby="hero-title" data-astro-cid-ge2uvauf><div class="inner" data-astro-cid-ge2uvauf><h1 id="hero-title" data-astro-cid-ge2uvauf>Healthy Diet Guide</h1><p data-astro-cid-ge2uvauf>Simple daily meal recommendations and healthy activities.</p><div class="cta-group" data-astro-cid-ge2uvauf><a class="cta" href="#meals" data-astro-cid-ge2uvauf>View Today's Menu</a><a class="cta secondary"${addAttribute(trackerHref, "href")} data-astro-cid-ge2uvauf>Track Weight</a></div></div></section>`;
}, "D:/kerjaan/sidejob/diet/src/components/Hero.astro", void 0);
//#endregion
//#region src/data/meals.ts
var mealPlans = [
	{
		day: 1,
		breakfast: {
			name: "Telur Tomat Asam Manis",
			description: "2 telur, tomat, bawang, 1 sdt minyak",
			calories: {
				withoutRice: 220,
				withRice: 350
			}
		},
		lunch: {
			name: "Ayam Lada Hitam",
			description: "Dada ayam + tumis buncis",
			calories: {
				withoutRice: 260,
				withRice: 390
			}
		},
		dinner: {
			name: "Sup Bayam + Tahu Kukus",
			calories: {
				withoutRice: 170,
				withRice: 300
			}
		},
		snack: {
			name: "Apel",
			calories: { withoutRice: 80 }
		}
	},
	{
		day: 2,
		breakfast: {
			name: "Omelet Sayur",
			description: "Bayam dan wortel",
			calories: {
				withoutRice: 210,
				withRice: 340
			}
		},
		lunch: {
			name: "Ayam Rica-rica",
			description: "Ayam rica-rica + bayam",
			calories: {
				withoutRice: 250,
				withRice: 380
			}
		},
		dinner: {
			name: "Capcay Kuah",
			calories: {
				withoutRice: 180,
				withRice: 310
			}
		},
		snack: {
			name: "Jeruk",
			calories: { withoutRice: 70 }
		}
	},
	{
		day: 3,
		breakfast: {
			name: "Tahu Telur",
			calories: {
				withoutRice: 230,
				withRice: 360
			}
		},
		lunch: {
			name: "Ayam Panggang Lalapan",
			calories: {
				withoutRice: 230,
				withRice: 360
			}
		},
		dinner: {
			name: "Sup Ayam Bening",
			calories: {
				withoutRice: 220,
				withRice: 350
			}
		},
		snack: {
			name: "Pisang",
			calories: { withoutRice: 105 }
		}
	},
	{
		day: 4,
		breakfast: {
			name: "Telur Orak-arik Jamur",
			calories: {
				withoutRice: 205,
				withRice: 335
			}
		},
		lunch: {
			name: "Ayam Suwir Pedas",
			calories: {
				withoutRice: 240,
				withRice: 370
			}
		},
		dinner: {
			name: "Tumis Brokoli + Ayam",
			calories: {
				withoutRice: 240,
				withRice: 370
			}
		},
		snack: {
			name: "Pepaya",
			calories: { withoutRice: 60 }
		}
	},
	{
		day: 5,
		breakfast: {
			name: "Telur Dadar Bayam",
			calories: {
				withoutRice: 215,
				withRice: 345
			}
		},
		lunch: {
			name: "Capcay Ayam",
			calories: {
				withoutRice: 275,
				withRice: 405
			}
		},
		dinner: {
			name: "Tempe Panggang + Sayur Bening",
			calories: {
				withoutRice: 190,
				withRice: 320
			}
		},
		snack: {
			name: "Semangka",
			calories: { withoutRice: 45 }
		}
	},
	{
		day: 6,
		breakfast: {
			name: "Ubi Rebus + Telur",
			calories: {
				withoutRice: 260,
				withRice: 390
			}
		},
		lunch: {
			name: "Ayam Bumbu Kuning",
			calories: {
				withoutRice: 245,
				withRice: 375
			}
		},
		dinner: {
			name: "Sayur Sop + Ayam Suwir",
			calories: {
				withoutRice: 210,
				withRice: 340
			}
		},
		snack: {
			name: "Melon",
			calories: { withoutRice: 50 }
		}
	},
	{
		day: 7,
		breakfast: {
			name: "Roti Gandum + Telur",
			calories: { withoutRice: 290 }
		},
		lunch: {
			name: "Tumis Tempe Buncis",
			calories: {
				withoutRice: 255,
				withRice: 385
			}
		},
		dinner: {
			name: "Sup Jagung Ayam",
			calories: {
				withoutRice: 235,
				withRice: 365
			}
		},
		snack: {
			name: "Jambu Biji",
			calories: { withoutRice: 70 }
		}
	},
	{
		day: 8,
		breakfast: {
			name: "Tumis Tahu Telur",
			description: "Tahu, telur, tomat, daun bawang",
			calories: {
				withoutRice: 230,
				withRice: 360
			}
		},
		lunch: {
			name: "Ayam Teriyaki Homemade",
			description: "Dada ayam, brokoli, saus teriyaki rendah gula",
			calories: {
				withoutRice: 280,
				withRice: 410
			}
		},
		dinner: {
			name: "Tumis Sawi Putih + Tahu",
			calories: {
				withoutRice: 170,
				withRice: 300
			}
		},
		snack: {
			name: "Pir",
			calories: { withoutRice: 95 }
		}
	},
	{
		day: 9,
		breakfast: {
			name: "Jagung Rebus + Telur",
			calories: {
				withoutRice: 270,
				withRice: 400
			}
		},
		lunch: {
			name: "Tahu Telur Kuah",
			description: "Tahu, telur, kuah bening",
			calories: {
				withoutRice: 240,
				withRice: 370
			}
		},
		dinner: {
			name: "Capcay Kuah",
			calories: {
				withoutRice: 180,
				withRice: 310
			}
		},
		snack: {
			name: "Apel",
			calories: { withoutRice: 80 }
		}
	},
	{
		day: 10,
		breakfast: {
			name: "Singkong Rebus + Telur",
			calories: {
				withoutRice: 290,
				withRice: 420
			}
		},
		lunch: {
			name: "Ayam Kecap Rendah Gula",
			calories: {
				withoutRice: 270,
				withRice: 400
			}
		},
		dinner: {
			name: "Tempe Panggang + Sayur Bening",
			calories: {
				withoutRice: 190,
				withRice: 320
			}
		},
		snack: {
			name: "Jeruk",
			calories: { withoutRice: 70 }
		}
	},
	{
		day: 11,
		breakfast: {
			name: "Kentang Rebus + Telur Orak-arik",
			calories: {
				withoutRice: 250,
				withRice: 380
			}
		},
		lunch: {
			name: "Capcay Ayam",
			calories: {
				withoutRice: 275,
				withRice: 405
			}
		},
		dinner: {
			name: "Sup Ayam Bening",
			calories: {
				withoutRice: 220,
				withRice: 350
			}
		},
		snack: {
			name: "Melon",
			calories: { withoutRice: 50 }
		}
	},
	{
		day: 12,
		breakfast: {
			name: "Smoothie Pisang Oat",
			calories: { withoutRice: 300 }
		},
		lunch: {
			name: "Tempe Panggang + Sayur Asem",
			calories: {
				withoutRice: 250,
				withRice: 380
			}
		},
		dinner: {
			name: "Tumis Kangkung + Telur Dadar",
			calories: {
				withoutRice: 230,
				withRice: 360
			}
		},
		snack: {
			name: "Pepaya",
			calories: { withoutRice: 60 }
		}
	},
	{
		day: 13,
		breakfast: {
			name: "Bubur Ayam Homemade",
			description: "Tanpa kerupuk dan cakwe",
			calories: { withoutRice: 320 }
		},
		lunch: {
			name: "Ayam Panggang Lalapan",
			calories: {
				withoutRice: 230,
				withRice: 360
			}
		},
		dinner: {
			name: "Sup Bayam + Tahu Kukus",
			calories: {
				withoutRice: 170,
				withRice: 300
			}
		},
		snack: {
			name: "Jambu Biji",
			calories: { withoutRice: 70 }
		}
	},
	{
		day: 14,
		breakfast: {
			name: "Roti Gandum + Selai Kacang",
			calories: { withoutRice: 320 }
		},
		lunch: {
			name: "Ayam Rica-rica",
			calories: {
				withoutRice: 250,
				withRice: 380
			}
		},
		dinner: {
			name: "Sayur Sop + Ayam Suwir",
			calories: {
				withoutRice: 210,
				withRice: 340
			}
		},
		snack: {
			name: "Yogurt Rendah Lemak",
			calories: { withoutRice: 110 }
		}
	}
];
//#endregion
//#region src/components/MealCard.astro
var $$MealCard = createComponent(($$result, $$props, $$slots) => {
	const MS_PER_DAY = 1440 * 60 * 1e3;
	const CYCLE_DAYS = 14;
	const dayIndexForDate = (d = /* @__PURE__ */ new Date()) => {
		const utc = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
		return Math.floor(utc / MS_PER_DAY) % CYCLE_DAYS;
	};
	const caloriesOf = (item) => {
		if (!item || !item.calories) return 0;
		return item.calories.withoutRice ?? item.calories.withRice ?? 0;
	};
	const caloriesText = (item) => {
		if (!item || !item.calories) return "0 kcal";
		const withoutRice = item.calories.withoutRice;
		const withRice = item.calories.withRice;
		if (withRice != null && withoutRice != null && withRice !== withoutRice) return `${withoutRice} kcal / ${withRice} kcal dengan nasi`;
		return `${withoutRice ?? withRice ?? 0} kcal`;
	};
	const totalCalories = (items = []) => items.reduce((s, i) => s + caloriesOf(i), 0);
	const totalCaloriesWithRice = (items = []) => {
		const values = items.map((i) => i?.calories?.withRice).filter((v) => typeof v === "number");
		if (values.length !== items.length) return null;
		return values.reduce((s, v) => s + v, 0);
	};
	return renderTemplate`${maybeRenderHead($$result)}<section id="meals" aria-labelledby="meals-title" data-astro-cid-nxsfgbym><h2 id="meals-title" data-astro-cid-nxsfgbym>This Week's Menu</h2><div class="week-grid" data-astro-cid-nxsfgbym>${(() => {
		const dayIndex = dayIndexForDate();
		const plans = Array.isArray(mealPlans) ? mealPlans : [];
		const today = /* @__PURE__ */ new Date();
		const fmt = new Intl.DateTimeFormat("id-ID", {
			weekday: "short",
			day: "numeric",
			month: "short"
		});
		const cards = [];
		for (let i = 0; i < 7; i++) {
			const dateUtc = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
			dateUtc.setUTCDate(dateUtc.getUTCDate() + i);
			const label = fmt.format(dateUtc);
			const planDayNumber = (dayIndex + i) % CYCLE_DAYS + 1;
			const plan = plans.find((p) => p.day === planDayNumber);
			cards.push({
				label,
				plan,
				planDayNumber
			});
		}
		if (cards.length === 0) return renderTemplate`<p class="empty" data-astro-cid-nxsfgbym>No meal plans available.</p>`;
		return cards.map((c) => renderTemplate`<article class="day-card"${addAttribute(`day-${c.planDayNumber}`, "aria-labelledby")} data-astro-cid-nxsfgbym><h3${addAttribute(`day-${c.planDayNumber}`, "id")} data-astro-cid-nxsfgbym>${c.label}</h3>${c.plan ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<p class="day-total" data-astro-cid-nxsfgbym>Total tanpa nasi: ${totalCalories([
			c.plan.breakfast,
			c.plan.lunch,
			c.plan.dinner,
			c.plan.snack
		])} kcal</p>${totalCaloriesWithRice([
			c.plan.breakfast,
			c.plan.lunch,
			c.plan.dinner,
			c.plan.snack
		]) != null ? renderTemplate`<p class="day-subtotal" data-astro-cid-nxsfgbym>Total dengan nasi: ${totalCaloriesWithRice([
			c.plan.breakfast,
			c.plan.lunch,
			c.plan.dinner,
			c.plan.snack
		])} kcal</p>` : null}<dl data-astro-cid-nxsfgbym><dt data-astro-cid-nxsfgbym>Breakfast</dt><dd data-astro-cid-nxsfgbym><span class="name" data-astro-cid-nxsfgbym>${c.plan.breakfast.name}</span><span class="cal" data-astro-cid-nxsfgbym>${caloriesText(c.plan.breakfast)}</span></dd><dt data-astro-cid-nxsfgbym>Lunch</dt><dd data-astro-cid-nxsfgbym><span class="name" data-astro-cid-nxsfgbym>${c.plan.lunch.name}</span><span class="cal" data-astro-cid-nxsfgbym>${caloriesText(c.plan.lunch)}</span></dd><dt data-astro-cid-nxsfgbym>Dinner</dt><dd data-astro-cid-nxsfgbym><span class="name" data-astro-cid-nxsfgbym>${c.plan.dinner.name}</span><span class="cal" data-astro-cid-nxsfgbym>${caloriesText(c.plan.dinner)}</span></dd><dt data-astro-cid-nxsfgbym>Snack</dt><dd data-astro-cid-nxsfgbym><span class="name" data-astro-cid-nxsfgbym>${c.plan.snack.name}</span><span class="cal" data-astro-cid-nxsfgbym>${caloriesText(c.plan.snack)}</span></dd></dl>` })}` : renderTemplate`<p class="empty" data-astro-cid-nxsfgbym>No plan for day ${c.planDayNumber}</p>`}</article>`);
	})()}</div></section>${renderScript($$result, "D:/kerjaan/sidejob/diet/src/components/MealCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/kerjaan/sidejob/diet/src/components/MealCard.astro", void 0);
//#endregion
//#region src/data/activities.ts
var activities = [
	{
		id: "walk",
		title: "Walk 1000+ steps",
		description: "Short walk to increase daily NEAT"
	},
	{
		id: "water",
		title: "Drink 2L water",
		description: "Keep hydrated throughout the day"
	},
	{
		id: "sleep",
		title: "Sleep 7 hours",
		description: "Aim for consistent sleep schedule"
	},
	{
		id: "stretch",
		title: "Stretch 10 minutes",
		description: "Quick mobility routine"
	}
];
//#endregion
//#region src/components/ActivityCard.astro
var $$ActivityCard = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="activities" aria-labelledby="activities-title" data-astro-cid-7pfinimb><h2 id="activities-title" data-astro-cid-7pfinimb>Daily Activities</h2><ul class="activities" data-astro-cid-7pfinimb>${activities.map((a) => renderTemplate`<li data-astro-cid-7pfinimb><label data-astro-cid-7pfinimb><input type="checkbox"${addAttribute(`Mark ${a.title} done`, "aria-label")} data-astro-cid-7pfinimb><span class="title" data-astro-cid-7pfinimb>${a.title}</span><p class="desc" data-astro-cid-7pfinimb>${a.description}</p></label></li>`)}</ul></section>`;
}, "D:/kerjaan/sidejob/diet/src/components/ActivityCard.astro", void 0);
//#endregion
//#region src/data/tips.ts
var tips = [
	"Makan secara perlahan dan nikmati setiap suapan.",
	"Minum air yang cukup setiap hari.",
	"Kurangi konsumsi gula olahan.",
	"Utamakan sumber protein berkualitas pada setiap makanan.",
	"Tambahkan sayuran pada piring Anda."
];
//#endregion
//#region src/components/TipCard.astro
var $$TipCard = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="tips" aria-labelledby="tips-title" data-astro-cid-shfqedvn><h2 id="tips-title" data-astro-cid-shfqedvn>Healthy Tips</h2><ul class="tips" data-astro-cid-shfqedvn>${tips.map((t, i) => renderTemplate`<li data-astro-cid-shfqedvn>${t}</li>`)}</ul></section>`;
}, "D:/kerjaan/sidejob/diet/src/components/TipCard.astro", void 0);
//#endregion
//#region src/data/faq.ts
var faq = [
	{
		q: "Bisa kah saya ganti nasi?",
		a: "Ya — pilih sumber karbohidrat lain seperti ubi, kentang, atau quinoa sesuai kebutuhan."
	},
	{
		q: "Bolehkah saya minum teh?",
		a: "Teh tanpa gula dapat diminum, hindari tambahan gula atau krim berkalori tinggi."
	},
	{
		q: "Bolehkah saya makan malam?",
		a: "Boleh, perhatikan porsi dan pilih makanan lebih ringan jika dekat waktu tidur."
	}
];
//#endregion
//#region src/components/FAQ.astro
var $$FAQ = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="faq" aria-labelledby="faq-title" data-astro-cid-7synugci><h2 id="faq-title" data-astro-cid-7synugci>FAQ</h2><div class="faqs" data-astro-cid-7synugci>${faq.map((f, i) => renderTemplate`<div class="item" data-astro-cid-7synugci><details data-astro-cid-7synugci><summary data-astro-cid-7synugci>${f.q}</summary><p data-astro-cid-7synugci>${f.a}</p></details></div>`)}</div></section>`;
}, "D:/kerjaan/sidejob/diet/src/components/FAQ.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "MealCard", $$MealCard, {})}${renderComponent($$result, "ActivityCard", $$ActivityCard, {})}${renderComponent($$result, "TipCard", $$TipCard, {})}${renderComponent($$result, "FAQ", $$FAQ, {})}` })}`;
}, "D:/kerjaan/sidejob/diet/src/pages/index.astro", void 0);
var $$file = "D:/kerjaan/sidejob/diet/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
