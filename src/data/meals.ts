export type MealItem = {
    name: string;
    description?: string;
    calories: {
        withoutRice: number;
        withRice?: number;
    };
};

export type MealCategory = {
    day: number;
    breakfast: MealItem;
    lunch: MealItem;
    dinner: MealItem;
    snack: MealItem;
};

export const mealPlans: MealCategory[] = [
    {
        day: 1,
        breakfast: {
            name: "Telur Tomat Asam Manis",
            description: "2 telur, tomat, bawang, 1 sdt minyak",
            calories: {
                withoutRice: 220,
                withRice: 350,
            },
        },

        lunch: {
            name: "Ayam Lada Hitam",
            description: "Dada ayam + tumis buncis",
            calories: {
                withoutRice: 260,
                withRice: 390,
            },
        },

        dinner: {
            name: "Sup Bayam + Tahu Kukus",
            calories: {
                withoutRice: 170,
                withRice: 300,
            },
        },

        snack: {
            name: "Apel",
            calories: {
                withoutRice: 80,
            },
        },
    },

    {
        day: 2,

        breakfast: {
            name: "Omelet Sayur",
            description: "Bayam dan wortel",
            calories: {
                withoutRice: 210,
                withRice: 340,
            },
        },

        lunch: {
            name: "Ayam Rica-rica",
            description: "Ayam rica-rica + bayam",
            calories: {
                withoutRice: 250,
                withRice: 380,
            },
        },

        dinner: {
            name: "Capcay Kuah",
            calories: {
                withoutRice: 180,
                withRice: 310,
            },
        },

        snack: {
            name: "Jeruk",
            calories: {
                withoutRice: 70,
            },
        },
    },

    {
        day: 3,

        breakfast: {
            name: "Tahu Telur",
            calories: {
                withoutRice: 230,
                withRice: 360,
            },
        },

        lunch: {
            name: "Ayam Panggang Lalapan",
            calories: {
                withoutRice: 230,
                withRice: 360,
            },
        },

        dinner: {
            name: "Sup Ayam Bening",
            calories: {
                withoutRice: 220,
                withRice: 350,
            },
        },

        snack: {
            name: "Pisang",
            calories: {
                withoutRice: 105,
            },
        },
    },

    {
        day: 4,

        breakfast: {
            name: "Telur Orak-arik Jamur",
            calories: {
                withoutRice: 205,
                withRice: 335,
            },
        },

        lunch: {
            name: "Ayam Suwir Pedas",
            calories: {
                withoutRice: 240,
                withRice: 370,
            },
        },

        dinner: {
            name: "Tumis Brokoli + Ayam",
            calories: {
                withoutRice: 240,
                withRice: 370,
            },
        },

        snack: {
            name: "Pepaya",
            calories: {
                withoutRice: 60,
            },
        },
    },

    {
        day: 5,

        breakfast: {
            name: "Telur Dadar Bayam",
            calories: {
                withoutRice: 215,
                withRice: 345,
            },
        },

        lunch: {
            name: "Capcay Ayam",
            calories: {
                withoutRice: 275,
                withRice: 405,
            },
        },

        dinner: {
            name: "Tempe Panggang + Sayur Bening",
            calories: {
                withoutRice: 190,
                withRice: 320,
            },
        },

        snack: {
            name: "Semangka",
            calories: {
                withoutRice: 45,
            },
        },
    },

    {
        day: 6,

        breakfast: {
            name: "Ubi Rebus + Telur",
            calories: {
                withoutRice: 260,
                withRice: 390,
            },
        },

        lunch: {
            name: "Ayam Bumbu Kuning",
            calories: {
                withoutRice: 245,
                withRice: 375,
            },
        },

        dinner: {
            name: "Sayur Sop + Ayam Suwir",
            calories: {
                withoutRice: 210,
                withRice: 340,
            },
        },

        snack: {
            name: "Melon",
            calories: {
                withoutRice: 50,
            },
        },
    },

    {
        day: 7,

        breakfast: {
            name: "Roti Gandum + Telur",
            calories: {
                withoutRice: 290,
            },
        },

        lunch: {
            name: "Tumis Tempe Buncis",
            calories: {
                withoutRice: 255,
                withRice: 385,
            },
        },

        dinner: {
            name: "Sup Jagung Ayam",
            calories: {
                withoutRice: 235,
                withRice: 365,
            },
        },

        snack: {
            name: "Jambu Biji",
            calories: {
                withoutRice: 70,
            },
        },
    },
    {
        day: 8,

        breakfast: {
            name: "Tumis Tahu Telur",
            description: "Tahu, telur, tomat, daun bawang",
            calories: {
                withoutRice: 230,
                withRice: 360,
            },
        },

        lunch: {
            name: "Ayam Teriyaki Homemade",
            description: "Dada ayam, brokoli, saus teriyaki rendah gula",
            calories: {
                withoutRice: 280,
                withRice: 410,
            },
        },

        dinner: {
            name: "Tumis Sawi Putih + Tahu",
            calories: {
                withoutRice: 170,
                withRice: 300,
            },
        },

        snack: {
            name: "Pir",
            calories: {
                withoutRice: 95,
            },
        },
    },

    {
        day: 9,

        breakfast: {
            name: "Jagung Rebus + Telur",
            calories: {
                withoutRice: 270,
                withRice: 400,
            },
        },

        lunch: {
            name: "Tahu Telur Kuah",
            description: "Tahu, telur, kuah bening",
            calories: {
                withoutRice: 240,
                withRice: 370,
            },
        },

        dinner: {
            name: "Capcay Kuah",
            calories: {
                withoutRice: 180,
                withRice: 310,
            },
        },

        snack: {
            name: "Apel",
            calories: {
                withoutRice: 80,
            },
        },
    },

    {
        day: 10,

        breakfast: {
            name: "Singkong Rebus + Telur",
            calories: {
                withoutRice: 290,
                withRice: 420,
            },
        },

        lunch: {
            name: "Ayam Kecap Rendah Gula",
            calories: {
                withoutRice: 270,
                withRice: 400,
            },
        },

        dinner: {
            name: "Tempe Panggang + Sayur Bening",
            calories: {
                withoutRice: 190,
                withRice: 320,
            },
        },

        snack: {
            name: "Jeruk",
            calories: {
                withoutRice: 70,
            },
        },
    },

    {
        day: 11,

        breakfast: {
            name: "Kentang Rebus + Telur Orak-arik",
            calories: {
                withoutRice: 250,
                withRice: 380,
            },
        },

        lunch: {
            name: "Capcay Ayam",
            calories: {
                withoutRice: 275,
                withRice: 405,
            },
        },

        dinner: {
            name: "Sup Ayam Bening",
            calories: {
                withoutRice: 220,
                withRice: 350,
            },
        },

        snack: {
            name: "Melon",
            calories: {
                withoutRice: 50,
            },
        },
    },

    {
        day: 12,

        breakfast: {
            name: "Smoothie Pisang Oat",
            calories: {
                withoutRice: 300,
            },
        },

        lunch: {
            name: "Tempe Panggang + Sayur Asem",
            calories: {
                withoutRice: 250,
                withRice: 380,
            },
        },

        dinner: {
            name: "Tumis Kangkung + Telur Dadar",
            calories: {
                withoutRice: 230,
                withRice: 360,
            },
        },

        snack: {
            name: "Pepaya",
            calories: {
                withoutRice: 60,
            },
        },
    },

    {
        day: 13,

        breakfast: {
            name: "Bubur Ayam Homemade",
            description: "Tanpa kerupuk dan cakwe",
            calories: {
                withoutRice: 320,
            },
        },

        lunch: {
            name: "Ayam Panggang Lalapan",
            calories: {
                withoutRice: 230,
                withRice: 360,
            },
        },

        dinner: {
            name: "Sup Bayam + Tahu Kukus",
            calories: {
                withoutRice: 170,
                withRice: 300,
            },
        },

        snack: {
            name: "Jambu Biji",
            calories: {
                withoutRice: 70,
            },
        },
    },

    {
        day: 14,

        breakfast: {
            name: "Roti Gandum + Selai Kacang",
            calories: {
                withoutRice: 320,
            },
        },

        lunch: {
            name: "Ayam Rica-rica",
            calories: {
                withoutRice: 250,
                withRice: 380,
            },
        },

        dinner: {
            name: "Sayur Sop + Ayam Suwir",
            calories: {
                withoutRice: 210,
                withRice: 340,
            },
        },

        snack: {
            name: "Yogurt Rendah Lemak",
            calories: {
                withoutRice: 110,
            },
        },
    },
];
