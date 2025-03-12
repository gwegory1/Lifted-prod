import { Box, Container, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import Navbar from "../components/navbar";
import NutritionPlans from "../components/nutritionPlans";
import nutri2 from "../assets/nutri2.jpg";
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
}));

const LandingPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        color: "#333333",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
        {/* Flower Image 
    <Box
        component="img"
        src={flower}
        alt="Flower"
        sx={{
            position: "absolute",
            top: { xs: "10%", sm: "15%" },
            left: { xs: "0%", sm: "0%" },
            width: { xs: "200px", sm: "280px" },
            height: "auto",
            opacity: 0.5,
            zIndex: 0,
            transform: "rotate(90deg)",
        }}
    />
    */}
    <Navbar />
      <HeroSection>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography
            align="center"
            gutterBottom
            sx={{ fontFamily: 'OoohBaby', fontSize: { xs: "2rem", sm: "2.3rem" } }}
          >
            „Nincs tiltott táplálék, csak kerülendő mennyiség”
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "flex-start",
              gap: 3,
              mt: 2,
            }}
          >
            <Box sx={{ flex: 2, minWidth: 0, p: 1 }}>
              <Typography
                variant="h3"
                align="left"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "2rem", sm: "3rem" },
                }}
              >
                A táplálkozás{" "}
                <span style={{ color: "#ff9800" }}>harmóniája</span>
              </Typography>
              <Typography
                variant="h6"
                align="left"
                gutterBottom
                sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
              >
                Tudatos étkezés a fenntartható egészségért
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" } }}
                textAlign={"left"}
                marginTop={2}
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
                flex: 1,
                minWidth: 0,
                p: 1,
                width: { xs: "40%", sm: "100%" },
              }}
            >
              <img
                src={nutri2}
                alt="Nutrition"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: theme.spacing(1),
                }}
              />
            </Box>
          </Box>
          <NutritionPlans />
          {/* Bottom Row with Three Images */}
          <NutritionGallery />
        </Container>
      </HeroSection>
      <Footer />
    </Box>
  );
};

export default LandingPage;
