import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevents page refresh
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  // console.log(inputs); logs the inputs

  return (
    <div className="register">
      <h1>Register</h1>
      <form>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          onClick={handleRegister}
        >
          Register
        </button>
        {err && <p>User already exists</p>}
      </form>
    </div>
  );
};

export default Register;
