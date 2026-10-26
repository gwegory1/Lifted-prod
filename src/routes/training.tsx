import { Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Image1 from "../assets/img/IMG_5257.webp";
import Image2 from "../assets/img/ROL04662.webp";
import Image3 from "../assets/img/ROL04772.webp";
import TrainingSection from "../components/trainingSection";
import PageMeta from "../components/PageMeta";
import Reveal from "../components/Reveal";
import { displaySx, tokens } from "../theme/theme";

const sections = [
  { n: 1, img: Image1, w: 1600, h: 1067 },
  { n: 2, img: Image2, w: 1066, h: 1600 },
  { n: 3, img: Image3, w: 1600, h: 1066 },
];

const Training = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title={`${t("training")} – Lifted`} description={t("TrainingDescription")} path="/training" />

      <Box component="header" sx={{ bgcolor: tokens.cream, py: { xs: 4, md: 6 }, px: 2, textAlign: "center" }}>
        <Reveal>
          <Typography component="h1" sx={{ color: tokens.goldInk, ...displaySx, fontSize: { xs: "2.2rem", md: "3.2rem" }, lineHeight: 1.1, mb: 1.5 }}>
            {t("heroTitle")}
          </Typography>
        </Reveal>
        <Reveal delay={0.15}>
          <Typography sx={{ maxWidth: "48ch", mx: "auto", fontSize: { xs: "1.05rem", md: "1.25rem" }, color: tokens.inkSoft }}>
            {t("heroSubtitle")}
          </Typography>
        </Reveal>
      </Box>

      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 }, display: "grid", gap: { xs: 5, md: 6 } }}>
        {sections.map(({ n, img, w, h }) => (
          <Box
            component="section"
            key={n}
            aria-labelledby={`training-s${n}`}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              alignItems: "center",
              gap: { xs: 2.5, md: 5 },
              // alternate image side on desktop
              "& > .photo": { order: { md: n % 2 === 0 ? 2 : 0 } },
            }}
          >
            <Reveal variant="clip" className="photo">
              <Box
                component="img"
                src={img}
                alt=""
                loading="lazy"
                decoding="async"
                sx={{ display: "block", width: "100%", aspectRatio: `${w} / ${h}`, maxHeight: { md: 420 }, objectFit: "cover", borderRadius: 2 }}
              />
            </Reveal>
            <Reveal delay={0.12}>
              <Typography id={`training-s${n}`} component="h2" sx={{ fontWeight: 700, fontSize: { xs: "1.6rem", md: "2.1rem" }, lineHeight: 1.15, mb: 2, color: tokens.ink }}>
                <Box component="span" sx={{ color: tokens.goldInk }}>
                  {t(`section${n}Title`)}
                </Box>{" "}
                {t(`section${n}Title2`)}
              </Typography>
              <Typography sx={{ color: tokens.ink, lineHeight: 1.75, fontSize: { xs: "1.05rem", md: "1.2rem" }, maxWidth: "62ch" }}>
                {t(`section${n}Text`)}
              </Typography>
            </Reveal>
          </Box>
        ))}

        <Reveal>
          <Box component="section" aria-labelledby="help-title" sx={{ bgcolor: tokens.cream, borderRadius: 3, p: { xs: 3, sm: 3.5, md: 4.5 } }}>
            <Typography id="help-title" component="h2" sx={{ fontWeight: 700, fontSize: { xs: "1.6rem", md: "2.1rem" }, textAlign: "center", mb: { xs: 2.5, md: 3 }, color: tokens.ink }}>
              {t("helpTitle")}
            </Typography>
            <Box
              component="ul"
              sx={{ listStyle: "none", m: 0, p: 0, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }}
            >
              {[1, 2, 3, 4].map((i) => (
                <Box
                  component="li"
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    p: 2.5,
                    bgcolor: "#fff",
                    borderRadius: 2,
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    color: tokens.ink,
                    hyphens: "auto",
                  }}
                >
                  <Box aria-hidden sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: tokens.gold, flexShrink: 0 }} />
                  {t(`helpItem${i}`)}
                </Box>
              ))}
            </Box>
          </Box>
        </Reveal>

        <TrainingSection />
      </Box>
    </>
  );
};

export default Training;
