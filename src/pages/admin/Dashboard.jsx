import RecentUsersTable from "../../components/admin/RecentUsersTable";

import Link from "next/link";
import AdminLayout from "../../layouts/admin/AdminLayout";

function Dashboard() {
  return (
    <AdminLayout>
      <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          {/* Page Heading */}
          <div className="page-heading">
            <div className="page-heading-copy">
              <span className="page-icon">
                <i className="bi bi-speedometer2"></i>
              </span>

              <div>
                <p className="eyebrow mb-1">Overview</p>

                <h1 className="h3 mb-1">Dashboard</h1>

                <p className="text-muted mb-0">
                  Monitor performance, sales, users, and support from one clean
                  workspace.
                </p>
              </div>
            </div>

            <div className="heading-actions">
              <button className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-download"></i> Export
              </button>

              <button className="btn btn-primary btn-sm">
                <i className="bi bi-file-earmark-plus"></i> Create Report
              </button>
            </div>
          </div>

          {/* Metrics */}
          <section className="row g-3 mt-1">
            {/* Revenue */}
            <div className="col-12 col-sm-6 col-xl-3">
              <article className="metric-card metric-primary">
                <div className="metric-top">
                  <span className="metric-label">Revenue</span>

                  <span className="metric-icon">
                    <i className="bi bi-currency-dollar"></i>
                  </span>
                </div>

                <div className="metric-value">$48,240</div>

                <div className="metric-meta">
                  <span className="text-success">+12.5%</span>
                  <span>from last month</span>
                </div>
              </article>
            </div>

            {/* Orders */}
            <div className="col-12 col-sm-6 col-xl-3">
              <article className="metric-card metric-success">
                <div className="metric-top">
                  <span className="metric-label">Orders</span>

                  <span className="metric-icon">
                    <i className="bi bi-bag-check"></i>
                  </span>
                </div>

                <div className="metric-value">1,284</div>

                <div className="metric-meta">
                  <span className="text-success">+8.2%</span>
                  <span>new orders</span>
                </div>
              </article>
            </div>

            {/* Customers */}
            <div className="col-12 col-sm-6 col-xl-3">
              <article className="metric-card metric-warning">
                <div className="metric-top">
                  <span className="metric-label">Customers</span>

                  <span className="metric-icon">
                    <i className="bi bi-people"></i>
                  </span>
                </div>

                <div className="metric-value">8,742</div>

                <div className="metric-meta">
                  <span className="text-success">+5.1%</span>
                  <span>active users</span>
                </div>
              </article>
            </div>

            {/* Tickets */}
            <div className="col-12 col-sm-6 col-xl-3">
              <article className="metric-card metric-danger">
                <div className="metric-top">
                  <span className="metric-label">Tickets</span>

                  <span className="metric-icon">
                    <i className="bi bi-life-preserver"></i>
                  </span>
                </div>

                <div className="metric-value">36</div>

                <div className="metric-meta">
                  <span className="text-danger">3 urgent</span>
                  <span>need review</span>
                </div>
              </article>
            </div>
          </section>

          {/* Sales + Activity */}
          <section className="row g-3 mt-1">
            <div className="col-12 col-xl-8">
              <div className="panel">
                <div className="panel-header">
                  <div>
                    <h2 className="h5 mb-1 section-title">
                      <i className="bi bi-graph-up-arrow"></i>
                      <span>Sales Performance</span>
                    </h2>

                    <p className="text-muted mb-0">
                      Monthly revenue compared with operational targets.
                    </p>
                  </div>

                  <Link className="btn btn-light btn-sm" href="/charts">
                    View Details
                  </Link>
                </div>

                <div className="chart-bars">
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

            <div className="col-12 col-xl-4">
              <div className="panel h-100">
                <div className="panel-header">
                  <div>
                    <h2 className="h5 mb-1 section-title">
                      <i className="bi bi-activity"></i>
                      <span>Team Activity</span>
                    </h2>

                    <p className="text-muted mb-0">
                      Recent operational updates.
                    </p>
                  </div>
                </div>

                <div className="activity-list">{/* Activity items */}</div>
              </div>
            </div>
          </section>

          {/* Recent Users Table */}
          <RecentUsersTable />
        </div>
      </main>
    </AdminLayout>
  );
}

export default Dashboard;
