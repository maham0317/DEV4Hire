import React from "react";
import { useLocation } from "react-router-dom";
import NavbarPublic from "@/components/header/navbar-public";

const NavbarDisplay = () => {
  const location = useLocation();

  // Logic to determine whether to display NavbarPublic or not
  const shouldDisplayNavbarPublic = () => {
    const adminRoutes = [
      "/",
      "/industry-type-list",
      "/education",
      "/WorkRoleList",
      "/LanguageList",
      "/SkillList",
      "/ProficiencyList",
      "/CountryList",
      "/CityList",
    ];
    return !adminRoutes.includes(location.pathname);
  };

  return shouldDisplayNavbarPublic() ? <NavbarPublic /> : null;
};

export default NavbarDisplay;
