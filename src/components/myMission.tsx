import React from "react";
import {
  CardMedia,
  Typography,
  Button,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import myMissionImage from "../assets/aboutme.jpg";
import AddIcon from "@mui/icons-material/Add";

const MyMission: React.FC = () => {
  const onReadMore = () => {
    console.log("Read more clicked!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "background.paper",
      }}
    >
      <Box
        sx={{
          order: { xs: 2, md: 1 },
          p: { xs: 2, sm: 6 },
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            p: { xs: 2, sm: 3 },
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontSize: { xs: "1.25rem", sm: "3rem" } }}
            fontWeight={"1000"}
          >
            RÓLAM
          </Typography>
          <Stack justifyContent={"space-between"} sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{
                fontSize: { xs: "0.875rem", sm: "1.5rem" },
                mb: 2,
              }}
            >
              Személyre szabott edzésekkel és táplálkozási tanácsokkal segítek
              abban, hogy a legjobb formádat hozd ki magadból, és új szintre
              emeld a jólétedet. Több mint egy évtizedes versenysport hátterem,
              külföldi tapasztalataim, valamint edzői és táplálkozási
              képesítéseim alapján olyan holisztikus megközelítést kínálok,
              amely figyelembe veszi az egyedi céljaidat, igényeidet, és
              hozzásegít egy egészségesebb élethez. A változás nem csak
              lehetséges, hanem fenntartható is. Nem kell tökéletesnek lenned,
              de folyamatosan jobbá válhatsz. Kezdd el most!
            </Typography>
            <Stack gap={2}>
              <Divider sx={{ borderWidth: "1px", borderColor: "black" }} />
                <Stack direction="row" spacing={2} alignItems={"center"}>
                <Button
                  onClick={onReadMore}
                  sx={{
                  width: { xs: "100%", sm: "auto" },
                  mt: { xs: 1, sm: 0 },
                  color: "black",
                  fontSize: { xs: "0.875rem", sm: "1.5rem" },
                  }}
                  endIcon={<AddIcon />}
                >
                  Tovább
                </Button>
                </Stack>
              <Divider sx={{ borderWidth: "1px", borderColor: "black" }} />
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          flex: { md: "0 0 41.67%" },
          order: { xs: 1, md: 2 },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: { xs: 200, sm: 250, md: "100%" },
            objectFit: "cover",
          }}
          image={myMissionImage}
          alt={"Kép"}
        />
      </Box>
    </Box>
  );
};

export default MyMission;
