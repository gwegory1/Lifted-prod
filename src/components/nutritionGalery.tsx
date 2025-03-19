import { Box, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import nutri4 from "../assets/compressed/ROL04162.jpg";
import nutri5 from "../assets/compressed/ROL04397.jpg";
import nutri6 from "../assets/compressed/ROL04366.jpg";

// Motion-enhanced components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionImage = motion.img;

const ImageCard = styled(MotionBox)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  textAlign: "center",
  padding: theme.spacing(2),
  transition: "all 0.3s ease-in-out",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
}));

const ImageWrapper = styled(MotionBox)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: theme.spacing(1.5),
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
}));

const TextWrapper = styled(MotionBox)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5, 2),
  marginTop: theme.spacing(2),
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
}));

const NutritionGallery = () => {
  const theme = useTheme();

  const imageData = [
    {
      src: nutri6,
      alt: "Nutrition Plan Image",
      text: "Újragondolt, egészséges reggelik, amik gyorsak, finomak és táplálóak!",
      maxHeight: { xs: 250, sm: 300 },
      fontSize: { xs: "0.9rem", sm: "1rem" },
    },
    {
      src: nutri4,
      alt: "Nutrition Plan Image",
      text: "Teljes értékű, színes ételek, tele vitaminokkal és ásványi anyagokkal.",
      height: { xs: 250, sm: 300 },
      fontSize: { xs: "0.9rem", sm: "1rem" },
    },
    {
      src: nutri5,
      alt: "Nutrition Plan Image",
      text: "Fehérjében gazdag, egészséges édességek, mindennapi fogyasztásra.",
      height: { xs: 250, sm: 300 },
      fontSize: { xs: "1rem", sm: "1.2rem" },
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const textVariants = {
    rest: { y: 0 },
    hover: { y: -5, transition: { duration: 0.3 } },
  };

  return (
    <Box sx={{ padding: { xs: theme.spacing(1), sm: theme.spacing(3) } }}>
      <MotionTypography
        variant="h4"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        sx={{
          textAlign: "left",
          marginBottom: theme.spacing(4),
          fontWeight: 600,
          color: "#333",
          fontFamily: "Montserrat, sans-serif",
          padding: theme.spacing(3),
        }}
      >
        Mire számíthatsz?
      </MotionTypography>
      
      <MotionBox
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 3, sm: 4 },
          justifyContent: "center",
          alignItems: "stretch",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: { xs: theme.spacing(0), sm: theme.spacing(3) }
        }}
      >
        {imageData.map((item, index) => (
          <ImageCard 
            key={index} 
            variants={itemVariants}
            whileHover={{
              y: -8,
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <ImageWrapper>
              <MotionImage
                variants={imageVariants}
                src={item.src}
                alt={item.alt}
                style={{
                  width: "100%",
                  height: typeof item.maxHeight === 'object' ? 
                    `${item.maxHeight.sm}px` : 
                    typeof item.height === 'object' ? 
                      `${item.height.sm}px` : '300px',
                  objectFit: "contain",
                  borderRadius: `${theme.spacing(1.5)}`,
                }}
              />
            </ImageWrapper>
            <TextWrapper initial="rest" whileHover="hover" variants={textVariants}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  color: "#222",
                  fontFamily: "Montserrat, sans-serif",
                  lineHeight: 1.6,
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                }}
              >
                {item.text}
              </Typography>
            </TextWrapper>
          </ImageCard>
        ))}
      </MotionBox>
    </Box>
  );
};

export default NutritionGallery;