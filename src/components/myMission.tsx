import { Typography, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import myMissionImage from "../assets/img/ROL04866.webp";
import Reveal from "./Reveal";
import { tokens } from "../theme/theme";

const MyMission = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      aria-labelledby="mission-title"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.15fr) minmax(0, 1fr)" },
        alignItems: "stretch",
        backgroundColor: "#fff",
      }}
    >
      <Reveal style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Box sx={{ px: { xs: 3, sm: 6, lg: 10 }, py: { xs: 5, md: 7 } }}>
          <Typography
            id="mission-title"
            component="h2"
            sx={{ fontSize: { xs: "1.9rem", sm: "2.4rem" }, fontWeight: 800, color: tokens.ink, mb: 2.5 }}
          >
            {t("myMission")}
          </Typography>
          <Typography sx={{ fontSize: { xs: "1.05rem", sm: "1.15rem" }, lineHeight: 1.65, color: tokens.ink, maxWidth: "60ch" }}>
            {t("myMissionText")}
          </Typography>
          <Box sx={{ mt: 3, borderTop: `1px solid ${tokens.ink}`, borderBottom: `1px solid ${tokens.ink}`, maxWidth: "60ch" }}>
            <Button
              component={Link}
              to="/about"
              endIcon={<AddIcon />}
              sx={{
                minHeight: 56,
                px: 0,
                color: tokens.ink,
                fontWeight: 800,
                fontSize: { xs: "1rem", sm: "1.15rem" },
                "&:hover": { backgroundColor: "transparent", color: tokens.goldInk },
                "& .MuiButton-endIcon": { transition: "transform 250ms cubic-bezier(0.22, 1, 0.36, 1)" },
                "&:hover .MuiButton-endIcon": { transform: "rotate(90deg)" },
              }}
            >
              {t("ReadMore")}
            </Button>
          </Box>
        </Box>
      </Reveal>
      <Reveal variant="clip">
        <Box
          component="img"
          src={myMissionImage}
          alt=""
          loading="lazy"
          decoding="async"
          sx={{ display: "block", width: "100%", height: { xs: "auto", md: "100%" }, minHeight: { md: "52vh" }, maxHeight: { md: 560 }, aspectRatio: { xs: "4 / 3", md: "auto" }, objectFit: "cover", objectPosition: "center 20%" }}
        />
      </Reveal>
    </Box>
  );
};

export default MyMission;
