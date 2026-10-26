import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { East } from "@mui/icons-material";
import Reveal from "./Reveal";
import { ease, tokens } from "../theme/theme";

const easeCss = `cubic-bezier(${ease.join(", ")})`;

interface ServiceCardProps {
  services: {
    title: string;
    backgroundImage: string;
    link: string;
  }[];
}

const ServicesCard = ({ services }: ServiceCardProps) => {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="services"
      aria-labelledby="services-title"
      sx={{ backgroundColor: tokens.blush, py: { xs: 5, md: 7 }, px: 2, overflow: "hidden", scrollMarginTop: 64 }}
    >
      <Box sx={{ position: "relative", mb: { xs: 3, md: 4 } }}>
        {/* slow-moving brand line behind the heading; decorative only */}
        <Typography
          aria-hidden
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: "max-content",
            fontSize: { xs: "3.5rem", md: "6rem" },
            fontWeight: 900,
            lineHeight: 1,
            color: tokens.ink,
            opacity: 0.04,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            userSelect: "none",
            animation: "moveText 100s linear infinite",
            "@keyframes moveText": {
              "0%": { transform: "translate(0, -50%)" },
              "100%": { transform: "translate(-50%, -50%)" },
            },
          }}
        >
          {t("newheights")}
        </Typography>
        <Typography
          id="services-title"
          component="h2"
          sx={{
            position: "relative",
            textAlign: "center",
            fontWeight: 700,
            fontSize: { xs: "1.8rem", sm: "2.4rem" },
            color: tokens.ink,
          }}
        >
          {t("Services")}
        </Typography>
      </Box>

      <Box
        component="ul"
        sx={{
          listStyle: "none",
          m: "0 auto",
          p: 0,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 340px))" },
          justifyContent: "center",
          gap: { xs: 2.5, sm: 4 },
          maxWidth: 760,
        }}
      >
        {services.map((service, i) => (
          <li key={service.link}>
            <Reveal delay={i * 0.12}>
              <Box
                component={Link}
                to={service.link}
                sx={{
                  position: "relative",
                  display: "block",
                  aspectRatio: { xs: "4 / 3", sm: "4 / 5" },
                  borderRadius: 3,
                  overflow: "hidden",
                  color: "#fff",
                  textDecoration: "none",
                  boxShadow: "0 16px 40px -20px rgba(42, 42, 42, 0.5)",
                  transition: `transform 400ms ${easeCss}, box-shadow 400ms ${easeCss}`,
                  "& img": { transition: `transform 900ms ${easeCss}` },
                  "& .arrow": { transition: `background-color 250ms, color 250ms, transform 250ms ${easeCss}` },
                  "&:hover": { transform: "translateY(-6px)", boxShadow: "0 28px 56px -24px rgba(42, 42, 42, 0.55)" },
                  "&:hover img": { transform: "scale(1.06)" },
                  "&:hover .arrow": { backgroundColor: tokens.gold, color: tokens.night, transform: "translateX(2px)" },
                }}
              >
                <Box
                  component="img"
                  src={service.backgroundImage}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    gap: 2,
                    p: { xs: 2.5, sm: 3 },
                    background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.65))",
                  }}
                >
                  <Typography component="h3" sx={{ fontSize: { xs: "1.6rem", sm: "1.9rem" }, fontWeight: 600, lineHeight: 1.15 }}>
                    {service.title}
                  </Typography>
                  <Box
                    className="arrow"
                    aria-hidden
                    sx={{
                      display: "grid",
                      placeItems: "center",
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      borderRadius: "50%",
                      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.6)",
                    }}
                  >
                    <East sx={{ fontSize: "1.4rem" }} />
                  </Box>
                </Box>
              </Box>
            </Reveal>
          </li>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesCard;
