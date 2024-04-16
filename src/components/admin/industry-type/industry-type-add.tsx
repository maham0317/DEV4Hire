import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IndustryTypeModel } from "@/interfaces/industry-type/industry-type.model";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { RxCross2 } from "react-icons/rx";

import { useAppDispatch } from "@/hooks/appDispatch";
import { createIndustryType } from "@/store/industry-type/industry-type";
import { useNavigate } from "react-router-dom";

import { Button, Modal } from "flowbite-react";
import "react-toastify/dist/ReactToastify.css";

const IndustryTypeAdd = () => {
  const [isOpen, setIsOpen] = useState(true);

  const { t, i18n } = useTranslation();
  const [industrytype, setIndustryType] = useState<IndustryTypeModel>({
    Id: 0,
    IndustryName: "",
    Description: "",
  });

  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIndustryType({ ...industrytype, [name]: value });
  };

  const create = async (data: IndustryTypeModel) => {
    try {
      await dispatch(createIndustryType(data));
      setIsOpen(false);
      toast.success("Item saved successfully");
    } catch (error) {
      toast.error("Error occurred while creating industry type");
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IndustryTypeModel>();

  const onSubmit = (data: IndustryTypeModel) => {
    create(data);
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
        style={{ width: "400px", height: "200px" }}
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
                  value={industrytype.IndustryName}
                  {...register("IndustryName", {
                    required: "Fill this field",
                    maxLength: 8,
                  })}
                  placeholder="Name"
                  onChange={handleInputChange}
                />
                {errors.IndustryName && (
                  <div className="text-red-500 ">
                    {errors.IndustryName.message}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between mt-5 gap-5">
              <label className="label-text">Description</label>
              <div>
                <input
                  type="text"
                  className="border font-montserrat font-medium text-base text-indigo-900 rounded-md p-2 w-96 h-8 border-1 border-gray-300"
                  value={industrytype.Description}
                  {...register("Description", { maxLength: 20 })}
                  placeholder="Description"
                  onChange={handleInputChange}
                />
                {errors.Description && (
                  <div className="text-red-500 ">
                    {errors.Description.message}
                  </div>
                )}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="">
            <button type="submit" className="blue-button">
              Save
            </button>
            <button color="gray" onClick={handleCloseModal}>
              Cancel
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default IndustryTypeAdd;
