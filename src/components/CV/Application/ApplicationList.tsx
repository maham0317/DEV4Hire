
import { useTranslation } from 'react-i18next';
import ApplicationAdd from './ApplicationAdd';
import ActionButtons from '../../common/ActionButtons';
import React, { useState } from 'react';
import ApplicationEdit from './ApplicationEdit';

export const ApplicationList: React.FC = () => {
  const { t } = useTranslation();
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const handleEditLinkClick = () => {
    setIsEditFormOpen(true);
    setIsAddFormOpen(false);
  };

  const handleCloseEditForm = () => {
    setIsEditFormOpen(false);
  };

  const handleAddLinkClick = () => {
    setIsAddFormOpen(true);
    setIsEditFormOpen(false);
  };

  const handleCloseAddForm = () => {
    setIsAddFormOpen(false);
  };

  return (
    <>
      {!isEditFormOpen && !isAddFormOpen ? ( 
        <div className="bg-white p-4 rounded shadow mt-5 text-base">
          <div className="flex justify-between items-center mb-4 ml-5">
            <h2 className="text-2xl font-bold mr-5 times-new-roman-font">{t('Application')}</h2>
            <ActionButtons onAdd={handleAddLinkClick} onEdit={handleEditLinkClick} />
          </div>
          <div className="flex ml-5 mt-2">
            <p className="text-[#332c55] mr-5 text-base">{t('ProfessionalExperienceDetail')}</p>
          </div>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-800 mt-4 ml-4 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={handleAddLinkClick}
          >
            {t('AddEntry')}
          </button>
        </div>
      ) : null}
      {isAddFormOpen && <ApplicationAdd onClose={handleCloseAddForm} />}
      {isEditFormOpen && <ApplicationEdit initialValues={{ applicationName: 'Initial Value' }} onClose={handleCloseEditForm} />}
    </>
  );
};

export default ApplicationList;

