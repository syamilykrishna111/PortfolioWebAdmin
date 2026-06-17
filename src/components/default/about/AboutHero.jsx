import Link from "next/link";

export default function AboutHero() {
  return (
    <div className="page-title" data-aos="fade">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>About</h1>
              <p className="mb-0">
                About me and my professional journey.
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
            <li className="current">About</li>
          </ol>
        </div>
      </nav>
    </div>
  );
}