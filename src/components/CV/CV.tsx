import React from 'react';
import Navbar from '../Header/Navbar';
import NavbarButtons from '../Header/NavbarButtons';
import PopUp from '../Home/PopUp';
import WorkRolesList from './WorkRoles/WorkRolesList';
import CvDetails from './CvDetails/CvDetails';
import CompetenceAreasList from './CompetenceAreas/CompetenceAreasList';
import CareerList from './Career&Projects/CareerList';
import SkillsList from './Skills/SkillsList';
import LanguagesList from './Languages/LanguagesList';
import IndustryInfoList from './IndustryInfo/IndustryInfoList';
import EducationList from './Education/EducationList';
import ApplicationList from './Application/ApplicationList';
import AwardsList from './Awards/AwardsList';
import NetworkList from './Network/NetworkList';

function CV() {
  return (
    <div className='mt-5'>
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
