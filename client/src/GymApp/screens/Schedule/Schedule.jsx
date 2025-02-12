import React from "react";
import { Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styles from "./Schedule.module.css";
import { workoutData } from "../../Data/workoutData";

const Schedule = () => {
  // Get current day of week (0 = Sunday, 1 = Monday, etc.)
  const today = new Date().getDay();
  // Adjust to match our array (where Monday is 0)
  const adjustedToday = today === 0 ? 6 : today - 1;

  const navigate = useNavigate();

  // Create an array of days in order
  const days = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' },
  ];

  return (
    <div className={styles.screen}>
      <div className={styles.contentContainer}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>This Week's Workout Plan</h1>
          <p className={styles.subtitle}>
            Following an upper/lower split with strategic rest days
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <div className={styles.scheduleList}>
            {days.map((day, index) => {
              const workout = workoutData[day.key];
              return (
                <div 
                  key={day.key}
                  className={`${styles.scheduleCard} ${
                    adjustedToday === index ? styles.today : ""
                  }`}
                >
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="flex justify-between items-center">
                      <h2 className={styles.dayName}>{day.label}</h2>
                      <span className={`
                        ${styles.workoutType}
                        ${workout.type === 'Upper Body' ? styles.typeUpper : ''}
                        ${workout.type === 'Lower Body' ? styles.typeLower : ''}
                        ${workout.type === 'Rest' ? styles.typeRest : ''}
                      `}>
                        {workout.type}
                      </span>
                    </div>
                    <div>
                      <p className={styles.status}>{workout.focus}</p>
                      {/* <p className={styles.description}>
                        {workout.exercises[0].name}, {workout.exercises[1].name}...
                      </p> */}
                    </div>
                  </div>
                  <button 
                    className={styles.infoButton}
                    aria-label="More information"
                    onClick={() => navigate("/map")}
                  >
                    <Info size={20} />
                  </button>
                </div>
              );
            })}
          </div>

          <button 
            className={styles.continueButton}
            onClick={() => navigate("/map")}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
