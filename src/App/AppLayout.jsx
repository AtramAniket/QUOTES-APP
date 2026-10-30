import { Outlet } from "react-router";

import Navbar from "../Components/Layouts/Navbar";
import Footer from "../Components/Layouts/Footer";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
