"use client";

import "../../assets/default/css/main.css";
import "../../assets/default/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Script from "next/script";
import BootstrapClient from "@/components/admin/BootstrapClient";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
