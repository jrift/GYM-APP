import React from 'react';
import { Info } from 'lucide-react';
import styles from './Schedule.module.css';

const Schedule = ({ setCurrentScreen }) => (
  <div className={styles.screen}>
    <h2 className={styles.h2}>This Week's Workout</h2>
    <div className={styles.scheduleContainer}>
      {[
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ].map((day) => (
        <div key={day} className={styles.scheduleCard}>
          <div className={styles.dayInfo}>
            <p className={styles.dayName}>{day}</p>
            <p className={styles.dayStatus}>Optional</p>
          </div>
          <button className={styles.iconButton}>
            <Info />
          </button>
        </div>
      ))}
    </div>
    <button
      className={styles.primaryButton}
      onClick={() => setCurrentScreen('map')}
    >
      Continue
    </button>
  </div>
);

export default Schedule;