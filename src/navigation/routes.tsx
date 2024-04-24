import { Route, Routes } from "react-router-dom";
import Home from "@/container/home/home";
import CV from "@/container/cv/cv";
import Wizard from "@/container/wizard/wizard";
import Login from "@/container/login/login";
import UserInfo from "@/container/user-info/user-info";
import Dashboard from "@/container/dashboard/dashboard";
import AuthButtons from "@/container/auth-buttons/auth-buttons";
import MultiStepRegister from "@/container/register/multi-step-register";
import IndustryList from "../container/admin/industry-type/industry-type-list";
import EducationList from "@/container/admin/education-type/educaiton-type-list";
import WorkRoleList from "@/container/admin/work-role/work-role-list";
import RoleList from "@/container/admin/rolelist/role-list";
import LanguageList from "@/container/admin/languages/languages-list";
import SkillList from "@/container/admin/skill/skill-list";
import ProficiencyList from "@/container/admin/proficiency/proficiency-list";
// import LocationList from "@/container/admin/locations/locations-list";
import CountryList from "@/container/admin/locations/country/country-list";
import CityList from "@/container/admin/locations/city/city-list";
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
      <Route path="/WorkRoleList" element={<WorkRoleList />} />
      <Route path="/LanguageList" element={<LanguageList />} />
      <Route path="/Skilllist" element={<SkillList />} />
      <Route path="/Proficiencylist" element={<ProficiencyList />} />
      <Route path="/CountryList" element={<CountryList />} />
      <Route path="/CityList" element={<CityList />} />
    </Routes>
  );
};
export default AllRoutes;
