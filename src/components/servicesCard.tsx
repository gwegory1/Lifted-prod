import React, { useEffect, useRef } from "react";
import { Box, Typography, Card as MuiCard, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StyledCard = styled(MuiCard)<{ backgroundimage: string }>(
  ({ backgroundimage, theme }) => ({
    width: "100%",
    maxWidth: 260,
    height: 400,
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    opacity: 0,
    animation: "fadeIn 0.6s ease-out forwards",
    "&:hover": {
      transform: "scale(1.03)", // Reduced from 1.05 for subtler zoom effect
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
      "& .card-title": {
        transform: "translateY(-5px)",
      },
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "85%",
      height: 340,
      backgroundRepeat: "no-repeat",
    },
    "@keyframes fadeIn": {
      "0%": {
        opacity: 0,
        transform: "translateY(20px) scale(0.95)", // Increased from 0.9
      },
      "50%": {
        opacity: 0.8,
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0) scale(0.98)", // Added slight zoom out in final state
      },
    },
  })
);

const BackgroundText = styled(Typography)(({ theme }) => ({
  fontSize: "8rem",
  fontWeight: 1000,
  opacity: 0.03,
  color: "#333",
  zIndex: 0,
  pointerEvents: "none",
  whiteSpace: "nowrap",
  overflow: "visible",
  fontFamily: "Montserrat, sans-serif",
  [theme.breakpoints.down("sm")]: {
    fontSize: "4rem",
  },
}));

interface ServiceCardProps {
  services: {
    title: string;
    backgroundImage: string;
    link: string;
  }[];
}

const ServicesCard: React.FC<ServiceCardProps> = ({ services }) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();
  const { t } = useTranslation(); // Assuming you have a translation function

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.animationDelay = `${index * 0.1}s`;
            element.style.animationPlayState = "running";
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [services.length]);

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4 },
        backgroundColor: "#fff5f5",
        boxShadow:
          "0 5px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box position="relative" overflow="hidden">
        <BackgroundText
          position="absolute"
          top="50%"
          left={0}
          sx={{
            animation: "moveText 100s linear infinite", // Slowed down from 40s to 100s
            "@keyframes moveText": {
              "0%": { transform: "translateX(0) translateY(-50%)" },
              "100%": { transform: "translateX(-50%) translateY(-50%)" },
            },
            width: "max-content", // Ensures text doesn't get cut off
          }}
        >
          NEW HEIGHTS OF WELLNESS NEW HEIGHTS OF WELLNESS NEW HEIGHTS OF
          WELLNESS
        </BackgroundText>        
        <Typography
          variant="h2"
          textAlign="center"
          mb={{ xs: 3, sm: 4 }}
          color="#333"
          position="relative"
          zIndex={1}
          fontWeight={700}
          fontFamily="Montserrat, sans-serif"
          fontSize={{ xs: "2rem", sm: "3rem" }}
          sx={{
            animation: "fadeDown 0.8s ease-out",
            "@keyframes fadeDown": {
              "0%": { opacity: 0, transform: "translateY(-20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          {t("Services")}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems={"center"}
        gap={{ xs: 2, sm: 4 }}
        flexWrap="wrap"
        sx={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {services.map((service, index) => (
          <StyledCard
            key={index}
            backgroundimage={service.backgroundImage}
            ref={(el) => { cardRefs.current[index] = el; }}
            sx={{
              animationDelay: `${index * 0.1}s`,
              animationPlayState: "paused",
            }}
            onClick={() => navigate(service.link)}
          >
            <Box position="absolute" bottom={20} left={20} >
              <Typography
                variant="h3"
                color="white"
                className="card-title"
                sx={{
                  textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
                  fontSize: { xs: "1.6rem", sm: "2rem" },
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  transition: "transform 0.3s ease",
                }}
              >
                {service.title}
              </Typography>
            </Box>
          </StyledCard>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesCard;
