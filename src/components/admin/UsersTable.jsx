const users = [
  {
    id: 1,
    name: "Sarah Ahmed",
    email: "sarah@example.com",
    role: "Admin",
    team: "Operations",
    status: "Active",
    joined: "Jan 12, 2026",
  },
  {
    id: 2,
    name: "Rafi Khan",
    email: "rafi@example.com",
    role: "Manager",
    team: "Sales",
    status: "Active",
    joined: "Feb 03, 2026",
  },
];

const UsersTable = () => {
  return (
    <div className="table-responsive">
      <table className="table align-middle">
        <thead>
          <tr>
            <th>User</th>
            <th>Role</th>
            <th>Team</th>
            <th>Status</th>
            <th>Joined</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div>
                  <strong>{user.name}</strong>
                  <br />
                  <small>{user.email}</small>
                </div>
              </td>

              <td>{user.role}</td>
              <td>{user.team}</td>
              <td>
                <span className="badge text-bg-success">{user.status}</span>
              </td>
              <td>{user.joined}</td>

              <td>
                <button className="btn btn-sm btn-light">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
