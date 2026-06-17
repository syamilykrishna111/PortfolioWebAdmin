import React from "react";

const Register = () => {
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
            src="../src/assets/images/png/dasher-ui-bootstrap-5.jpg"
            alt="adminHMD dashboard interface"
          />
        </div>

        <form className="needs-validation" noValidate>
          <div className="mb-4">
            <p className="eyebrow mb-1">Secure Access</p>

            <h1 className="h3 mb-1">Register</h1>

            <p className="text-muted mb-0">Create your adminHMD account.</p>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="registerName">
              Full Name
            </label>

            <input
              className="form-control"
              id="registerName"
              type="text"
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

          <button className="btn btn-primary w-100" type="submit">
            <i className="bi bi-person-plus" aria-hidden="true"></i> Create
            Account
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? <a href="/login">Sign In</a>
        </div>
      </section>
    </main>
  );
};

export default Register;
