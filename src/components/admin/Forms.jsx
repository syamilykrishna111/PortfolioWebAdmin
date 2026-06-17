import AdminLayout from "../../layouts/admin/AdminLayout";

function Forms() {
  return (
    <AdminLayout>
      <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          <div className="page-heading">
            <div className="page-heading-copy">
              <span className="page-icon">
                <i className="bi bi-ui-checks-grid"></i>
              </span>

              <div>
                <p className="eyebrow mb-1">Inputs</p>
                <h1 className="h3 mb-1">Forms</h1>
                <p className="text-muted mb-0">
                  Reusable form controls, validation states, and field layouts.
                </p>
              </div>
            </div>
          </div>

          <section className="row g-3">
            {/* Validation Form */}
            <div className="col-12 col-xl-7">
              <form className="panel">
                <div className="panel-header">
                  <div>
                    <h2 className="h5 mb-1 section-title">
                      <i className="bi bi-ui-checks-grid"></i>
                      <span> Validation Form</span>
                    </h2>
                    <p className="text-muted mb-0">
                      Bootstrap-ready fields with custom validation feedback.
                    </p>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="formName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="formName"
                      className="form-control"
                      required
                    />
                    <div className="invalid-feedback">
                      Full name is required.
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="formEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="formEmail"
                      className="form-control"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid email is required.
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="formPlan" className="form-label">
                      Plan
                    </label>
                    <select id="formPlan" className="form-select" required>
                      <option value="">Choose Plan</option>
                      <option>Starter</option>
                      <option>Business</option>
                      <option>Enterprise</option>
                    </select>
                    <div className="invalid-feedback">Choose a plan.</div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="formBudget" className="form-label">
                      Budget
                    </label>
                    <input
                      type="number"
                      id="formBudget"
                      className="form-control"
                      min="1"
                      required
                    />
                    <div className="invalid-feedback">
                      Enter a valid budget.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="formMessage" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="formMessage"
                      rows="5"
                      className="form-control"
                      required
                    ></textarea>
                    <div className="invalid-feedback">Message is required.</div>
                  </div>
                </div>

                <div className="d-flex justify-content-end mt-4">
                  <button className="btn btn-primary" type="submit">
                    <i className="bi bi-send"></i> Submit Form
                  </button>
                </div>
              </form>
            </div>

            {/* Input States */}
            <div className="col-12 col-xl-5">
              <div className="panel h-100">
                <h2 className="h5 mb-3 section-title">
                  <i className="bi bi-input-cursor-text"></i>
                  <span> Input States</span>
                </h2>

                <input
                  className="form-control mb-3"
                  defaultValue="Default input"
                />

                <input
                  className="form-control is-valid mb-3"
                  defaultValue="Valid input"
                />

                <input
                  className="form-control is-invalid mb-3"
                  defaultValue="Invalid input"
                />

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="sampleCheck"
                    defaultChecked
                  />

                  <label className="form-check-label" htmlFor="sampleCheck">
                    Sample checkbox
                  </label>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </AdminLayout>
  );
}

export default Forms;
