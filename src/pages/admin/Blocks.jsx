import BlocksTable from "../../components/admin/BlocksTable";
import AdminLayout from "../../layouts/admin/AdminLayout";
import Link from "next/link";

function Blocks() {
  return (
    <AdminLayout>
      <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          {/* Page Heading */}
          <div className="page-heading">
            <div className="page-heading-copy">
              <span className="page-icon">
                <i className="bi bi-grid-3x3-gap"></i>
              </span>

              <div>
                <p className="eyebrow mb-1">Content Management</p>

                <h1 className="h3 mb-1">Blocks</h1>

                <p className="text-muted mb-0">
                  Manage reusable UI blocks like hero sections, banners, and
                  CTAs.
                </p>
              </div>
            </div>

            <div className="heading-actions">
              <button className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-download"></i> Export
              </button>

              <Link href="/add-block" className="btn btn-primary btn-sm">
                <i className="bi bi-plus-circle"></i> Add Block
              </Link>
            </div>
          </div>

          {/* Table */}
          <section className="panel mt-3">
            <div className="panel-header">
              <div>
                <h2 className="h5 mb-1 section-title">
                  <i className="bi bi-grid-3x3-gap"></i>
                  <span>Blocks List</span>
                </h2>

                <p className="text-muted mb-0">
                  Manage UI blocks used across the website.
                </p>
              </div>

              <Link href="/blocks" className="btn btn-outline-secondary btn-sm">
                Manage Blocks
              </Link>
            </div>

            <BlocksTable />
          </section>
        </div>
      </main>
    </AdminLayout>
  );
}

export default Blocks;
