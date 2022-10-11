import React from "react";
import { useState } from "react";
import "./signup.css";
const Signup = ({ pageHandler }) => {
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
    console.log(form);
    resetForm();
  };

  return (
    <div className="mainContainer">
      <h3>Sign Up </h3>
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
            Signup
          </button>
          <p onClick={pageHandler} className="signup-text">
            Already Register? Login Now.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
