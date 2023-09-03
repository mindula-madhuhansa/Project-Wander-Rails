import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="w-full w-min-[600px]">
      <Navbar />
      <Outlet />
      <hr />
      <Footer />
    </div>
  );
}
