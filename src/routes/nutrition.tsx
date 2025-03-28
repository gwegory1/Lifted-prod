import { Box, Container, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import Navbar from "../components/navbar";
import NutritionPlans from "../components/nutritionPlans";
import nutri2 from "../assets/compressed/ROL04266.jpg";
import Footer from "../components/footer";
import NutritionGallery from "../components/nutritionGalery";

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

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        color: "#333333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Navbar />
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
            „Nincs tiltott táplálék, csak kerülendő mennyiség"
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
                A táplálkozás{" "}
                <span style={{ color: "#ff9800" }}>harmóniája</span>
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
                Tudatos étkezés a fenntartható egészségért
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.3rem", sm: "1.3rem" },
                  textAlign: { xs: "justify", md: "left" },
                  mt: 2,
                }}
              >
                Táplálkozási tanácsadásom nem gyors diétákra vagy tiltólistás
                ételekre épít, hanem olyan alapelvekre, amelyek segítenek elérni
                a céljaidat és hosszú távon is hozzájárul az egészségedhez. A
                táplálkozásnak változatosnak és színesnek kell lennie, de nem
                csupán arról szól, hogy mit eszel, hanem arról is, hogyan éled
                meg az étkezéseidet. Mivel mindenki más, az étkezéseket
                személyre szabottan alakítom, figyelembe véve az egyedi
                igényeket. Nem kell lemondanod a kedvenc ételeidről vagy
                kiiktatnod ételcsoportokat, azonban fontos megtanulnod, hogyan
                illesztheted be őket a számodra ideális étkezésbe. Célom, hogy
                megértsd a tápanyagok szerepét, és tudatos döntésekkel alakíts
                ki egészséges szokásokat, amelyek beilleszthetők a mindennapi
                életedbe.
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

            {/* New "Who Can I Help?" Section */}
            <Box
            sx={{
              mt: 4,
              mb: 6, // Adds spacing before NutritionPlans
              textAlign: { xs: "center", md: "left" },
              maxWidth: "800px",
              mx: "auto",
            }}
            >
            <Typography
              variant="h5"
              sx={{
              fontWeight: "bold",
              fontFamily: "Montserrat, sans-serif",
              color: "#ff9800", // Matches your accent color
              mb: 2,
              textAlign: { xs: "center", md: "left" },
              }}
            >
              Kinek tudok segíteni?
            </Typography>
            <Typography
              variant="body1"
              sx={{
              fontSize: { xs: "1.2rem", sm: "1.3rem" },
              color: "#333333",
              lineHeight: 1.6,
              textAlign: { xs: "center", md: "left" },
              }}
            >
              Főként egészséges emberek számára tudok segítséget nyújtani,
              akiknek nincsenek komolyabb ételallergiáik vagy hormonális
              problémáik. Glutén- és laktózérzékenység azonban nem jelent
              problémát, valamint figyelembe veszem a vegetáriánus és vegán
              étkezési szokásokat az étrendek kialakításakor, ha ilyen irányú
              preferencia felmerül.
            </Typography>
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