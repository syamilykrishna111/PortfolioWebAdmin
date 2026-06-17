import Link from "next/link";

function TestimonialsTable() {
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      company: "ABC Ltd",
      rating: 5,
      status: "Approved",
      date: "Jun 10, 2026",
    },
    {
      id: 2,
      name: "Maria Lopez",
      company: "XYZ Inc",
      rating: 4,
      status: "Pending",
      date: "Jun 08, 2026",
    },
    {
      id: 3,
      name: "Ahmed Ali",
      company: "TechSoft",
      rating: 5,
      status: "Featured",
      date: "Jun 05, 2026",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      company: "Digital Hub",
      rating: 4,
      status: "Approved",
      date: "Jun 03, 2026",
    },
  ];

  const getBadgeClass = (status) => {
    switch (status) {
      case "Approved":
        return "text-bg-success";
      case "Pending":
        return "text-bg-warning";
      case "Featured":
        return "text-bg-primary";
      default:
        return "text-bg-secondary";
    }
  };

  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <div className="table-responsive">
      <table className="table align-middle mb-0">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Company</th>
            <th>Rating</th>
            <th>Status</th>
            <th>Date</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>

        <tbody>
          {testimonials.map((t) => (
            <tr key={t.id}>
              <td>
                <div className="fw-semibold">{t.name}</div>
              </td>

              <td>{t.company}</td>

              <td>{renderStars(t.rating)}</td>

              <td>
                <span className={`badge ${getBadgeClass(t.status)}`}>
                  {t.status}
                </span>
              </td>

              <td>{t.date}</td>

              <td className="text-end">
                <div className="d-flex justify-content-end gap-2">
                  <Link
                    href={`/testimonials/${t.id}`}
                    className="btn btn-light btn-sm"
                  >
                    View
                  </Link>

                  <Link
                    href={`/testimonials/${t.id}/edit`}
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

export default TestimonialsTable;
