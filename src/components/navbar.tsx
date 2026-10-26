import { useEffect, useState } from "react";
import { Box, ButtonBase, Drawer, IconButton } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { Menu as MenuIcon, Language as LanguageIcon } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import LOGO from "../assets/LOGO.svg";
import { tokens } from "../theme/theme";

const linkSx = {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  minHeight: 44,
  px: 1,
  color: tokens.ink,
  fontWeight: 500,
  fontSize: "1.05rem",
  textDecoration: "none",
  whiteSpace: "nowrap",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 8,
    right: 8,
    bottom: 6,
    height: 2,
    backgroundColor: tokens.gold,
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 220ms cubic-bezier(0.22, 1, 0.36, 1)",
  },
  "&:hover::after, &.active::after": { transform: "scaleX(1)" },
  "&.active": { fontWeight: 700 },
} as const;

const Logo = ({ height }: { height: number }) => (
  <Box component={Link} to="/" aria-label="Lifted" sx={{ display: "block", lineHeight: 0, flexShrink: 0 }}>
    <img src={LOGO} alt="" width={Math.round((height * 305) / 119)} height={height} style={{ height, width: "auto" }} />
  </Box>
);

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const { t, i18n } = useTranslation();
  const nextLang = i18n.language === "en" ? "hu" : "en";

  const links = [
    { text: t("home"), path: "/" },
    { text: t("about"), path: "/about" },
    { text: t("training"), path: "/training" },
    { text: t("nutrition"), path: "/nutrition" },
  ];

  const navItem = (item: (typeof links)[number]) => (
    <Box component={NavLink} key={item.path} to={item.path} end sx={linkSx}>
      {item.text}
    </Box>
  );

  const languageToggle = (
    <ButtonBase
      onClick={() => i18n.changeLanguage(nextLang)}
      aria-label={t("switchLanguage")}
      lang={nextLang}
      sx={{
        gap: 0.75,
        minHeight: 44,
        px: 1.5,
        borderRadius: 2,
        color: tokens.ink,
        fontFamily: "inherit",
        fontWeight: 600,
        fontSize: "0.95rem",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        transition: "background-color 150ms",
        "&:hover": { backgroundColor: "rgba(42, 42, 42, 0.06)" },
      }}
    >
      {nextLang}
      <LanguageIcon sx={{ fontSize: "1.3rem" }} aria-hidden />
    </ButtonBase>
  );

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        background: `linear-gradient(to right, ${tokens.peach}, #ffffff, ${tokens.peach})`,
        boxShadow: scrolled ? "0 10px 30px -18px rgba(42, 42, 42, 0.35)" : "0 1px 0 rgba(42, 42, 42, 0.06)",
        transition: "box-shadow 300ms ease-out",
      }}
    >
      <Box
        component="nav"
        aria-label={t("Navigation")}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr auto 1fr", md: "1fr 1fr auto 1fr 1fr" },
          alignItems: "center",
          columnGap: { md: 6 },
          maxWidth: 1400,
          mx: "auto",
          px: { xs: 1, md: 4 },
          py: { xs: 1, md: 1.25 },
        }}
      >
        {/* Mobile: menu button | logo | language */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton onClick={() => setDrawerOpen(true)} aria-label={t("openMenu")} sx={{ width: 48, height: 48, color: tokens.ink }}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Desktop: two links | logo | two links | language */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gridColumn: "2", justifyContent: "flex-end", gap: 3 }}>
          {links.slice(0, 2).map(navItem)}
        </Box>
        <Box sx={{ gridColumn: { xs: "2", md: "3" } }}>
          <Logo height={44} />
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gridColumn: "4", gap: 3 }}>
          {links.slice(2).map(navItem)}
        </Box>
        <Box sx={{ gridColumn: { xs: "3", md: "5" }, justifySelf: "end" }}>{languageToggle}</Box>
      </Box>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 270, height: "100%", display: "flex", flexDirection: "column", backgroundColor: "#fff" }}>
          <Box sx={{ display: "flex", justifyContent: "center", py: 2.5, borderBottom: "1px solid rgba(0, 0, 0, 0.06)" }}>
            <Box onClick={() => setDrawerOpen(false)}>
              <Logo height={40} />
            </Box>
          </Box>
          <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0 }}>
            {links.map((item) => (
              <li key={item.path}>
                <Box
                  component={NavLink}
                  to={item.path}
                  end
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    minHeight: 52,
                    px: 3,
                    color: tokens.ink,
                    fontWeight: 500,
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
                    transition: "background-color 150ms",
                    "&:hover": { backgroundColor: "rgba(248, 229, 222, 0.45)" },
                    "&.active": { fontWeight: 700, backgroundColor: tokens.peach },
                  }}
                >
                  {item.text}
                </Box>
              </li>
            ))}
          </Box>
          <Box sx={{ mt: "auto", p: 2, textAlign: "center", fontSize: "0.85rem", color: tokens.inkSoft }}>
            LIFTED © {new Date().getFullYear()}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
