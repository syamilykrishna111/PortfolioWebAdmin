"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

function Navbar({ setSidebarCollapsed }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";

    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <nav className="navbar admin-navbar navbar-expand bg-white">
      <div className="container-fluid px-3 px-lg-4">
        <button
          className="sidebar-toggle"
          type="button"
          onClick={() => setSidebarCollapsed((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <form className="d-none d-md-flex ms-3 flex-grow-1">
          <input
            className="form-control search-input"
            type="search"
            placeholder="Search users, orders, reports"
          />
        </form>

        <div className="navbar-actions ms-auto">
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <i
              className={`bi ${theme === "dark" ? "bi-sun" : "bi-moon-stars"}`}
            ></i>
          </button>

          <div className="dropdown">
            <button
              className="icon-button"
              type="button"
              data-bs-toggle="dropdown"
            >
              <span className="notification-dot"></span>
              <i className="bi bi-bell"></i>
            </button>

            <div className="dropdown-menu dropdown-menu-end notification-menu">
              <div className="dropdown-header fw-bold">Notifications</div>

              <Link className="dropdown-item" href="/users">
                New user registered
              </Link>

              <Link className="dropdown-item" href="/charts">
                Revenue target reached
              </Link>

              <Link className="dropdown-item" href="/settings">
                Security review completed
              </Link>
            </div>
          </div>

          <div className="dropdown">
            <button
              className="profile-button dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              <Image
                className="avatar-img avatar-sm"
                src="/assets/images/avatar/avatar.jpg"
                alt="Admin Hasan"
                width={48}
                height={48}
              />

              <span className="profile-name d-none d-sm-inline">
                Admin Hasan
              </span>
            </button>

            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" href="/admin/profile">
                  Profile
                </Link>
              </li>

              <li>
                <Link className="dropdown-item" href="/admin/settings">
                  Account settings
                </Link>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <Link className="dropdown-item" href="/login">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
