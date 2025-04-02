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
            aboutmetext1:
                "Health is not about quick fixes or cookie-cutter programs—it's about creating a lifestyle that works for you. I've seen many people struggle with unrealistic fitness expectations and unsustainable methods. That's why my holistic philosophy is built on three pillars: movement, nutrient-rich foods, and mental well-being. Instead of chasing ever-changing fad diets and overly complicated workouts, I focus on the fundamental, functional exercises that build strength and endurance, the whole foods that nourish and energize, and a mindset that fosters long-term success.",
            aboutmetext2:
                "My journey in sports has taken me to many places, ultimately leading me to the United States on a sports scholarship, where I earned my Bachelor's and Master's degrees in Media and Strategic Communication while deepening my knowledge in training and performance. Along the way, I completed the fitness instructor training at the Fitness Academy and obtained certifications as a personal trainer and nutrition advisor. However, my background is not just about qualifications—it's about over a decade of competitive sports experience, challenges that taught me to rebuild and strengthen my body and mind, and a commitment to helping others find balance on their own journeys.",
            personalizedGuidance:
                "I design personalized 1:1 training and nutrition guidance because real progress comes from a plan tailored to you, not the masses. Whether you want to improve your overall health or feel stronger and more confident, I'm here to guide you, dispel myths, and help you develop habits that will last a lifetime.",
            buildHealthyLife: "Let's build a healthier life together!",
            galleryAlt: "Gallery image",
            footerText: "All rights reserved.",
            GetIntTouch: "Get in touch!",
            heroTitle: "Training that is all about you",
            heroSubtitle:
                "Personalized programs, sustainable progress, and motivating challenges.",
            section1Title: "You are",
            section1Title2: "the focus",
            section1Text:
                "Since every person is different, so are my workouts. I tailor the programs to individual needs and goals, considering the current level and lifestyle. I believe in basic exercises and functionality that provide lasting progress. My goal is to find the most effective path for you to achieve your set goals.",
            section2Title: "Successes",
            section2Title2: "step by step",
            section2Text:
                "My main goal is not to achieve quick results but to ensure long-term, sustainable progress. During the workouts, I always pay attention to finding the best solution for you that is truly sustainable and fits your lifestyle. The focus is on building healthy habits and gradually, steadily incorporating exercise into your routine. Progress is about small, daily decisions that lead to significant results over time.",
            section3Title: "Challenge",
            section3Title2: ", that motivates",
            section3Text:
                "Every workout is a new chance to step out of your comfort zone and push beyond your limits. My goal is for you to experience these challenges in a way that makes exercise enjoyable and motivating.",
            helpTitle: "How can I help you?",
            helpItem1: "Increase muscle mass",
            helpItem2: "Weight loss & body composition improvement",
            helpItem3: "Speed, explosiveness, endurance development",
            helpItem4: "Mobilizing & functional workouts",
        },
    },
    hu: {
        translation: {
            home: "Kezdőlap",
            about: "Rólam",
            training: "Edzés",
            nutrition: "Táplálkozás",
            healthJourney: "Egy út az egészség és egyensúly felé",
            aboutmetext1:
                "Az egészség nem gyors megoldásokról vagy sablonos programokról szól—hanem a számodra megfelelő életmód kialakításáról. Sok embert láttam küzdeni a valóságtól elrugaszkodott fitnesz elvárásokkal és fenntarthatatlan módszerekkel. Ezért a holisztikus filozófiám három alappilléren alapul: a mozgáson, a tápanyagokban gazdag ételeken és a mentális jólléten. A folyamatosan változó divatdiéták és túlbonyolított edzések helyett az alapvető, funkcionális gyakorlatokra összpontosítok, amelyek erőt és állóképességet építenek, a teljes értékű ételekre, amelyek táplálnak és energiát adnak, valamint egy olyan gondolkodásmódra, amely elősegíti a hosszútávú sikert.",
            aboutmetext2:
                "A sport miatt sok helyre volt alkalmam utazni, végül sportösztöndíjjal az Egyesült Államokba mentem, ahol Média és Stratégiai Kommunikáció szakon szereztem alap-, és mesterdiplomát, miközben mélyítettem tudásomat az edzés, és a teljesítmény területén. Közben a Fitness Akadémián elvégeztem a fitness instruktori képzést, majd megszereztem a személyi edzői és táplálkozási tanácsadói képesítéseket is. A hátterem azonban nem csak a képesítésekről szól - hanem a több mint egy évtizedes versenysportban szerzett tapasztalatomról, nehézségekről, amelyek megtanítottak újraépíteni és megerősíteni a testemet és az elmémet, valamint az elkötelezettségről, hogy másoknak segítsek megtalálni az egyensúlyt a saját útjukon.",
            personalizedGuidance:
                "1:1 személyre szabott edzés- és táplálkozási útmutatókat tervezek, mert a valódi fejlődés egy olyan tervből ered, amely neked készült, nem pedig a tömegek számára. Akár az általános egészségeden szeretnél javítani, akár erősebbnek és magabiztosabbnak érezni magad, én itt vagyok, hogy vezesselek, eloszlassam a tévhiteket, és segítsek kialakítani azokat a szokásokat, amelyek egy életen át elkísérnek.",
            buildHealthyLife: "Építsünk együtt egy egészségesebb életet!",
            galleryAlt: "Galéria kép",
            footerText: "Minden jog fenntartva.",
            GetIntTouch: "Keress bizalommal!",
            heroTitle: "Edzés, ami rólad szól",
            heroSubtitle:
                "Személyre szabott programok, fenntartható fejlődés, és motiváló kihívások.",
            section1Title: "Rajtad",
            section1Title2: "a fókusz",
            section1Text:
                "Mivel minden ember más, az edzéseim is azok. Az egyéni igényekhez és célokhoz igazítom a programokat, figyelembe véve a jelenlegi szintet és életstílust. Az alapgyakorlatokban és funkcionalitásban hiszek, amelyek tartós fejlődést biztosítanak. Célom, hogy megtaláljuk a számodra leghatékonyabb utat a kitűzött céljaid eléréséhez.",
            section2Title: "Sikerek",
            section2Title2: "lépésről lépésre",
            section2Text:
                "A legfőbb célom nem a gyors eredmények elérése, hanem a hosszú távú, fenntartható fejlődés. Az edzések során mindig figyelek arra, hogy a legjobb megoldást találjuk meg a számodra, ami valóban fenntartható és illeszkedik az életstílusodhoz. A hangsúly az egészséges szokások kialakításán és az edzés fokozatos, stabil beépítésén van. A fejlődés az apró, napi szintű döntésekről szól, amelyek hosszú távon komoly eredményeket hoznak.",
            section3Title: "Kihívás",
            section3Title2: ", ami motivál",
            section3Text:
                "Minden egyes edzés egy új esély arra, hogy kilépj a komfortzónádból és túllépj a saját határaidon. A célom az, hogy ezeket a kihívásokat úgy éld meg, hogy közben az edzés örömmé váljon és motivációt adjon.",
            helpTitle: "Miben tudok segíteni?",
            helpItem1: "Izomtömeg növelés",
            helpItem2: "Súlycsökkentés & testkompozíció javítás",
            helpItem3: "Gyorsaság, robbanékonyság, állóképesség fejlesztés",
            helpItem4: "Mobilizáló & funkcionális edzések",
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
