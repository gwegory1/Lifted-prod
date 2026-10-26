import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import TWM1 from "../assets/img/ROL04494.webp";
import TWM2 from "../assets/img/ROL04660.webp";
import ContactFormDialog from "./contactDialog";
import Reveal from "./Reveal";
import { ctaButtonSx, displaySx, tokens } from "../theme/theme";

// Photos sit at staggered heights on desktop and uncover one after the other.
const Photo = ({ src, area, offset, delay }: { src: string; area: string; offset: number; delay: number }) => (
  <Reveal variant="clip" delay={delay} style={{ gridArea: area }}>
    <Box
      component="img"
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      sx={{
        width: "100%",
        aspectRatio: "2 / 3",
        objectFit: "cover",
        borderRadius: 2,
        // stagger heights in-flow, so the reveal's clip box follows the photo
        mt: { md: `${Math.max(offset, 0) }px` },
        mb: { md: `${Math.max(-offset, 0)}px` },
        boxShadow: "0 24px 48px -24px rgba(42, 42, 42, 0.45)",
      }}
    />
  </Reveal>
);

const TrainWithMe = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      aria-labelledby="train-with-me"
      sx={{
        display: "grid",
        gridTemplateAreas: { xs: '"a b" "text text"', md: '"a text b"' },
        gridTemplateColumns: { xs: "1fr 1fr", md: "minmax(0, 1fr) minmax(0, 1.3fr) minmax(0, 1fr)" },
        alignItems: "center",
        gap: { xs: 2, md: 5 },
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 2, md: 5 },
        py: { xs: 5, md: 8 },
      }}
    >
      <Photo src={TWM1} area="a" offset={40} delay={0} />
      <Reveal style={{ gridArea: "text" }}>
        <Box sx={{ textAlign: "center", px: { md: 2 }, mt: { xs: 2, md: 0 } }}>
          <Typography
            id="train-with-me"
            component="h2"
            sx={{
              ...displaySx,
              fontSize: { xs: "2.4rem", sm: "2.7rem", md: "3rem" },
              lineHeight: 1.05,
              color: tokens.ink,
            }}
          >
            {t("TrainWithMe")}
          </Typography>
          <Box aria-hidden sx={{ width: 56, height: 2, backgroundColor: tokens.gold, mx: "auto", mt: 1.5, mb: 2.5 }} />
          <Typography
            sx={{
              fontSize: { xs: "1.05rem", md: "1.15rem" },
              lineHeight: 1.65,
              color: tokens.inkSoft,
              fontStyle: "italic",
              maxWidth: "38ch",
              mx: "auto",
            }}
          >
            {t("TrainWithMeText")}
          </Typography>
          <Button variant="contained" disableElevation onClick={() => setOpen(true)} sx={{ ...ctaButtonSx, mt: 3 }}>
            {t("BookNow")}
          </Button>
        </Box>
      </Reveal>
      <Photo src={TWM2} area="b" offset={-40} delay={0.15} />
      <ContactFormDialog open={open} setOpen={setOpen} />
    </Box>
  );
};

export default TrainWithMe;
