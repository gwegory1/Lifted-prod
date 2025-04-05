import { Box, Container, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import Navbar from "../components/navbar";
import NutritionPlans from "../components/nutritionPlans";
import nutri2 from "../assets/compressed/ROL04266.jpg";
import Footer from "../components/footer";
import NutritionGallery from "../components/nutritionGalery";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  padding: theme.spacing(2, 1),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4, 2),
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginBottom: theme.spacing(4),
}));

const LandingPage = () => {
  const theme = useTheme();


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
    <Box
      sx={{
        backgroundColor: "#ffffff",
        color: "#333333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Navbar />
      <ScrollToTopButton isVisible={isVisible} exec={scrollToTop} />

      <HeroSection>
        <Container
          maxWidth="lg"
          sx={{ textAlign: "center", px: { xs: 2, sm: 3 } }}
        >
          <Typography
            align="center"
            gutterBottom
            sx={{
              fontFamily: "OoohBaby",
              fontSize: { xs: "1.8rem", sm: "2.3rem" },
              mb: { xs: 2, sm: 3 },
            }}
          >
            {t("Nutrition.quote")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "flex-start" },
              gap: { xs: 3, sm: 4 },
              mt: 2,
              py: { xs: 3, sm: 5 },
            }}
          >
            <Box sx={{ flex: 1, width: "100%" }}>
              <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {t("Nutrition.title")}
                <span style={{ color: "#ff9800" }}>{t("Nutrition.title2")}</span>
              </Typography>
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.5rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {t("Nutrition.subtitle")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.2rem", sm: "1.3rem" },
                  textAlign: "left",
                  mt: 2,
                }}
              >
                {t("Nutrition.text")}
              </Typography>
            </Box>
            <Box
              sx={{
                flex: { xs: "none", md: 1 },
                maxWidth: { xs: "340px", sm: "370px", md: "500px" },
                width: { xs: "90%", md: "auto" },
                position: "relative",
                overflow: "visible",
                my: { xs: 3, md: 0 },
                alignSelf: { xs: "center", md: "flex-start" },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={nutri2}
                  alt="Nutrition"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: theme.spacing(1),
                    position: "relative",
                    zIndex: 2,
                  }}
                />
              </Box>
            </Box>
          </Box>
          <NutritionPlans />
          <NutritionGallery />
        </Container>
      </HeroSection>
      <Footer />
    </Box>
  );
};

export default LandingPage;