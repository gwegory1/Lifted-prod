import React from "react";
import Navbar from "../components/navbar";
import CtaCover from "../components/ctacover";
import TrainWithMe from "../components/trainWithMe";
import { Stack } from "@mui/material";
import ServicesCard from "../components/servicesCard";
import NutriImage from "../assets/servicesnutrition.jpg";
import TrainImage from "../assets/servicestraining.jpg";

const Home: React.FC = () => {
  return (
    <Stack>
      <Navbar />
      <CtaCover />
      <TrainWithMe />
      <ServicesCard
        services={[
          { title: "Táplálkozási Tanácsadás", backgroundImage: NutriImage },
          { title: "Személyi Edzés", backgroundImage: TrainImage },
        ]}
      />
    </Stack>
  );
};

export default Home;
