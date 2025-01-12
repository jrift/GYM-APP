import React from 'react';
import styles from './Goals.module.css';

const Goals = ({ setCurrentScreen, setWorkoutPlan, workoutPlan }) => (
  <div className={styles.screen}>
    <h2 className={styles.h2}>Fitness Goals</h2>
    <div className={styles.buttonContainer}>
      {['Build Muscle', 'Lose Fat', 'Improve Endurance', 'General Fitness'].map(
        (goal) => (
          <button
            key={goal}
            className={styles.primaryButton}
            onClick={() => {
              setWorkoutPlan({ ...workoutPlan, goal });
              setCurrentScreen('schedule');
            }}
          >
            {goal}
          </button>
        )
      )}
    </div>
  </div>
);

export default Goals;