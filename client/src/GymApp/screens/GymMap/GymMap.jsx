import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GymMap.module.css";
import { workoutData } from "../../Data/workoutData";
import gymMapImage from "../../../images/gym-floor-plan.svg"

const GymMap = () => {
  const navigate = useNavigate();

  // Get current day
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  // have rest days just for streching
  
  const today = days[new Date().getDay()];
  const todayWorkout = workoutData[today];

  return (
    <div className={styles.screen}>
      <div className={styles.contentContainer}>
        <div className={styles.headerSection}>
          <h1 className={styles.h1}>Today's Workout</h1>
          <p className={styles.workoutType}>
            {todayWorkout.type} - {todayWorkout.focus}
          </p>
          <div className={styles.workoutDetails}>
            {todayWorkout.exercises.map((exercise, index) => (
              <p key={index}>
                {exercise.name} | {exercise.reps} | {exercise.sets}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <div className={styles.gymMap}>
          <img src={gymMapImage} alt="Gym floor plan" />
          </div>

          <button
            className={styles.continueButton}
            onClick={() => navigate("/")}
          >
            End Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default GymMap;
