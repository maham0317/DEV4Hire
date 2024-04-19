// // RoleList.tsx
// import React, { useState } from "react";
// import Navbar from "@/components/header/navbar";
// import RoleAdd from "@/components/admin/role/role-add/role-add";
// import { useTranslation } from "react-i18next";

// const RoleList: React.FC = () => {
//   const [roles, setRoles] = useState<any[]>([]);
//   const [isRoleAddVisible, setIsRoleAddVisible] = useState<boolean>(false);
//   const { t } = useTranslation();

//   const openRoleAddForm = () => {
//     setIsRoleAddVisible(true);
//   };

//   const closeRoleAddForm = () => {
//     setIsRoleAddVisible(false);
//   };

//   const handleAddRole = (role: any) => {
//     setRoles([...roles, role]);
//   };

//   return (
//     <div className="bg-gray-200 min-h-screen">
//       {/* <Navbar /> */}
//       <div className="container mx-auto p-8">
//         <div className="mb-4">
//           <h1 className="text-3xl font-semibold text-gray-700">Role List</h1>
//           <p className="text-sm text-gray-500">{t("RoleList.Text")}</p>
//           <button
//             className="bg-[#332c55] rounded text-white py-2 px-8 text-sm font-medium hover:bg-gray-600 mt-4"
//             onClick={openRoleAddForm}
//           >
//             <i className="fas fa-plus-circle mr-2"></i> Add
//           </button>
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <div className="flex items-center mb-4">
//             <h2 className="text-lg font-semibold text-gray-600 ml-2">
//               Role list
//             </h2>
//             <div className="flex space-x-2 ml-auto mr-2">
//               <input
//                 placeholder="search"
//                 className="form-input form-input-sm"
//                 type="search"
//               />
//               <button className="btn btn-sm btn-primary">Search</button>
//             </div>
//           </div>
//           <hr className="border-gray-300" />

//           <div className="table-responsive mt-4">
//             <table className="table-auto w-full">
//               <thead>
//                 <tr>
//                   <th className="px-4 py-2 text-left">Title</th>
//                   <th className="px-4 py-2 text-left">Description</th>
//                   <th className="text-center px-32 py-2">Edit</th>
//                   <th className="text-center px-4 py-2">Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {roles.map((role, index) => (
//                   <tr key={index}>
//                     <td className="px-4 py-2">{role.WorkRoleName}</td>
//                     <td className="px-4 py-2">{role.WorkRoleDesc}</td>

//                     <td className="text-center px-4 py-2">
//                       <a>
//                         <i className="fas fa-edit text-red-500">Edit</i>
//                       </a>
//                     </td>
//                     <td className="text-center px-4 py-2">
//                       <a>
//                         <i className="fas fa-times text-red-500">Delete</i>
//                       </a>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {isRoleAddVisible && (
//         <div className="fixed inset-0 flex items-center justify-center z-10">
//           <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
//           <div className="relative z-20 bg-white p-4 rounded-lg shadow-lg">
//             <RoleAdd onCancel={closeRoleAddForm} onAddRole={handleAddRole} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RoleList;
