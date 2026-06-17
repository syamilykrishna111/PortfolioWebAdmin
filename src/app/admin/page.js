import Dashboard from "@/pages/admin/Dashboard";
import Users from "@/pages/admin/Users";
import Pages from "@/pages/admin/Pages";
import Blogs from "@/pages/admin/Blogs";
import Testimonials from "@/pages/admin/Testimonials";
import Profile from "@/pages/admin/Profile";
import Blocks from "@/pages/admin/Blocks";
import Settings from "@/pages/admin/Settings";

export default function Home() {
  return (
    <>
      <Dashboard />
      <Users />
      <Pages />
      <Blogs />
      <Testimonials />
      <Profile />
      <Blocks />
      <Settings />
    </>
  );
}
