"use client";
import UsersTable from "../../components/admin/UsersTable";
import AdminLayout from "../../layouts/admin/AdminLayout";

import Link from "next/link";

function Users() {
  return (
    <AdminLayout>
      <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          {/* Page Heading */}
          <div className="page-heading">
            <div className="page-heading-copy">
              <span className="page-icon">
                <i className="bi bi-people"></i>
              </span>

              <div>
                <p className="eyebrow mb-1">Management</p>

                <h1 className="h3 mb-1">Users</h1>

                <p className="text-muted mb-0">
                  Review accounts, roles, account status, and team ownership.
                </p>
              </div>
            </div>

            <div className="heading-actions">
              <button className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-download"></i> Export
              </button>

              <Link href="/add-user" className="btn btn-primary btn-sm">
                <i className="bi bi-person-plus"></i> Add User
              </Link>
            </div>
          </div>

          {/* Users Table */}

          <section className="panel mt-3">
            <div className="panel-header">
              <div>
                <h2 className="h5 mb-1 section-title">
                  <i className="bi bi-people" aria-hidden="true"></i>
                  <span>Recent Users</span>
                </h2>

                <p className="text-muted mb-0">
                  Latest account activity across the workspace.
                </p>
              </div>

              <Link className="btn btn-outline-secondary btn-sm" href="/users">
                Manage Users
              </Link>
            </div>
            {/* Use the table component you already created */}
            {/* <UsersTable /> */}
            <UsersTable />
          </section>
        </div>
      </main>
    </AdminLayout>
  );
}

export default Users;
