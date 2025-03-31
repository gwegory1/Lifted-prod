import {
  Container,
  Typography,
  Box,
  GlobalStyles,
  useMediaQuery,
} from "@mui/material";
import Footer from "../components/footer";
import IMG_5296 from "../assets/compressed/IMG_5296.jpg";
import IMG_5298 from "../assets/compressed/IMG_5298.jpg";
import ROL04708 from "../assets/compressed/ROL04708.jpg";
import ROL04775 from "../assets/compressed/ROL04775.jpg";
import ROL4432 from "../assets/compressed/ROL04708.jpg";
import ROL04266 from "../assets/compressed/ROL04266.jpg";

import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import theme from "../theme/theme";
import ScrollToTopButton from "../components/ScrollToTopButton";

const AboutMe = () => {
  const images = [IMG_5296, IMG_5298, ROL04775, ROL4432, ROL04708, ROL04266];
  const isMoblie = useMediaQuery(theme.breakpoints.down("md"));

  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    //console.log("Scroll position:", scrollTop); // Debug log
    setIsVisible(scrollTop > 50); // Show button after scrolling 50px
  };

  const scrollToTop = () => {
    //console.log("Scroll to top triggered"); // Debug log
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        m: 0,
        p: 0,
      }}
    >
      <Navbar />
      <ScrollToTopButton isVisible={isVisible} exec={scrollToTop} />
      <Container
        maxWidth={false}
        sx={{
          flex: 1,
          p: { xs: 2, md: 4 },
          maxWidth: 1500,
          mx: "auto",
          
        }}
      >
        {/* Header Section */}
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                textAlign: "center",
                fontWeight: "900",
                color: "#4A2C2A",
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                mt: { xs: 4, md: 6 },
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Rólam
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                color: "#BF360C",
                fontSize: { xs: "1rem", md: "1.5rem" },
                mt: 1,
                fontStyle: "italic",
              }}
            >
              Egy út az egészség és egyensúly felé
            </Typography>
          </motion.div>
        </Box>

        {/* Content Section with Asymmetric Layout */}
        <Box
          sx={{
            position: "relative",
            my: 6,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {/* First Text Block with Floating Image */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
              gap: 4,
              alignItems: "center",
              position: "relative",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="animate-on-scroll"
            >
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: "#5D4037",
                  fontSize: { xs: "1.2rem", md: "1.25rem" },
                  background: "rgba(255, 255, 255, 0.9)",
                  p: 3,
                  textAlign: "left",
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Az egészség nem gyors megoldásokról vagy sablonos programokról
                szól—hanem a számodra megfelelő életmód kialakításáról. Sok
                embert láttam küzdeni a valóságtól elrugaszkodott fitnesz
                elvárásokkal és fenntarthatatlan módszerekkel. Ezért a
                holisztikus filozófiám három alappilléren alapul: a mozgáson, a
                tápanyagokban gazdag ételeken és a mentális jólléten. A
                folyamatosan változó divatdiéták és túlbonyolított edzések
                helyett az alapvető, funkcionális gyakorlatokra összpontosítok,
                amelyek erőt és állóképességet építenek, a teljes értékű
                ételekre, amelyek táplálnak és energiát adnak, valamint egy
                olyan gondolkodásmódra, amely elősegíti a hosszútávú sikert.
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}

            >
              <Box
                sx={{
                  zIndex: 1,
                }}
              >
                <Box
                  component="img"
                  src={images[0]}
                  alt="Featured"
                  sx={{
                    width: { xs: "100%", md: 300 },
                    height: "auto",
                    borderRadius: 3,
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </motion.div>
          </Box>

          {/* Second Text Block with Divider */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: 0 },
              alignItems: "start",
              justifyContent: "start",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="animate-on-scroll"
              style={{
                display: "flex",
                flexDirection: isMoblie ? "column" : "row-reverse",
                justifyContent: "start",
                gap: isMoblie ? "1.5rem" : "2rem",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box sx={{ flex: isMoblie ? "1" : "5" }}>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    color: "#5D4037",
                    fontSize: isMoblie ? "1.2rem" : "1.25rem",
                    background: "rgba(255, 255, 255, 0.9)",
                    textAlign: "left",
                    borderRadius: 2,
                    px: 2,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  A sport miatt sok helyre volt alkalmam utazni, végül
                  sportösztöndíjjal az Egyesült Államokba mentem, ahol Média és
                  Stratégiai Kommunikáció szakon szereztem alap-, és
                  mesterdiplomát, miközben mélyítettem tudásomat az edzés, és a
                  teljesítmény területén. Közben a Fitness Akadémián elvégeztem
                  a fitness instruktori képzést, majd megszereztem a személyi
                  edzői és táplálkozási tanácsadói képesítéseket is. A hátterem
                  azonban nem csak a képesítésekről szól - hanem a több mint egy
                  évtizedes versenysportban szerzett tapasztalatomról,
                  nehézségekről, amelyek megtanítottak újraépíteni és
                  megerősíteni a testemet és az elmémet, valamint az
                  elkötelezettségről, hogy másoknak segítsek megtalálni az
                  egyensúlyt a saját útjukon.
                </Typography>
              </Box>

              <Box sx={{ flex: isMoblie ? "1" : "2" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Box
                    component="img"
                    src={images[1]}
                    alt="Sport journey"
                    sx={{
                      width: "100%",
                      maxWidth: isMoblie ? "100%" : "350px",
                      height: "auto",
                      borderRadius: 3,
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </motion.div>
              </Box>
            </motion.div>
            <Box
              sx={{
                width: "100%",
                height: "2px",
                background: "#BF360C",
                opacity: 0.3,
                my: 2,
                display: { xs: "block", md: "none" },
              }}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              color: "#5D4037",
              fontSize: { xs: "1.2rem", md: "1.25rem" },
              background: "rgba(255, 255, 255, 0.9)",
              textAlign: "left",
              p: 3,
              borderRadius: 2,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            }}
          >
            1:1 személyre szabott edzés- és táplálkozási útmutatókat tervezek,
            mert a valódi fejlődés egy olyan tervből ered, amely neked készült,
            nem pedig a tömegek számára. Akár az általános egészségeden
            szeretnél javítani, akár erősebbnek és magabiztosabbnak érezni
            magad, én itt vagyok, hogy vezesselek, eloszlassam a tévhiteket, és
            segítsek kialakítani azokat a szokásokat, amelyek egy életen át
            elkísérnek.
          </Typography>
        </Box>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Box sx={{ textAlign: "center", my: 6, position: "relative" }}>
            <Typography
              variant="h4"
              sx={{
                color: "#BF360C",
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "2rem" },
                mb: 2,
                textShadow: "1px 1px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              Építsünk együtt egy egészségesebb életet!
            </Typography>
            <Box
              sx={{
                position: "absolute",
                top: "-20px",
                left: "50%",
                width: "100px",
                height: "2px",
                background: "#BF360C",
                transform: "translateX(-50%)",
                opacity: 0.5,
              }}
            />
          </Box>
        </motion.div>

        {/* Masonry-Style Image Gallery */}
        <Box
          sx={{
            position: "relative",
            py: 6,
            background: "rgba(245, 245, 245, 0.9)",
            borderRadius: 3,
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            sx={{
              columnCount: { xs: 1, sm: 2, md: 3 },
              columnGap: 2,
              mx: "auto",
              maxWidth: "100%",
            }}
          >
            {images.slice(4).map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                style={{ breakInside: "avoid", marginBottom: "1rem" }}
              >
                <Box
                  component="img"
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: "0 6px 14px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    maxHeight: index % 2 === 0 ? 350 : 250, // Varying heights
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>

      <Box sx={{ p: 0 }}>
        <Footer />
      </Box>

      {/* Updated Global Styles */}
      <GlobalStyles
        styles={`
                .animate-on-scroll {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.8s ease, transform 0.8s ease;
                }
                .animate-on-scroll.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}
      />
    </Box>
  );
};

export default AboutMe;
