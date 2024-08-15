import React from "react";
import NavbarDashboard from "./navbar";
import StudentTable from "../components/fragments/Students/StudentTable";

const StudentPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <NavbarDashboard type="Student" />
      <div className="flex-1 ml-64">
        <StudentTable />
      </div>
    </div>
  );
};

export default StudentPage;
