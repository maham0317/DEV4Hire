import React from 'react';
import { useTranslation } from 'react-i18next';

interface SkillsAddProps {
  onClose: () => void;
}

const SkillsAdd: React.FC<SkillsAddProps> = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="p-4 bg-white rounded shadow mt-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Add Skill</h2>
        <button
          className="text-gray-500 hover:text-red-500"
          onClick={onClose}>
          Remove <i className="fas fa-times ml-2"></i>
        </button>
      </div>

      <div className="flex ml-5 mt-5">
          <p className="text-gray-400">Skill group/name</p>
          <p className="text-gray-400 ml-auto">
            Level <i className="fas fa-question-circle text-gray-200"></i>
          </p>

          <p className="text-gray-400 ml-auto mr-5 ">Experience Last used</p>
        </div>
        <hr className="ml-5 mt-2 w-full border-t border-gray-200" />
        <div className="flex justify-between items-center mb-4 ml-5">
          <h3 className="text-base font-bold mr-5 mt-5">{t('SystemsDevelopment')}</h3>
        </div>

        <div className="flex ml-5 mt-2">

          <p className="text-black-600">C</p>
          <div className='ml-auto'>

          <i className="fas fa-star text-gray-300 ml-1"></i>
          <i className="fas fa-star text-gray-300 ml-1"></i>
          <i className="fas fa-star text-gray-300 ml-1"></i>
          <i className="fas fa-star text-gray-300 ml-1"></i>
          <i className="fas fa-star text-gray-300 ml-1"></i>
          </div>
          <p className="text-black-600 ml-auto mr-5">any value 2023</p>
        </div>
        <hr className="ml-5 mt-2 w-full border-t border-gray-200" />
        </div>
  );
};

export default SkillsAdd;
