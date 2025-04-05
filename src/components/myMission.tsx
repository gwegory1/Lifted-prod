import React from "react";
import {
  CardMedia,
  Typography,
  Button,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import myMissionImage from "../assets/compressed/ROL04866.jpg";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MyMission: React.FC = () => {
  const navigate = useNavigate();

  const onReadMore = () => {
    navigate("/about");
  };

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
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
            sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
            fontWeight={"1000"}
          >
            {t("myMission")}
          </Typography>
          <Stack justifyContent={"space-between"} sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
                mb: 2,
              }}
            >
              {t("myMissionText")}
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
                    fontWeight: "800",
                    fontSize: { xs: "1rem", sm: "1.6rem" },
                  }}
                  endIcon={<AddIcon />}
                >
                  {t("ReadMore")}
                </Button>
              </Stack>
              <Divider sx={{ borderWidth: "1px", borderColor: "black" }} />
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          order: { xs: 1, md: 2 },
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          alignItems: "center",
          width: "100%",
          height: "70vh",
          overflow: "hidden",
          minWidth: "500px",
        }}
      >
        <CardMedia
          component="img"
          sx={{
        width: "150%", // Increase width to make the picture wider
        height: "100%",
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
