import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import IMG_5296 from "../assets/img/IMG_5296.webp";
import IMG_5298 from "../assets/img/IMG_5298.webp";
import ROL04708 from "../assets/img/ROL04708.webp";
import ROL04775 from "../assets/img/ROL04775.webp";
import ROL04432 from "../assets/img/ROL04432.webp";
import PageMeta from "../components/PageMeta";
import ContactFormDialog from "../components/contactDialog";
import Reveal from "../components/Reveal";
import { ctaButtonSx, displaySx, ease, tokens } from "../theme/theme";

const bodySx = {
  fontSize: { xs: "1.05rem", md: "1.1rem" },
  lineHeight: 1.75,
  color: tokens.ink,
  maxWidth: "65ch",
};

// Opening letter of the story, set three lines deep like a magazine drop cap.
// Browsers without initial-letter (Firefox) just show a gold Chloe letter inline.
const dropCapSx = {
  ...bodySx,
  "&::first-letter": {
    fontFamily: "Chloe, serif",
    color: tokens.goldInk,
    initialLetter: "3",
    WebkitInitialLetter: "3",
    mr: 0.25,
  },
};

const photoSx = {
  display: "block",
  width: "100%",
  aspectRatio: "1 / 1",
  objectFit: "cover",
  borderRadius: 3,
  boxShadow: "0 16px 40px -20px rgba(42, 42, 42, 0.45)",
} as const;

const AboutMe = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <PageMeta title={`${t("about")} – Lifted`} description={t("AboutDescription")} path="/about" />

      {/* Phone: full-bleed portrait opener */}
      <Box
        component="header"
        sx={{
          display: { xs: "flex", md: "none" },
          position: "relative",
          alignItems: "flex-end",
          minHeight: "76svh",
          overflow: "hidden",
          isolation: "isolate",
          color: "#fff",
        }}
      >
        <Box
          component={motion.img}
          src={IMG_5296}
          alt=""
          fetchPriority="high"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease }}
          sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "62% center", zIndex: -2 }}
        />
        <Box aria-hidden sx={{ position: "absolute", inset: 0, zIndex: -1, background: "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)" }} />
        <Box sx={{ px: 2.5, pb: 4 }}>
          <Typography
            component={motion.h1}
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.9, ease }}
            sx={{ ...displaySx, fontSize: "4.2rem", lineHeight: 1, m: 0 }}
          >
            {t("about")}
          </Typography>
          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease }}
            sx={{ mt: 1, color: tokens.gold, fontSize: "1.15rem", fontStyle: "italic" }}
          >
            {t("healthJourney")}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 4 }, pt: { xs: 4, md: 6 }, pb: { xs: 5, md: 6 } }}>
        {/* Desktop: centered title */}
        <Box component="header" sx={{ display: { xs: "none", md: "block" }, textAlign: "center", mb: 5 }}>
          <Reveal>
            <Typography component="h1" sx={{ ...displaySx, fontSize: "3.2rem", color: tokens.ink, lineHeight: 1.05 }}>
              {t("about")}
            </Typography>
          </Reveal>
          <Reveal delay={0.15}>
            <Typography sx={{ mt: 1.5, color: tokens.goldInk, fontSize: "1.25rem", fontStyle: "italic" }}>
              {t("healthJourney")}
            </Typography>
          </Reveal>
        </Box>

        <Box sx={{ display: "grid", gap: { xs: 4, md: 6 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 2fr) minmax(0, 1fr)" },
              gap: 6,
              alignItems: "center",
              // the phone opener already shows this photo
              "& > .photo": { display: { xs: "none", md: "block" } },
            }}
          >
            <Reveal>
              <Typography sx={dropCapSx}>{t("aboutmetext1")}</Typography>
            </Reveal>
            <Reveal variant="clip" className="photo">
              <Box component="img" src={IMG_5296} alt="" loading="lazy" decoding="async" sx={{ ...photoSx, maxWidth: 360, mx: "auto" }} />
            </Reveal>
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(0, 2fr)" }, gap: { xs: 3, md: 6 }, alignItems: "center" }}>
            <Reveal variant="clip">
              <Box
                component="img"
                src={IMG_5298}
                alt=""
                loading="lazy"
                decoding="async"
                sx={{
                  ...photoSx,
                  // phone: edge to edge, tall
                  width: { xs: "calc(100% + 32px)", md: "100%" },
                  mx: { xs: -2, md: "auto" },
                  maxWidth: { xs: "none", md: 360 },
                  aspectRatio: { xs: "4 / 5", md: "1 / 1" },
                  borderRadius: { xs: 0, md: 3 },
                  boxShadow: { xs: "none", md: photoSx.boxShadow },
                }}
              />
            </Reveal>
            <Reveal>
              <Typography sx={bodySx}>{t("aboutmetext2")}</Typography>
            </Reveal>
          </Box>

          <Reveal>
            <Box
              sx={{
                position: "relative",
                mx: { xs: -2, md: "auto" },
                maxWidth: { md: 900 },
                px: { xs: 3, md: 7 },
                pt: { xs: 7, md: 8 },
                pb: { xs: 4, md: 6 },
                borderRadius: { xs: 0, md: 4 },
                background: `radial-gradient(ellipse 80% 70% at 0% 0%, rgba(255, 192, 86, 0.14), transparent 70%), ${tokens.night}`,
                color: "#F2F2F2",
              }}
            >
              <Box
                aria-hidden
                sx={{ position: "absolute", top: { xs: 4, md: 8 }, left: { xs: 20, md: 48 }, fontFamily: "Chloe, serif", fontSize: { xs: "6rem", md: "7rem" }, lineHeight: 1, color: tokens.gold }}
              >
                “
              </Box>
              <Typography sx={{ fontSize: { xs: "1.15rem", md: "1.3rem" }, fontWeight: 500, lineHeight: 1.65 }}>
                {t("personalizedGuidance")}
              </Typography>
            </Box>
          </Reveal>

          {/* Phone: swipeable strip with the next photo peeking in. Wider screens: three across. */}
          <Box
            component="ul"
            sx={{
              listStyle: "none",
              m: 0,
              p: 0,
              display: { xs: "flex", sm: "grid" },
              gridTemplateColumns: { sm: "repeat(3, minmax(0, 1fr))" },
              gap: { xs: 1.5, sm: 2 },
              mx: { xs: -2, sm: 0 },
              px: { xs: 2, sm: 0 },
              overflowX: { xs: "auto", sm: "visible" },
              scrollSnapType: "x mandatory",
              scrollPaddingInline: 16,
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {[ROL04775, ROL04432, ROL04708].map((src, i) => (
              <Box component="li" key={src} sx={{ flex: { xs: "0 0 74%", sm: "initial" }, scrollSnapAlign: "start" }}>
                <Reveal variant="clip" delay={i * 0.12}>
                  <Box component="img" src={src} alt="" loading="lazy" decoding="async" sx={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: 2 }} />
                </Reveal>
              </Box>
            ))}
          </Box>

          <Box component="section" aria-labelledby="about-cta" sx={{ textAlign: "center" }}>
            <Reveal>
              <Box aria-hidden sx={{ width: 64, height: 2, bgcolor: tokens.gold, mx: "auto", mb: 3 }} />
              <Typography id="about-cta" component="h2" sx={{ color: tokens.ink, fontWeight: 800, fontSize: { xs: "1.6rem", md: "2.2rem" }, mb: 3 }}>
                {t("buildHealthyLife")}
              </Typography>
              <Button variant="contained" disableElevation onClick={() => setOpen(true)} sx={{ ...ctaButtonSx, width: { xs: "100%", sm: "auto" } }}>
                {t("BookNow")}
              </Button>
            </Reveal>
          </Box>
        </Box>
      </Box>

      <ContactFormDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default AboutMe;
