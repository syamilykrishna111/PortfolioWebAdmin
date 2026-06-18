import Link from "next/link";
import Image from "next/image";
import personM9 from "@/assets/default/img/person/person-m-9.webp";

const blogs = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js",
    image: personM9,
    excerpt: "Next.js provides powerful features...",
  },
  {
    id: 2,
    title: "React Best Practices for Scalable Apps",
    image: personM9,
    excerpt: "Learn how to structure React applications...",
  },
  {
    id: 3,
    title: "Getting Started with Node.js",
    image: personM9,
    excerpt: "Node.js makes backend development easier...",
  },
  {
    id: 4,
    title: "Mastering JavaScript ES2025",
    image: personM9,
    excerpt: "Explore modern JavaScript features...",
  },
];

export default function BlogSection() {
  return (
    <section className="blog section">
      <div className="container">
        <div className="row gy-4">
          {blogs.map((blog) => (
            <div className="col-lg-4 col-md-6" key={blog.id}>
              <div className="blog-item position-relative">
                <div className="blog-img">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    className="img-fluid"
                  />
                </div>

                <div className="blog-content">
                  <h3>{blog.title}</h3>

                  <p>{blog.excerpt}</p>

                  <Link
                    href="/blog-details"
                    className="stretched-link"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}