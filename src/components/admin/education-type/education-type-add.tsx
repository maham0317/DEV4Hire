import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import EducationTypeModel from "@/interfaces/setup/education-type.model";
import { useEductionAdd } from "./education-type-add-hook";

const EducationTypeAdd = (props: any) => {
  const {
    onSubmit,
    isLoading,
    handleCloseModal,
    isOpen,
    MaxLength,
    handleSubmit,
    register,
    errors,
    t,
  } = useEductionAdd(props);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex justify-center items-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative bg-white  shadow-lg">
            <div className="p-2 border-b">
              <h1 className="modal-title">
                {t("EducationType.AddOrEdit.Title")}
              </h1>
              <button onClick={handleCloseModal} className="corss-button">
                <RxCross2 className="h-6 w-6" />
              </button>
            </div>
            <div className="px-5 md:p-5 space-y-4">
              <div className="flex justify-between gap-5">
                <label className="modal-title">
                  {t("EducationType.AddOrEdit.Input.Label.Name")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`input-field border-1 ${
                      errors.Name ? "invalid" : ""
                    }`}
                    {...register("Name", {
                      required: t(
                        "EducationType.AddOrEdit.Input.ValidationError.Required"
                      ),
                      maxLength: {
                        value: MaxLength.Name,
                        message: t(
                          "EducationType.AddOrEdit.Input.ValidationError.NameMaxLength",
                          { MaxLength: MaxLength.Name }
                        ),
                      },
                    })}
                    placeholder={t(
                      "EducationType.AddOrEdit.Input.Placeholder.Name"
                    )}
                  />
                  {errors.Name && (
                    <div className=" text-red-500 ">{errors.Name?.message}</div>
                  )}
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button
                data-modal-hide="static-modal"
                onClick={handleSubmit(onSubmit)}
                type="submit"
                className="Save-button "
                disabled={isLoading}
              >
                {isLoading
                  ? t("EducationType.AddOrEdit.Input.Button.saving")
                  : t("EducationType.AddOrEdit.Input.Button.save")}
              </button>
              <button
                data-modal-hide="static-modal"
                onClick={handleCloseModal}
                type="button"
                className="cancel-button"
              >
                {t("EducationType.AddOrEdit.Input.Button.cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EducationTypeAdd;
