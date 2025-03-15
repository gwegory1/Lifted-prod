import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

const trainingOptions = [
  {
    title: "EGY ALKALMAS",
    description:
      "60 perces személyi edzés, alkalmanként vásárolt jegy",
  },
  {
    title: "BÉRLET",
    description:
      "8 személyi edzést tartalmazó bérlet, mely 2 hónapon belül bármikor felhasználható",
  },
  {
    title: "PÁROS EDZÉS",
    description:
      "2 főre szóló edzés, ami ideális ha az illető baráttal/barátnővel szeretne edzeni",
  },
  {
    title: "EDZÉSTERV",
    description:
      "1 hónapos személyre szabott edzésterv, amely a 75 perces konzultáció + felmérés alapján készül és az illető egyedül végzi",
  },
];

interface TrainingSectionProps {
  isMobile: boolean;
  theme: any; // Replace 'any' with the correct type if known
  Image3: string;
}

export default function TrainingSection({ isMobile, theme, Image3 }: TrainingSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Stack
      direction="column"
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        mt: isMobile ? 4 : 8, // Increased top margin for breathing room
        backgroundColor: "#1A1A1A", // Slightly softer black
        borderRadius: isMobile ? 0 : 2, // Rounded corners on desktop
        borderBottomRightRadius: 0, // Rounded corners on desktop
        borderBottomLeftRadius: 0, // Rounded corners on desktop
        overflow: "hidden", // Clean edges
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Subtle shadow
      }}
    >
      <Stack
        direction={isMobile ? "column-reverse" : "row"}
        sx={{
          width: "100%",
          padding: isMobile ? theme.spacing(2) : theme.spacing(4),
          justifyContent: "space-between",
          alignItems: isMobile ? "center" : "stretch",
          gap: isMobile ? 2 : 4,
        }}
      >
        {/* Left/Content Side */}
        <Stack
          gap={isMobile ? 2 : 3}
          sx={{
            width: isMobile ? "100%" : "50%",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography
            variant={isMobile ? "h5" : "h2"}
            fontWeight={700}
            fontFamily="Montserrat, sans-serif"
            sx={{
              color: "#FFC056",
              letterSpacing: "0.05em",
              mb: isMobile ? 1 : 2,
            }}
          >
            EDZÉS LEHETŐSÉGEK
          </Typography>

          <Stack
            direction={isMobile ? "column" : "row"}
            gap={isMobile ? 2 : 4}
            sx={{ width: "100%", justifyContent: "center" }}
          >
            {/* Options List */}
            <Stack
              gap={1.5}
              sx={{
                width: isMobile ? "100%" : "auto",
                minWidth: isMobile ? "auto" : 250,
              }}
            >
              {trainingOptions.map((option, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  component="a"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(index);
                  }}
                  sx={{
                    color: activeTab === index ? "#FFC056" : "#D9D9D9",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: isMobile ? "1.1rem" : "1.2rem",
                    fontWeight: activeTab === index ? 600 : 400,
                    textDecoration: "none",
                    padding: theme.spacing(0.5, 1),
                    textAlign: 'left',
                    borderRadius: 1,
                    transition: "color 0.3s ease, transform 0.2s ease",
                    "&:hover": {
                      color: "#FFC056",
                      transform: "translateX(4px)", // Subtle shift on hover
                    },
                    cursor: "pointer",
                  }}
                >
                  {option.title}
                </Typography>
              ))}
            </Stack>

            {/* Description */}
            <Box>
              <Typography textAlign={'left'} fontSize={'1.2rem'}>{trainingOptions[activeTab].title}</Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#E0E0E0",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: isMobile ? "1.2rem" : "1.2rem",
                  lineHeight: 1.7,
                  textAlign: isMobile ? "center" : "left",
                  maxWidth: isMobile ? "100%" : 450,
                  mt: isMobile ? 1 : 0,
                }}
              >
                {trainingOptions[activeTab].description}
              </Typography>
            </Box>
          </Stack>
        </Stack>

        {/* Right/Image Side */}
        <Box
          sx={{
            position: "relative",
            width: isMobile ? "100%" : "50%",
            maxWidth: 600,
            height: isMobile ? 250 : '100%', // Fixed height for consistency
            overflow: "hidden",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to bottom, rgba(0,0,0,0.2), transparent)",
              zIndex: 1,
            },
          }}
        >
          <img
            src={Image3}
            alt="Training Options"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.5s ease",
            }}
            loading="lazy"
          />
        </Box>
      </Stack>
    </Stack>
  );
}