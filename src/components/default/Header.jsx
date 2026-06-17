"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center">
          <h1 className="sitename">Personal</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className={pathname === "/about" ? "active" : ""}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className={pathname === "/blog" ? "active" : ""}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className={pathname === "/services" ? "active" : ""}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={pathname === "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login Button */}
        <Link href="/admin/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </header>
  );
}
