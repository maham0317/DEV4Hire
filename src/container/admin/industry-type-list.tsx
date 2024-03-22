import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from 'react-icons/fa';
import IndustryTypeAdd from "../../components/admin/industry-types/industry-type-add";

import Checkbox from '@mui/material/Checkbox';
const IndustryList = () => {
    const [industrylist, setIndustrylist] = useState(false);
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([
        { id: 1, name: 'Laptop', description: 'Silver' },
        { id: 2, name: 'Laptop PC', description: 'White' },
        { id: 3, name: 'Accessories', description: 'Black' },
    ]);

    //Modal
    const createindustrylist = () => {
        setIndustrylist(!industrylist);
    };
    //Search Data
    const searchData = (e: any) => {
        const key = e.target.value;
        setQuery(key);
    };
    // Filtered Items
    const filteredItems = items.filter(item => {
        return item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase());
    });

    //Checkbox
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <>
            <div className="bg-blue-50 h-screen p-4">
                <div className="container-fluid p-3">
                    <div className="text-xl text-indigo-900 font-montserrat font-normal">
                        Industry Type List
                    </div>
                    <button
                        className="text-white mt-3 bg-blue-500 text-blue-700 font-montserrat font-semibold gap-1 border border-blue-500 hover:border-transparent rounded flex items-center justify-center w-40 h-10"
                        onClick={createindustrylist}
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
                            <div className="py-4 px-2">Industry Type</div>
                            <div className="flex items-center">
                                <input type="text" className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Search..." onChange={searchData} />
                                <button className="bg-blue-500 mr-3 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r">
                                    <i className="fa-solid fa-magnifying-glass" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <table className="w-full  text-lg text-indigo-900 font-montserrat font-light">
                            <thead className=" uppercase ">
                                <tr className="border-b">
                                    <th scope="col" className="px-6 py-3">
                                        <Checkbox {...label} />
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredItems.map(item => (
                                    <tr key={item.id} className="border-b text-lg dark:border-gray-700  dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            <Checkbox {...label} />
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.description}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <a href="#" className="flex justify-center  text-red-500">
                                                <RxCross2 />
                                            </a>
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