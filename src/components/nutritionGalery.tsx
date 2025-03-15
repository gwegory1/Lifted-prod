import { Box, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import nutri4 from "../assets/nutri4.jpg"; // Assuming correct paths
import nutri5 from "../assets/nutri5.jpg";
import nutri6 from "../assets/nutri6.jpg";

const ImageCard = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  textAlign: "center",
  padding: theme.spacing(2),
  transition: "all 0.3s ease-in-out",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: theme.spacing(1.5),
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  "&:hover img": {
    transform: "scale(1.05)",
  },
}));

const TextWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5, 2),
  marginTop: theme.spacing(2),
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)", // Subtle shadow for depth
  transition: "all 0.3s ease-in-out",
}));

const NutritionGallery = () => {
  const theme = useTheme();


  const imageData = [
    {
      src: nutri6,
      alt: "Nutrition Plan Image",
      text: "Újragondolt, egészséges reggelik, amik gyorsak, finomak és táplálóak!",
      maxHeight: { xs: 200, sm: 300 },
      fontSize: { xs: "0.9rem", sm: "1rem" }, // Increased for better visibility
    },
    {
      src: nutri4,
      alt: "Nutrition Plan Image",
      text: "Teljes értékű, színes ételek, tele vitaminokkal és ásványi anyagokkal.",
      height: { xs: 200, sm: 300 },
      fontSize: { xs: "0.9rem", sm: "1rem" }, // Increased for better visibility
    },
    {
      src: nutri5,
      alt: "Nutrition Plan Image",
      text: "Fehérjében gazdag, egészséges édességek, mindennapi fogyasztásra.",
      height: { xs: 200, sm: 300 },
      fontSize: { xs: "1rem", sm: "1.2rem" }, // Slightly increased
    },
  ];

  return (
    <Box sx={{ padding: theme.spacing(3) }}>
    <Typography
      variant="h4"
      sx={{
        textAlign: "left",
        marginBottom: theme.spacing(4),
        fontWeight: 600,
        color: "#333",
        fontFamily: "Montserrat, sans-serif",
        padding: theme.spacing(3), // Increased padding
      }}
    >
      Mire számíthatsz?
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 3, sm: 4 }, // Increased gap for better separation
        justifyContent: "center",
        alignItems: "stretch",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: theme.spacing(3), // Increased padding
      }}
    >
      {imageData.map((item, index) => (
        <ImageCard key={index}>
          <ImageWrapper>
            <Box
              component="img"
              src={item.src}
              alt={item.alt}
              sx={{
                width: "100%",
                height: item.maxHeight || item.height,
                objectFit: "contain",
                transition: "transform 0.3s ease-in-out",
                borderRadius: theme.spacing(1.5),
              }}
            />
          </ImageWrapper>
          <TextWrapper>
            <Typography
              variant="body2"
              sx={{
                fontSize: '1.2rem',
                fontWeight: 500, // Increased weight for better emphasis
                color: "#222", // Darker color for higher contrast
                fontFamily: "Montserrat, sans-serif",
                lineHeight: 1.6,
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.05)", // Subtle shadow for readability
              }}
            >
              {item.text}
            </Typography>
          </TextWrapper>
        </ImageCard>
      ))}
    </Box>
  </Box>
  );
};

export default NutritionGallery;