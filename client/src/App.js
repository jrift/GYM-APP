import Welcome from "./GymApp/screens/Welcome/Welcome";
import Goals from "./GymApp/screens/Goals/Goals";
import Schedule from "./GymApp/screens/Schedule/Schedule";
import GymMap from "./GymApp/screens/GymMap/GymMap";
import Login from "./GymApp/screens/Login";
import Register from "./GymApp/screens/Register";
import TrainerUI from "./GymApp/screens/TClientPage/TClientPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/map" element={<GymMap />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/trainer-dash" element={<TrainerUI />} />
    </Routes>
  );
}

export default App;
