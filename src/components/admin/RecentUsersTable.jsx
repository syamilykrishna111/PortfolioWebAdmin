import Link from "next/link";
import Image from "next/image";

function RecentUsersTable() {
  const users = [
    {
      id: 1,
      name: "Sarah Ahmed",
      email: "sarah@example.com",
      role: "Admin",
      team: "Operations",
      status: "Active",
      joined: "Jan 12, 2026",
      avatar: "/assets/images/avatar/avatar-1.jpg",
    },
    {
      id: 2,
      name: "Rafi Khan",
      email: "rafi@example.com",
      role: "Manager",
      team: "Sales",
      status: "Active",
      joined: "Feb 03, 2026",
      avatar: "/assets/images/avatar/avatar-2.jpg",
    },
    {
      id: 3,
      name: "Nadia Islam",
      email: "nadia@example.com",
      role: "Editor",
      team: "Content",
      status: "Pending",
      joined: "Mar 18, 2026",
      avatar: "/assets/images/avatar/avatar-3.jpg",
    },
    {
      id: 4,
      name: "Mina Torres",
      email: "mina@example.com",
      role: "Viewer",
      team: "Finance",
      status: "Suspended",
      joined: "Apr 07, 2026",
      avatar: "/assets/images/avatar/avatar-4.jpg",
    },
    {
      id: 5,
      name: "Jon Oliver",
      email: "jon@example.com",
      role: "Analyst",
      team: "Data",
      status: "Active",
      joined: "Apr 22, 2026",
      avatar: "/assets/images/avatar/avatar-5.jpg",
    },
  ];

  const getBadgeClass = (status) => {
    switch (status) {
      case "Active":
        return "text-bg-success";
      case "Pending":
        return "text-bg-warning";
      case "Suspended":
        return "text-bg-secondary";
      default:
        return "text-bg-primary";
    }
  };

  return (
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

      <div className="table-responsive">
        <table className="table align-middle mb-0">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Role</th>
              <th scope="col">Team</th>
              <th scope="col">Status</th>
              <th scope="col">Joined</th>
              <th scope="col" className="text-end">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <Image
                      className="avatar-img avatar-sm"
                      src={user.avatar}
                      alt={user.name}
                      width={40}
                      height={40}
                    />

                    <div>
                      <p className="fw-semibold mb-0">{user.name}</p>

                      <p className="text-muted small mb-0">{user.email}</p>
                    </div>
                  </div>
                </td>

                <td>{user.role}</td>

                <td>{user.team}</td>

                <td>
                  <span className={`badge ${getBadgeClass(user.status)}`}>
                    {user.status}
                  </span>
                </td>

                <td>{user.joined}</td>

                <td className="text-end">
                  <Link
                    className="btn btn-light btn-sm"
                    href={`/users/${user.id}`}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RecentUsersTable;
