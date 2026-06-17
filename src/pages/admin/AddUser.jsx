import AdminLayout from "../../layouts/admin/AdminLayout";
import AddUserForm from "../../components/admin/AddUserForm";
import AccessChecklist from "../../components/admin/AccessChecklist";

function AddUser() {
  return (
    <AdminLayout>
      <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          <div className="page-heading">
            <div className="page-heading-copy">
              <span className="page-icon">
                <i className="bi bi-person-plus"></i>
              </span>

              <div>
                <p className="eyebrow mb-1">Management</p>

                <h1 className="h3 mb-1">Add User</h1>

                <p className="text-muted mb-0">
                  Create a new user account with role and team assignments.
                </p>
              </div>
            </div>
          </div>

          <section className="row g-3">
            <div className="col-12 col-xl-8">
              <AddUserForm />
            </div>

            <div className="col-12 col-xl-4">
              <AccessChecklist />
            </div>
          </section>
        </div>
      </main>
    </AdminLayout>
  );
}

export default AddUser;
