
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import NetworkAdd from './NetworkAdd';
import NetworkEdit from './NetworkEdit';
import ActionButtons from '../../common/ActionButtons';

const NetworkList: React.FC = () => {
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

  const handleAddClick = () => {
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
            <h2 className="text-2xl font-bold mr-5 times-new-roman-font">{t('NetworksTitle')}</h2>
            <ActionButtons onAdd={handleAddClick} onEdit={handleEditLinkClick} />
          </div>
          <div className="flex ml-5 mt-2">
            <p className="text-[#332c55] mr-5 text-base">{t('AddNetwork')}</p>
          </div>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-800 mt-4 ml-4 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={handleAddClick}
          >
            {t('AddEntry')}
          </button>
        </div>
      ) : null}
      {isAddFormOpen && <NetworkAdd onClose={handleCloseAddForm} />}
      {isEditFormOpen && <NetworkEdit onClose={handleCloseEditForm} />}
    </>
  );
};

export default NetworkList;

