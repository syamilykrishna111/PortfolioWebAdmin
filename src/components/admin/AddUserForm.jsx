function AddUserForm() {
  return (
    <form className="panel needs-validation" noValidate>
      <div className="panel-header">
        <div>
          <h2 className="h5 mb-1 section-title">
            <i className="bi bi-person-plus"></i>
            <span>User Information</span>
          </h2>

          <p className="text-muted mb-0">
            Create a user account with validated fields.
          </p>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="firstName">
            First name
          </label>

          <input className="form-control" id="firstName" type="text" required />

          <div className="invalid-feedback">First name is required.</div>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="lastName">
            Last name
          </label>

          <input className="form-control" id="lastName" type="text" required />

          <div className="invalid-feedback">Last name is required.</div>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="email">
            Email
          </label>

          <input className="form-control" id="email" type="email" required />

          <div className="invalid-feedback">Enter a valid email.</div>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="phone">
            Phone
          </label>

          <input className="form-control" id="phone" type="tel" required />

          <div className="invalid-feedback">Phone number is required.</div>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="role">
            Role
          </label>

          <select className="form-select" id="role" required>
            <option value="">Choose role</option>
            <option>Admin</option>
            <option>Manager</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>

          <div className="invalid-feedback">Choose a role.</div>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="team">
            Team
          </label>

          <select className="form-select" id="team" required>
            <option value="">Choose team</option>
            <option>Operations</option>
            <option>Sales</option>
            <option>Content</option>
            <option>Finance</option>
          </select>

          <div className="invalid-feedback">Choose a team.</div>
        </div>

        <div className="col-12">
          <label className="form-label" htmlFor="notes">
            Notes
          </label>

          <textarea
            className="form-control"
            id="notes"
            rows="4"
            placeholder="Optional onboarding notes"
          ></textarea>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-end gap-2 mt-4">
        <a className="btn btn-outline-secondary" href="/users">
          Cancel
        </a>

        <button className="btn btn-primary" type="submit">
          <i className="bi bi-person-check"></i> Create User
        </button>
      </div>
    </form>
  );
}

export default AddUserForm;
