import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import CtaCover from "../components/ctacover";
import TrainWithMe from "../components/trainWithMe";
import ServicesCard from "../components/servicesCard";
import MyMission from "../components/myMission";
import PageMeta from "../components/PageMeta";
import Reveal from "../components/Reveal";
import ContactFormDialog from "../components/contactDialog";
import NutriImage from "../assets/img/ROL04332.webp";
import TrainImage from "../assets/img/IMG_5259.webp";
import { useTranslation } from "react-i18next";
import { ctaButtonSx, tokens } from "../theme/theme";

// Closing invitation: one last, quiet place to book before the footer.
const ClosingCta = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <Box
      component="section"
      aria-labelledby="closing-cta"
      sx={{
        background: `radial-gradient(ellipse 70% 90% at 50% 0%, rgba(255, 192, 86, 0.12), transparent 70%), ${tokens.night}`,
        color: "#fff",
        textAlign: "center",
        px: 2,
        py: { xs: 6, md: 8 },
      }}
    >
      <Reveal>
        <Box aria-hidden sx={{ width: 56, height: 2, bgcolor: tokens.gold, mx: "auto", mb: 2.5 }} />
        <Typography
          id="closing-cta"
          component="h2"
          sx={{ fontWeight: 800, fontSize: { xs: "1.7rem", sm: "2.1rem", md: "2.4rem" }, lineHeight: 1.15, maxWidth: "20ch", mx: "auto" }}
        >
          {t("buildHealthyLife")}
        </Typography>
        <Button variant="contained" disableElevation onClick={() => setOpen(true)} sx={{ ...ctaButtonSx, mt: { xs: 3, md: 3.5 } }}>
          {t("BookNow")}
        </Button>
      </Reveal>
      <ContactFormDialog open={open} setOpen={setOpen} />
    </Box>
  );
};

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Lifted – Ábrahám Vivien" description={t("HomeDescription")} path="/" />
      <CtaCover />
      <TrainWithMe />
      <ServicesCard
        services={[
          { title: t("PersonalizedTraining"), backgroundImage: TrainImage, link: "/training" },
          { title: t("NutritionPlans"), backgroundImage: NutriImage, link: "/nutrition" },
        ]}
      />
      <MyMission />
      <ClosingCta />
    </>
  );
};

export default Home;
