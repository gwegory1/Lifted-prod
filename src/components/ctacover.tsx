import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import ctaCoverImage from "../assets/cta-cover.jpg";
import theme from "../theme/theme";

const CtaCover = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <Stack>
      <Box
        sx={{
          height: "50vh", // Adjust the height as needed
          width: "100%", // Adjust the width as needed
          backgroundImage: `url(${ctaCoverImage})`,
          backgroundSize: "cover", // You can use 'contain', 'auto', etc.
          backgroundPosition: "left", // Try 'top', 'bottom', 'left', 'right'
          backgroundRepeat: "no-repeat",
          padding: 0,
          margin: 0,
        }}
      >
        <Box sx={{ padding: "10vh 20px 0", alignItems: "center" }}>
            <Typography variant="h2" sx={{ color: "white", textAlign: "center", fontFamily: "'Chloe', sans-serif", fontSize: "6rem", lineHeight: "1" }}>
            ÁBRAHÁM <br/> VIVIEN
            </Typography>
            
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
              <Typography variant="h5" sx={{ color: "white", textAlign: "center", fontFamily: "'Montserrat', sans-serif", maxWidth: "600px", fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
              Mindenki egyedi, így a megoldásaink is azok.
              Én segítek megtalálni a Te utadat!
              </Typography>
              </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              variant="contained"
              sx={{
              backgroundColor: "#ffffff",
              color: "#FFC056",
              padding: "10px 22px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              borderRadius: "4px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#ffffff",
                transform: "scale(1.05)",
              },
              }}
            >
              IDŐPONTFOGLALÁS
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "10vh",
          backgroundColor: "#FFF5DA",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#333",
            textAlign: "center",
            fontStyle: "italic",
            fontWeight: '100',
            fontSize: { xs: "1.8rem", sm: "2.8rem" },
            fontFamily: "'Montserrat', sans-serif"
          }}
        >
          "A Jólét Új Szintjei"
        </Typography>
      </Box>
    </Stack>
  );
};

export default CtaCover;
