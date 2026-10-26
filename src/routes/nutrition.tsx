import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import NutritionPlans from "../components/nutritionPlans";
import NutritionGallery from "../components/nutritionGalery";
import PageMeta from "../components/PageMeta";
import Reveal from "../components/Reveal";
import nutri2 from "../assets/img/ROL04266.webp";
import { displaySx, tokens } from "../theme/theme";

const Nutrition = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title={`${t("nutrition")} – Lifted`} description={t("NutritionDescription")} path="/nutrition" />

      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 4, md: 5 }, display: "grid", gap: { xs: 5, md: 6 } }}>
        <Box component="header">
          <Reveal>
            <Typography
              component="p"
              sx={{ fontFamily: "OoohBaby, cursive", fontSize: { xs: "1.6rem", sm: "2rem" }, textAlign: "center", color: tokens.ink, mb: { xs: 3, md: 4 } }}
            >
              {t("Nutrition.quote")}
            </Typography>
          </Reveal>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.1fr) minmax(0, 1fr)" }, gap: { xs: 4, md: 6 }, alignItems: "start" }}>
            <Reveal delay={0.1}>
              <Typography component="h1" sx={{ ...displaySx, fontSize: { xs: "2rem", sm: "2.5rem", md: "2.8rem" }, lineHeight: 1.1, color: tokens.ink, mb: 1.5 }}>
                {t("Nutrition.title")}
                <Box component="span" sx={{ color: tokens.goldInk }}>
                  {t("Nutrition.title2")}
                </Box>
              </Typography>
              <Typography sx={{ fontSize: { xs: "1.15rem", sm: "1.4rem" }, fontWeight: 500, color: tokens.inkSoft, mb: 3 }}>
                {t("Nutrition.subtitle")}
              </Typography>
              <Typography sx={{ fontSize: { xs: "1.05rem", sm: "1.15rem" }, lineHeight: 1.75, color: tokens.ink, maxWidth: "62ch" }}>
                {t("Nutrition.text")}
              </Typography>
            </Reveal>
            <Reveal variant="clip" delay={0.2}>
              <Box
                component="img"
                src={nutri2}
                alt=""
                fetchPriority="high"
                sx={{ display: "block", width: "100%", aspectRatio: { xs: "3 / 2", md: "1 / 1" }, objectFit: "cover", borderRadius: 2 }}
              />
            </Reveal>
          </Box>
        </Box>

        <Reveal>
          <NutritionPlans />
        </Reveal>
        <NutritionGallery />
      </Box>
    </>
  );
};

export default Nutrition;
