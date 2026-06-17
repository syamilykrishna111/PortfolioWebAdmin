import Link from "next/link";

function BlogsTable() {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      author: "Admin Hasan",
      category: "Development",
      status: "Published",
      date: "Jun 11, 2026",
    },
    {
      id: 2,
      title: "Laravel Tips for Beginners",
      author: "Sarah Ahmed",
      category: "Backend",
      status: "Draft",
      date: "Jun 09, 2026",
    },
    {
      id: 3,
      title: "React Performance Optimization",
      author: "Rafi Khan",
      category: "Frontend",
      status: "Scheduled",
      date: "Jun 15, 2026",
    },
    {
      id: 4,
      title: "UI Design Best Practices",
      author: "Nadia Islam",
      category: "Design",
      status: "Published",
      date: "Jun 05, 2026",
    },
  ];

  const getBadgeClass = (status) => {
    switch (status) {
      case "Published":
        return "text-bg-success";
      case "Draft":
        return "text-bg-warning";
      case "Scheduled":
        return "text-bg-primary";
      default:
        return "text-bg-secondary";
    }
  };

  return (
    <div className="table-responsive">
      <table className="table align-middle mb-0">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>
                <div className="fw-semibold">{blog.title}</div>
              </td>

              <td>{blog.author}</td>

              <td>{blog.category}</td>

              <td>
                <span className={`badge ${getBadgeClass(blog.status)}`}>
                  {blog.status}
                </span>
              </td>

              <td>{blog.date}</td>

              <td className="text-end">
                <div className="d-flex justify-content-end gap-2">
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="btn btn-light btn-sm"
                  >
                    View
                  </Link>

                  <Link
                    href={`/blogs/${blog.id}/edit`}
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

export default BlogsTable;
