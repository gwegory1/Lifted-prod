import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTranslation } from "react-i18next";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <IconButton
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label={t("backToTop")}
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      sx={{
        position: "fixed",
        bottom: "max(20px, env(safe-area-inset-bottom))",
        right: 20,
        zIndex: 1000,
        width: 48,
        height: 48,
        backgroundColor: "rgba(31, 31, 31, 0.8)",
        color: "#fff",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : "translateY(8px)",
        pointerEvents: isVisible ? "auto" : "none",
        transition: "opacity 200ms ease-out, transform 200ms ease-out, background-color 150ms",
        "&:hover": { backgroundColor: "#1f1f1f" },
      }}
    >
      <KeyboardArrowUpIcon />
    </IconButton>
  );
};

export default ScrollToTopButton;
