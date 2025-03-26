import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Schedule.module.css';
import { workoutData } from './../../Data/workoutData';

const Schedule = () => {
  const navigate = useNavigate();
  // Get current day of week (0 = Sunday, 1 = Monday, etc.)
  const today = new Date().getDay();
  // Adjust to match our array (where Monday is 0)
  const adjustedToday = today === 0 ? 6 : today - 1;

  // Create an array of days with short names
  const days = [
    { key: 'monday', shortName: 'Mon' },
    { key: 'tuesday', shortName: 'Tue' },
    { key: 'wednesday', shortName: 'Wed' },
    { key: 'thursday', shortName: 'Thu' },
    { key: 'friday', shortName: 'Fri' },
    { key: 'saturday', shortName: 'Sat' },
    { key: 'sunday', shortName: 'Sun' }
  ];

  // Display all 7 days in the horizontal view
  const visibleDays = days;
  
  // Get today's workout details (for demo purposes, using the actual current day)
  const todayKey = days[adjustedToday].key;
  const todayWorkout = workoutData[todayKey];

  // Function to get workout type color
  const getWorkoutColor = (type) => {
    switch(type) {
      case 'Upper Body':
        return '#4a82e0';
      case 'Lower Body':
        return '#4a82e0';
      case 'Rest':
      default:
        return '#6e7180';
    }
  };

  return (
    <div className={styles.container}>
      {/* Weekly Schedule Section */}
      <section className={styles.weekSection}>
        <h1 className={styles.title}>This Week</h1>
        
        <div className={styles.daysContainer}>
          {visibleDays.map((day, index) => {
            const workout = workoutData[day.key];
            const isToday = index === adjustedToday;
            const workoutColor = getWorkoutColor(workout.type);
            
            return (
              <div 
                key={day.key} 
                className={`${styles.dayCard} ${isToday ? styles.activeDay : ''}`}
              >
                <div className={styles.dayHeader}>
                  {day.shortName}
                </div>
                <div className={styles.dayContent}>
  
                  <div 
                    className={styles.workoutType}
                    style={{ color: workoutColor }}
                  >
                    {workout.type}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Today's Workout Section */}
      <section className={styles.todaySection}>
        <h2 className={styles.sectionTitle}>Today's Workout</h2>
        <p className={styles.workoutFocus}>{todayWorkout.time}</p>
        
        <div className={styles.exercisesCard}>
          <h3 className={styles.exercisesTitle}>Exercises</h3>
          
          <div className={styles.exercisesList}>
            {todayWorkout.exercises.map((exercise, index) => (
              <div key={index} className={styles.exerciseItem}>
                <span className={styles.exerciseName}>{exercise.name}</span>
                <span className={styles.exerciseReps}>{exercise.sets}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Continue Button */}
      <button 
        className={styles.continueButton}
        onClick={() => navigate('/map')}
      >
        Continue
      </button>
    </div>
  );
};

export default Schedule;