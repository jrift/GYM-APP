import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";
import styles from "./Goals.module.css";

const Goals = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const goals = ["Build Muscle", "Lose Fat", "Improve Endurance", "General Fitness"];

  return (
    <div className={styles.screen}>
      <div className={styles.contentContainer}>
        <div className={styles.headerSection}>
          <h1 className={styles.h1}>Fitness Goals</h1>
          <p className={styles.subtitle}>Select all that apply</p>
        </div>

        <div className={styles.buttonContainer}>
          {goals.map((goal) => (
            <button
              key={goal}
              className={styles.primaryButton}
            >
              {goal}
            </button>
          ))}

          <button 
            className={styles.continueButton}
            onClick={() => navigate("/schedule")}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Goals;
