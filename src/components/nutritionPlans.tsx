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
import nutri1 from "../assets/compressed/ROL04064.jpg";
import ContactFormDialog from "./contactDialog";
import { useTranslation } from "react-i18next";

// Motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: theme.spacing(1),
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
}));
const MotionStyledImg = motion(StyledImg);

const NutritionPlansContainer = styled(MotionBox)(({ theme }) => ({
  backgroundColor: "#fff5f5",
  padding: theme.spacing(2, 1),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4, 2),
  },
  transition: "all 0.3s ease-in-out",
  maxWidth: "1200px",
  margin: "0 auto",
  borderRadius: theme.spacing(2),
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
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
  flex: 1,
  minWidth: 0,
  padding: theme.spacing(2),
  backgroundColor: "#ffffff",
  borderRadius: theme.spacing(1),
  boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease-in-out",
}));

const ImageColumn = styled(MotionBox)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  maxWidth: 400,
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(2),
  },
}));

const StyledButton = styled(MotionButton)(({ theme }) => ({
  backgroundColor: "#ffcc80",
  color: "#000000",
  padding: theme.spacing(1.5, 4),
  borderRadius: 20,
  fontWeight: "bold",
  minWidth: 200,
  width: "100%",
  textTransform: "none",
  fontFamily: "Montserrat, sans-serif",
  fontSize: "1rem",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#ffb74d",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
  },
}));

const OptionButton = styled(MotionButton)(({ theme }) => ({
  textTransform: "none",
  fontWeight: "bold",
  color: "#333",
  backgroundColor: "#f5f5f5",
  width: "50%",
  padding: theme.spacing(1.5),
  borderRadius: 12,
  fontFamily: "Montserrat, sans-serif",
  fontSize: "1rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease-in-out",
  "&.Mui-selected": {
    backgroundColor: "#ffcc80",
    color: "#000",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
  },
  "&:hover": {
    backgroundColor: "#ffcc80",
    color: "#000",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
  },
}));

const NutritionPlans = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const {t} = useTranslation(); // Assuming you have a translation function

  const openDialog = () => {
    setOpen(true);
  }

  // State to track the selected plan
  type PlanType = "Alap" | "Premium";
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("Alap");

  // Plan data
  const plans: Record<PlanType, { title: string; details: string[]; price: string }> = {
    Alap: {
      title: t("Nutrition.NutritionSection.plans.Basic.title"),
      details: [
        t("Nutrition.NutritionSection.plans.Basic.details.0"),
        t("Nutrition.NutritionSection.plans.Basic.details.1"),
        t("Nutrition.NutritionSection.plans.Basic.details.2"),
        t("Nutrition.NutritionSection.plans.Basic.details.3"),
      ],
      price: t("Nutrition.NutritionSection.plans.Basic.price"),
    },
    Premium: {
      title: t("Nutrition.NutritionSection.plans.Premium.title"),
      details: [
        t("Nutrition.NutritionSection.plans.Premium.details.0"),
        t("Nutrition.NutritionSection.plans.Premium.details.1"),
        t("Nutrition.NutritionSection.plans.Premium.details.2"),
        t("Nutrition.NutritionSection.plans.Premium.details.3"),
        t("Nutrition.NutritionSection.plans.Premium.details.4"),
        t("Nutrition.NutritionSection.plans.Premium.details.5"),
      ],
      price: t("Nutrition.NutritionSection.plans.Premium.price"),
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
  };

  const detailsVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98 }
  };

  const imageVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 } 
    }
  };

  return (
    <NutritionPlansContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionTypography
        variant="h4"
        gutterBottom
        variants={titleVariants}
        sx={{
          color: "#ff9800",
          textAlign: isMobile ? "center" : "left",
          fontWeight: "900",
          fontFamily: "Montserrat, sans-serif",
          fontSize: { xs: "1.8rem", sm: "2.5rem" },
          marginBottom: theme.spacing(3),
        }}
      >
        {t("Nutrition.NutritionSection.title")}
      </MotionTypography>
      
      <MotionBox
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 4 },
          alignItems: "stretch",
        }}
      >
        {/* Left Column - Options (Mobile Only) */}
        {isMobile && (
          <OptionsColumn initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <OptionButton
                variant="contained"
                onClick={() => setSelectedPlan("Alap")}
                className={selectedPlan === "Alap" ? "Mui-selected" : ""}
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                {plans.Alap.title}
              </OptionButton>
              <OptionButton
                variant="contained"
                onClick={() => setSelectedPlan("Premium")}
                className={selectedPlan === "Premium" ? "Mui-selected" : ""}
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                {plans.Premium.title}
              </OptionButton>
            </Box>
          </OptionsColumn>
        )}

        {/* Middle Column - Details */}
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
                gutterBottom
                variants={itemVariants}
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: { xs: "1.6rem", sm: "1.8rem" },
                  color: "#333",
                  mb: 0,
                }}
                align="left"
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
                  color: "#ff9800",
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
                  color: "#555",
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
                {t("Nutrition.contactButton")}
              </StyledButton>
            </MotionBox>
          </DetailsColumn>
        ) : (
          <MotionBox 
            sx={{ flex: 2, display: "flex", flexDirection: "row", gap: 4 }}
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
                        fontSize: { xs: "1.4rem", sm: "2rem" },
                        color: "#333",
                        mb: 0,
                      }}
                      align="left"
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
                        color: "#ff9800",
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
                        fontSize: { xs: "0.9rem", sm: "1.2rem" },
                        margin: 0,
                        color: "#555",
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
        {!isMobile && (
          <ImageColumn>
            <MotionStyledImg
              src={nutri1}
              alt="Nutrition Plan Image"
              whileHover="hover"
              variants={imageVariants}
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: theme.spacing(1),
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </ImageColumn>
      )}
      </MotionBox>
      
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
            {t("Nutrition.contactButton")}
          </StyledButton>
        </MotionBox>
      )}
      
      <ContactFormDialog open={open} setOpen={setOpen} />
      <Typography
              variant="h6"
              sx={{
              fontWeight: "bold",
              fontFamily: "Montserrat, sans-serif",
              color: "#ff9800", // Matches your accent color
              mt: 2,
              mx: 1,
              textAlign: "left"
              }}
            >
              {t("Nutrition.WhoCanIHelp.title")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
              fontSize: { xs: "1rem", sm: "1.1rem" },
              color: "#333333",
              lineHeight: 1.6,
              textAlign: "left", 
              p: 1
              }}
            >
              {t("Nutrition.WhoCanIHelp.text")}
            </Typography>
    </NutritionPlansContainer>
  );
};

export default NutritionPlans;