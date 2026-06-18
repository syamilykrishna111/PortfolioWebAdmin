import Header from "@/components/default/Header";
import Footer from "@/components/default/Footer";
import ScrollTop from "@/components/default/ScrollTop";
import BlogDetails from "@/components/default/blog/BlogDetails";
import BlogPageTitle from "@/components/default/blog/BlogPageTitle";

import personM9 from "@/assets/default/img/person/person-m-9.webp";

export default function Page() {
  const blog = {
    title: "Building Modern Web Applications with Next.js",
    date: "June 15, 2026",
    category: "Web Development",
    image: personM9,
    content: `
      <p>
        Next.js has become one of the most popular frameworks for
        building modern web applications.
      </p>

      <h3>Why Next.js?</h3>

      <p>
        One of the biggest advantages of Next.js is its flexibility.
      </p>

      <ul>
        <li>Improved page load speed</li>
        <li>Built-in routing system</li>
        <li>SEO-friendly rendering</li>
        <li>Optimized image handling</li>
        <li>Easy deployment</li>
      </ul>

      <blockquote>
        <p>
          Great user experiences start with fast, accessible,
          and scalable web applications.
        </p>
      </blockquote>

      <h3>Conclusion</h3>

      <p>
        Whether you're building a portfolio website,
        an e-commerce platform, or a SaaS product,
        Next.js provides a solid foundation.
      </p>
    `,
  };

  return (
    <main className="main">
      <Header />
      <BlogPageTitle />
      <BlogDetails blog={blog} />
      <Footer />
      <ScrollTop />
    </main>
  );
}