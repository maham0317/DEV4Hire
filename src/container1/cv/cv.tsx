import React from "react";
import Navbar from "../../components1/header/navbar";
import NavbarButtons from "../../components1/header/navbar-buttons";
import PopUp from "../../components1/home/pop-up";
import WorkRolesList from "../../components1/cv/work-roles/work-roles-list";
import CvDetails from "../../components1/cv/cv-details/cv-details";
import CompetenceAreasList from "../../components1/cv/competence-areas/competence-areas-list";
import CareerList from "../../components1/cv/career&projects/career-list";
import SkillsList from "../../components1/cv/skills/skills-list";
import LanguagesList from "../../components1/cv/languages/languages-list";
import IndustryInfoList from "../../components1/cv/industry-info/industry-info-list";
import EducationList from "../../components1/cv/education/education-list";
import ApplicationList from "../../components1/cv/application/application-list";
import AwardsList from "../../components1/cv/awards/awards-list";
import NetworkList from "../../components1/cv/network/network-list";

function CV() {
  return (
    <div className="mt-5">
      <Navbar />
      <NavbarButtons context="workRoles" />
      <div className="flex container mx-auto ml-5 p-5">
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
