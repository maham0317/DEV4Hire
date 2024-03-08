import { Route, Routes } from "react-router-dom";
import Home from "../container/Home/Home";
import CV from "../container/Cv/CV";
import Wizard from "../container/Wizard/Wizard";
import Login from "../container/Login/Login";
import UserInfo from "../container/UserInfo/UserInfo";
import Dashboard from "../container/Dashboard/Dashboard";
import RoleList from "../container/RoleList/RoleList";
import AuthButtons from "../container/AuthButtons/AuthButtons";
import React from "react";
import Stepper from "../components/Auth/Registeration/Stepper/Stepper";
import Register from "../components/Auth/Registeration/Register";
import RegisterStep2 from "../components/Auth/Registeration/RegisterStep2";
import RegisterStep3 from "../components/Auth/Registeration/RegisterStep3";
import Footer from "../components/Auth/Registeration/Footer/Footer";
import MultiStepRegister from "../container/register/MultiStepRegister";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CV" element={<CV />} />
      <Route path="/Wizard" element={<Wizard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register/*" element={<MultiStepRegister />} />
      <Route path="/auth-buttons" element={<AuthButtons />} />
      <Route path="/user-info" element={<UserInfo />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/role-list" element={<RoleList />} />
    </Routes>
  );
};
export default AllRoutes;
