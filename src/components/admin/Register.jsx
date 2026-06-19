"use client";

import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/register`;

      console.log("API URL:", apiUrl);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const text = await response.text();

      console.log("Status:", response.status);
      console.log("Response:", text);

      if (response.ok) {
        alert("Registration Successful");

        setFormData({
          name: "",
          email: "",
          password: "",
        });
      } else {
        alert(text || "Registration Failed");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <a className="auth-brand" href="/">
          <span className="brand-icon">
            <i className="bi bi-grid-1x2-fill" aria-hidden="true"></i>
          </span>

          <span>
            <strong>adminHMD</strong>
            <small>Create your adminHMD account.</small>
          </span>
        </a>

        <div className="auth-visual">
          <img
            src="../../assets/images/png/dasher-ui-bootstrap-5.jpg"
            alt="adminHMD dashboard interface"
          />
        </div>

        <form className="needs-validation" noValidate onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="registerName">
              Full Name
            </label>

            <input
              className="form-control"
              id="registerName"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <div className="invalid-feedback">Full name is required.</div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="registerEmail">
              Email Address
            </label>

            <input
              className="form-control"
              id="registerEmail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <div className="invalid-feedback">Enter a valid email.</div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="registerPassword">
              Password
            </label>

            <input
              className="form-control"
              id="registerPassword"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength={6}
              required
            />

            <div className="invalid-feedback">
              Password must be at least 6 characters.
            </div>
          </div>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="terms"
              required
            />

            <label className="form-check-label" htmlFor="terms">
              I agree to the terms
            </label>

            <div className="invalid-feedback">
              You must agree before continuing.
            </div>
          </div>

          <button
            className="btn btn-primary w-100"
            type="submit"
            disabled={loading}
          >
            <i className="bi bi-person-plus" aria-hidden="true"></i>{" "}
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? <a href="/admin/login">Sign In</a>
        </div>
      </section>
    </main>
  );
};

export default Register;
