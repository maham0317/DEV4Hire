import IndustryList from "../container/admin/industry-type/industry-type-list";
import EducationList from "@/container/admin/education-type/educaiton-type-list";
import WorkRoleList from "@/container/admin/work-role/work-role-list.html";
import LanguageList from "@/container/admin/languages/languages-list";
import SkillList from "@/container/admin/skill/skill-list";
import ProficiencyList from "@/container/admin/proficiency/proficiency-list";
import CountryList from "@/container/admin/locations/country/country-list";
import CityList from "@/container/admin/locations/city/city-list";
import { Route, Routes } from "react-router-dom";
import Dashboard from "@/container/dashboard/dashboard";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
      <Route path="" element={<Dashboard />} />
        <Route path="/industry-type-list" element={<IndustryList />} />
        <Route path="/education" element={<EducationList />} />
        <Route path="/WorkRoleList" element={<WorkRoleList />} />
        <Route path="/LanguageList" element={<LanguageList />} />
        <Route path="/Skilllist" element={<SkillList />} />
        <Route path="/Proficiencylist" element={<ProficiencyList />} />
        <Route path="/CountryList" element={<CountryList />} />
        <Route path="/CityList" element={<CityList />} />
      </Routes>
    </>
  );
};

export default AdminRoutes;
