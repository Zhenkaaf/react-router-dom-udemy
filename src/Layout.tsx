import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
