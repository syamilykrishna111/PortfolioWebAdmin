import maintenanceImage from "../assets/images/svg/maintenance.svg";

function ServerError() {
  return (
    <div className="auth-body">
      <button
        className="icon-button theme-toggle auth-theme-toggle"
        type="button"
        aria-label="Switch color theme"
        title="Switch color theme"
      >
        <i className="bi bi-moon-stars" aria-hidden="true"></i>
      </button>

      <main className="error-page">
        <section className="error-card">
          <a className="auth-brand justify-content-center" href="/">
            <span className="brand-icon">
              <i className="bi bi-grid-1x2-fill" aria-hidden="true"></i>
            </span>

            <span>
              <strong>adminHMD</strong>
              <small>Error Center</small>
            </span>
          </a>

          <img
            className="error-illustration"
            src={maintenanceImage}
            alt="Maintenance illustration"
          />

          <div className="error-code">500</div>

          <h1 className="h3 mb-2">Server Error</h1>

          <p className="text-muted mb-4">
            Something went wrong on our side. Please try again or return to the
            dashboard.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-2">
            <a className="btn btn-primary" href="/">
              <i className="bi bi-speedometer2" aria-hidden="true"></i> Back to
              Dashboard
            </a>

            <a className="btn btn-outline-secondary" href="/login">
              Sign In
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ServerError;
