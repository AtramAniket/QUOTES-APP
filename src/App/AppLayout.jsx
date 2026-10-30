import { Outlet } from "react-router";

import Navbar from "../Components/Layouts/Navbar";
import Footer from "../Components/Layouts/Footer";

const AppLayout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default AppLayout;
