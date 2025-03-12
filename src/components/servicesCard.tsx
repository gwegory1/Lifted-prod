import React from "react";
import {
  Box,
  Typography,
  Card as MuiCard,
  styled,
} from "@mui/material";

const StyledCard = styled(MuiCard)<{ backgroundimage: string }>(
  ({ backgroundimage }) => ({
    width: "100%",
    maxWidth: 260, // Slightly increased for better balance
    height: 400,
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smoother transition
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)", // Enhanced hover shadow
    },
  })
);

const BackgroundText = styled(Typography)({
  fontSize: "8rem", // Slightly reduced for better fit
  fontWeight: 1000,
  opacity: 0.03, // Reduced opacity for subtlety
  color: "#333", // Darker for better contrast
  zIndex: 0,
  pointerEvents: "none",
  whiteSpace: "nowrap",
  overflow: "visible",
  fontFamily: "Montserrat, sans-serif", // Consistent font
});

interface ServiceCardProps {
  services: {
    title: string;
    backgroundImage: string;
  }[];
}

const ServicesCard: React.FC<ServiceCardProps> = ({ services }) => {
  return (
    <Box
      sx={{
        padding: { xs: 3, sm: 4 }, // Adjusted for mobile
        backgroundColor: "#fff5f5", // Aligned with app palette
        boxShadow:
          "0 0px 15px rgba(0, 0, 0, 0.1), inset 0 0px 25px rgba(255, 255, 255, 1)",
      }}
    >
      <Box position="relative">
        <BackgroundText position="absolute" top={0}>
          NEW HEIGHTS OF WELLNESS NEW HEIGHTS OF WELLNESS NEW HEIGHTS OF
          WELLNESS
        </BackgroundText>
        <Typography
          variant="h2"
          textAlign="center"
          mb={{ xs: 3, sm: 4 }} // Adjusted margin for mobile
          color="#333"
          position="relative"
          zIndex={1}
          fontWeight={700}
          fontFamily="Montserrat, sans-serif"
          fontSize={{ xs: "2rem", sm: "2.5rem" }} // Responsive font size
        >
          Szolgáltatások
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        gap={{ xs: 2, sm: 4 }} // Adjusted gap for mobile
        flexWrap="wrap"
      >
        {services.map((service, index) => (
          <StyledCard key={index} backgroundimage={service.backgroundImage}>
            <Box position="absolute" bottom={20} left={20}>
              <Typography
                variant="h3"
                color="white"
                sx={{
                  textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)", // Enhanced shadow for contrast
                  fontSize: { xs: "1.8rem", sm: "2rem" }, // Adjusted for readability
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600, // Slightly lighter for elegance
                }}
              >
                {service.title}
              </Typography>
            </Box>
          </StyledCard>
        ))}
      </Box>
      <Box position="relative">
        <BackgroundText>
          NEW HEIGHTS OF WELLNESS NEW HEIGHTS OF WELLNESS NEW HEIGHTS OF
          WELLNESS
        </BackgroundText>
      </Box>
    </Box>
  );
};

export default ServicesCard;