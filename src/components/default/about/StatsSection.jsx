export default function StatsSection() {
  const stats = [
    {
      icon: "bi-emoji-smile",
      value: 232,
      label: "Happy Clients",
    },
    {
      icon: "bi-journal-richtext",
      value: 521,
      label: "Projects",
    },
    {
      icon: "bi-headset",
      value: 1463,
      label: "Hours Of Support",
    },
    {
      icon: "bi-people",
      value: 15,
      label: "Hard Workers",
    },
  ];

  return (
    <section id="stats" className="stats section">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row gy-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 d-flex flex-column align-items-center"
            >
              <i className={`bi ${item.icon}`}></i>

              <div className="stats-item">
                <span>{item.value}</span>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}