import Link from "next/link";

function BlocksTable() {
  const blocks = [
    {
      id: 1,
      name: "Hero Banner",
      type: "Hero",
      page: "Home",
      status: "Active",
      updated: "Jun 10, 2026",
    },
    {
      id: 2,
      name: "CTA Section",
      type: "CTA",
      page: "Landing",
      status: "Draft",
      updated: "Jun 08, 2026",
    },
    {
      id: 3,
      name: "Features Grid",
      type: "Section",
      page: "Home",
      status: "Active",
      updated: "Jun 05, 2026",
    },
    {
      id: 4,
      name: "Footer Block",
      type: "Layout",
      page: "Global",
      status: "Archived",
      updated: "Jun 01, 2026",
    },
  ];

  const getBadgeClass = (status) => {
    switch (status) {
      case "Active":
        return "text-bg-success";
      case "Draft":
        return "text-bg-warning";
      case "Archived":
        return "text-bg-secondary";
      default:
        return "text-bg-primary";
    }
  };

  return (
    <div className="table-responsive">
      <table className="table align-middle mb-0">
        <thead>
          <tr>
            <th>Block Name</th>
            <th>Type</th>
            <th>Page</th>
            <th>Status</th>
            <th>Updated</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>

        <tbody>
          {blocks.map((block) => (
            <tr key={block.id}>
              <td>
                <div className="fw-semibold">{block.name}</div>
              </td>

              <td>{block.type}</td>

              <td>{block.page}</td>

              <td>
                <span className={`badge ${getBadgeClass(block.status)}`}>
                  {block.status}
                </span>
              </td>

              <td>{block.updated}</td>

              <td className="text-end">
                <Link
                  href={`/blocks/${block.id}`}
                  className="btn btn-light btn-sm"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BlocksTable;
