import errorImage from "../assets/images/svg/404.svg";

function NotFound() {
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
            src={errorImage}
            alt="Page not found illustration"
          />

          <div className="error-code">404</div>

          <h1 className="h3 mb-2">Page Not Found</h1>

          <p className="text-muted mb-4">
            The page you are looking for does not exist or has been moved.
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

export default NotFound;
