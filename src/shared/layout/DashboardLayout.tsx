import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="min-w-0 flex-1 bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
}
