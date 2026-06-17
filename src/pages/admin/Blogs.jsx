import BlogsTable from "../../components/admin/BlogsTable";
import AdminLayout from "../../layouts/admin/AdminLayout";
import Link from "next/link";

function Blogs() {
  return (
    <AdminLayout>
      <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          {/* Page Heading */}
          <div className="page-heading">
            <div className="page-heading-copy">
              <span className="page-icon">
                <i className="bi bi-journal-text"></i>
              </span>

              <div>
                <p className="eyebrow mb-1">Content Management</p>

                <h1 className="h3 mb-1">Blogs</h1>

                <p className="text-muted mb-0">
                  Manage blog posts, categories, and publishing status.
                </p>
              </div>
            </div>

            <div className="heading-actions">
              <button className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-download"></i> Export
              </button>

              <Link href="/add-blog" className="btn btn-primary btn-sm">
                <i className="bi bi-plus-circle"></i> Add Blog
              </Link>
            </div>
          </div>

          {/* Table */}
          <section className="panel mt-3">
            <div className="panel-header">
              <div>
                <h2 className="h5 mb-1 section-title">
                  <i className="bi bi-journal-text"></i>
                  <span>Blog Posts</span>
                </h2>

                <p className="text-muted mb-0">
                  Manage blog articles and publishing workflow.
                </p>
              </div>

              <Link href="/blogs" className="btn btn-outline-secondary btn-sm">
                Manage Blogs
              </Link>
            </div>

            <BlogsTable />
          </section>
        </div>
      </main>
    </AdminLayout>
  );
}

export default Blogs;
