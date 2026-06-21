import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../assets/Footer";
function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
