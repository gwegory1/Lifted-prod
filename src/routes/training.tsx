import Navbar from "../components/navbar";
import React, { useState } from "react";
import { Typography, Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import Image1 from "../assets/neked.jpg";
import Image2 from "../assets/row.jpg";
import Image3 from "../assets/ROL04708.jpg";
import Footer from "../components/footer";

const Training: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Stack
      width="100%"
      sx={{
        backgroundColor: "background.paper",
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Stack
        width="100%"
        paddingTop={isMobile ? 2 : 10} // Reduced paddingTop for mobile
        gap={isMobile ? 1 : 0}
        alignItems="center"
      >
        {/* First Section */}
        <Stack
          direction={isMobile ? "column" : "row"}
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: isMobile ? theme.spacing(1) : 0, // Reduced padding for mobile
            gap: isMobile ? 1 : 5,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: isMobile ? "100%" : "600px",
              height: "auto",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: isMobile ? -5 : -20,
                left: isMobile ? -5 : -20,
                width: "100%",
                height: "100%",
                backgroundColor: "#AAB4A6",
                zIndex: 0,
              }}
            />
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <img
                src={Image1}
                alt="Training Focus"
                style={{
                  width: "100%",
                  height: isMobile ? "200px" : "auto", // Fixed height for mobile
                  objectFit: "cover",
                  borderRadius: isMobile ? theme.spacing(1) : 0, // Added border radius for mobile
                }}
                loading="lazy"
              />
            </Box>
          </Box>
          <Stack
            gap={isMobile ? 0.5 : 2}
            sx={{
              width: isMobile ? "100%" : "600px",
              zIndex: 2,
              padding: isMobile ? theme.spacing(2) : theme.spacing(2),
            }}
          >
            <Stack
              direction="row"
              gap={isMobile ? 0.5 : 1}
              sx={{
                justifyContent: "start",
                borderColor: "#AAB4A6",
                borderStyle: "solid",
                padding: isMobile ? theme.spacing(1) : theme.spacing(2),
                width: "fit-content",
                alignSelf: "start", // Center on mobile
              }}
            >
              <Typography
                variant={isMobile ? "h5" : "h2"} // Smaller heading on mobile
                color="#FFC056"
                fontWeight="bold"
                sx={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                  fontStyle: "italic",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                1.
              </Typography>
              <Stack direction="row" gap={isMobile ? 0.5 : 2}>
                <Typography
                  variant={isMobile ? "h5" : "h2"}
                  color="#FFC056"
                  fontWeight="bold"
                  noWrap
                  sx={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                    fontStyle: "italic",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Rajtad
                </Typography>
                <Typography
                  variant={isMobile ? "h5" : "h2"}
                  noWrap
                  sx={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                    fontStyle: "italic",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  a fókusz
                </Typography>
              </Stack>
            </Stack>
            <Typography
              variant={isMobile ? "body1" : "h5"}
              sx={{
                width: "80%",
                padding: isMobile ? theme.spacing(4) : theme.spacing(0, 5, 0, 5),
                fontStyle: "italic",
                fontSize: isMobile ? "0.9rem" : "1.4rem", // Smaller text on mobile
                textAlign: isMobile ? "center" : "left", // Centered on mobile
                fontFamily: "Montserrat, sans-serif",
                color: "#333",
                lineHeight: 1.6,
                
              }}
            >
              Mivel minden ember más, az edzéseim is azok. Az egyéni igényekhez
              és célokhoz igazítom a programokat, figyelembe véve a jelenlegi
              szintet és életstílust. Az alapgyakorlatokban és funkcionalitásban
              hiszek, amelyek tartós fejlődést biztosítanak. Célom, hogy
              megtaláljuk a számodra leghatékonyabb utat a kitűzött céljaid
              eléréséhez.
            </Typography>
          </Stack>
        </Stack>

        {/* Second Section */}
        <Stack
          direction={isMobile ? "column-reverse" : "row"}
          marginTop={isMobile ? 2 : 10}
          sx={{
            width: "100%",
            justifyContent: "center",
            gap: isMobile ? 1 : 5,
            position: "relative",
            padding: isMobile ? theme.spacing(1) : theme.spacing(5),
            
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: isMobile ? "40%" : "70%", // Reduced height for mobile
              backgroundColor: "#AAB4A6",
              zIndex: 0,
            }}
          />
          <Stack
            gap={isMobile ? 0.5 : 2}
            sx={{ width: isMobile ? "100%" : "600px", zIndex: 2 }}
            alignItems={isMobile ? "center" : "flex-start"}
          >
            <Stack
              direction="row"
              gap={isMobile ? 0.5 : 2}
              sx={{
                justifyContent: "start",
                borderColor: "#AAB4A6",
                borderStyle: "solid",
                padding: isMobile ? theme.spacing(1) : theme.spacing(2),
                width: "fit-content",
                alignSelf: "start",
              }}
            >
              <Typography
                variant={isMobile ? "h5" : "h2"}
                sx={{
                  color: "#475569",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                2.
              </Typography>
              <Stack>
                <Typography
                  variant={isMobile ? "h5" : "h2"}
                  noWrap
                  sx={{
                    textDecoration: "underline",
                    color: "#475569",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Sikerek,
                </Typography>
                <Typography
                  variant={isMobile ? "h5" : "h2"}
                  noWrap
                  sx={{
                    fontStyle: "italic",
                    color: "#D9D9D9",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  lépésről lépésre
                </Typography>
              </Stack>
            </Stack>
            <Typography
              variant={isMobile ? "body1" : "h5"}
              sx={{
                maxWidth: "100%",
                padding: isMobile ? theme.spacing(2) : theme.spacing(0, 5, 0, 5),
                fontStyle: "italic",
                fontSize: isMobile ? "0.9rem" : "1.4rem",
                textAlign: isMobile ? "center" : "left",
                fontFamily: "Montserrat, sans-serif",
                color: "#333",
                lineHeight: 1.6,
              }}
            >
              A legfőbb célom nem a gyors eredmények elérése, hanem a hosszú
              távú, fenntartható fejlődés. Az edzések során mindig figyelek
              arra, hogy a legjobb megoldást találjuk meg a számodra, ami
              valóban fenntartható és illeszkedik az életstílusodhoz. A hangsúly
              az egészséges szokások kialakításán és az edzés fokozatos, stabil
              beépítésén van. A fejlődés az apró, napi szintű döntésekről szól,
              amelyek hosszú távon komoly eredményeket hoznak.
            </Typography>
          </Stack>
          <Box
            sx={{
              position: "relative",
              width: isMobile ? "100%" : "500px",
              height: "auto",
              zIndex: 2,
            }}
          >
            <img
              src={Image2}
              alt="Training Progress"
              style={{
                width: "100%",
                height: isMobile ? "200px" : "650px",
                objectFit: "contain",
              }}
              loading="lazy"
            />
          </Box>
        </Stack>

        {/* Third Section */}
        <Stack
          direction={isMobile ? "column" : "row"}
          gap={isMobile ? 1 : 5}
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "1200px",
            padding: isMobile ? theme.spacing(1) : theme.spacing(4),
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: isMobile ? "100%" : "600px",
              height: "auto",
            }}
          >
            <img
              src={Image3}
              alt="Training Challenge"
              style={{
                width: "100%",
                height: isMobile ? "200px" : "auto",
                objectFit: "cover",
                borderRadius: isMobile ? theme.spacing(1) : 0,
              }}
              loading="lazy"
            />
          </Box>
          <Stack
            gap={isMobile ? 0.5 : 2}
            sx={{ width: isMobile ? "100%" : "600px", zIndex: 2 }}
          >
            <Stack
              direction="row"
              gap={isMobile ? 0.5 : 1}
              sx={{
                justifyContent: "center",
                padding: isMobile ? theme.spacing(1) : theme.spacing(2),
                width: "fit-content",
                alignSelf: "center",
              }}
            >
              <Typography
                variant={isMobile ? "h5" : "h2"}
                color="#475569"
                fontWeight="bold"
                sx={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                  fontStyle: "italic",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                3.
              </Typography>
              <Stack direction="row" gap={isMobile ? 0.5 : 2}>
                <Typography
                  variant={isMobile ? "h5" : "h2"}
                  color="#475569"
                  fontWeight="bold"
                  noWrap
                  sx={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                    fontStyle: "italic",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Kihívás, ami motivál
                </Typography>
              </Stack>
            </Stack>
            <Typography
              variant={isMobile ? "body1" : "h5"}
              sx={{
                maxWidth: "100%",
                padding: isMobile ? theme.spacing(2) : theme.spacing(0, 5, 0, 5),
                fontStyle: "italic",
                fontSize: isMobile ? "0.9rem" : "1.3rem",
                textAlign: isMobile ? "center" : "left",
                fontFamily: "Montserrat, sans-serif",
                color: "#333",
                lineHeight: 1.6,
              }}
            >
              Minden egyes edzés egy új esély arra, hogy kilépj a
              komfortzónádból és túllépj a saját határaidon. A célom az, hogy
              ezeket a kihívásokat úgy éld meg, hogy közben az edzés örömmé
              váljon és motivációt adjon.
            </Typography>
          </Stack>
        </Stack>

        {/* Fourth Section */}
        <Stack
          direction={isMobile ? "column-reverse" : "row"}
          sx={{
            width: "100%",
            backgroundColor: "black",
            marginTop: isMobile ? 2 : 6,
            padding: isMobile ? theme.spacing(2) : theme.spacing(4),
            maxWidth: "1200px",
            justifyContent: "space-between",
            alignItems: isMobile ? "center" : "flex-start",
          }}
        >
          <Stack gap={isMobile ? 1 : 3}>
            <Typography
              variant={isMobile ? "h5" : "h2"} // Smaller heading on mobile
              color="white"
              noWrap
              fontWeight="bold"
              fontFamily="Montserrat"
              sx={{ textAlign: "center" }} // Always centered on mobile
            >
              EDZÉS LEHETŐSÉGEK
            </Typography>
            <Stack
              direction={isMobile ? "column" : "row"}
              gap={isMobile ? 1 : 5}
              sx={{ width: isMobile ? "100%" : "auto" }}
            >
              <Stack width={isMobile ? "100%" : 300} gap={1.5}>
                {["Egy alkalmas", "Bérlet", "Páros edzés", "Edzésterv"].map(
                  (option, index) => (
                    <Typography
                      key={index}
                      color={activeTab === index ? "#FFC056" : "white"}
                      onClick={() => setActiveTab(index)}
                      sx={{
                        cursor: "pointer",
                        textDecoration:
                          activeTab === index ? "underline" : "none",
                        "&:hover": {
                          color: "#FFC056",
                        },
                        fontSize: isMobile ? "1.1rem" : "1.2rem", // Slightly larger on mobile
                        textAlign: "center",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      <a
                        href="#"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {option}
                      </a>
                    </Typography>
                  )
                )}
              </Stack>
              <Stack width={isMobile ? "100%" : 500}>
                <Typography
                  color="white"
                  sx={{
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    textAlign: "center",
                    fontFamily: "Montserrat, sans-serif",
                    lineHeight: 1.6,
                    mt: isMobile ? 1 : 0, // Added margin for mobile
                  }}
                >
                  {activeTab === 0 &&
                    "60 perces személyi edzés, alkalmanként vásárolt jegy"}
                  {activeTab === 1 &&
                    "8 személyi edzést tartalmazó bérlet, mely 2 hónapon belül bármikor felhasználható"}
                  {activeTab === 2 &&
                    "2 főre szóló edzés, ami ideális ha az illető baráttal/barátnővel szeretne edzeni"}
                  {activeTab === 3 &&
                    "Edzésterv: 1 hónapos személyre szabott edzésterv, amely a 75 perces konzultáció + felmérés alapján készül és az illető egyedül végzi"}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Box
            sx={{
              position: "relative",
              width: isMobile ? "100%" : "50%",
              height: "auto",
              zIndex: 1,
              mb: isMobile ? 2 : 0, // Added margin-bottom for mobile
            }}
          >
            <img
              src={Image3}
              alt="Training Options"
              style={{
                width: "100%",
                height: isMobile ? "200px" : "auto",
                objectFit: "cover",
                borderRadius: isMobile ? theme.spacing(1) : 0,
              }}
              loading="lazy"
            />
          </Box>
        </Stack>
      </Stack>

      <Footer />
    </Stack>
  );
};

export default Training;