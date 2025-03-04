import { Box, Stack, Typography } from "@mui/material";
import ctaCoverImage from "../assets/cta-cover.jpg";

const CtaCover = () => {
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
          <Typography variant="h2" sx={{ color: "white", textAlign: "center" }}>
            ÁBRAHÁM VIVIEN
          </Typography>
          <Typography variant="h5" sx={{ color: "white", textAlign: "center" }}>
            Mindenki egyedi, így a megoldásaink is azok.
            <br />
            Én segítek megtalálni a Te utadat!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <button
              style={{
                backgroundColor: "#ffffff",
                color: "#FFC056",
                padding: "12px 24px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              IDŐPONTFOGLALÁS
            </button>
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
            fontWeight: '300',
            fontSize: "2.8rem",
          }}
        >
          "A Jólét Új Szintjei"
        </Typography>
      </Box>
    </Stack>
  );
};

export default CtaCover;
