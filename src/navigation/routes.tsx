import { Route, Routes } from "react-router-dom";
import Home from "../container/home/home";
import CV from "../container/cv/cv";
import Wizard from "../container/wizard/wizard";
import Login from "../container/login/login";
import UserInfo from "../container/user-info/user-info";
import Dashboard from "../container/dashboard/dashboard";
import RoleList from "../container/role-list/role-list";
import AuthButtons from "../container/auth-buttons/auth-buttons";
import MultiStepRegister from "../container/register/multi-step-register";
import IndustryList from "../container/admin/industry-type/industry-type-list";
import EducationList from "../container/admin/education-type/educaiton-type-list";

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
      <Route path="/industry-type-list" element={<IndustryList />} />
      <Route path="/education" element={<EducationList />} />
    </Routes>
  );
};
export default AllRoutes;
