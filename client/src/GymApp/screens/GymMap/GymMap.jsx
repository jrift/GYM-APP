import React, { useState } from "react";
import styles from "./GymMap.module.css";
import { workoutData } from "../../Data/workoutData";

const GymMap = () => {
  const [completedExercises, setCompletedExercises] = useState([]);

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
  
  const today = days[new Date().getDay()];
  const todayWorkout = workoutData[today];

  const handleExerciseComplete = (exerciseIndex) => {
    if (!completedExercises.includes(exerciseIndex)) {
      setCompletedExercises(prev => [...prev, exerciseIndex]);
    }
  };

  const isWorkoutComplete = completedExercises.length === todayWorkout.exercises.length;

  return (
    <div className={styles.screen}>
      <div className={styles.workoutContainer}>
        <h1 className={styles.title}>Today's Workout</h1>

        <div className={styles.exerciseList}>
          {todayWorkout.exercises.map((exercise, index) => (
            <div key={index} className={styles.exerciseItem}>
              <div className={styles.exerciseDetails}>
                <span className={styles.exerciseName}>
                  {exercise.name} | {exercise.reps} | {exercise.sets}
                </span>
                <button 
                  className={styles.continueButton}
                  onClick={() => handleExerciseComplete(index)}
                  disabled={completedExercises.includes(index)}
                >
                  Continue
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.gymMap}>
          <div className={styles.mapItem}>Cardio Area</div>
          <div className={styles.mapItem}>Weight Area</div>
          <div className={styles.mapItem}>Functional Training</div>
          <div className={styles.mapItem}>Women's Locker</div>
          <div className={styles.mapItem}>Men's Locker</div>
          <div className={styles.mapItem}>Reception</div>
        </div>

        <button 
          className={`${styles.endWorkoutButton} ${isWorkoutComplete ? styles.active : ''}`}
          disabled={!isWorkoutComplete}
        >
          End Workout
        </button>
      </div>
    </div>
  );
};

export default GymMap;