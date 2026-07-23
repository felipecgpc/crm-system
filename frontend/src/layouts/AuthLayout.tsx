import { Outlet } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function AuthLayout() {
  return (
    <>
      <Header />

      <main className="flex min-h-[calc(100vh-128px)] items-center justify-center bg-gray-50 px-6 py-12">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default AuthLayout;