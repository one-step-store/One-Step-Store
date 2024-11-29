import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/adminDashboard/AdminSidebar";
import AdminNavbar from "../components/admin/adminDashboard/AdminNavbar";
import AdminFooter from "../components/admin/adminDashboard/AdminFooter";


function RootLayout() {
  return (
    <div className="flex min-h-screen bg-[#f8f4f0]">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <AdminSidebar />
      </div>

      <div className="flex flex-col flex-1">
        <AdminNavbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <AdminFooter />
      </div>
    </div>
  );
}

export default RootLayout;