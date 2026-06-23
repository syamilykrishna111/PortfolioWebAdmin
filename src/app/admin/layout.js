"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import "../../assets/admin/css/bootstrap.min.css";
import "../../assets/admin/css/style.css";

import Script from "next/script";
import BootstrapClient from "@/components/admin/BootstrapClient";

export default function AdminLayout({ children }) {
  return (
    <>
      <BootstrapClient />
      {children}
    </>
  );
}
