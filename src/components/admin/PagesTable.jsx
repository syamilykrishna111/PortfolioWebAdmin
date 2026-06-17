import Link from "next/link";

function PagesTable() {
  const pages = [
    {
      id: 1,
      title: "About Us",
      slug: "about-us",
      author: "Admin Hasan",
      status: "Published",
      updated: "Jun 10, 2026",
    },
    {
      id: 2,
      title: "Contact",
      slug: "contact",
      author: "Sarah Ahmed",
      status: "Draft",
      updated: "Jun 08, 2026",
    },
    {
      id: 3,
      title: "Services",
      slug: "services",
      author: "Admin Hasan",
      status: "Published",
      updated: "Jun 05, 2026",
    },
    {
      id: 4,
      title: "FAQ",
      slug: "faq",
      author: "Rafi Khan",
      status: "Archived",
      updated: "May 28, 2026",
    },
    {
      id: 5,
      title: "Privacy Policy",
      slug: "privacy-policy",
      author: "Nadia Islam",
      status: "Published",
      updated: "May 24, 2026",
    },
    {
      id: 6,
      title: "Terms & Conditions",
      slug: "terms-and-conditions",
      author: "Mina Torres",
      status: "Draft",
      updated: "May 20, 2026",
    },
  ];

  const getBadgeClass = (status) => {
    switch (status) {
      case "Published":
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
            <th scope="col">Title</th>
            <th scope="col">Slug</th>
            <th scope="col">Author</th>
            <th scope="col">Status</th>
            <th scope="col">Last Updated</th>
            <th scope="col" className="text-end">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {pages.map((page) => (
            <tr key={page.id}>
              <td>
                <div>
                  <p className="fw-semibold mb-0">{page.title}</p>

                  <p className="text-muted small mb-0">Website Content Page</p>
                </div>
              </td>

              <td>
                <code>/{page.slug}</code>
              </td>

              <td>{page.author}</td>

              <td>
                <span className={`badge ${getBadgeClass(page.status)}`}>
                  {page.status}
                </span>
              </td>

              <td>{page.updated}</td>

              <td className="text-end">
                <div className="d-flex justify-content-end gap-2">
                  <Link
                    href={`/pages/${page.id}`}
                    className="btn btn-light btn-sm"
                  >
                    View
                  </Link>

                  <Link
                    href={`/pages/${page.id}/edit`}
                    className="btn btn-outline-primary btn-sm"
                  >
                    Edit
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PagesTable;
