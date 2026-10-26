import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTranslation } from "react-i18next";
import trainingImage from "../assets/img/IMG_5260.webp";
import ContactFormDialog from "./contactDialog";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { ctaButtonSx, ease, tokens } from "../theme/theme";

const PLAN_KEYS = ["Single", "Package", "Pair", "Plan"] as const;

const TrainingSection = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      aria-labelledby="training-options"
      sx={{
        background: `linear-gradient(145deg, #1A1A1A 0%, ${tokens.nightRaised} 100%)`,
        color: "#F2F2F2",
        borderRadius: { xs: 3, md: 4 },
        px: { xs: 2.5, sm: 4, md: 6 },
        py: { xs: 3.5, md: 4.5 },
        boxShadow: "0 24px 48px -24px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Reveal style={{ textAlign: "center" }}>
        <Box sx={{ mb: { xs: 2.5, md: 3.5 } }}>
          <Typography id="training-options" component="h2" sx={{ color: tokens.gold, fontWeight: 900, fontSize: { xs: "1.7rem", sm: "2.1rem" } }}>
            {t("trainingSection.title")}
          </Typography>
          <Typography sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, mt: 1, fontSize: { xs: "1rem", sm: "1.15rem" }, color: "#DDD" }}>
            <LocationOnIcon sx={{ color: tokens.gold }} aria-hidden />
            Victory Fitness – Hűvösvölgy, Budapest
          </Typography>
          <Typography sx={{ mt: 2, mx: "auto", maxWidth: "60ch", fontStyle: "italic", color: "#CFCFCF", fontSize: { xs: "1rem", sm: "1.1rem" } }}>
            {t("trainingSection.consultation")}
          </Typography>
        </Box>
      </Reveal>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.6fr) minmax(0, 1fr)" }, gap: { xs: 2, md: 3 } }}>
        <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "grid", gap: 2 }}>
          {PLAN_KEYS.map((key, i) => {
            const details = t(`trainingSection.plans.${key}.details`, { returnObjects: true }) as string[];
            return (
              <Box
                component={motion.li}
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.08, duration: 0.7, ease }}
                sx={{
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "border-color 250ms, background-color 250ms",
                  "&:hover": { borderColor: "rgba(255, 192, 86, 0.45)", backgroundColor: "rgba(255, 255, 255, 0.06)" },
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 2, flexWrap: "wrap", mb: 1 }}>
                  <Typography component="h3" sx={{ fontWeight: 700, fontSize: { xs: "1.35rem", sm: "1.6rem" }, color: tokens.gold }}>
                    {t(`trainingSection.plans.${key}.title`)}
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: { xs: "1.2rem", sm: "1.4rem" }, color: "#fff", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                    {t(`trainingSection.plans.${key}.price`)}
                  </Typography>
                </Box>
                <Box component="ul" sx={{ m: 0, pl: 2.5, color: "#E6E6E6", lineHeight: 1.6, fontSize: { xs: "1rem", sm: "1.05rem" }, "& li::marker": { color: tokens.gold } }}>
                  {details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box
          component="img"
          src={trainingImage}
          alt=""
          loading="lazy"
          decoding="async"
          sx={{ display: { xs: "none", md: "block" }, width: "100%", height: "100%", maxHeight: 560, objectFit: "cover", borderRadius: 2 }}
        />
      </Box>

      <Box sx={{ textAlign: "center", mt: { xs: 3, md: 5 } }}>
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
          {t("trainingSection.contactButton")}
        </Button>
      </Box>

      <ContactFormDialog open={open} setOpen={setOpen} />
    </Box>
  );
};

export default TrainingSection;
