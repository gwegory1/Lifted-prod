import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

const trainingOptions = [
  {
    title: "EGY ALKALMAS",
    description: "60 perces személyi edzés, alkalmanként vásárolt jegy",
  },
  {
    title: "BÉRLET",
    description: "8 személyi edzést tartalmazó bérlet, mely 2 hónapon belül bármikor felhasználható",
  },
  {
    title: "PÁROS EDZÉS",
    description: "2 főre szóló edzés, ami ideális ha az illető baráttal/barátnővel szeretne edzeni",
  },
  {
    title: "EDZÉSTERV",
    description: "1 hónapos személyre szabott edzésterv, amely a 75 perces konzultáció + felmérés alapján készül és az illető egyedül végzi",
  },
];

interface TrainingSectionProps {
  isMobile: boolean;
  theme: any;
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
        mt: isMobile ? 3 : 8,
        backgroundColor: "#1A1A1A",
        borderRadius: isMobile ? 0 : 2,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        sx={{
          width: "100%",
          padding: isMobile ? theme.spacing(2) : theme.spacing(4),
          justifyContent: "space-between",
          alignItems: isMobile ? "center" : "stretch",
          gap: isMobile ? 2 : 4,
        }}
      >
        {/* Mobile Header Image */}
        {isMobile && (
          <Box
            sx={{
              width: "100%",
              height: 180,
              overflow: "hidden",
              borderRadius: 1,
              mb: 2,
            }}
          >
            <img
              src={Image3}
              alt="Training Options"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              loading="lazy"
            />
          </Box>
        )}

        {/* Content Side */}
        <Stack
          gap={isMobile ? 1.5 : 3}
          sx={{
            width: isMobile ? "100%" : "50%",
            color: "white",
            textAlign: isMobile ? "left" : "center",
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
              textAlign: "center",
            }}
          >
            EDZÉS LEHETŐSÉGEK
          </Typography>

          {isMobile ? (
            // Mobile Layout
            <Stack gap={2}>
              {/* Mobile Options Horizontal Scroll */}
              <Box
                sx={{
                  display: "flex",
                  overflowX: "auto",
                  pb: 1,
                  "&::-webkit-scrollbar": {
                    height: 4,
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(255,192,86,0.3)",
                    borderRadius: 2,
                  },
                }}
              >
                {trainingOptions.map((option, index) => (
                  <Box
                    key={index}
                    onClick={() => setActiveTab(index)}
                    sx={{
                      px: 2,
                      py: 1,
                      mr: 1,
                      whiteSpace: "nowrap",
                      color: activeTab === index ? "#FFC056" : "#D9D9D9",
                      fontWeight: activeTab === index ? 600 : 400,
                      borderBottom: activeTab === index ? "2px solid #FFC056" : "none",
                      cursor: "pointer",
                    }}
                  >
                    {option.title}
                  </Box>
                ))}
              </Box>
              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: "#E0E0E0",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.2rem",
                  lineHeight: 1.5,
                  px: 1,
                  py: 2,
                }}
              >
                {trainingOptions[activeTab].description}
              </Typography>
            </Stack>
          ) : (
            // Desktop Layout (unchanged)
            <Stack
              direction="row"
              gap={4}
              sx={{ width: "100%", justifyContent: "center" }}
            >
              <Stack
                gap={1.5}
                sx={{ width: "auto", minWidth: 250 }}
              >
                {trainingOptions.map((option, index) => (
                  <Typography
                    key={index}
                    component="a"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(index);
                    }}
                    sx={{
                      color: activeTab === index ? "#FFC056" : "#D9D9D9",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.2rem",
                      fontWeight: activeTab === index ? 600 : 400,
                      textDecoration: "none",
                      padding: theme.spacing(0.5, 1),
                      textAlign: 'left',
                      borderRadius: 1,
                      transition: "color 0.3s ease, transform 0.2s ease",
                      "&:hover": {
                        color: "#FFC056",
                        transform: "translateX(4px)",
                      },
                      cursor: "pointer",
                    }}
                  >
                    {option.title}
                  </Typography>
                ))}
              </Stack>

              <Box>
                <Typography textAlign={'left'} fontSize={'1.2rem'} paddingBottom={2}>{trainingOptions[activeTab].title}</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#E0E0E0",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.2rem",
                    lineHeight: 1.7,
                    textAlign: "left",
                    maxWidth: 450,
                  }}
                >
                  {trainingOptions[activeTab].description}
                </Typography>
              </Box>
            </Stack>
          )}
        </Stack>

        {/* Desktop Image Side */}
        {!isMobile && (
          <Box
            sx={{
              position: "relative",
              width: "50%",
              maxWidth: 600,
              height: '100%',
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
        )}
      </Stack>
    </Stack>
  );
}