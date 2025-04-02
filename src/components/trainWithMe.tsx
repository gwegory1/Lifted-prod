import React from "react";
import TWM1 from "../assets/compressed/ROL04494.jpg";
import TWM2 from "../assets/compressed/ROL04660.jpg";
import { Box, Button, Stack, Typography, useMediaQuery, Fade } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const ImageSection: React.FC<{ isMobile: boolean; position: "left" | "right" }> = ({
  isMobile,
  position,
}) => (
  <Box
    sx={{
      position: "relative",
      width: isMobile ? "50%" : { xs: "40%", md: "30%" },
      height: isMobile ? "200px" : { xs: "300px", md: "450px" },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    }}
  >
    <Box
      component={motion.img}
      src={position === "left" ? TWM1 : TWM2}
      alt={position === "left" ? "Left Image" : "Right Image"}
      initial={{ opacity: 0, x: position === "left" ? -30 : 30, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      whileHover={{ scale: 1.04, boxShadow: "0 6px 12px rgba(0,0,0,0.25)" }}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        borderRadius: "8px",
        transition: "box-shadow 0.3s ease",
      }}
    />
  </Box>
);

const TextSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Stack
      spacing={2.5}
      sx={{
        width: { xs: "100%", md: "40%" },
        alignItems: "center",
        gap: 2,
      }}
    >
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
            fontWeight: "bold",
            color: "#2A2A2A",
            fontFamily: "Chloe, sans-serif",
            textAlign: "center",
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60px",
              height: "2px",
              backgroundColor: "#FFC056",
            },
          }}
        >
          Tarts Velem!
        </Typography>
      </MotionBox>
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
            lineHeight: 1.6,
            color: "#4A4A4A",
            px: { xs: 2, md: 4 },
            maxWidth: "100%",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Építsük együtt a céljaidhoz vezető utat! Személyre szabott tervekkel
          és folyamatos támogatással segítek abban, hogy valóra váltsd, amire
          mindig is vágytál. Kezdd el most, és formáld a jövőd!
        </Typography>
      </MotionBox>
      <MotionBox
        sx={{ display: "flex", justifyContent: "center", padding: 2 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      >
        <Button
          variant="contained"
          component={motion.button}
          whileHover={{ scale: 1.08, backgroundColor: "#FFF5E6" }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate("/training")}
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#FFC056",
            padding: { xs: "10px 20px", md: "12px 24px" },
            fontSize: { xs: "1rem", md: "1.1rem" },
            fontWeight: "600",
            borderRadius: "6px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#FFF5E6",
              boxShadow: "0 6px 12px rgba(0,0,0,0.25)",
            },
          }}
        >
          Időpontfoglalás
        </Button>
      </MotionBox>
    </Stack>
  );
};

const TrainWithMe: React.FC = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Fade in={true} timeout={1200}>
      <Stack
        sx={{
          
          p: { xs: 3, md: 5 },
          overflow: "hidden",
          maxWidth: "1800px",
          width: "100%", // Ensure it takes full width
          alignItems: "center",
          justifyContent: "center", // Center vertically
          margin: "0 auto", // Center horizontally
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            height: "1px",
            backgroundColor: "rgba(0,0,0,0.1)",
          },
        }}
      >
        {isMobile ? (
          <>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "center",
                mb: 3,
              }}
            >
              <ImageSection isMobile={isMobile} position="left" />
              <ImageSection isMobile={isMobile} position="right" />
            </Stack>
            <TextSection />
          </>
        ) : (
          <Stack
            direction="row"
            spacing={{ xs: 2, md: 4 }}
            alignItems="center"
            justifyContent="center"
          >
            <ImageSection isMobile={isMobile} position="left" />
            <TextSection />
            <ImageSection isMobile={isMobile} position="right" />
          </Stack>
        )}
      </Stack>
    </Fade>
  );
};

export default TrainWithMe;