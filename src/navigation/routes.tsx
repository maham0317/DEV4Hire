import { Route, RouteProps, Routes } from "react-router-dom";
import Home from "@/container/home/home";
import CV from "@/container/cv/cv";
import Wizard from "@/container/wizard/wizard";
import Login from "@/container/login/login";
import UserInfo from "@/container/user-info/user-info";
import AuthButtons from "@/container/auth-buttons/auth-buttons";
import MultiStepRegister from "@/container/register/multi-step-register";
import NotFound from "@/container/error/404";
import Dashboard from "@/container/dashboard/dashboard";
import AdminLayout from "@/layouts/admin.layout";
import IndustryTypeList from "@/container/admin/industry-type/industry-type-list.html";
import WorkRoleList from "@/container/admin/work-role/work-role-list.html";
import LanguageList from "@/container/admin/languages/languages-list.html";
import SkillList from "@/container/admin/skill/skill-list.html";
import ProficiencyList from "@/container/admin/proficiency/proficiency-list.html";
import CountryList from "@/container/admin/locations/country/country-list.html";
import CityList from "@/container/admin/locations/city/city-list.html";
import EducationList from "@/container/admin/education-type/educaiton-type-list.html";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminRoute element={<Dashboard />} />} />
      <Route
        path="/industry-type-list"
        element={<AdminRoute element={<IndustryTypeList />} />}
      />
      <Route
        path="/education"
        element={<AdminRoute element={<EducationList />} />}
      />
      <Route
        path="/WorkRoleList"
        element={<AdminRoute element={<WorkRoleList />} />}
      />
      <Route
        path="/LanguageList"
        element={<AdminRoute element={<LanguageList />} />}
      />
      <Route
        path="/Skilllist"
        element={<AdminRoute element={<SkillList />} />}
      />
      <Route
        path="/Proficiencylist"
        element={<AdminRoute element={<ProficiencyList />} />}
      />
      <Route
        path="/CountryList"
        element={<AdminRoute element={<CountryList />} />}
      />
      <Route path="/CityList" element={<AdminRoute element={<CityList />} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/CV" element={<CV />} />
      <Route path="/Wizard" element={<Wizard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register/*" element={<MultiStepRegister />} />
      <Route path="/auth-buttons" element={<AuthButtons />} />
      <Route path="/user-info" element={<UserInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const AdminRoute: React.FC<RouteProps> = ({ element }) => {
  return <AdminLayout>{element}</AdminLayout>;
};

export default AllRoutes;
