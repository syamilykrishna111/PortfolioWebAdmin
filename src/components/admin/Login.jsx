"use client";

import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);

        window.location.href = "/admin/dashboard";
      } else {
        alert(data.message);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-body">
      <button
        className="icon-button theme-toggle auth-theme-toggle"
        type="button"
        data-theme-toggle
        aria-label="Switch color theme"
        title="Switch color theme"
      >
        <i className="bi bi-moon-stars" data-theme-icon aria-hidden="true"></i>
      </button>

      <main className="auth-page">
        <section className="auth-card">
          <a className="auth-brand" href="/">
            <span className="brand-icon">
              <i className="bi bi-grid-1x2-fill" aria-hidden="true"></i>
            </span>
            <span>
              <strong>adminHMD</strong>
              <small>Sign in to your admin workspace.</small>
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
              <label className="form-label" htmlFor="loginEmail">
                Email address
              </label>

              <input
                className="form-control"
                id="loginEmail"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <div className="invalid-feedback">Enter a valid email.</div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>

                <a className="small fw-semibold" href="/forgot-password">
                  Forgot?
                </a>
              </div>

              <input
                className="form-control"
                id="loginPassword"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                minLength="6"
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
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>

            <button
              className="btn btn-primary w-100"
              type="submit"
              disabled={loading}
            >
              <i className="bi bi-box-arrow-in-right" aria-hidden="true"></i>{" "}
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="auth-footer">
            New here? <a href="/admin/register">Create an account</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
