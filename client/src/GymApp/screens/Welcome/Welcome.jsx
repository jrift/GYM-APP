import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";
import styles from "./Welcome.module.css";

const WelcomePage = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const levels = [
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ];

  const goToSignIn = () => {
    navigate("/login");
  };

  const continueAsGuest = () => {
    navigate("/goals");
  };

  const trainerDash = () => {
    navigate("/trainer-dash");
  };

  return (
    <div className={styles.screen}>
      <div className={styles.contentContainer}>
        <div className={styles.headerSection}>
          <h1 className={styles.h1}>Welcome! Select Your Level</h1>
          <p className={styles.subtitle}>
            Choose your experience level to get started
          </p>
        </div>

        <div className={styles.buttonContainer}>
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id)}
              className={`${styles.primaryButton} ${
                selectedLevel === level.id
                  ? "opacity-100"
                  : "opacity-70 hover:opacity-90"
              }`}
              style={{
                border:
                  selectedLevel === level.id ? "2px solid #FFFFFF" : "none",
              }}
            >
              {level.label}
            </button>
          ))}

          <div className={styles.secondaryButtons}>
            <button className={styles.outlineButton} onClick={goToSignIn}>
              Sign In
            </button>
            <button
              onClick={continueAsGuest}
              disabled={!selectedLevel}
              className={`${styles.ghostButton} ${
                !selectedLevel && "opacity-50 cursor-not-allowed"
              }`}
            >
              Continue as Guest
            </button>
            <button className={styles.trainerButton} onClick={trainerDash}>
              Click Here For Trainer Dashboard!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
