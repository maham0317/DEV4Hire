import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IndustryTypeModel } from '../../../interfaces/industry/industry.model';
import { useAppDispatch } from '../../../hooks/appDispatch';
import { createIndustryType } from '../../../store/industry-type/industry-type';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Button, Modal } from 'flowbite-react';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const IndustryTypeAdd = () => {

    const { t, i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(true);
    const [createIndustryList, setCreateIndustryList] = useState({
        IndustryName: '',
        Description: '',
    });

    const dispatch = useAppDispatch();
    
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCreateIndustryList({ ...createIndustryList, [name]: value });
    };

    const createIndustryListData = async (data: IndustryTypeModel) => {
        try {
            await dispatch(createIndustryType(data));
            setCreateIndustryList({ IndustryName: '', Description: '' });
            setIsOpen(false);
            navigate("/industry-type-list");
            toast.success('Item saved successfully');
        } catch (error) {
            console.error('Error creating industry list:', error);
        }
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IndustryTypeModel>();

    const onSubmit = (data: IndustryTypeModel) => {
        createIndustryListData(data);
    };



    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ width: '400px', height: '200px' }}
            />
            <Modal show={isOpen} onClose={handleCloseModal}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header>Industry Type</Modal.Header>
                    <Modal.Body>
                        <div className="flex justify-between gap-5">
                            <label className="label-text">Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="border font-montserrat font-medium text-base text-indigo-900 rounded-md p-2 w-96 h-8 border-1 border-gray-300"
                                    value={createIndustryList.IndustryName}
                                    {...register('IndustryName', { required: 'Fill this field', maxLength: 8 })}
                                    placeholder="Name"
                                    onChange={handleInputChange}
                                />
                                {errors.IndustryName && (
                                    <div className="text-red-500 ">{errors.IndustryName.message}</div>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-between mt-5 gap-5">
                            <label className="label-text">Description</label>
                            <div>
                                <input
                                    type="text"
                                    className="border font-montserrat font-medium text-base text-indigo-900 rounded-md p-2 w-96 h-8 border-1 border-gray-300"
                                    value={createIndustryList.Description}
                                    {...register('Description', { required: 'Fill this field', maxLength: 20 })}
                                    placeholder="Description"
                                    onChange={handleInputChange}
                                />
                                {errors.Description && (
                                    <div className="text-red-500 ">{errors.Description.message}</div>
                                )}
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className=''>
                        <button type="submit" className='blue-button'>Save</button>
                        <button color="gray" onClick={handleCloseModal}>Cancel</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
};
export default IndustryTypeAdd;