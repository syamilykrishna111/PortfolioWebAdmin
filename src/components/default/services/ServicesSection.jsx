import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: "bi-activity",
      title: "Nesciunt Mete",
      description:
        "Provident nihil minus qui consequatur non omnis maiores.",
    },
    {
      icon: "bi-broadcast",
      title: "Eosle Commodi",
      description:
        "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.",
    },
    {
      icon: "bi-easel",
      title: "Ledo Markt",
      description:
        "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.",
    },
    {
      icon: "bi-bounding-box-circles",
      title: "Asperiores Commodit",
      description:
        "Non et temporibus minus omnis sed dolor esse consequatur.",
    },
    {
      icon: "bi-calendar4-week",
      title: "Velit Doloremque",
      description:
        "Cumque et suscipit saepe. Est maiores autem enim facilis.",
    },
    {
      icon: "bi-chat-square-text",
      title: "Dolori Architecto",
      description:
        "Hic molestias ea quibusdam eos. Fugiat enim doloremque.",
    },
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>

                <Link
                  href="/services"
                  className="stretched-link"
                >
                  <h3>{service.title}</h3>
                </Link>

                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}