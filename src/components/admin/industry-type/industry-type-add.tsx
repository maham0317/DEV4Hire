import { useState } from "react";
import { useForm } from "react-hook-form";
import { IndustryTypeModel } from "@/interfaces/industry-type/industry-type.model";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { RiCloseLine } from "react-icons/ri";
import { useCreateIndustryTypeMutation } from "../../../services/industry-type";

const IndustryTypeAdd = (props: any) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [createIndustryType, { isLoading, isSuccess, error, isError, data }] =
    useCreateIndustryTypeMutation();

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IndustryTypeModel>();

  const onSubmit = async (data: IndustryTypeModel) => {
    try {
      await createIndustryType(data);
      toast.success("Industry Type created successfully");
      setIsOpen(false);
      props.refreshResult(true);
      reset();
    } catch (error) {
      toast.error("there is some error");
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex justify-center items-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative bg-white shadow-lg">
            <div className="p-2 border-b">
              <h1 className="modal-title ">
                {t("IndustryType.AddOrEdit.Title")}
              </h1>
              <button onClick={handleCloseModal} className="corss-button">
                <RiCloseLine className="h-6 w-6" />
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
                    className={`input-field  ${
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
                          { MaxLength: 25 }
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
                <label className="modal-title">
                  {t("IndustryType.AddOrEdit.Input.Label.Description")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`input-field  ${
                      errors.Description ? "invalid" : ""
                    }`}
                    {...register("Description", {
                      required: t(
                        "IndustryType.AddOrEdit.Input.ValidationError.Required"
                      ),
                      maxLength: {
                        value: 25,
                        message: t(
                          "IndustryType.AddOrEdit.Input.ValidationError.NameMaxLength",
                          { MaxLength: 25 }
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
              <div className="flex justify-between gap-5">
                <label className="modal-title">
                  {t("IndustryType.AddOrEdit.Input.Label.ParentId")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`input-field  ${
                      errors.ParentId ? "invalid" : ""
                    }`}
                    {...register("ParentId")}
                    placeholder={t(
                      "IndustryType.AddOrEdit.Input.Placeholder.ParentId"
                    )}
                  />
                  {errors.ParentId && (
                    <div className="text-red-500">
                      {errors.ParentId?.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                className="Save-button"
              >
                {t("Save")}
              </button>
              <button
                onClick={handleCloseModal}
                type="button"
                className="cancel-button"
              >
                {t("Cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IndustryTypeAdd;
