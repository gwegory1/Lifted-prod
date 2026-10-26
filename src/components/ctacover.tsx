import { useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import ctaCoverImage from "../assets/img/cta-cover.webp";
import ctaCoverPhone from "../assets/img/cta-cover-phone.webp";
import ContactFormDialog from "./contactDialog";
import Reveal from "./Reveal";
import { ctaButtonSx, ease, tokens } from "../theme/theme";

// Hero copy enters in sequence after the photo settles.
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease },
});

const CtaCover = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const reduce = useReducedMotion();

  return (
    <Box component="section">
      <Box
        ref={ref}
        sx={{
          position: "relative",
          minHeight: { xs: "70svh", md: "72vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: { xs: "flex-end", md: "center" },
          overflow: "hidden",
          isolation: "isolate",
          color: "#fff",
        }}
      >
        <Box
          component={motion.div}
          aria-hidden
          style={{ y: reduce ? 0 : photoY }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease }}
          sx={{ position: "absolute", inset: 0, zIndex: -2 }}
        >
          <picture style={{ display: "block", height: "100%" }}>
            <source media="(max-width: 599px)" srcSet={ctaCoverPhone} />
            <Box
              component="img"
              src={ctaCoverImage}
              alt=""
              fetchPriority="high"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: { xs: "center top", md: "left center" },
              }}
            />
          </picture>
        </Box>
        {/* scrim: darker where the type sits, so white text holds contrast on any crop */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: -1,
            background: {
              xs: "linear-gradient(to bottom, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.7) 100%)",
              md: "radial-gradient(ellipse 60% 70% at 50% 55%, rgba(0,0,0,0.42), rgba(0,0,0,0.18))",
            },
          }}
        />

        <Box sx={{ px: 2, pb: { xs: 6, md: 0 }, textAlign: "center", maxWidth: 1100 }}>
          <Typography
            component={motion.p}
            {...enter(0.15)}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              mb: { xs: 2, md: 3 },
              fontSize: { xs: "0.85rem", md: "0.95rem" },
              fontWeight: 500,
              letterSpacing: "0.02em",
              textShadow: "0 1px 8px rgba(0,0,0,0.4)",
            }}
          >
            <LocationOnIcon aria-hidden sx={{ fontSize: "1.1rem", color: tokens.gold }} />
            Victory Fitness – Hűvösvölgy, Budapest
          </Typography>

          <Typography
            component={motion.h1}
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.25, duration: 1, ease }}
            sx={{
              fontFamily: "'Chloe', serif",
              fontWeight: 400,
              fontSize: { xs: "3.4rem", sm: "4.6rem", md: "clamp(5.5rem, 8vw, 8rem)" },
              lineHeight: 0.95,
              letterSpacing: "0.01em",
              textShadow: "0 2px 16px rgba(0,0,0,0.25)",
              m: 0,
            }}
          >
            ÁBRAHÁM
            <br />
            VIVIEN
          </Typography>

          <Typography
            component={motion.p}
            {...enter(0.55)}
            sx={{
              maxWidth: "34ch",
              mx: "auto",
              mt: { xs: 2, md: 3 },
              fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.4rem" },
              lineHeight: 1.45,
              textShadow: "0 1px 8px rgba(0,0,0,0.35)",
            }}
          >
            {t("ctacoverText")}
          </Typography>

          <Box
            component={motion.div}
            {...enter(0.75)}
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1.5, mt: { xs: 3, md: 4 } }}
          >
            <Button variant="contained" disableElevation onClick={() => setOpen(true)} sx={ctaButtonSx}>
              {t("BookNow")}
            </Button>
            <Button
              href="#services"
              sx={{
                ...ctaButtonSx,
                backgroundColor: "transparent",
                color: "#fff",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.7)",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.14)" },
              }}
            >
              {t("Services")}
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ py: { xs: 2, md: 2.5 }, px: 2, backgroundColor: "#FFF5DA", textAlign: "center" }}>
        <Reveal>
          <Typography
            component="p"
            sx={{
              color: tokens.ink,
              fontStyle: "italic",
              fontWeight: 100,
              fontSize: { xs: "1.35rem", sm: "1.6rem", md: "2rem" },
              lineHeight: 1.2,
            }}
          >
            {t("newHeightsText")}
          </Typography>
        </Reveal>
      </Box>

      <ContactFormDialog open={open} setOpen={setOpen} />
    </Box>
  );
};

export default CtaCover;
