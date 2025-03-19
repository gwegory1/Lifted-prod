import React from "react";
import Navbar from "../components/navbar";
import CtaCover from "../components/ctacover";
import TrainWithMe from "../components/trainWithMe";
import { Stack } from "@mui/material";
import ServicesCard from "../components/servicesCard";
import NutriImage from "../assets/compressed/ROL04332.jpg";
import TrainImage from "../assets/compressed/IMG_5259.jpg";
import MyMission from "../components/myMission";
import Footer from "../components/footer";


const Home: React.FC = () => {
  return (
    <Stack width="100%">
      <Navbar />
      <CtaCover />
      <TrainWithMe />
      <ServicesCard
        services={[
          { title: "Személyi Edzés", backgroundImage: TrainImage },
          { title: "Táplálkozási Tanácsadás", backgroundImage: NutriImage },
        ]}
      />
      <MyMission />
      <Footer />
    </Stack>
  );
};

export default Home;
