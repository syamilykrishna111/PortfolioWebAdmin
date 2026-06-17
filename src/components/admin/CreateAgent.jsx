function CreateAgent() {
  return (
    <AdminLayout>
      <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          <div className="page-heading">
            <div className="page-heading-copy">
              <span className="page-icon">
                <i className="bi bi-robot"></i>
              </span>
              <div>
                <p className="eyebrow mb-1">Agent Management</p>
                <h1 className="h3 mb-1">Create Agent</h1>
                <p className="text-muted mb-0">
                  Set up a new intelligent agent with capabilities and
                  configurations.
                </p>
              </div>
            </div>

            <div className="heading-actions">
              <button className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-arrow-left"></i> Back
              </button>
            </div>
          </div>

          <section className="row g-3">
            {/* Form Section */}
            <div className="col-12 col-xl-8">
              <form className="panel">
                <div className="panel-header">
                  <div>
                    <h2 className="h5 mb-1 section-title">
                      <i className="bi bi-robot"></i>
                      <span> Agent Information</span>
                    </h2>
                    <p className="text-muted mb-0">
                      Define the agent's core properties and settings.
                    </p>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="agentName" className="form-label">
                      Agent Name
                    </label>
                    <input
                      type="text"
                      id="agentName"
                      className="form-control"
                      placeholder="e.g., Customer Support Bot"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="agentType" className="form-label">
                      Agent Type
                    </label>
                    <select id="agentType" className="form-select">
                      <option value="">Choose type</option>
                      <option>Chatbot</option>
                      <option>Task Automation</option>
                      <option>Data Analysis</option>
                      <option>Content Generation</option>
                      <option>Custom</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      id="description"
                      rows="3"
                      className="form-control"
                      placeholder="Describe what this agent does and its primary responsibilities"
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="team" className="form-label">
                      Assigned Team
                    </label>
                    <select id="team" className="form-select">
                      <option value="">Choose team</option>
                      <option>Operations</option>
                      <option>Sales</option>
                      <option>Content</option>
                      <option>Finance</option>
                      <option>Support</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="owner" className="form-label">
                      Owner / Manager
                    </label>
                    <select id="owner" className="form-select">
                      <option value="">Choose owner</option>
                      <option>Admin Hasan</option>
                      <option>Team Lead</option>
                      <option>Manager</option>
                      <option>Supervisor</option>
                    </select>
                  </div>

                  {/* Capabilities */}
                  <div className="col-12">
                    <label className="form-label">Capabilities</label>

                    <div className="capability-checkboxes">
                      {[
                        "Natural Language Processing",
                        "Task Automation",
                        "Analytics & Reporting",
                        "API Integration",
                        "Scheduling",
                        "Alert Management",
                      ].map((capability, index) => (
                        <div className="form-check" key={index}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`cap${index}`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`cap${index}`}
                          >
                            {capability}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="status" className="form-label">
                      Status
                    </label>
                    <select id="status" className="form-select">
                      <option>Draft</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="priority" className="form-label">
                      Priority Level
                    </label>
                    <select id="priority" className="form-select">
                      <option>Low</option>
                      <option>Medium</option>
                      <option selected>High</option>
                      <option>Critical</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="notes" className="form-label">
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      rows="3"
                      className="form-control"
                      placeholder="Any additional configuration details or special requirements"
                    ></textarea>
                  </div>
                </div>

                <div className="d-flex flex-wrap justify-content-end gap-2 mt-4">
                  <button type="button" className="btn btn-outline-secondary">
                    Cancel
                  </button>

                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-check-circle"></i> Create Agent
                  </button>
                </div>
              </form>
            </div>

            {/* Checklist */}
            <div className="col-12 col-xl-4">
              <div className="panel h-100">
                <h2 className="h5 mb-3 section-title">
                  <i className="bi bi-checklist"></i>
                  <span> Setup Checklist</span>
                </h2>

                <div className="activity-list">
                  {[
                    {
                      color: "success",
                      title: "Define Purpose",
                      text: "Clearly specify agent objectives and use cases.",
                    },
                    {
                      color: "primary",
                      title: "Configure Capabilities",
                      text: "Enable features relevant to agent responsibilities.",
                    },
                    {
                      color: "warning",
                      title: "Assign Team",
                      text: "Link agent to responsible team for management.",
                    },
                    {
                      color: "info",
                      title: "Set Permissions",
                      text: "Configure data access and action rights.",
                    },
                    {
                      color: "secondary",
                      title: "Test & Deploy",
                      text: "Validate behavior before production activation.",
                    },
                  ].map((item, index) => (
                    <div className="activity-item" key={index}>
                      <span className={`activity-dot bg-${item.color}`}></span>

                      <div>
                        <p className="mb-1 fw-semibold">{item.title}</p>
                        <p className="text-muted small mb-0">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </AdminLayout>
  );
}

export default CreateAgent;
