"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Sidebar({ sidebarCollapsed }) {
  const pathname = usePathname();

  return (
    <aside className={`admin-sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <Link
          className="brand-mark"
          href="/admin/dashboard"
          aria-label="adminHMD dashboard"
        >
          <span className="brand-icon">
            <i className="bi bi-grid-1x2-fill"></i>
          </span>

          <span className="brand-copy">
            <span className="brand-title">adminHMD</span>
            <span className="brand-subtitle">Admin Template</span>
          </span>
        </Link>
      </div>

      <nav className="sidebar-nav">
        <Link
          href="/admin/dashboard"
          className={pathname === "/dashboard" ? "nav-link active" : "nav-link"}
        >
          <span className="nav-icon">
            <i className="bi bi-speedometer2"></i>
          </span>
          <span className="nav-text">Dashboard</span>
        </Link>

        <Link
          href="/admin/users"
          className={
            pathname.startsWith("/users") ? "nav-link active" : "nav-link"
          }
        >
          <span className="nav-icon">
            <i className="bi bi-people"></i>
          </span>
          <span className="nav-text">Users</span>
        </Link>

        <Link
          href="/admin/pages"
          className={
            pathname.startsWith("/pages") ? "nav-link active" : "nav-link"
          }
        >
          <span className="nav-icon">
            <i className="bi bi-file-earmark-text"></i>
          </span>
          <span className="nav-text">Pages</span>
        </Link>

        <Link
          href="/admin/blocks"
          className={
            pathname.startsWith("/blocks") ? "nav-link active" : "nav-link"
          }
        >
          <span className="nav-icon">
            <i className="bi bi-grid-3x3-gap"></i>
          </span>
          <span className="nav-text">Blocks</span>
        </Link>

        <Link
          href="/admin/testimonials"
          className={
            pathname.startsWith("/testimonials")
              ? "nav-link active"
              : "nav-link"
          }
        >
          <span className="nav-icon">
            <i className="bi bi-chat-quote"></i>
          </span>
          <span className="nav-text">Testimonials</span>
        </Link>

        <Link
          href="/admin/profile"
          className={
            pathname.startsWith("/profile") ? "nav-link active" : "nav-link"
          }
        >
          <span className="nav-icon">
            <i className="bi bi-person-badge"></i>
          </span>
          <span className="nav-text">Profile</span>
        </Link>

        <Link
          href="/admin/settings"
          className={
            pathname.startsWith("/settings") ? "nav-link active" : "nav-link"
          }
        >
          <span className="nav-icon">
            <i className="bi bi-gear"></i>
          </span>
          <span className="nav-text">Settings</span>
        </Link>
      </nav>

      <div className="sidebar-user">
        <Image
          className="avatar-img avatar-md sidebar-user-avatar"
          src="/assets/images/avatar/avatar.jpg"
          alt="Admin Hasan"
          width={48}
          height={48}
        />

        {!sidebarCollapsed && (
          <>
            <strong>Admin Hasan</strong>
            <small>Active Workspace</small>
          </>
        )}
      </div>

      <div className="sidebar-footer">
        <span className="status-dot"></span>

        {!sidebarCollapsed && (
          <span className="sidebar-footer-text">System running smoothly</span>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
