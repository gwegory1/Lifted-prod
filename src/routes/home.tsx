import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import CtaCover from "../components/ctacover";
import TrainWithMe from "../components/trainWithMe";
import { Stack } from "@mui/material";
import ServicesCard from "../components/servicesCard";
import NutriImage from "../assets/compressed/ROL04332.jpg";
import TrainImage from "../assets/compressed/IMG_5259.jpg";
import MyMission from "../components/myMission";
import Footer from "../components/footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";


const Home: React.FC = () => {

    const [isVisible, setIsVisible] = useState(true);
    const { t } = useTranslation(); // Assuming you have a translation function
  
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      //console.log("Scroll position:", scrollTop); // Debug log
      setIsVisible(scrollTop > 50); // Show button after scrolling 50px
    };
  
    const scrollToTop = () => {
      //console.log("Scroll to top triggered"); // Debug log
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <Stack width="100%">
      <Helmet>
        <title>{"Lifted"}</title>
        <meta name="description" content={t("HomeDescription")} />
        <link rel="canonical" href="/" />
        <meta property="og:title" content={t("Home")} />
        <meta property="og:description" content={t("HomeDescription")} />
        <meta property="og:url" content="/" />
      </Helmet>
      
      <Navbar />
      <ScrollToTopButton isVisible={isVisible} exec={scrollToTop} />
      <CtaCover />
      <TrainWithMe />
      <ServicesCard
        services={[
          { title: t("PersonalizedTraining"), backgroundImage: TrainImage, link: "/training" },
          { title: t("NutritionPlans"), backgroundImage: NutriImage, link: "/nutrition" },
        ]}
      />
      <MyMission />
      <Footer />
    </Stack>
  );
};

export default Home;
