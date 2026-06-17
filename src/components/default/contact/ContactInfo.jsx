export default function ContactInfo() {
  const items = [
    {
      icon: "bi-geo-alt",
      title: "Address",
      text: "A108 Adam Street, New York",
    },
    {
      icon: "bi-telephone",
      title: "Call Me",
      text: "+1 5589 55488 55",
    },
    {
      icon: "bi-envelope",
      title: "Email",
      text: "info@example.com",
    },
    {
      icon: "bi-share",
      title: "Social Profiles",
      text: "",
    },
  ];

  return (
    <div className="row gy-4">
      {items.map((item, index) => (
        <div className="col-md-6" key={index}>
          <div className="info-item d-flex align-items-center">
            <i className={`icon bi ${item.icon} flex-shrink-0`}></i>

            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}