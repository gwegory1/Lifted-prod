import React from "react";
import TWM1 from "../assets/twm1.jpg";
import TWM2 from "../assets/twm2.jpg";

const styles = {
    container: {
        display: "flex",
        flexDirection: "row" as "row",
        alignItems: "center",
        padding: "0rem 0rem",
        gap: "2rem",
        backgroundColor: "#f8f8f8",
        '@media (max-width: 768px)': {
            flexDirection: "column" as "column",
            gap: "1rem",
        }
    },
    imageContainer: {
        position: "relative" as "relative",
        width: "50%",
        '@media (max-width: 768px)': {
            width: "90%",
            marginBottom: "1rem",
        }
    },
    primaryImage: {
        width: "60%",
        height: "auto",
        objectFit: "cover" as "cover",
        position: "relative" as "relative",
        zIndex: 1,
    },
    secondaryImage: {
        position: "absolute" as "absolute",
        width: "40%", 
        height: "auto",
        objectFit: "cover" as "cover",
        right: "10%", // Changed from fixed rem to percentage
        bottom: "10%", // Changed from fixed rem to percentage
        zIndex: 2,
    },
    textContent: {
        width: "50%",
        display: "flex",
        flexDirection: "column" as "column",
        gap: "1.5rem",
        '@media (max-width: 768px)': {
            width: "90%",
            gap: "1rem",
        }
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "#333",
        '@media (max-width: 768px)': {
            fontSize: "2rem",
        }
    },
    description: {
        fontSize: "1.1rem",
        lineHeight: "1.6",
        color: "#666",
        '@media (max-width: 768px)': {
            fontSize: "1rem",
        }
    },
    actionButton: {
        padding: "0.8rem 2rem",
        backgroundColor: "#ff5722",
        color: "white",
        border: "none",
        borderRadius: "4px",
        fontSize: "1.1rem",
        fontWeight: "bold",
        cursor: "pointer",
        alignSelf: "flex-start",
        transition: "background-color 0.3s ease",
    },
};


const TrainWithMe: React.FC = ({}) => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={TWM2} alt="Primary" style={styles.primaryImage} />
        <img src={TWM1} alt="Secondary" style={styles.secondaryImage} />
      </div>

      <div style={styles.textContent}>
        <h2 style={styles.title}>Tarts Velem!</h2>
        <p style={styles.description}>
          Építsük együtt a céljaidhoz vezető utat! Személyre szabott tervekkel
          és folyamatos támogatással segítek abban, hogy valóra váltsd, amire
          mindig is vágytál. Kezd el most, és formáld a jövőd!
        </p>
        <button style={styles.actionButton}>Train With Me</button>
        <p>

        </p>
      </div>
    </div>
  );
};

export default TrainWithMe;
