import { Box, Stack, Typography } from "@mui/material";
import ctaCoverImage from "../assets/cta-cover.jpg";
import ctaCoverImage2 from "../assets/cta-cover-phone.jpg";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const CtaCover = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  return (
    <Stack>
      <Box
        sx={{
          height: { xs: "60vh", md: "70vh" },
          width: "100%",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.35)), url(${
            isMobile ? ctaCoverImage2 : ctaCoverImage
          })`,
          backgroundSize: "cover",
          backgroundPosition: { xs: "center", md: "left" },
          backgroundRepeat: "no-repeat",
          padding: 0,
          margin: 0,
          overflow: "hidden",
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            padding: { xs: "8vh 16px 0", md: "12vh 20px 0" },
            alignItems: "center",
          }}
        >
          <MotionTypography
            variant="h2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            sx={{
              color: "white",
              textAlign: "center",
              fontFamily: "'Chloe', sans-serif",
              fontSize: { xs: "4rem", sm: "5rem", md: "10rem" },
              lineHeight: "1",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              paddingTop: isMobile ? 22 : "0",
            }}
          >
            ÁBRAHÁM <br /> VIVIEN
          </MotionTypography>

          <MotionBox
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "white",
                textAlign: "center",
                fontFamily: "'Montserrat', sans-serif",
                wordWrap: "nowrap",
                maxWidth: "700px",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                mt: { xs: 2, md: 3 },
                textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
              }}
            >
              {t("ctacoverText")}
            </Typography>
          </MotionBox>
        </MotionBox>
      </Box>

      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        sx={{
          height: { xs: "8vh", md: "10vh" },
          backgroundColor: "#FFF5DA",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MotionTypography
          variant="h6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          sx={{
            color: "#333",
            textAlign: "center",
            fontStyle: "italic",
            fontWeight: "100",
            fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.8rem" },
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          {t("newHeightsText")}
        </MotionTypography>
      </MotionBox>
    </Stack>
  );
};

export default CtaCover;
