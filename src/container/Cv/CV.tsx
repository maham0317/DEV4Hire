import React from "react";
import Navbar from "../../components/Header/Navbar";
import NavbarButtons from "../../components/Header/NavbarButtons";
import PopUp from "../../components/Home/PopUp";
import WorkRolesList from "../../components/CV/WorkRoles/WorkRolesList";
import CvDetails from "../../components/CV/CvDetails/CvDetails";
import CompetenceAreasList from "../../components/CV/CompetenceAreas/CompetenceAreasList";
import CareerList from "../../components/CV/Career&Projects/CareerList";
import SkillsList from "../../components/CV/Skills/SkillsList";
import LanguagesList from "../../components/CV/Languages/LanguagesList";
import IndustryInfoList from "../../components/CV/IndustryInfo/IndustryInfoList";
import EducationList from "../../components/CV/Education/EducationList";
import ApplicationList from "../../components/CV/Application/ApplicationList";
import AwardsList from "../../components/CV/Awards/AwardsList";
import NetworkList from "../../components/CV/Network/NetworkList";

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
