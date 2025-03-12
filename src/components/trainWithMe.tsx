import React from "react";
import TWM1 from "../assets/twm1.jpg";
import TWM2 from "../assets/twm2.jpg";
import { Box, Button, Stack, Theme, Typography, useMediaQuery } from "@mui/material";

const TrainWithMe: React.FC = ({}) => {
const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <Stack 
      direction={{ xs: 'column', md: 'row' }} 
      spacing={{ xs: 1, md: 2 }}
      alignItems="center"
      sx={{ 
        bgcolor: '#f8f8f8',
        p: { xs: 0, md: 0 }
      }}
    >
    <Box
      sx={{
        position: 'relative',
        width: { xs: '90%', md: '50%' },
        mb: { xs: 1, md: 0 },
        display: 'flex',
        justifyContent: isMobile ? 'center' : 'flex-start',
        gap: isMobile ? 2 : 0
      }}
    >
      <Box
        component="img"
        src={TWM2}
        alt="Primary"
        sx={{
        width: isMobile ? '45%' : '60%',
        height: 'auto',
        objectFit: 'cover',
        position: isMobile ? 'static' : 'relative',
        zIndex: 1
        }}
      />
      <Box
        component="img"
        src={TWM1}
        alt="Secondary"
        sx={{
        position: isMobile ? 'static' : 'absolute',
        width: isMobile ? '45%' : '40%',
        height: 'auto',
        objectFit: 'cover',
        right: isMobile ? 'auto' : '10%',
        bottom: isMobile ? 'auto' : '10%',
        zIndex: 2
        }}
      />
    </Box>

      <Stack
        spacing={1.5}
        sx={{
          width: { xs: '90%', md: '50%' }
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', md: '3.5rem' },
            fontWeight: 'bold',
            color: '#333',
            fontFamily: 'Chloe, sans-serif',
            textAlign: 'center'
          }}
        >
          Tarts Velem!
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.3rem' },
            lineHeight: 1.6,
            color: 'primary',
            px: { xs: 0, md: 5 }
          }}
        >
          Építsük együtt a céljaidhoz vezető utat! Személyre szabott tervekkel
          és folyamatos támogatással segítek abban, hogy valóra váltsd, amire
          mindig is vágytál. Kezd el most, és formáld a jövőd!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>   
        <Button
          sx={{
            py: 0.8,
            px: 2,
            bgcolor: 'white',
            color: 'black',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            alignSelf: 'center',
            border: '2px solid black',
            borderRadius: '15px',
            fontFamily: 'Montserrat, sans-serif',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
              bgcolor: 'white'
            }
          }}
        >
          Tarts Velem!
        </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default TrainWithMe;
