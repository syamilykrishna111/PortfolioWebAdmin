import TestimonialsTable from "../../components/admin/TestimonialsTable";
import AdminLayout from "../../layouts/admin/AdminLayout";
import Link from "next/link";

function Testimonials() {
  return (
    <AdminLayout>
      <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          {/* Page Heading */}
          <div className="page-heading">
            <div className="page-heading-copy">
              <span className="page-icon">
                <i className="bi bi-chat-quote"></i>
              </span>

              <div>
                <p className="eyebrow mb-1">Content Management</p>

                <h1 className="h3 mb-1">Testimonials</h1>

                <p className="text-muted mb-0">
                  Manage customer feedback, ratings, and featured reviews.
                </p>
              </div>
            </div>

            <div className="heading-actions">
              <button className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-download"></i> Export
              </button>

              <Link href="/add-testimonial" className="btn btn-primary btn-sm">
                <i className="bi bi-plus-circle"></i> Add Testimonial
              </Link>
            </div>
          </div>

          {/* Table */}
          <section className="panel mt-3">
            <div className="panel-header">
              <div>
                <h2 className="h5 mb-1 section-title">
                  <i className="bi bi-chat-quote"></i>
                  <span>Testimonials List</span>
                </h2>

                <p className="text-muted mb-0">
                  Manage customer reviews and ratings.
                </p>
              </div>

              <Link
                href="/testimonials"
                className="btn btn-outline-secondary btn-sm"
              >
                Manage Testimonials
              </Link>
            </div>

            <TestimonialsTable />
          </section>
        </div>
      </main>
    </AdminLayout>
  );
}

export default Testimonials;
