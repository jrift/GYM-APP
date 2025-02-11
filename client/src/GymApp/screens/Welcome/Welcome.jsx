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
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

// const Welcome = () => {
//   const navigate = useNavigate();

//   const levels = ["Beginner", "Intermediate", "Advanced"];
//   const [currentScreen, setCurrentScreen] = useState("welcome");
//   const [workoutPlan, setWorkoutPlan] = useState({
//     goal: "",
//     level: "",
//     schedule: [],
//   });

//   const { currentUser } = useContext(AuthContext);

//   const goToSignIn = () => {
//     navigate("/login");
//   };

//   const continueAsGuest = () => {
//     navigate("/goals")
//   }

//   return (
//     <div className={styles.screen}>
//       <div className={styles.contentContainer}>
//         <div className={styles.headerSection}>
//           <h1 className={styles.h1}>Welcome to GMAP</h1>
//           <p className={styles.subtitle}>
//             Select your experience level to get started
//           </p>
//         </div>

//         <div className={styles.buttonContainer}>
//           {["Beginner", "Intermediate", "Advanced"].map((level) => (
//             <button
//               key={level}
//               className={styles.primaryButton}
//               onClick={() => {
//                 setWorkoutPlan({ ...workoutPlan, level });
//                 setCurrentScreen("goals");
//               }}
//             >
//               {level}
//             </button>
//           ))}

//           <div className={styles.secondaryButtons}>
//             <button className={styles.outlineButton} onClick={goToSignIn}>Sign In</button>
//             <button className={styles.ghostButton} onClick={continueAsGuest}>Continue as Guest</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Welcome;

// import React from "react";

// const Home = () => {
//     return (
//         <div>Home</div>
//     )
// }

// export default Home

/* <button onClick={goToLogin}>Go To Login</button> */
