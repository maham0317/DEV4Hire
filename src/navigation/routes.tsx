import { Route, Routes } from "react-router-dom";
import Home from "../container1/home/home";
import CV from "../container1/cv/cv";
import Wizard from "../container1/wizard/wizard";
import Login from "../container1/login/login";
import UserInfo from "../container1/user-info/user-info";
import Dashboard from "../container1/dashboard/dashboard";
import RoleList from "../container1/role-list/role-list";
import AuthButtons from "../container1/auth-buttons/auth-buttons";
import MultiStepRegister from "../container1/register/multi-step-register";

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
