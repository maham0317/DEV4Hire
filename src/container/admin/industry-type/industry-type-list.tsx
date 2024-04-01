import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from 'react-icons/fa';
import Checkbox from '@mui/material/Checkbox';
import IndustryTypeAdd from "../../../components/admin/industry-type/industry-type-add";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useAppDispatch } from "../../../hooks/appDispatch";
import { deleteIndustryTypeById, getAllIndustryType } from "../../../store/industry-type/industry-type";
import { IndustryTypeModel } from "../../../interfaces/industry/industry.model";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const IndustryList = () => {
    const [industrylist, setIndustrylist] = useState(false);
    const { t } = useTranslation();
    const industryList = useSelector((state: RootState) => state.industrytype.data);

    const isLoading = useSelector((state: RootState) => state.industrytype.isLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllIndustryType())
    }, []);

    // useEffect(() => {
    //     if (isLoading) {
    //         dispatch(getAllIndustryType())
    //     }
    // }, [industryList]);

    //Delete Industry list
    const handleDeleteIndustry = (id: number) => {
        try {
            console.log("delete", id)
            dispatch(deleteIndustryTypeById(id));
        } catch (error) {
            console.error('Error deleting industry list:', error);
        }
    }

    //Create Indudustry list
    const createIndustryList = () => {
        setIndustrylist(!industrylist);
    };

    return (
        <>
            <div className='bg-blue-50 h-screen p-4'>
                <div className="container-fluid p-3">
                    <div className="page-title -mx-2">
                       {t('IndustryTypeList.Heading')}
                    </div>
                    <button
                        className=" create-button"
                        onClick={createIndustryList}
                    >
                        <FaPlus className="text-white" />
                        <div className="text-white">{t('IndustryTypeList.Button.CreateNew')}</div>
                    </button>
                    {industrylist && (
                        <IndustryTypeAdd />
                    )}
                </div>
                <div className="ibox" onClick={createIndustryList}>
                    <div className="container-fluid ibox-title ">
                        <div className="ibox-index">
                            <div className="py-4 px-2">{t('IndustryTypeList.IndustryTable.IndustryTypes')}</div>
                            <div className="flex items-center">
                                <input type="text" className="search-bar" placeholder="Search..." />
                                <button title="" className="search-button">
                                    <i className="fa-solid fa-magnifying-glass" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <table className="ibox-content">
                            <thead className="border-b">
                                <tr className="">
                                    <th scope="col" className="table-header">
                                    {t('IndustryTypeList.IndustryTable.Name')}
                                    {/* {t("Specialization")} */}
                                    </th>
                                    <th scope="col" className="table-header">
                                    {t('IndustryTypeList.IndustryTable.Description')}
                                    </th>
                                    <th scope="col" className="table-header center ">
                                    {t('IndustryTypeList.IndustryTable.Actions')}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(industryList) && industryList?.map((item: IndustryTypeModel) => {
                                    console.log("iem----", item)
                                    return (
                                        <tr key={item.Id} className="table-data-row">
                                            <td className="px-6 py-4">
                                                {item.IndustryName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.Description}
                                            </td>
                                            <button className="px-6 py-3 text-red-500" type="button" onClick={() => handleDeleteIndustry(item.Id)}>
                                                <RxCross2 />
                                            </button>
                                            <td><Link to={`/edit/${item.Id}`} className='edit-icons bg-primary text-light' ><FaEdit /></Link></td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndustryList;