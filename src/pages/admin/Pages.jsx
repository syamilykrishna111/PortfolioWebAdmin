import PagesTable from "../../components/admin/PagesTable";
import AdminLayout from "../../layouts/admin/AdminLayout";
import Link from "next/link";

function Pages() {
  return (
    <AdminLayout>
      <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          {/* Page Heading */}
          <div className="page-heading">
            <div className="page-heading-copy">
              <span className="page-icon">
                <i className="bi bi-file-earmark-text"></i>
              </span>

              <div>
                <p className="eyebrow mb-1">Content Management</p>

                <h1 className="h3 mb-1">Pages</h1>

                <p className="text-muted mb-0">
                  Create, manage, and organize website pages and their
                  publishing status.
                </p>
              </div>
            </div>

            <div className="heading-actions">
              <button className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-download"></i> Export
              </button>

              <Link href="/add-page" className="btn btn-primary btn-sm">
                <i className="bi bi-plus-circle"></i> Add Page
              </Link>
            </div>
          </div>

          {/* Pages Table */}
          <section className="panel mt-3">
            <div className="panel-header">
              <div>
                <h2 className="h5 mb-1 section-title">
                  <i className="bi bi-file-earmark-text" aria-hidden="true"></i>

                  <span>Pages List</span>
                </h2>

                <p className="text-muted mb-0">
                  Review page details, publishing status, and updates.
                </p>
              </div>

              <Link className="btn btn-outline-secondary btn-sm" href="/pages">
                Manage Pages
              </Link>
            </div>

            <PagesTable />
          </section>
        </div>
      </main>
    </AdminLayout>
  );
}

export default Pages;
