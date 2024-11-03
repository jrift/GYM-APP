import Login from "./pages/Login";
import Home from "./pages/Home";

import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route, Router, Routes,
  Link,
} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
