import Image from "next/image";

export default function BlogDetails({ blog }) {
  return (
    <section className="blog-details section-space">
      <div className="container">
        <article className="blog-post">
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={450}
            className="img-fluid rounded"
          />

          <div className="mt-4">
            <span className="text-muted">
              {blog.date} • {blog.category}
            </span>

            <h1 className="mt-3">{blog.title}</h1>

            <div
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
            />
          </div>
        </article>
      </div>
    </section>
  );
}