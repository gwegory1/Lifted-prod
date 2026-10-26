import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import nutri1 from "../assets/img/ROL04064.webp";
import ContactFormDialog from "./contactDialog";
import { ctaButtonSx, tokens } from "../theme/theme";

const PLAN_KEYS = ["Basic", "Premium"] as const;

const NutritionPlans = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      aria-labelledby="nutrition-options"
      sx={{
        backgroundColor: tokens.blush,
        borderRadius: { xs: 3, md: 4 },
        px: { xs: 2.5, sm: 4, md: 5 },
        py: { xs: 3.5, md: 4.5 },
        textAlign: "left",
      }}
    >
      <Typography id="nutrition-options" component="h2" sx={{ color: tokens.goldInk, fontWeight: 900, fontSize: { xs: "1.6rem", sm: "2rem" }, mb: 2.5 }}>
        {t("Nutrition.NutritionSection.title")}
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr)) minmax(0, 0.8fr)" }, gap: { xs: 2, md: 3 }, alignItems: "stretch" }}>
        {PLAN_KEYS.map((key) => {
          const details = t(`Nutrition.NutritionSection.plans.${key}.details`, { returnObjects: true }) as string[];
          return (
            <Box
              key={key}
              sx={{
                p: { xs: 2.5, sm: 3 },
                backgroundColor: "#fff",
                borderRadius: 2,
                boxShadow: "0 8px 24px -16px rgba(42, 42, 42, 0.25)",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 2, flexWrap: "wrap", mb: 1.5 }}>
                <Typography component="h3" sx={{ fontWeight: 700, fontSize: { xs: "1.5rem", sm: "1.8rem" }, color: tokens.ink }}>
                  {t(`Nutrition.NutritionSection.plans.${key}.title`)}
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: { xs: "1.2rem", sm: "1.35rem" }, color: tokens.goldInk, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                  {t(`Nutrition.NutritionSection.plans.${key}.price`)}
                </Typography>
              </Box>
              <Box component="ul" sx={{ m: 0, pl: 2.5, color: tokens.inkSoft, lineHeight: 1.6, fontSize: { xs: "1rem", sm: "1.05rem" }, "& li + li": { mt: 0.75 }, "& li::marker": { color: tokens.gold } }}>
                {details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </Box>
            </Box>
          );
        })}
        <Box
          component="img"
          src={nutri1}
          alt=""
          loading="lazy"
          decoding="async"
          sx={{ display: { xs: "none", md: "block" }, width: "100%", height: "100%", maxHeight: 520, objectFit: "cover", borderRadius: 2 }}
        />
      </Box>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          disableElevation
          onClick={() => setOpen(true)}
          sx={{
            width: { xs: "100%", sm: "auto" },
            minWidth: { sm: 320 },
            ...ctaButtonSx,
          }}
        >
          {t("Nutrition.contactButton")}
        </Button>
      </Box>

      <Box sx={{ mt: 5, pt: 4, borderTop: "1px solid rgba(42, 42, 42, 0.1)" }}>
        <Typography component="h3" sx={{ fontWeight: 700, fontSize: "1.3rem", color: tokens.ink, mb: 1 }}>
          {t("Nutrition.WhoCanIHelp.title")}
        </Typography>
        <Typography sx={{ fontSize: { xs: "1rem", sm: "1.1rem" }, color: tokens.inkSoft, lineHeight: 1.65, maxWidth: "75ch" }}>
          {t("Nutrition.WhoCanIHelp.text")}
        </Typography>
      </Box>

      <ContactFormDialog open={open} setOpen={setOpen} />
    </Box>
  );
};

export default NutritionPlans;
