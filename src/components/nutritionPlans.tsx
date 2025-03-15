import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import nutri1 from "../assets/servicesnutrition.jpg";
import ContactFormDialog from "./contactDialog";

const NutritionPlansContainer = styled(Box)(({ theme }) => ({
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

const OptionsColumn = styled(Box)`
  flex: 1;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing(1)};
  display: block;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    display: none;
  }
`;

const DetailsColumn = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  padding: theme.spacing(2),
  backgroundColor: "#ffffff",
  borderRadius: theme.spacing(1),
  boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease-in-out",
}));

const ImageColumn = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  maxWidth: 400,
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(2),
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
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

const OptionButton = styled(Button)(({ theme }) => ({
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

  const openDialog = () => {
    setOpen(true);
  }

  // State to track the selected plan
  type PlanType = "Alap" | "Premium";
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("Alap");

  // Plan data
  const plans: Record<PlanType, { title: string; details: string[] }> = {
    Alap: {
      title: "Alap",
      details: [
        "1 órás konzultáció",
        "Étkezési napló elemzése",
        "5 napos mintaétrend, összesen 20 recept (reggeli, ebéd, vacsora, nasi) - igényeid figyelembe vételével, kalória és makrók számolása nélkül",
        "Bevásárló lista",
      ],
    },
    Premium: {
      title: "Prémium",
      details: [
        "1 órás konzultáció",
        "Étkezési napló elemzése",
        "7 napos mintaétrend, összesen 28 recept (reggeli, ebéd, vacsora, nasi) - igényeid figyelembe vételével, céljaidnak megfelelő, személyre szabott kalória és makrók számolásával",
        "Bevásárló lista",
        "PDF Mini Táplálkozási Kisokos",
        "1 hónapos utánkövetés: heti 1x30 perc kontroll konzultáció + e-mailes kérdés-válasz lehetőség",
      ],
    },
  };

  return (
    <NutritionPlansContainer>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: "#ff9800",
          textAlign: isMobile ? "center" : "left",
          fontWeight: "900", // Increased font weight for bolder text
          fontFamily: "Montserrat, sans-serif",
          fontSize: { xs: "1.8rem", sm: "2.5rem" },
          marginBottom: theme.spacing(3),
        }}
      >
        TANÁCSADÁSI LEHETŐSÉGEK
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 4 },
          alignItems: "stretch",
        }}
      >
        {/* Left Column - Options (Mobile Only) */}
        {isMobile && (
          <OptionsColumn>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <OptionButton
                variant="contained"
                onClick={() => setSelectedPlan("Alap")}
                className={selectedPlan === "Alap" ? "Mui-selected" : ""}
              >
                {plans.Alap.title}
              </OptionButton>
              <OptionButton
                variant="contained"
                onClick={() => setSelectedPlan("Premium")}
                className={selectedPlan === "Premium" ? "Mui-selected" : ""}
              >
                {plans.Premium.title}
              </OptionButton>
            </Box>
          </OptionsColumn>
        )}

        {/* Middle Column - Details */}
        {isMobile ? (
          <DetailsColumn>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: "1.6rem", sm: "1.8rem" },
                color: "#333",
              }}
              align="left"
            >
              {plans[selectedPlan].title}
            </Typography>
            {plans[selectedPlan].details.map((detail, index) => (
              <Typography
                key={index}
                variant="body1"
                paragraph
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
              </Typography>
            ))}
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <StyledButton variant="contained" onClick={() => setOpen(true)}>IDŐPONT FOGLALÁS</StyledButton>
            </Box>
          </DetailsColumn>
        ) : (
          <Box sx={{ flex: 2, display: "flex", flexDirection: "row", gap: 4 }}>
            {Object.keys(plans).map((planKey) => {
              const typedPlanKey = planKey as PlanType;
              return (
                <DetailsColumn key={typedPlanKey}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: { xs: "1.4rem", sm: "2rem" },
                      color: "#333",
                    }}
                    align="left"
                  >
                    {plans[typedPlanKey].title}
                  </Typography>
                  {plans[typedPlanKey].details.map((detail, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      paragraph
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
                    </Typography>
                  ))}
                </DetailsColumn>
              );
            })}
          </Box>
        )}

        {/* Right Column - Image */}
        {!isMobile && (
          <ImageColumn>
            <Box
              component="img"
              src={nutri1}
              alt="Nutrition Plan Image"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: theme.spacing(1),
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          </ImageColumn>
        )}
      </Box>
      {!isMobile && (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <StyledButton variant="contained" onClick={openDialog}>IDŐPONT FOGLALÁS</StyledButton>
        </Box>
      )}
    <ContactFormDialog open={open} setOpen={setOpen} />
    </NutritionPlansContainer>
    
  );
};

export default NutritionPlans;