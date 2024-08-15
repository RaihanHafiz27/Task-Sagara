import React from "react";
import { CiCalendar } from "react-icons/ci";
import NavbarDashboard from "./navbar";
import DashboardOverview from "../components/fragments/Dashboard/DashboardOverview";
import DashboardChart from "../components/fragments/Dashboard/DashboardChart";
import Header from "../components/fragments/Students/Header";

const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <NavbarDashboard type="Dashboard" />
      <div className="flex-1 mt-10 md:mt-0">
        <Header />
        <div className="flex-1 p-2 md:p-8 md:ml-64">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 p-2 bg-white shadow-lg">
              <CiCalendar className="text-2xl" />
              <p className="font-semibold text-gray-500">
                Dec 29, 2023 - Jan 4, 2024
              </p>
            </div>
            <select className="p-2 border rounded-md">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <DashboardOverview />
          <DashboardChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
