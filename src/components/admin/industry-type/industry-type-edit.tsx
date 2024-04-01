import React from 'react'

const Industrytypeedit = () => {
  return (
    <div>Industrytypeedit</div>
  )
}

export default Industrytypeedit


// import React, { useState } from 'react';
// import { RiCloseLine } from 'react-icons/ri';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../../store/store';
// import { updateIndustryType } from '../../../store/industry-type/industry-type';
// import { IndustryTypeModel } from '../../../interfaces/industry/industry.model';

// const IndustryTypeEdit = () => {

//     const { IndustryTypeById } = useParams<{ IndustryTypeById: string }>();

//     const navigate = useNavigate();

//     const dispatch = useDispatch();

//     if (!IndustryTypeById) {
//         return <div>Error:Industry Type By Id is noo provided.</div>
//     }

//     const industryType: IndustryTypeModel = useSelector((state: RootState) => state.industrytype.data)?.find((x: any) => x.Id === parseInt(IndustryTypeById));

//     const [updatedData, setUpdatedData] = useState(industryType);

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setUpdatedData((prevData: any) => ({
//             ...prevData,
//             [name]: value,
//         }))
//     }

//     const goBack = () => {
//         navigate(-1);
//     }

//     const handleUpdateProduct = async () => {
//         try {
//             if (updatedData) {
//                 await dispatch(updateIndustryType(updatedData));
//                 console.log("Product uppdated successfully")
//                 goBack();
//             }
//         } catch (error) {
//             console.log("Error updating product:", error)
//         }
//     }

//     return (
//         <>
        
//             <div className="fixed inset-0 overflow-y-auto z-50 flex justify-center items-center">
//                 <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//                 <div className="relative bg-white shadow-lg">
//                     <div className="p-2 border-b">
//                         <h1 className="text-xl text-gray-500 ml-3 font-montserrat font-semibold ">Industry Type</h1>
//                         <button
//                             onClick={goBack}
//                             className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-700 focus:outline-none"
//                         >
//                             <RiCloseLine className="h-6 w-6" />
//                         </button>
//                     </div>
//                     <form onSubmit={handleUpdateProduct}>
//                         <div className="px-5 md:p-5 space-y-4">
//                             <div className="flex justify-between gap-5">
//                                 <label className="text-lg text-gray-500 font-montserrat font-semibold">Name</label>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         className="border font-montserrat font-medium text-base text-indigo-900 rounded-md p-2 w-96 h-8 border-1 border-gray-300"
//                                         name="name"
//                                         value={updatedData?.IndustryName || ''}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                             </div>
//                             <div className="flex justify-between gap-5">
//                                 <label className="text-lg text-gray-500 font-montserrat font-semibold">Description</label>
//                                 <div>
//                                     <input
//                                         type="text"
//                                         className="border font-montserrat font-medium text-base text-indigo-900 rounded-md p-2 w-96 h-8 border-1 border-gray-300"
//                                         name="description"
//                                         value={updatedData?.Description || ''}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex justify-end p-3 md:p-5 border-t font-montserrat font-semibold rounded-b dark:border-gray-600">
//                             <button
//                                 type="submit"
//                                 className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                             >
//                                 Save
//                             </button>
//                             <button
//                                 type="button"
//                                 onClick={goBack}
//                                 className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-blue-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-700"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };
// export default IndustryTypeEdit;