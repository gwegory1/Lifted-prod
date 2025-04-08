import Navbar from "../components/navbar";
import React, { useEffect, useState } from "react";
import { Typography, Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import Image1 from "../assets/compressed/IMG_5257.jpg";
import Image2 from "../assets/compressed/ROL04662.jpg";
import Image3 from "../assets/compressed/ROL04772.jpg";
import Footer from "../components/footer";
import TrainingSection from "../components/trainingSection";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const Training: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const {t} = useTranslation(); // Assuming you have a translation function

  const [isVisible, setIsVisible] = useState(true);

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
    <Stack
      sx={{
      backgroundColor: "background.paper",
      minHeight: "100vh",
      alignItems: "center",
      width: "100%", // Changed from 100vw to 100% to prevent overflow
      }}
    >
      <Helmet>
        <title>{t("Training")}</title>
        <meta name="description" content={t("TrainingDescription")} />
        <link rel="canonical" href="/training" />
        <meta property="og:title" content={t("Training")} />
        <meta property="og:description" content={t("TrainingDescription")} />
        <meta property="og:url" content="/training" />
      </Helmet>
      <Navbar />
      <ScrollToTopButton isVisible={isVisible} exec={scrollToTop} />

      {/* CTA Cover Section */}

      {/* Hero Section */}
      <Box
      sx={{
        width: "100%",
        bgcolor: "#FFF5E6",
        py: isMobile ? 4 : 8,
        textAlign: "center",
      }}
      >
      <Typography
        variant={isMobile ? "h4" : "h2"}
        color="#FFC056"
        fontWeight="bold"
        sx={{ fontFamily: "Montserrat, sans-serif", mb: 2 }}
      >
        {t("heroTitle")}
      </Typography>
      <Typography
        variant={isMobile ? "body1" : "h6"}
        sx={{
        maxWidth: "800px",
        mx: "auto",
        px: 2,
        fontFamily: "Montserrat, sans-serif",
        }}
      >
        {t("heroSubtitle")}
      </Typography>
      </Box>

      {/* Main Content */}
      <Stack
      sx={{
        width: "100%",
        maxWidth: "1200px",
        px: isMobile ? 2 : 4,
        py: isMobile ? 2 : 4,
        gap: isMobile ? 4 : 6,
      }}
      >
      {/* Section 1 */}
      <Stack
        direction={isMobile ? "column" : "row"}
        gap={isMobile ? 2 : 4}
        alignItems="center"
      >
        <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          "&:hover img": {
          transform: "scale(1.00)",
          transition: "transform 0.3s",
          },
        }}
        >
        <img
          src={Image1}
          alt="Training Focus"
          style={{
          width: "100%",
          height: "auto",
          borderRadius: isMobile ? "0" : "8px",
          }}
          loading="lazy"
        />
        </Box>
        <Stack gap={2} sx={{ width: isMobile ? "90%" : "50%" }}>
        <Stack
          direction={"row"}
          alignItems="center"
          gap={1}
          flexWrap="nowrap"
        >
          <Typography
          color="#FFC056"
          variant={isMobile ? "h5" : "h3"}
          fontWeight="bold"
          >
          {t("section1Title")}
          </Typography>

          <Typography
          variant={isMobile ? "h5" : "h3"}
          color="#475569"
          fontWeight="bold"
          sx={{ fontFamily: "Montserrat, sans-serif" }}
          >
          {t("section1Title2")}
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          sx={{
          fontFamily: "Montserrat, sans-serif",
          color: "#333",
          lineHeight: 1.8,
          fontSize: "1.3rem",
          }}
        >
          {t("section1Text")}
        </Typography>
        </Stack>
      </Stack>
      {/* Section 2 */}
      <Stack
        direction={isMobile ? "column" : "row-reverse"}
        gap={isMobile ? 2 : 4}
        alignItems="center"
        sx={{ bgcolor: "#FFF5E6", borderRadius: "8px", p: 3 }}
      >
        <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          "&:hover img": {
          transform: "scale(1.00)",
          transition: "transform 0.3s",
          },
        }}
        >
        <img
          src={Image2}
          alt="Training Progress"
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          loading="lazy"
        />
        </Box>
        <Stack gap={2} sx={{ width: isMobile ? "100%" : "50%" }}>
        <Stack
          direction={"row"}
          alignItems="center"
          gap={1}
          flexWrap="wrap"
        >
          <Typography
          color="#FFC056"
          variant={isMobile ? "h5" : "h3"}
          fontWeight="bold"
          >
          {t("section2Title")}
          </Typography>
          <Typography
          variant={isMobile ? "h5" : "h3"}
          color="#475569"
          fontWeight="bold"
          noWrap
          sx={{ fontFamily: "Montserrat, sans-serif" }}
          >
          {t("section2Title2")}
          </Typography>
        </Stack>
        <Typography
          variant="body1"

          sx={{
          fontFamily: "Montserrat, sans-serif",
          color: "#333",
          lineHeight: 1.8,
          fontSize: "1.3rem",
          }}
        >
          {t("section2Text")}
        </Typography>
        </Stack>
      </Stack>
      {/* Section 3 */}
      <Stack
        direction={isMobile ? "column" : "row"}
        gap={isMobile ? 2 : 4}
        alignItems="center"
      >
        <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          "&:hover img": {
          transform: "scale(1.00)",
          transition: "transform 0.3s",
          },
        }}
        >
        <img
          src={Image3}
          alt="Training Challenge"
          style={{
          width: "100%",
          height: "auto",
          borderRadius: isMobile ? "0" : "8px",
          }}
          loading="lazy"
        />
        </Box>
        <Stack gap={2} sx={{ width: isMobile ? "90%" : "50%" }}>
        <Stack
          direction={"row"}
          alignItems="center"
          gap={1}
          flexWrap="wrap"
          
        >
          <Typography
          color="#FFC056"
          variant={isMobile ? "h5" : "h3"}
          fontWeight="bold"
          >
          {t("section3Title")}
          </Typography>
          <Typography
          variant={isMobile ? "h5" : "h3"}
          color="#475569"
          fontWeight="bold"
          noWrap
          sx={{ fontFamily: "Montserrat, sans-serif" }}
          >
          {t("section3Title2")}
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          sx={{
          fontFamily: "Montserrat, sans-serif",
          color: "#333",
          lineHeight: 1.8,
          fontSize: "1.3rem",
          }}
        >
          {t("section3Text")}
        </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
        width: "95%",
        bgcolor: "#FFF5E6",
        borderRadius: "8px",
        alignSelf: "center",
        p: { xs: 3, sm: 4, md: 5 },
        mt: { xs: 3, sm: 4, md: 6 },
        }}
      >
        <Typography
        variant={isMobile ? "h5" : "h3"}
        color="#475569"
        fontWeight="bold"
        sx={{
          fontFamily: "Montserrat, sans-serif",
          textAlign: "center",
          mb: { xs: 3, sm: 4 },
        }}
        >
          {t("helpTitle")}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
            },
            gap: 3,
            width: "100%",
          }}
        >
          {[
            t("helpItem1"),
            t("helpItem2"),
            t("helpItem3"),
            t("helpItem4"),
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                bgcolor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "14px",
                p: 2.5,
                textAlign: "center",
                transition: "transform 0.2s, box-shadow 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#333",
                  fontWeight: "medium",
                  fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.1rem" },
                  wordBreak: "break-word",
                  hyphens: "auto",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Stack>
      {/* Training Section */}
      <TrainingSection />
      </Stack>

      <Footer />
    </Stack>
  );
};

export default Training;

