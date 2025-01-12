import React, { useState } from 'react';
import WelcomeScreen from './screens/Welcome/Welcome';
import GoalsScreen from './screens/Goals/Goals';
import ScheduleScreen from './screens/Schedule/Schedule';
import GymMapScreen from './screens/GymMap/GymMap';

const GymApp = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [workoutPlan, setWorkoutPlan] = useState({
    goal: '',
    level: '',
    schedule: [],
  });

  const screens = {
    welcome: <WelcomeScreen setCurrentScreen={setCurrentScreen} setWorkoutPlan={setWorkoutPlan} workoutPlan={workoutPlan} />,
    goals: <GoalsScreen setCurrentScreen={setCurrentScreen} setWorkoutPlan={setWorkoutPlan} workoutPlan={workoutPlan} />,
    // schedule: <ScheduleScreen setCurrentScreen={setCurrentScreen} />,
    // map: <GymMapScreen setCurrentScreen={setCurrentScreen} />,
  };

  return screens[currentScreen];
};

export default GymApp;