"use client";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row gy-4">

        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            placeholder="Subject"
            required
          />
        </div>

        <div className="col-md-12">
          <textarea
            className="form-control"
            rows="6"
            placeholder="Message"
            required
          />
        </div>

        <div className="col-md-12 text-center">
          <button type="submit">
            Send Message
          </button>
        </div>

      </div>
    </form>
  );
}