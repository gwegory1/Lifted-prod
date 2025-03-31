import React from "react";
import { IconButton, Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface ScrollToTopButtonProps {
  isVisible: boolean;
  exec: () => void;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ isVisible, exec }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        display: isVisible ? "flex" : "none",
      }}
    >
      <IconButton
        onClick={exec}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "#fff",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Box>
  );
};

export default ScrollToTopButton;