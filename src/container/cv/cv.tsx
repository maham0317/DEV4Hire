import React from "react";
import Navbar from "../../components/header/navbar";
import NavbarButtons from "../../components/header/navbar-buttons";
import PopUp from "../../components/home/pop-up";
import WorkRolesList from "../../components/cv/work-roles/work-roles-list";
import CvDetails from "../../components/cv/cv-details/cv-details";
import CompetenceAreasList from "../../components/cv/competence-areas/competence-areas-list";
import CareerList from "../../components/cv/career&projects/career-list";
import SkillsList from "../../components/cv/skills/skills-list";
import LanguagesList from "../../components/cv/languages/languages-list";
import IndustryInfoList from "../../components/cv/industry-info/industry-info-list";
import EducationList from "../../components/cv/education/education-list";
import ApplicationList from "../../components/cv/application/application-list";
import AwardsList from "../../components/cv/awards/awards-list";
import NetworkList from "../../components/cv/network/network-list";

function CV() {
  return (
    <div className="">
      <NavbarButtons context="workRoles" />
      <div className="flex mx-auto ml-5 p-5">
        {/* Left Container */}
        <div className="w-5/12 p-4 m-4 mr-5">
          <CvDetails />
        </div>

        {/* Right Container */}
        <div className="w-7/12  p-4 m-4 ml-5 mt-5 bg-gray-100">
          <WorkRolesList />
          <CompetenceAreasList />
          <CareerList />
          <SkillsList />
          <LanguagesList />
          <IndustryInfoList />
          <EducationList />
          <ApplicationList />
          <AwardsList />
          <NetworkList />
        </div>
      </div>
      <PopUp />
    </div>
  );
}

export default CV;
