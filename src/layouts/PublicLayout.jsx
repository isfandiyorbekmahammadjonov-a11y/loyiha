import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Publics/NavBars/Navbar";
import Footer from "../components/Publics/Footer";
function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mt-18">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
