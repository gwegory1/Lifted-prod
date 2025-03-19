import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import trainingImage from "../assets/compressed/IMG_5260.jpg"; // Updated image path
import ContactFormDialog from "./contactDialog";

// Motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%", // Fill the container height
  borderRadius: theme.spacing(1),
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  objectFit: "cover", // Ensure square-ish image fits without distortion
}));
const MotionStyledImg = motion(StyledImg);

const TrainingPlansContainer = styled(MotionBox)(({ theme }) => ({
  background: "linear-gradient(145deg, #1A1A1A 0%, #2D2D2D 100%)",
  padding: theme.spacing(2, 1),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4, 2),
  },
  transition: "all 0.3s ease-in-out",
  width: "100%",
  boxSizing: "border-box",
  margin: "0 auto",
  borderRadius: theme.spacing(2),
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
}));

const OptionsColumn = styled(MotionBox)`
  flex: 1;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing(1)};
  display: block;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    display: none;
  }
`;

const DetailsColumn = styled(MotionBox)(({ theme }) => ({
  flex: "1 1 auto", // Allow it to grow and fill available space
  minWidth: 0,
  padding: theme.spacing(2),
  backgroundColor: "rgba(30, 30, 30, 0.8)",
  borderRadius: theme.spacing(1),
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
  transition: "all 0.3s ease-in-out",
}));

const ImageColumn = styled(MotionBox)(({ theme }) => ({
  flex: "1 1 30%", // Reduced allocation to scale down image
  minWidth: 0,
  maxWidth: 450, // Reduced from 600px to scale down the image
  padding: theme.spacing(1),
  display: "flex",
  alignItems: "center", // Vertically center the image
  justifyContent: "center", // Horizontally center the image
  height: "100%", // Match the height of the options
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(2),
    height: "auto", // Reset height on mobile
  },
}));

const StyledButton = styled(MotionButton)(({ theme }) => ({
  backgroundColor: "#FFC056",
  color: "#000000",
  padding: theme.spacing(1.5, 4),
  borderRadius: 20,
  fontWeight: "bold",
  minWidth: 200,
  width: "100%",
  textTransform: "none",
  fontFamily: "Montserrat, sans-serif",
  fontSize: "1rem",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#ffb74d",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  },
}));

const OptionButton = styled(MotionButton)(({ theme }) => ({
  textTransform: "none",
  fontWeight: "bold",
  color: "#ccc",
  backgroundColor: "rgba(255, 192, 86, 0.1)",
  width: "50%",
  padding: theme.spacing(1.5),
  borderRadius: 12,
  fontFamily: "Montserrat, sans-serif",
  fontSize: "0.9rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
  transition: "all 0.3s ease-in-out",
  "&.Mui-selected": {
    backgroundColor: "#FFC056",
    color: "#000",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
  },
  "&:hover": {
    backgroundColor: "#FFC056",
    color: "#000",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
  },
}));

const TrainingSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  // State to track the selected plan
  type PlanType = "Single" | "Package" | "Pair" | "Plan";
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("Single");

  // Plan data with prices
  const plans: Record<PlanType, { title: string; price: string; details: string[] }> = {
    Single: {
      title: "EGY ALKALMAS",
      price: "10 000 Ft",
      details: [
        "60 perces személyi edzés",
        "Alkalmanként vásárolt jegy",
      ],
    },
    Package: {
      title: "BÉRLET",
      price: "70 000 Ft",
      details: [
        "8 személyi edzést tartalmaz",
        "2 hónapon belül bármikor felhasználható",
      ],
    },
    Pair: {
      title: "PÁROS EDZÉS",
      price: "15 000 Ft",
      details: [
        "2 főre szóló edzés",
        "Ideális, ha baráttal/barátnővel szeretnél edzeni",
      ],
    },
    Plan: {
      title: "EDZÉSTERV",
      price: "20 000 Ft",
      details: [
        "1 hónapos személyre szabott edzésterv",
        "75 perces konzultáció + felmérés alapján készül",
        "Egyedül végezhető",
      ],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const detailsVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98 },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <TrainingPlansContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionTypography
        variant="h4"
        gutterBottom
        variants={titleVariants}
        sx={{
          color: "#FFC056",
          textAlign: isMobile ? "center" : "left",
          fontWeight: "900",
          fontFamily: "Montserrat, sans-serif",
          fontSize: { xs: "1.8rem", sm: "2.5rem" },
          marginBottom: theme.spacing(0),
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
        }}
      >
        EDZÉS LEHETŐSÉGEK
      </MotionTypography>
      <MotionTypography
        variant="body1"
        gutterBottom
        variants={titleVariants}
        sx={{
          color: "#ddd",
          textAlign: isMobile ? "center" : "left",
          fontWeight: "500",
          fontFamily: "Montserrat, sans-serif",
          paddingTop: theme.spacing(1),
          marginBottom: theme.spacing(3),
          paddingLeft: theme.spacing(1),
          fontStyle: 'italic',
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
          fontSize: { xs: "1rem", sm: "1.2rem" },
          maxWidth: { xs: "100%", sm: "600px" },
        }}
      >
        Minden esetben az első alkalom egy 75 perces konzultáció & felmérés, ami a célok
        megbeszélését és állapotfelmérést foglal magába.
      </MotionTypography>

      <MotionBox
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 4 },
          alignItems: { sm: "stretch" }, // Stretch to match heights
          justifyContent: "space-between",
        }}
      >
        {/* Left Column - Options (Mobile Only) */}
        {isMobile && (
          <OptionsColumn initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Box sx={{ 
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
            }}>
              {Object.keys(plans).map((planKey) => {
                const typedPlanKey = planKey as PlanType;
                return (
                  <OptionButton
                    key={typedPlanKey}
                    variant="contained"
                    onClick={() => setSelectedPlan(typedPlanKey)}
                    className={selectedPlan === typedPlanKey ? "Mui-selected" : ""}
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                    sx={{ width: "100%" }}
                  >
                    {plans[typedPlanKey].title}
                  </OptionButton>
                );
              })}
            </Box>
          </OptionsColumn>
        )}

        {/* Middle Column - Details (Desktop: Single Column) */}
        {isMobile ? (
          <DetailsColumn
            variants={detailsVariants}
            key={selectedPlan}
            initial="hidden"
            animate="visible"
          >
            <MotionBox
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <MotionTypography
                variant="h5"
                variants={itemVariants}
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: { xs: "1.6rem", sm: "1.8rem" },
                  color: "#FFC056",
                }}
              >
                {plans[selectedPlan].title}
              </MotionTypography>
              <MotionTypography
                variant="h6"
                variants={itemVariants}
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: { xs: "1.2rem", sm: "1.4rem" },
                  color: "#fff",
                }}
              >
                {plans[selectedPlan].price}
              </MotionTypography>
            </MotionBox>

            {plans[selectedPlan].details.map((detail, index) => (
              <MotionTypography
                key={index}
                variant="body1"
                paragraph
                variants={itemVariants}
                sx={{
                  fontSize: { xs: "1rem", sm: "1.2rem" },
                  margin: 0,
                  color: "#eee",
                  fontFamily: "Montserrat, sans-serif",
                  lineHeight: 1.6,
                }}
                align="left"
              >
                - {detail}
              </MotionTypography>
            ))}

            <MotionBox sx={{ textAlign: "center", mt: 2 }}>
              <StyledButton
                variant="contained"
                onClick={() => setOpen(true)}
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                KAPCSOLATFELVÉTEL
              </StyledButton>
            </MotionBox>
          </DetailsColumn>
        ) : (
          <MotionBox
            sx={{
              flex: 2,
              display: "flex",
              flexDirection: "column", // Single column layout
              gap: 2, // Tighter stacking
              alignItems: "stretch", // Stretch items to fill width
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {Object.keys(plans).map((planKey) => {
              const typedPlanKey = planKey as PlanType;
              return (
                <DetailsColumn
                  key={typedPlanKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <MotionBox
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 1,
                    }}
                  >
                    <MotionTypography
                      variant="h5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: { xs: "1.4rem", sm: "1.8rem" },
                        color: "#FFC056",
                      }}
                    >
                      {plans[typedPlanKey].title}
                    </MotionTypography>
                    <MotionTypography
                      variant="h6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: { xs: "1.2rem", sm: "1.4rem" },
                        color: "#fff",
                      }}
                    >
                      {plans[typedPlanKey].price}
                    </MotionTypography>
                  </MotionBox>

                  {plans[typedPlanKey].details.map((detail, index) => (
                    <MotionTypography
                      key={index}
                      variant="body1"
                      paragraph
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      sx={{
                        fontSize: { xs: "0.9rem", sm: "1.1rem" },
                        margin: 0,
                        color: "#eee",
                        fontFamily: "Montserrat, sans-serif",
                        lineHeight: 1.6,
                      }}
                      align="left"
                    >
                      - {detail}
                    </MotionTypography>
                  ))}
                </DetailsColumn>
              );
            })}
          </MotionBox>
        )}

        {/* Right Column - Image (Desktop Only) */}
        {!isMobile && (
          <ImageColumn>
            <MotionStyledImg
              src={trainingImage}
              alt="Training Plan Image"
              whileHover="hover"
              variants={imageVariants}
            />
          </ImageColumn>
        )}
      </MotionBox>

      {/* Button for Desktop */}
      {!isMobile && (
        <MotionBox
          sx={{ textAlign: "center", mt: 4 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <StyledButton
            variant="contained"
            onClick={openDialog}
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            KAPCSOLATFELVÉTEL
          </StyledButton>
        </MotionBox>
      )}

      <ContactFormDialog open={open} setOpen={setOpen} />
    </TrainingPlansContainer>
  );
};



export default TrainingSection;