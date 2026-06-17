"use client";

import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/Navbar";
import Footer from "../../components/admin/Footer";
import { useState } from "react";

function AdminLayout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div
      className={`admin-shell ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}
    >
      <Sidebar sidebarCollapsed={sidebarCollapsed} />

      <div className="admin-main">
        <Navbar setSidebarCollapsed={setSidebarCollapsed} />
        {children}

        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout;
