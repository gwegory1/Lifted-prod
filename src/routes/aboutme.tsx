import { Container, Typography, Box } from "@mui/material";
import Footer from "../components/footer";
import IMG_5296 from "../assets/IMG_5296.jpg";
import IMG_5298 from "../assets/IMG_5298.jpg";
import ROL04432 from "../assets/ROL04432.jpg";
import ROL4708 from "../assets/ROL04708.jpg";
import ROL4775 from "../assets/ROL04775.jpg";
import Navbar from "../components/navbar";

const AboutMe = () => {
    const images = [IMG_5296, IMG_5298, ROL4708, ROL4775, ROL04432];

    return (
        // Use Box as the outer wrapper to control full-screen height and width
        <Box
            sx={{
                minHeight: "100vh", // Full viewport height
                width: "100vw", // Full viewport width
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                m: 0, // No margins
                p: 0, // No padding
            }}
        >
            {/* Navbar with zero padding */}
            <Box sx={{ p: 0 }}>
                <Navbar />
            </Box>

            {/* Main Content */}
            <Container
                maxWidth={false} // Remove max-width constraint for full width
                sx={{
                    flex: 1, // Allow content to grow and fill available space
                    p: 0, // No padding on Container itself
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    maxWidth: 1500
                }}
            >
                {/* Title */}
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#4A2C2A",
                        fontSize: { xs: "2rem", md: "3rem" },
                        mt: { xs: 2, md: 4 },
                        px: { xs: 2, md: 4 }, // Padding for readability
                    }}
                >
                    Rólam
                </Typography>

                {/* Main Text */}
                <Box sx={{ mb: 4, px: { xs: 2, md: 4 } }}>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#5D4037", fontSize: { xs: "1rem", md: "1.5rem" } }}>
                        Az egészség nem gyors megoldásokról vagy sablonos programokról szól—hanem a számodra megfelelő életmód kialakításáról. Sok embert láttam küzdeni a valóságtól elrugaszkodott fitnesz elvárásokkal és fenntarthatatlan módszerekkel. Ezért a holisztikus filozófiám három alappilléren alapul: a mozgáson, a tápanyagokban gazdag ételeken és a mentális jóléten. A folyamatosan változó divatdiéták és túlbonyolított edzések helyett az alapvető, funkcionális gyakorlatokra összpontosítok, amelyek erőt és állóképességet építenek, a teljes értékű ételekre, amelyek táplálnak és energiát adnak, valamint egy olyan gondolkodásmódra, amely elősegíti a hosszútávú sikert.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 2, color: "#5D4037", fontSize: { xs: "1rem", md: "1.5rem" } }}>
                        A sport miatt sok helyre volt alkalmam utazni, végül sportösztöndíjjal az Egyesült Államokba mentem, ahol Média és Stratégiai Kommunikáció szakon szereztem alap-, és mesterdiplomát, miközben mélyítettem tudásomat az edzés, és a teljesítmény területén. Közben a fitness instruktori képzést is elvégeztem majd, megszereztem a személyi edzői és táplálkozási tanácsadói képesítéseket is. A hátterem azonban nem csak a képesítésekről szól - hanem a több mint egy évtizedes versenysportban szerzett tapasztalatomról, nehézségekről, amelyek megtanítottak újraépíteni és megerősíteni a testemet és az elmémet, valamint az elkötelezettségről, hogy másoknak segítsek megtalálni az egyensúlyt a saját útjukon.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 2, color: "#5D4037", fontSize: { xs: "1rem", md: "1.5rem" } }}>
                        1:1 személyre szabott edzés- és táplálkozási útmutatókat tervezek, mert a valódi fejlődés egy olyan tervből ered, amely neked készült, nem pedig a tömegek számára. Akár az általános egészségeden szeretnél javítani, akár erősebbnek és magabiztosabbnak érezni magad, én itt vagyok, hogy vezesselek, eloszlassam a tévhiteket, és segítsek kialakítani azokat a szokásokat, amelyek egy életen át elkísérnek.
                    </Typography>
                </Box>

                {/* Call to Action */}
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: "center",
                        fontWeight: "medium",
                        color: "#BF360C",
                        mb: 6,
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        px: { xs: 2, md: 4 },
                    }}
                >
                    Építsünk együtt egy egészségesebb életet!
                </Typography>

                {/* Scrollable Floating Image Rows */}
                <Box
                    sx={{
                        display: "flex",
                        overflowX: "auto",
                        gap: 1,
                        pb: 4,
                        mb: 6,
                        px: { xs: 2, md: 4 },
                        "&::-webkit-scrollbar": { height: "8px" },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#BF360C",
                            borderRadius: "4px",
                        },
                    }}
                >
                    {images.map((src, index) => (
                        <Box
                            key={index}
                            component="img"
                            src={src}
                            alt={`About me ${index + 1}`}
                            sx={{
                                width: { xs: 200, md: 400 },
                                height: { xs: 260, md: 440 },
                                cursor: "pointer",
                                objectFit: "cover",
                                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.25)",
                                    transform: "scale(1.05)",
                                },
                                flexShrink: 0,
                            }}
                        />
                    ))}
                </Box>
            </Container>

            {/* Footer with zero padding */}
            <Box sx={{ p: 0 }}>
                <Footer />
            </Box>
        </Box>
    );
};

export default AboutMe;