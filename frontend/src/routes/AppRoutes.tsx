import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import CompaniesPage from "../pages/CompaniesPage";
import CustomersPage from "../pages/CustomersPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/empresas" element={<CompaniesPage />} />
      <Route path="/clientes" element={<CustomersPage />} />
    </Routes>
  );
}

export default AppRoutes;