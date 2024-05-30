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
import IndustryTypeListing from "@/container/admin/industry-type-listing";
import LanguageListing from "@/container/admin/language-listing";
import SkillListing from "@/container/admin/skill-listing";
import ProficiencyListing from "@/container/admin/proficiency-listing";
import WorkRoleListing from "@/container/admin/work-role-listing";
import EducationTypeListing from "@/container/admin/education-type-listing";
import CountryListing from "@/container/admin/locations-listing/country-listing";
import CityListing from "@/container/admin/locations-listing/city-listing";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminRoute element={<Dashboard />} />} />

      <Route
        path="/industry-type-listing"
        element={<AdminRoute element={<IndustryTypeListing />} />}
      />
      <Route
        path="/language-listing"
        element={<AdminRoute element={<LanguageListing />} />}
      />
      <Route
        path="/skill-listing"
        element={<AdminRoute element={<SkillListing />} />}
      />
      <Route
        path="/proficiency-listing"
        element={<AdminRoute element={<ProficiencyListing />} />}
      />
      <Route
        path="/education-type-listing"
        element={<AdminRoute element={<EducationTypeListing />} />}
      />
      <Route
        path="/work-role-listing"
        element={<AdminRoute element={<WorkRoleListing />} />}
      />
      <Route
        path="/country-listing"
        element={<AdminRoute element={<CountryListing />} />}
      />
      <Route
        path="/city-listing"
        element={<AdminRoute element={<CityListing />} />}
      />

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
