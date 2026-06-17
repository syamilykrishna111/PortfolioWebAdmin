import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4 justify-content-center">

          <div className="col-lg-4">
            <Image
              src="/img/profile-img.jpg"
              alt="Profile"
              width={500}
              height={500}
              className="img-fluid"
            />
          </div>

          <div className="col-lg-8 content">
            <h2>UI/UX Designer & Web Developer</h2>

            <p className="fst-italic py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            {/* Your details here */}

          </div>

        </div>
      </div>
    </section>
  );
}