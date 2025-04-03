import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About Me",
      training: "Training",
      nutrition: "Nutrition",
      healthJourney: "A journey towards health and balance",
      aboutmetext1: `"Health is not about quick fixes or cookie-cutter programs—it's about creating a lifestyle that works for you. I've seen many people struggle with unrealistic fitness expectations and unsustainable methods. That's why my holistic philosophy is built on three pillars: movement, nutrient-rich foods, and mental well-being. Instead of chasing ever-changing diets and overly complicated workouts, I focus on the fundamental, functional exercises that build strength and endurance, the whole foods that nourish and energize, and a mindset that fosters long-term success."`,
      aboutmetext2: `"My journey in sports has taken me to many places, ultimately leading me to the United States on a sports scholarship, where I earned my Bachelor's and Master's degrees in Media and Strategic Communication while deepening my knowledge in training and performance. Along the way, I completed the fitness instructor training at the Fitness Academy and obtained certifications as a personal trainer and nutrition advisor. However, my background is not just about qualifications—it's about over a decade of competitive sports experience, challenges that taught me to rebuild and strengthen my body and mind, and a commitment to helping others find balance on their own journeys."`,
      personalizedGuidance: `"I design personalized 1:1 training and nutrition guidance because real progress comes from a plan tailored to you, not the masses. Whether you want to improve your overall health or feel stronger and more confident, I'm here to guide you, dispel myths, and help you develop habits that will last a lifetime."`,
      buildHealthyLife: `"Let's build a healthier life together!"`,
      galleryAlt: "Gallery image",
      footerText: "All rights reserved.",
      GetIntTouch: "Get in touch!",
      heroTitle: `Training that is all about you`,
      heroSubtitle: `Personalized programs, sustainable progress, and motivating challenges.`,
      section1Title: `You are`,
      section1Title2: `the focus`,
      section1Text: `Since every person is different, so are my workouts. I tailor the programs to individual needs and goals, considering the current level and lifestyle. I believe in basic exercises and functionality that provide lasting progress. My goal is to find the most effective path for you to achieve your set goals.`,
      section2Title: `Successes`,
      section2Title2: `step by step`,
      section2Text: `My main goal is not to achieve quick results but to ensure long-term, sustainable progress. During the workouts, I always pay attention to finding the best solution for you that is truly sustainable and fits your lifestyle. The focus is on building healthy habits and gradually, steadily incorporating exercise into your routine. Progress is about small, daily decisions that lead to significant results over time.`,
      section3Title: `Challenge`,
      section3Title2: `, that motivates`,
      section3Text: `Every workout is a new chance to step out of your comfort zone and push beyond your limits. My goal is for you to experience these challenges in a way that makes exercise enjoyable and motivating.`,
      helpTitle: `How can I help you?`,
      helpItem1: `Increase muscle mass`,
      helpItem2: `Weight loss & body composition improvement`,
      helpItem3: `Speed, explosiveness, endurance development`,
      helpItem4: `Mobilizing & functional workouts`,
      ctacoverText: `Everyone is unique, so our solutions are too. I help you find your path!`,
      newHeightsText: `"New Heights of Wellness"`,
      myMission: `MY MISSION`,
      myMissionText: `With personalized training and nutrition advice, I help you bring out your best self and elevate your well-being to a new level. Based on over a decade of competitive sports background, international experiences, and my coaching and nutrition qualifications, I offer a holistic approach that considers your unique goals and needs, guiding you towards a healthier life. Change is not only possible but sustainable. You don't have to be perfect, but you can continuously improve. Start now!`,
      ReadMore: `Read more`,
      TrainWithMe: `Train with me!`,
      TrainWithMeText: `Let's build the path to your goals together! With personalized plans and continuous support, I help you achieve what you've always desired. Start now and shape your future!`,
      BookNow: `Book an appointment`,
      Services: `Services`,
      PersonalizedTraining: `Personal Training`,
      NutritionPlans: `Nutrition Counseling`,
      trainingSection: {
        title: "Training Options",
        plans: {
          Single: {
            title: "Single Session",
            price: "10,000 Ft",
            details: [
              "60-minute personal training session",
              "Purchased as a single ticket",
            ],
          },
          Package: {
            title: "Package",
            price: "75,000 Ft",
            details: [
              "Includes 8 personal training sessions",
              "Can be used anytime within 2 months",
            ],
          },
          Pair: {
            title: "Pair Training",
            price: "8,500 Ft/Person",
            details: [
              "Training session for two people",
              "Ideal for training with a friend or partner",
            ],
          },
          Plan: {
            title: "Training Plan",
            price: "15,000 Ft",
            details: [
              "1-month personalized training plan",
              "Based on a 75-minute consultation and assessment",
              "Can be done independently",
            ],
          },
        },
        consultation:
          "Every first session includes a 75-minute consultation & assessment, covering goal discussions and condition evaluation.",
        contactButton: "CONTACT ME",
      },
      Nutrition: {
        quote: '"There is no forbidden food, only quantities to avoid"',
        title: "The Harmony ",
        title2: "of Nutrition",
        subtitle: "Conscious eating for sustainable health",
        text: "My nutrition counseling is not based on quick diets or forbidden foods but on principles that help you achieve your goals and contribute to your health in the long term. Nutrition should be varied and colorful, but it is not just about what you eat; it is also about how you experience your meals. Since everyone is different, I tailor meals to individual needs, taking unique requirements into account. You don't have to give up your favorite foods or eliminate food groups, but it is important to learn how to incorporate them into your ideal diet. My goal is to help you understand the role of nutrients and develop healthy habits through conscious decisions that can be integrated into your daily life.",
        NutritionSection: {
          title: "Nutrition Options",
          plans: {
            Basic: {
              title: "Basic",
              price: "29,000 Ft",
              details: [
                "1-hour consultation",
                "Food diary analysis",
                "5-day sample meal plan, totaling 20 recipes (breakfast, lunch, dinner, snacks) - tailored to your needs, without calorie and macro calculations",
                "Shopping list",
              ],
            },
            Premium: {
              title: "Premium",
              price: "69,000 Ft",
              details: [
                "1-hour consultation",
                "Food diary analysis",
                "7-day sample meal plan, totaling 28 recipes (breakfast, lunch, dinner, snacks) - tailored to your needs, with personalized calorie and macro calculations to match your goals",
                "Shopping list",
                "PDF Mini Nutrition Guide",
                "1-month follow-up: weekly 1x30-minute control consultation + email Q&A support",
              ],
            },
          },
        },
        WhoCanIHelp: {
          title: "Who Can I Help?",
          text: "I can primarily assist healthy individuals who do not have severe food allergies or hormonal issues. Gluten and lactose intolerance are not a problem, and I also consider vegetarian and vegan dietary preferences when creating meal plans if such preferences arise.",
        },
        contactButton: "CONTACT ME",
        WhatToExpect: {
            title: "What to expect?",
            text1:
                "Reimagined, healthy breakfasts that are quick, delicious, and nutritious.",
            text2:
                "Wholesome, colorful meals packed with vitamins and minerals.",
            text3:
                "Protein-rich, healthy desserts for everyday consumption.",
        },
      },
    },
  },
  hu: {
    translation: {
      home: "Kezdőlap",
      about: "Rólam",
      training: "Edzés",
      nutrition: "Táplálkozás",
      healthJourney: "Egy út az egészség és egyensúly felé",
      aboutmetext1: `Az egészség nem gyors megoldásokról vagy sablonos programokról szól—hanem a számodra megfelelő életmód kialakításáról. Sok embert láttam küzdeni a valóságtól elrugaszkodott fitnesz elvárásokkal és fenntarthatatlan módszerekkel. Ezért a holisztikus filozófiám három alappilléren alapul: a mozgáson, a tápanyagokban gazdag ételeken és a mentális jólléten. A folyamatosan változó divatdiéták és túlbonyolított edzések helyett az alapvető, funkcionális gyakorlatokra összpontosítok, amelyek erőt és állóképességet építenek, a teljes értékű ételekre, amelyek táplálnak és energiát adnak, valamint egy olyan gondolkodásmódra, amely elősegíti a hosszútávú sikert.`,
      aboutmetext2: `A sport miatt sok helyre volt alkalmam utazni, végül sportösztöndíjjal az Egyesült Államokba mentem, ahol Média és Stratégiai Kommunikáció szakon szereztem alap-, és mesterdiplomát, miközben mélyítettem tudásomat az edzés, és a teljesítmény területén. Közben a Fitness Akadémián elvégeztem a fitness instruktori képzést, majd megszereztem a személyi edzői és táplálkozási tanácsadói képesítéseket is. A hátterem azonban nem csak a képesítésekről szól - hanem a több mint egy évtizedes versenysportban szerzett tapasztalatomról, nehézségekről, amelyek megtanítottak újraépíteni és megerősíteni a testemet és az elmémet, valamint az elkötelezettségről, hogy másoknak segítsek megtalálni az egyensúlyt a saját útjukon.`,
      personalizedGuidance: `1:1 személyre szabott edzés- és táplálkozási útmutatókat tervezek, mert a valódi fejlődés egy olyan tervből ered, amely neked készült, nem pedig a tömegek számára. Akár az általános egészségeden szeretnél javítani, akár erősebbnek és magabiztosabbnak érezni magad, én itt vagyok, hogy vezesselek, eloszlassam a tévhiteket, és segítsek kialakítani azokat a szokásokat, amelyek egy életen át elkísérnek.`,
      buildHealthyLife: `Építsünk együtt egy egészségesebb életet!`,
      galleryAlt: "Galéria kép",
      footerText: "Minden jog fenntartva.",
      GetIntTouch: "Keress bizalommal!",
      heroTitle: `Edzés, ami rólad szól`,
      heroSubtitle: `Személyre szabott programok, fenntartható fejlődés, és motiváló kihívások.`,
      section1Title: `Rajtad`,
      section1Title2: `a fókusz`,
      section1Text: `Mivel minden ember más, az edzéseim is azok. Az egyéni igényekhez és célokhoz igazítom a programokat, figyelembe véve a jelenlegi szintet és életstílust. Az alapgyakorlatokban és funkcionalitásban hiszek, amelyek tartós fejlődést biztosítanak. Célom, hogy megtaláljuk a számodra leghatékonyabb utat a kitűzött céljaid eléréséhez.`,
      section2Title: `Sikerek`,
      section2Title2: `lépésről lépésre`,
      section2Text: `A legfőbb célom nem a gyors eredmények elérése, hanem a hosszú távú, fenntartható fejlődés. Az edzések során mindig figyelek arra, hogy a legjobb megoldást találjuk meg a számodra, ami valóban fenntartható és illeszkedik az életstílusodhoz. A hangsúly az egészséges szokások kialakításán és az edzés fokozatos, stabil beépítésén van. A fejlődés az apró, napi szintű döntésekről szól, amelyek hosszú távon komoly eredményeket hoznak.`,
      section3Title: `Kihívás`,
      section3Title2: `, ami motivál`,
      section3Text: `Minden egyes edzés egy új esély arra, hogy kilépj a komfortzónádból és túllépj a saját határaidon. A célom az, hogy ezeket a kihívásokat úgy éld meg, hogy közben az edzés örömmé váljon és motivációt adjon.`,
      helpTitle: `Miben tudok segíteni?`,
      helpItem1: `Izomtömeg növelés`,
      helpItem2: `Súlycsökkentés & testkompozíció javítás`,
      helpItem3: `Gyorsaság, robbanékonyság, állóképesség fejlesztés`,
      helpItem4: `Mobilizáló & funkcionális edzések`,
      ctacoverText: `Mindenki egyedi, így a megoldásaink is azok. Én segítek megtalálni a Te utadat!`,
      newHeightsText: `"A Jóllét Új Szintjei"`,
      myMission: `Rólam`,
      myMissionText: `Személyre szabott edzésekkel és táplálkozási tanácsokkal segítek abban, hogy a legjobb formádat hozd ki magadból, és új szintre emeld a jóllétedet. Több mint egy évtizedes versenysport hátterem, külföldi tapasztalataim, valamint edzői és táplálkozási képesítéseim alapján olyan holisztikus megközelítést kínálok, amely figyelembe veszi az egyedi céljaidat, igényeidet, és hozzásegít egy egészségesebb élethez. A változás nem csak lehetséges, hanem fenntartható is. Nem kell tökéletesnek lenned, de folyamatosan jobbá válhatsz. Kezdd el most!`,
      ReadMore: `Tovább`,
      TrainWithMe: `Tarts Velem!`,
      TrainWithMeText: `Építsük együtt a céljaidhoz vezető utat! Személyre szabott tervekkel és folyamatos támogatással segítek abban, hogy valóra váltsd, amire mindig is vágytál. Kezdd el most, és formáld a jövőd!`,
      BookNow: `Időpontfoglalás`,
      Services: `Szolgáltatások`,
      PersonalizedTraining: `Személyi edzés`,
      NutritionPlans: `Táplálkozási tanácsadás`,
      trainingSection: {
        title: "Edzési lehetőségek",
        plans: {
          Single: {
            title: "EGY ALKALMAS",
            price: "10,000 Ft",
            details: ["60 perces személyi edzés", "Egyszeri jegy vásárlása"],
          },
          Package: {
            title: "BÉRLET",
            price: "75,000 Ft",
            details: [
              "8 személyi edzést tartalmaz",
              "2 hónap alatt felhasználható",
            ],
          },
          Pair: {
            title: "PÁROS EDZÉS",
            price: "8,500 Ft/Fő",
            details: [
              "Két fő részére szóló edzés",
              "Ideális, ha baráttal/barátnővel szeretnél edzeni",
            ],
          },
          Plan: {
            title: "EDZÉSTERV",
            price: "15,000 Ft",
            details: [
              "1 hónapos személyre szabott edzésterv",
              "75 perces konzultáció és felmérés alapján",
              "Önállóan végezhető",
            ],
          },
        },
        consultation:
          "Minden első alkalommal 75 perces konzultáció és felmérés történik, amely a célok átbeszélésére és az állapotfelmérésre terjed ki.",
        contactButton: "KAPCSOLATFELVÉTEL",
      },
      Nutrition: {
        quote: '"Nincs tiltott táplálék, csak kerülendő mennyiség"',
        title: "A táplálkozás ",
        title2: "harmóniája",
        subtitle: "Tudatos étkezés a fenntartható egészségért",
        text: "Táplálkozási tanácsadásom nem gyors diétákra vagy tiltólistás ételekre épít, hanem olyan alapelvekre, amelyek segítenek elérni a céljaidat és hosszú távon is hozzájárul az egészségedhez. A táplálkozásnak változatosnak és színesnek kell lennie, de nem csupán arról szól, hogy mit eszel, hanem arról is, hogyan éled meg az étkezéseidet. Mivel mindenki más, az étkezéseket személyre szabottan alakítom, figyelembe véve az egyedi igényeket. Nem kell lemondanod a kedvenc ételeidről vagy kiiktatnod ételcsoportokat, azonban fontos megtanulnod, hogyan illesztheted be őket a számodra ideális étkezésbe. Célom, hogy megértsd a tápanyagok szerepét, és tudatos döntésekkel alakíts ki egészséges szokásokat, amelyek beilleszthetők a mindennapi életedbe.",
        NutritionSection: {
          title: "TANÁCSADÁSI LEHETŐSÉGEK",
          plans: {
            Basic: {
              title: "Alap",
              price: "29,000 Ft",
              details: [
                "1 órás konzultáció",
                "Étkezési napló elemzése",
                "5 napos mintaétrend, összesen 20 recept (reggeli, ebéd, vacsora, nasi) - igényeid figyelembe vételével, kalória és makrók számolása nélkül",
                "Bevásárló lista",
              ],
            },
            Premium: {
              title: "Prémium",
              price: "69,000 Ft",
              details: [
                "1 órás konzultáció",
                "Étkezési napló elemzése",
                "7 napos mintaétrend, összesen 28 recept (reggeli, ebéd, vacsora, nasi) - igényeid figyelembe vételével, céljaidnak megfelelő, személyre szabott kalória és makrók számolásával",
                "Bevásárló lista",
                "PDF Mini Táplálkozási Kisokos",
                "1 hónapos utánkövetés: heti 1x30 perc kontroll konzultáció + e-mailes kérdés-válasz lehetőség",
              ],
            },
          },
        },
        WhoCanIHelp: {
          title: "Kinek tudok segíteni?",
          text: "Főként egészséges emberek számára tudok segítséget nyújtani, akiknek nincsenek komolyabb ételallergiáik vagy hormonális problémáik. Glutén- és laktózérzékenység azonban nem jelent problémát, valamint figyelembe veszem a vegetáriánus és vegán étkezési szokásokat az étrendek kialakításakor, ha ilyen irányú preferencia felmerül.",
        },
        contactButton: "KAPCSOLATFELVÉTEL",
        WhatToExpect: {
          title: "Mire számíthatsz?",
          text1:
            "Újragondolt, egészséges reggelik, amik gyorsak, finomak és táplálóak.",
          text2:
            "Teljes értékű, színes ételek, tele vitaminokkal és ásványi anyagokkal.",
          text3:
            "Fehérjében gazdag, egészséges édességek, mindennapi fogyasztásra.",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "hu", // Default language
  fallbackLng: "hu",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
