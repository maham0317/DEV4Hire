import { Route, Routes } from "react-router-dom";
import Home from "@/container/home/home";
import CV from "@/container/cv/cv";
import Wizard from "@/container/wizard/wizard";
import Login from "@/container/login/login";
import UserInfo from "@/container/user-info/user-info";
import AuthButtons from "@/container/auth-buttons/auth-buttons";
import MultiStepRegister from "@/container/register/multi-step-register";
import Shell from "@/container/shell/shell";
import AdminRoutes from "./admin-routes";
import EducationList from "@/components/cv/education-certificate/education-certificate-list";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Shell />} />
      <Route path="/home" element={<Home />} />
      <Route path="/CV" element={<CV />} />
      <Route path="/Wizard" element={<Wizard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register/*" element={<MultiStepRegister />} />
      <Route path="/auth-buttons" element={<AuthButtons />} />
      <Route path="/user-info" element={<UserInfo />} />
    </Routes>
  );
};

export default AllRoutes;
