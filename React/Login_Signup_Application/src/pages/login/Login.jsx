import React from "react";
import { useState } from "react";
import "./login.css";
const Login = ({ pageHandler }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const resetForm = () => {
    setForm({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sessionToken = `${form.email}${Math.random() * 100000}${
      form.password
    }${Math.random() * 100000000}`;
    localStorage.setItem("session", sessionToken);
    console.log({ form, sessionToken });
    resetForm();
  };
  return (
    <div className="mainContainer">
      <h3>Login </h3>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            aria-autocomplete="none"
            name="email"
            value={form.email}
            required
            onChange={handleChange}
            className="input"
            type="email"
            placeholder="Email"
          />
          <input
            aria-autocomplete="none"
            name="password"
            value={form.password}
            required
            onChange={handleChange}
            className="input"
            type="password"
            placeholder="password"
          />
          <button type="submit" className="gradient submit">
            Login
          </button>
          <p onClick={pageHandler} className="signup-text">
            New User? Register Now.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
