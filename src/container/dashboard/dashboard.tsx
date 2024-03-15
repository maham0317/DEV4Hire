import React from "react";
import Navbar from "../../components/header/navbar";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1 className="ml-5 text-[#332c55] text-lg">Welcome to the dashboard</h1>
    </div>
  );
};

export default Dashboard;
