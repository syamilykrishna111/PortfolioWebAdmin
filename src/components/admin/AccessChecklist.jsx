function AccessChecklist() {
  return (
    <div className="panel h-100">
      <h2 className="h5 mb-3 section-title">
        <i className="bi bi-list-check" aria-hidden="true"></i>
        <span>Access Checklist</span>
      </h2>

      <div className="activity-list">
        <div className="activity-item">
          <span className="activity-dot bg-success"></span>

          <div>
            <p className="mb-1 fw-semibold">Assign role</p>

            <p className="text-muted small mb-0">
              Start with the least privileged role.
            </p>
          </div>
        </div>

        <div className="activity-item">
          <span className="activity-dot bg-primary"></span>

          <div>
            <p className="mb-1 fw-semibold">Add team</p>

            <p className="text-muted small mb-0">
              Team ownership controls dashboards.
            </p>
          </div>
        </div>

        <div className="activity-item">
          <span className="activity-dot bg-warning"></span>

          <div>
            <p className="mb-1 fw-semibold">Send invite</p>

            <p className="text-muted small mb-0">
              Users receive activation by email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccessChecklist;
