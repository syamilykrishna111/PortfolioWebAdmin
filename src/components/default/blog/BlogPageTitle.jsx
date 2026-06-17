import Link from "next/link";

export default function PageTitle() {
  return (
    <div className="page-title" data-aos="fade">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>Blog</h1>
              <p className="mb-0">
                Odio et unde deleniti...
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="current">Blog</li>
          </ol>
        </div>
      </nav>
    </div>
  );
}