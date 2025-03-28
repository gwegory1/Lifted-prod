import React from "react";
import TWM1 from "../assets/compressed/ROL04494.jpg";
import TWM2 from "../assets/compressed/ROL04660.jpg";
import { Box, Button, Stack, Theme, Typography, useMediaQuery, Fade } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const TrainWithMe: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const navigate = useNavigate();
  return (
    <Fade in={true} timeout={1000}>
      <Stack 
        direction={{ xs: 'column', md: 'row' }} 
        spacing={{ xs: 3, md: 4 }}
        alignItems="center"
        sx={{ 
          bgcolor: '#f8f8f8',
          p: { xs: 3, md: 5 },
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: '100%', sm: '90%', md: '50%' },
            height: { xs: '400px', sm: '500px', md: '600px' }, // Increased heights
            mb: { xs: 2, md: 0 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden', // Ensure content doesn't overflow
          }}
        >
          <Box
            component={motion.img}
            src={TWM2}
            alt="Primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            sx={{
              width: isMobile ? '50%' : '65%',
              height: 'auto',
              maxHeight: '80%', // Restrict height to prevent overflow
              objectFit: 'contain', // Changed to contain to preserve aspect ratio
              position: 'absolute',
              left: isMobile ? '5%' : '10%',
              bottom: isMobile ? '10%' : '15%', // Position from bottom instead of leaving it centered
              zIndex: 1,
              borderRadius: '4px',
            }}
          />
          <Box
            component={motion.img}
            src={TWM1}
            alt="Secondary"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            sx={{
              position: 'absolute',
              width: isMobile ? '50%' : '45%',
              height: 'auto',
              maxHeight: '80%', // Restrict height to prevent overflow
              objectFit: 'contain', // Changed to contain to preserve aspect ratio
              right: isMobile ? '5%' : '10%',
              top: isMobile ? '10%' : '15%', // Adjusted top positioning
              zIndex: 2,
              borderRadius: '4px',
            }}
          />
        </Box>
        {/* Rest of the component remains the same */}
        <Stack
          spacing={2.5}
          sx={{
            width: { xs: '100%', md: '50%' },
            alignItems: 'center',
            gap: 2,
          }}
        >
          {/* Content remains unchanged */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '3rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 'bold',
                color: '#333',
                fontFamily: 'Chloe, sans-serif',
                textAlign: 'center'
              }}
            >
              Tarts Velem!
            </Typography>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.5rem' },
                lineHeight: 1.6,
                color: 'primary',
                px: { xs: 2, md: 5 },
                maxWidth: { xs: '100%', md: '80%' },
                fontStyle: 'italic',
                textAlign: 'center'
              }}
            >
              Építsük együtt a céljaidhoz vezető utat! Személyre szabott tervekkel
              és folyamatos támogatással segítek abban, hogy valóra váltsd, amire
              mindig is vágytál. Kezd el most, és formáld a jövőd!
            </Typography>
          </MotionBox>
          <MotionBox 
            sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >   
            <Button
              variant="contained"
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/training')}
              sx={{
                backgroundColor: "#ffffff",
                color: "#FFC056",
                padding: { xs: "8px 18px", md: "10px 22px" },
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: "bold",
                borderRadius: "4px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#ffffff",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.25)",
                },
              }}
            >
              IDŐPONTFOGLALÁS
            </Button>
          </MotionBox>
        </Stack>
      </Stack>
    </Fade>
  );
};

export default TrainWithMe;
