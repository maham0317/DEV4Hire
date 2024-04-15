import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IndustryTypeModel } from "../../../interfaces/industry/industry.model";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { RxCross2 } from "react-icons/rx";
import { useCreateIndustryTypeMutation } from "@/services/industry-type";

const IndustryTypeAdd = () => {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(true);

  const [createIndustryType, { isLoading, isSuccess, error, isError }] =
    useCreateIndustryTypeMutation();

  useEffect(() => {
    if (isError) {
      console.log("error", isError);
      toast.error(t("IndustryType.AddOrEdit.Input.Toast.ErrorMessage"));
    }
  }, [error, isError]);

  useEffect(() => {
    if (isSuccess) {
      console.log("success", isSuccess);
      toast.success(t("IndustryType.AddOrEdit.Input.Toast.SuccessMessage"));
      setIsOpen(false);
      reset();
    }
  }, [isSuccess]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IndustryTypeModel>();

  const MaxLength = {
    Name: 25,
    Description: 100,
  };

  const onSubmit = async (data: IndustryTypeModel) => {
    createIndustryType(data);
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
        <div className="fixed inset-0 overflow-y-auto z-50 flex justify-center items-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative bg-white  shadow-lg">
            <div className="p-2 border-b">
              <h1 className="text-xl text-gray-500 font-montserrat font-semibold ">
                {t("IndustryType.AddOrEdit.Title")}
              </h1>
              <button
                onClick={handleCloseModal}
                className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <RxCross2 className="h-6 w-6" />
              </button>
            </div>
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
                    <div className="text-red-500 ">
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
          </div>
        </div>
      )}
    </>
  );
};

export default IndustryTypeAdd;
