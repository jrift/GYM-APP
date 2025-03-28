import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";
import styles from "./Goals.module.css";

const Goals = () => {
  const [selectedGoals, setSelectedGoals] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const goals = [
    { id: "buildMuscle", label: "Build Muscle" },
    { id: "loseFat", label: "Lose Fat" },
    { id: "improveEndurance", label: "Improve Endurance" },
    { id: "generalFitness", label: "General Fitness" },
  ];

  const handleGoalSelect = (goalId) => {
    setSelectedGoals((prev) =>
      prev.includes(goalId)
        ? prev.filter((g) => g !== goalId)
        : [...prev, goalId]
    );
  };

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
              key={goal.id}
              onClick={() => handleGoalSelect(goal.id)}
              className={`${styles.primaryButton} ${
                selectedGoals.includes(goal.id)
                  ? "opacity-100"
                  : "opacity-70 hover:opacity-90"
              }`}
              style={{
                border: selectedGoals.includes(goal.id)
                  ? "2px solid #FFFFFF"
                  : "none",
              }}
            >
              {goal.label}
            </button>
          ))}

          <div className={styles.continueButton}>
            <button
              onClick={() => navigate("/schedule")}
              disabled={selectedGoals.length === 0}
              className={`${styles.ghostButton} ${
                selectedGoals.length === 0 && "opacity-50 cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
