import resetImage from "../assets/images/png/dasher-ui-bootstrap-5.jpg";

function ForgotPassword() {
  return (
    <div className="auth-body">
      <button
        className="icon-button theme-toggle auth-theme-toggle"
        type="button"
        aria-label="Switch color theme"
        title="Switch color theme"
      >
        <i className="bi bi-moon-stars"></i>
      </button>

      <main className="auth-page">
        <section className="auth-card">
          <a className="auth-brand" href="/">
            <span className="brand-icon">
              <i className="bi bi-grid-1x2-fill"></i>
            </span>

            <span>
              <strong>adminHMD</strong>
              <small>Get a reset link for your account.</small>
            </span>
          </a>

          <div className="auth-visual">
            <img src={resetImage} alt="adminHMD dashboard interface" />
          </div>

          <form>
            <div className="mb-4">
              <p className="eyebrow mb-1">Secure Access</p>
              <h1 className="h3 mb-1">Forgot Password</h1>
              <p className="text-muted mb-0">
                Get a reset link for your account.
              </p>
            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="forgotEmail">
                Email address
              </label>

              <input
                className="form-control"
                id="forgotEmail"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <button className="btn btn-primary w-100" type="submit">
              <i className="bi bi-envelope-arrow-up"></i> Send Reset Link
            </button>
          </form>

          <p className="text-muted small mt-3 mb-0">
            Check your inbox and spam folder after submitting.
          </p>

          <div className="auth-footer">
            Remembered it? <a href="/login">Back to login</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ForgotPassword;
