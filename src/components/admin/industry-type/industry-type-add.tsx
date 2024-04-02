import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IndustryTypeModel } from "../../../interfaces/industry/industry.model";
import { useAppDispatch } from "../../../hooks/appDispatch";
import { createIndustryType } from "../../../store/industry-type/industry-type";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "flowbite-react";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { RxCross2 } from "react-icons/rx";

const IndustryTypeAdd = () => {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [createIndustryList, setCreateIndustryList] = useState({
    IndustryName: "",
    Description: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target;
  //     setCreateIndustryList({ ...createIndustryList, [name]: value });
  // };

  const createIndustryListData = async (data: IndustryTypeModel) => {
    try {
      setIsLoading(true);
      await dispatch(createIndustryType(data));
      setCreateIndustryList({ IndustryName: "", Description: "" });
      setIsOpen(false);
      navigate("/industry-type-list");
      toast.success(t("IndustryType.AddOrEdit.Toast.SuccessMessage"));
    } catch (error) {
      toast.error(t("IndustryType.AddOrEdit.Toast.ErrorMessage"));
      console.error(t("IndustryAdd.Error.IndustryList"), error);
    }
    setIsLoading(false);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IndustryTypeModel>();

  const MaxLength = {
    Name: 25,
    Description: 100,
  };

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
        style={{ width: "400px", height: "200px" }}
      />

      {isOpen && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed inset-0 overflow-y-auto z-50 flex justify-center items-center"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="elative bg-white shadow-lg">
            <div className="relative bg-white shadow-lg">
              <div className="p-2 border-b">
                <h1 className="title">{t("IndustryType.AddOrEdit.Title")}</h1>
                <button onClick={handleCloseModal} className="corss-button">
                  <RxCross2 className="h-6 w-6 mt-3 mr-3" />
                </button>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="px-5 md:p-5 space-y-4">
                  <div className="flex justify-between gap-5">
                    <label className="Label-text ">
                      {t("IndustryType.AddOrEdit.Input.Label.Name")}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="Input-text"
                        {...register("IndustryName", {
                          required: t(
                            "IndustryType.AddOrEdit.Input.ValidationError.Required"
                          ),
                          maxLength: {
                            value: MaxLength.Name,
                            message: t(
                              "IndustryType.AddOrEdit.Input.ValidationError.NameMaxLength",
                              { MaxLength: MaxLength.Name }
                            ),
                          },
                        })}
                        placeholder={t(
                          "IndustryType.AddOrEdit.Input.Placeholder.Name"
                        )}
                      />
                      {errors.IndustryName && (
                        <div className="text-red-500">
                          {errors.IndustryName?.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between gap-5">
                    <label className="Label-text ">
                      {t("IndustryType.AddOrEdit.Input.Label.Description")}
                    </label>
                    <div>
                      <input
                        type="text"
                        className="Input-text"
                        {...register("Description", {
                          required: t(
                            "IndustryType.AddOrEdit.Input.ValidationError.Required"
                          ),
                        })}
                        placeholder={t(
                          "IndustryType.AddOrEdit.Input.Placeholder.Description"
                        )}
                      />
                      {errors.Description && (
                        <div className=" text-red-500 ">
                          {errors.Description?.message}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="create-page-buttons">
                  <button
                    data-modal-hide="static-modal"
                    onClick={handleSubmit(onSubmit)}
                    type="submit"
                    className="Save-button "
                    disabled={isLoading}
                  >
                    {isLoading
                      ? t("IndustryType.AddOrEdit.Input.Button.saving")
                      : t("IndustryType.AddOrEdit.Input.Button.save")}
                  </button>
                  <button className="cancel-button" onClick={handleCloseModal}>
                    {t("IndustryType.AddOrEdit.Input.Button.cancel")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IndustryTypeAdd;
