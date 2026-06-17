"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import personM9 from "@/assets/default/img/person/person-m-9.webp";
import personF5 from "@/assets/default/img/person/person-f-5.webp";
import personF12 from "@/assets/default/img/person/person-f-12.webp";
import personM12 from "@/assets/default/img/person/person-m-12.webp";
import personM13 from "@/assets/default/img/person/person-m-13.webp";   
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Saul Goodman",
      role: "CEO & Founder",
      image: personM9,
      text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.",
    },
    {
      name: "Sara Wilsson",
      role: "Designer",
      image: personF5,
      text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid.",
    },
    {
      name: "Jena Karlis",
      role: "Store Owner",
      image: personF12,
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla.",
    },
    {
      name: "Matt Brandon",
      role: "Freelancer",
      image: personM12,
      text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim.",
    },
    {
      name: "John Larson",
      role: "Entrepreneur",
      image: personM13,
      text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <div>
          <span>Check my </span>
          <span className="description-title">Testimonials</span>
        </div>
      </div>

      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>

                  <span>{item.text}</span>

                  <i className="bi bi-quote quote-icon-right"></i>
                </p>

                <Image
                  src={item.image}
                  alt={item.name}
                  width={90}
                  height={90}
                  className="testimonial-img"
                />

                <h3>{item.name}</h3>
                <h4>{item.role}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}