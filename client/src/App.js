import Welcome from "./GymApp/screens/Welcome/Welcome";
import Goals from "./GymApp/screens/Goals/Goals";
import Schedule from "./GymApp/screens/Schedule/Schedule";
// Gym Map
import Login from "./GymApp/screens/Login";
import Register from "./GymApp/screens/Register";

import "./App.css";
import {
  Route, Routes,
} from "react-router-dom";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/goals" element={<Goals />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
  );
}

export default App;
