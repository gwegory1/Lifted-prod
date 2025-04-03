import {
  Stack,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/LOGO.svg";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Language as LanguageIcon } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Anchor element for language menu

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageChange = (lang: string) => {
    setAnchorEl(null);
    // Save the selected language to localStorage or a global state
    localStorage.setItem("language", lang);
    window.location.reload(); // Reload to apply language changes
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navStackProps = {
    direction: "row" as const,
    alignItems: "center" as const,
    gap: 3,
    justifyContent: "space-around" as const,
  };

  const navStyles = {
    navbar: {
      background: "linear-gradient(to right, #F8E5DE, #ffffff, #F8E5DE)",
      padding: "1rem 0",
      margin: 0,
      top: 0,
      left: 0,
      right: 0,
      fontFamily: "Montserrat, sans-serif",
      fontSize: "1.3rem",
      width: "100%",
      position: "relative" as "relative",
      zIndex: 1000,
      overflowX: "hidden" as "hidden", // Prevent horizontal overflow
      boxSizing: "border-box" as "border-box", // Include padding in width calculation
    },
    navList: {
      display: "flex",
      listStyle: "none",
      gap: "1rem",
      margin: 0,
      padding: 0,
      justifyContent: "space-around",
      width: "100%", // Use 100% instead of maxWidth
      fontFamily: "Montserrat, sans-serif",
      flexWrap: "nowrap" as "nowrap", // Prevent wrapping
    },
    navItem: (isHovered: boolean) => ({
      padding: "0.5rem",
      borderRadius: "0.25rem",
      transition: "all 0.2s ease",
      fontFamily: "Montserrat, sans-serif",
      transform: isHovered ? "translateY(-2px)" : "translateY(0)",
      whiteSpace: "nowrap" as "nowrap", // Prevent text wrapping
    }),
    navLink: (isHovered: boolean) => ({
      textDecoration: "none",
      color: "#333",
      fontWeight: 500,
      transition: "color 0.3s ease",
      fontFamily: "Montserrat, sans-serif",
      textShadow: isHovered ? "0 0 5px rgba(0, 0, 0, 0.1)" : "none",
    }),
    drawer: {
      backgroundColor: "#fff",
      fontFamily: "Montserrat, sans-serif",
      fontSize: "1.2rem",
      width: 250,
      height: "100%",
    },
    drawerItem: {
      padding: "0.5rem 1rem",
      transition: "background 0.3s ease, color 0.3s ease",
      "&:hover": {
        background: "#333",
        "& .MuiListItemText-primary": {
          color: "#fff",
        },
      },
    },
    drawerLink: {
      textDecoration: "none",
      color: "#333",
      width: "100%",
      display: "block",
      fontWeight: 500,
      fontFamily: "Montserrat, sans-serif",
    },
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const drawerContent = (
    <Box
      sx={{
        ...navStyles.drawer,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        background: "linear-gradient(to bottom, #FFFFFF, #F9F9F9)",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{
          padding: "20px 16px",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          display: "flex",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Box
          sx={{
            height: "40px",
            width: "100px",
            backgroundImage: `url(${LOGO})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            maxWidth: "100%",
            animation: "fadeIn 0.6s ease-in-out",
            "@keyframes fadeIn": {
              "0%": { opacity: 0, transform: "translateY(-10px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        />
      </Box>

      <List sx={{ p: 0 }}>
        {[
          { text: t("home"), path: "/" },
          { text: t("about"), path: "/about" },
          { text: t("training"), path: "/training" },
          { text: t("nutrition"), path: "/nutrition" },
        ].map((item, index) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              borderBottom:
            index < 3 ? "1px solid rgba(0, 0, 0, 0.06)" : "none",
              "&:hover": {
            backgroundColor: "rgba(248, 229, 222, 0.3)",
            transform: "translateX(5px)",
              },
              transition: "all 0.3s ease",
              animation: `fadeSlideIn 0.${index + 4}s ease-out`,
              "@keyframes fadeSlideIn": {
            "0%": { opacity: 0, transform: "translateX(-20px)" },
            "100%": { opacity: 1, transform: "translateX(0)" },
              },
            }}
          >
            <Link
              to={item.path}
              style={{
            ...navStyles.drawerLink,
            padding: "12px 24px",
            width: "100%",
            display: "flex",
            alignItems: "center",
              }}
            >
              <ListItemText
            primary={item.text}
            primaryTypographyProps={{
              fontSize: "1rem",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 500,
              letterSpacing: "0.3px",
            }}
              />
            </Link>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          p: 2,
          mt: 4,
          textAlign: "center",
          borderTop: "1px solid rgba(0, 0, 0, 0.06)",
          opacity: 0.7,
          fontSize: "0.85rem",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        LIFTED © {new Date().getFullYear()}
      </Box>
    </Box>
  );

  return (
    <nav style={navStyles.navbar}>
      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Center the content horizontally
            alignItems: "center",
            p: 1,
            width: "100%",
            boxSizing: "border-box",
            position: "relative", // Enable relative positioning for offset
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              position: "absolute", // Position the button absolutely
              left: 16, // Align it to the left
              "&:hover": { background: "rgba(0, 0, 0, 0.1)" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              height: "50px",
              width: "120px", // Fixed width instead of 100%
              backgroundImage: `url(${LOGO})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <IconButton
            onClick={handleLanguageClick}
            sx={{
              position: "absolute", // Position the button absolutely
              right: 16, // Align it to the right
              color: "#333",
              fontSize: "1.5rem",
            }}
            aria-controls="language-menu"
            aria-haspopup="true"
          >
            <LanguageIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            PaperProps={{ sx: { background: "transparent" } }}
          >
            {drawerContent}
          </Drawer>
          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleLanguageChange("hu")}>Magyar</MenuItem>
            <MenuItem onClick={() => handleLanguageChange("en")}>English</MenuItem>
          </Menu>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            maxWidth: "1600px",
            mx: "auto",
            overflow: "hidden",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Center the content horizontally
            px: 3, // Add horizontal padding for spacing
            position: "relative", // Enable relative positioning for offset
            left: "2%", // Offset the entire content slightly to the right
          }}
        >
          <ul style={{ ...navStyles.navList, flex: 1, justifyContent: "space-evenly" }}>
            <Stack {...navStackProps}>
              <li
            style={navStyles.navItem(hoveredItem === 0)}
            onMouseEnter={() => setHoveredItem(0)}
            onMouseLeave={() => setHoveredItem(null)}
              >
            <Link style={navStyles.navLink(hoveredItem === 0)} to="/">
              {t("home")}
            </Link>
              </li>
              <li
            style={navStyles.navItem(hoveredItem === 1)}
            onMouseEnter={() => setHoveredItem(1)}
            onMouseLeave={() => setHoveredItem(null)}
              >
            <Link style={navStyles.navLink(hoveredItem === 1)} to="/about">
              {t("about")}
            </Link>
              </li>
            </Stack>
          </ul>
          <Box
            sx={{
              height: "50px",
              width: "120px", // Adjusted width for better visibility
              backgroundImage: `url(${LOGO})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              flexShrink: 0,
              mx: 4, // Add margin to separate the logo from the nav items
            }}
          />
          <ul style={{ ...navStyles.navList, flex: 1, justifyContent: "space-evenly" }}>
            <Stack {...navStackProps}>
              <li
            style={navStyles.navItem(hoveredItem === 2)}
            onMouseEnter={() => setHoveredItem(2)}
            onMouseLeave={() => setHoveredItem(null)}
              >
            <Link style={navStyles.navLink(hoveredItem === 2)} to="/training">
              {t("training")}
            </Link>
              </li>
              <li
            style={navStyles.navItem(hoveredItem === 3)}
            onMouseEnter={() => setHoveredItem(3)}
            onMouseLeave={() => setHoveredItem(null)}
              >
            <Link style={navStyles.navLink(hoveredItem === 3)} to="/nutrition">
              {t("nutrition")}
            </Link>
              </li>
            </Stack>
          </ul>
          <Box sx={{ ml: 4 }}> {/* Increase margin for spacing */}
            <IconButton
              onClick={handleLanguageClick}
              sx={{ color: "#333" }}
              aria-controls="language-menu"
              aria-haspopup="true"
            >
              <LanguageIcon />
            </IconButton>
            <Menu
              id="language-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleLanguageChange("hu")}>
            Magyar
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("en")}>
            English
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      )}
    </nav>
  );
};

export default Navbar;
