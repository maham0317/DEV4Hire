import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from 'react-icons/fa';
import Checkbox from '@mui/material/Checkbox';
import IndustryTypeAdd from "../../../components/admin/industry-type/industry-type-add";
import { FormControlLabel } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useAppDispatch } from "../../../hooks/appDispatch";
import { getAllIndustryType } from "../../../store/industry-type/industry-type";
import { IndustryTypeModel } from "../../../interfaces/industry/industry.model";

const IndustryList = () => {

    const [industrylist, setIndustrylist] = useState(false);

    const industryList = useSelector((state: RootState) => state.industrytype.data);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllIndustryType())
    }, [dispatch]);

    // Checkbox
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    // Modal
    const createIndustryList = () => {
        setIndustrylist(!industrylist);
    };
    return (
        <>
            <div className="bg-blue-50 h-screen p-4">
                <div className="container-fluid p-3">
                    <div className="text-xl text-indigo-900 font-montserrat font-normal">
                        Industry Type List
                    </div>
                    <button
                        className="text-white mt-3 bg-blue-500 text-blue-700 font-montserrat font-semibold gap-1 border border-blue-500 hover:border-transparent rounded flex items-center justify-center w-40 h-10"
                        onClick={createIndustryList}
                    >
                        <FaPlus className="" />
                        Create New
                    </button>
                    {industrylist && (
                        <IndustryTypeAdd />
                    )}
                </div>
                <div className="bg-white p-4 border shadow-md">
                    <div className="container-fluid bg-blue-50 shadow-sm mt-2 ">
                        <div className="flex justify-between text-xl text-indigo-900 font-montserrat font-semibold w-full h-16 border-b-1 border-gray-300 ">
                            <div className="py-4 px-2">Industry Types</div>
                            <div className="flex items-center">
                                <input type="text" className="border border-gray-300 text-lg font-medium rounded-l px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Search..." />
                                <button className="bg-blue-500 mr-3 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r">
                                    <i className="fa-solid fa-magnifying-glass" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-3 ">
                        <table className="w-full text-left font-montserrat text-indigo-900">
                            <thead className="border-b">
                                <tr className="">
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex w-max gap-4">
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}
                                            />
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3  font-semibold">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3  font-semibold">
                                        Description
                                    </th>
                                    <th scope="col" className="font-semibold">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(industryList) && industryList?.map((item: IndustryTypeModel) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="col" className="px-6 py-3">
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}
                                            />
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.IndustryName}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.Description}
                                        </td>
                                        <td className="px-6 py-3 text-red-500 ">
                                            <RxCross2 />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndustryList;
