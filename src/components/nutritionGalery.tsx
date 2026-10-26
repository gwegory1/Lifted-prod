import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import nutri4 from "../assets/img/ROL04162.webp";
import nutri5 from "../assets/img/ROL04397.webp";
import nutri6 from "../assets/img/ROL04366.webp";
import Reveal from "./Reveal";
import { tokens } from "../theme/theme";

const NutritionGallery = () => {
  const { t } = useTranslation();

  const items = [
    { src: nutri6, text: t("Nutrition.WhatToExpect.text1") },
    { src: nutri4, text: t("Nutrition.WhatToExpect.text2") },
    { src: nutri5, text: t("Nutrition.WhatToExpect.text3") },
  ];

  return (
    <Box component="section" aria-labelledby="what-to-expect" sx={{ textAlign: "left" }}>
      <Reveal>
        <Typography id="what-to-expect" component="h2" sx={{ fontWeight: 700, fontSize: { xs: "1.6rem", sm: "2rem" }, color: tokens.ink, mb: { xs: 2.5, md: 3 } }}>
          {t("Nutrition.WhatToExpect.title")}
        </Typography>
      </Reveal>

      <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0, 1fr))" }, gap: { xs: 4, sm: 3, md: 4 } }}>
        {items.map((item, i) => (
          <Box component="li" key={item.src}>
            <Reveal variant="clip" delay={i * 0.12}>
              <Box
                component="img"
                src={item.src}
                alt=""
                loading="lazy"
                decoding="async"
                sx={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: 2 }}
              />
            </Reveal>
            <Reveal delay={i * 0.12 + 0.2}>
              <Typography sx={{ mt: 2, fontSize: { xs: "1.05rem", md: "1.15rem" }, fontWeight: 500, lineHeight: 1.55, color: tokens.ink }}>
                {item.text}
              </Typography>
            </Reveal>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NutritionGallery;
