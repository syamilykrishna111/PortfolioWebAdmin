import AdminLayout from "../../layouts/admin/AdminLayout";

function Charts() {
  return (
    <AdminLayout>
      <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          <div className="page-heading">
            <div className="page-heading-copy">
              <span className="page-icon">
                <i className="bi bi-bar-chart-line"></i>
              </span>

              <div>
                <p className="eyebrow mb-1">Analytics</p>
                <h1 className="h3 mb-1">Charts</h1>
                <p className="text-muted mb-0">
                  Visualize revenue, channels, and operating performance.
                </p>
              </div>
            </div>
          </div>

          <section className="row g-3 mt-1">
            {/* Revenue Trend */}
            <div className="col-12 col-xl-8">
              <div className="panel h-100">
                <div className="panel-header">
                  <div>
                    <h2 className="h5 mb-1 section-title">
                      <i className="bi bi-bar-chart-line"></i>
                      <span> Revenue Trend</span>
                    </h2>

                    <p className="text-muted mb-0">
                      Static chart component ready for Chart.js integration.
                    </p>
                  </div>
                </div>

                <div className="chart-bars" aria-label="Revenue chart">
                  <div className="chart-column bar-42">
                    <span></span>
                    <small>Jan</small>
                  </div>

                  <div className="chart-column bar-58">
                    <span></span>
                    <small>Feb</small>
                  </div>

                  <div className="chart-column bar-51">
                    <span></span>
                    <small>Mar</small>
                  </div>

                  <div className="chart-column bar-72">
                    <span></span>
                    <small>Apr</small>
                  </div>

                  <div className="chart-column bar-66">
                    <span></span>
                    <small>May</small>
                  </div>

                  <div className="chart-column bar-83">
                    <span></span>
                    <small>Jun</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Channel Mix */}
            <div className="col-12 col-xl-4">
              <div className="panel h-100">
                <div className="panel-header">
                  <div>
                    <h2 className="h5 mb-1 section-title">
                      <i className="bi bi-pie-chart"></i>
                      <span> Channel Mix</span>
                    </h2>

                    <p className="text-muted mb-0">
                      Revenue contribution by source.
                    </p>
                  </div>
                </div>

                <div className="donut-chart mx-auto">
                  <span>68%</span>
                </div>

                <div className="legend-list mt-4">
                  <div>
                    <span className="legend-dot bg-primary"></span>
                    Direct sales
                    <strong>42%</strong>
                  </div>

                  <div>
                    <span className="legend-dot bg-success"></span>
                    Marketplace
                    <strong>26%</strong>
                  </div>

                  <div>
                    <span className="legend-dot bg-warning"></span>
                    Partners
                    <strong>18%</strong>
                  </div>

                  <div>
                    <span className="legend-dot bg-danger"></span>
                    Other
                    <strong>14%</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </AdminLayout>
  );
}

export default Charts;
