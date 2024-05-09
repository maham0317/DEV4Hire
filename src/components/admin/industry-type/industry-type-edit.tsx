import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { IndustryTypeModel } from "@/interfaces/industry-type/industry-type.model";
import { useTranslation } from "react-i18next";
import { useIndustryTypeEdit } from "./industry-type-edit-hook";

const IndustryTypeEdit = (props: any) => {
  const {
    onSubmit,
    isLoading,
    isOpen,
    handleCloseModal,
    register,
    handleSubmit,
    t,
    errors,
    MaxLength,
  } = useIndustryTypeEdit(props);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex justify-center items-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative bg-white shadow-lg">
            <div className="p-2 border-b">
              <h1 className="modal-title">
                {t("IndustryType.AddOrEdit.Title")}
              </h1>
              <button onClick={handleCloseModal} className="corss-button">
                <RxCross2 className="h-6 w-6" />
              </button>
            </div>
            <div className="px-5 md:p-5 space-y-4">
              <div className="flex justify-between gap-5">
                <label className="modal-title">
                  {t("IndustryType.AddOrEdit.Input.Label.Name")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`input-field ${
                      errors.IndustryName ? "invalid" : ""
                    }`}
                    {...register("IndustryName", {
                      required: t(
                        "IndustryType.AddOrEdit.Input.ValidationError.Required"
                      ),
                      maxLength: {
                        value: 25,
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
            </div>
            <div className="px-5 md:p-5 space-y-4">
              <div className="flex justify-between gap-5">
                <label className="modal-title">
                  {t("IndustryType.AddOrEdit.Input.Label.Description")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`input-field ${
                      errors.Description ? "invalid" : ""
                    }`}
                    {...register("Description", {
                      required: t(
                        "IndustryType.AddOrEdit.Input.ValidationError.Required"
                      ),
                      maxLength: {
                        value: 20,
                        message: t(
                          "IndustryType.AddOrEdit.Input.ValidationError.NameMaxLength",
                          { MaxLength: MaxLength.Name }
                        ),
                      },
                    })}
                    placeholder={t(
                      "IndustryType.AddOrEdit.Input.Placeholder.Description"
                    )}
                  />
                  {errors.Description && (
                    <div className="text-red-500">
                      {errors.Description?.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="flex justify-end p-3 md:p-5 border-t font-montserrat font-semibold rounded-b">
              <button
                data-modal-hide="static-modal"
                type="button"
                disabled={isLoading}
                onClick={handleSubmit(onSubmit)}
                className="Save-button"
              >
                {isLoading
                  ? t("IndustryType.AddOrEdit.Input.Button.saving")
                  : t("IndustryType.AddOrEdit.Input.Button.save")}
              </button>
              <button
                data-modal-hide="static-modal"
                onClick={handleCloseModal}
                type="button"
                className="cancel-button"
              >
                {t("IndustryType.AddOrEdit.Input.Button.cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IndustryTypeEdit;
