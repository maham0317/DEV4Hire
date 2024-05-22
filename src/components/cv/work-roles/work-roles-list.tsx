// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import WorkRolesReorder from './WorkRolesReorder';
// import WorkRolesEdit from './WorkRolesEdit';
// import WorkRolesAdd from './WorkRolesAdd';
// import ActionButtons from '../../common/ActionButtons';
// import './WorkRolesList.css';

// export const WorkRolesList: React.FC = () => {
//   const { t } = useTranslation();
//   const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
//   const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false);
//   const [isReorderFormOpen, setIsReorderFormOpen] = useState<boolean>(false);

//   const handleReorderLinkClick = () => {
//     setIsEditFormOpen(false);
//     setIsFormOpen(false);
//     setIsReorderFormOpen(true);
//   };

//   const handleCloseReorderForm = () => {
//     setIsReorderFormOpen(false);
//   };

//   const handleEditLinkClick = () => {
//     setIsFormOpen(false);
//     setIsReorderFormOpen(false);
//     setIsEditFormOpen(true);
//   };

//   const handleCloseEditForm = () => {
//     setIsEditFormOpen(false);
//   };

//   const handleAddLinkClick = () => {
//     setIsEditFormOpen(false);
//     setIsReorderFormOpen(false);
//     setIsFormOpen(true);
//   };

//   const handleCloseForm = () => {
//     setIsFormOpen(false);
//   };

//   return (
//     <>
//       {!isFormOpen && !isEditFormOpen && !isReorderFormOpen && (
//         <div className="flex flex-col gap-4 text-base mt-5">
//           <div className="bg-white p-4 rounded shadow">
//             <div className="flex justify-between items-center mb-3">
//               <h2 className="text-2xl font-bold ml-5 times-new-roman-font">{t('Workroles')}</h2>
//               <ActionButtons
//                 onAdd={handleAddLinkClick}
//                 onEdit={handleEditLinkClick}
//                 onReorder={handleReorderLinkClick}
//                 showReorder={true}
//               />
//             </div>

//             <ul className="circle-list text-base">
//               <li><i className="mb-3 fas fa-circle-notch circle-icon"></i> Developer</li>
//               <li><i className="mb-3 fas fa-circle-notch circle-icon"></i> Frontend Developer</li>
//               <li><i className="mb-3 fas fa-circle-notch circle-icon"></i> Lead Developer</li>
//               <li><i className="mb-3 fas fa-circle-notch circle-icon"></i> System Consultant</li>
//             </ul>

//             <button
//               className="bg-transparent  hover:bg-blue-500 text-blue-800 mt-4 ml-4 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
//               onClick={handleAddLinkClick}
//             >
//               {t('AddEntry')}
//             </button>
//           </div>
//         </div>
//       )}
//       {isEditFormOpen && <WorkRolesEdit onClose={handleCloseEditForm} />}
//       {isFormOpen && <WorkRolesAdd onClose={handleCloseForm} />}
//       {isReorderFormOpen && <WorkRolesReorder onClose={handleCloseReorderForm} />}
//     </>
//   );
// };

// export default WorkRolesList;
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import WorkRolesReorder from "./work-roles-reorder";
import WorkRolesEdit from "./work-roles-edit";
import WorkRolesAdd from "./work-roles-add";
import ActionButtons from "../../common/action-buttons";
// import "./WorkRolesList.css";

export const WorkRolesList: React.FC = () => {
  const { t } = useTranslation();
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false);
  const [isReorderFormOpen, setIsReorderFormOpen] = useState<boolean>(false);
  const [workRolesData, setWorkRolesData] = useState<any[]>([]); // Store the API response data

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://217.170.197.146/api/userworkrole/list"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setWorkRolesData(data); // Set the API response data in component state
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Call the API when the component mounts
  }, []);

  const handleReorderLinkClick = () => {
    setIsEditFormOpen(false);
    setIsFormOpen(false);
    setIsReorderFormOpen(true);
  };

  const handleCloseReorderForm = () => {
    setIsReorderFormOpen(false);
  };

  const handleEditLinkClick = () => {
    setIsFormOpen(false);
    setIsReorderFormOpen(false);
    setIsEditFormOpen(true);
  };

  const handleCloseEditForm = () => {
    setIsEditFormOpen(false);
  };

  const handleAddLinkClick = () => {
    debugger
    setIsEditFormOpen(false);
    setIsReorderFormOpen(false);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      {!isFormOpen && !isEditFormOpen && !isReorderFormOpen && (
        <div className="flex flex-col gap-4 text-base mt-5">
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-bold ml-5 times-new-roman-font">
                {t("Workroles")}
              </h2>
              <ActionButtons
                onAdd={handleAddLinkClick}
                onEdit={handleEditLinkClick}
                onReorder={handleReorderLinkClick}
                showReorder={true}
              />
            </div>

            <ul className="circle-list text-base">
              {/* Render the API data here */}
              {workRolesData.map((role) => (
                <li key={role.id}>
                  <i className="mb-3 fas fa-circle-notch circle-icon"></i>{" "}
                  {role.name}
                </li>
              ))}
            </ul>

            <button
              className="add-entry"
              onClick={handleAddLinkClick}
            >
              {t("AddEntry")}
            </button>
          </div>
        </div>
      )}
      {isEditFormOpen && <WorkRolesEdit onClose={handleCloseEditForm} />}
      {isFormOpen && <WorkRolesAdd onClose={handleCloseForm} />}
      {isReorderFormOpen && (
        <WorkRolesReorder onClose={handleCloseReorderForm} />
      )}
    </>
  );
};

export default WorkRolesList;
