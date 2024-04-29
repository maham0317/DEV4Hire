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
              <h1 className="text-xl text-gray-500 font-montserrat font-semibold ">
                {t("IndustryType.AddOrEdit.Title")}
              </h1>
              <button
                onClick={handleCloseModal}
                className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <RiCloseLine className="h-6 w-6" />
              </button>
            </div>
            <div className="px-5 md:p-5 space-y-4">
              <div className="flex justify-between gap-5">
                <label className="text-xl text-gray-500 font-montserrat font-semibold">
                  {t("IndustryType.AddOrEdit.Input.Label.Name")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`border font-montserrat font-light text-base text-indigo-900 rounded-md p-2 w-96 h-8 border-1 border-gray-300 ${
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
                <label className="text-xl text-gray-500 font-montserrat font-semibold">
                  {t("IndustryType.AddOrEdit.Input.Label.Description")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`border font-montserrat font-light text-base text-indigo-900 rounded-md p-2 w-96 h-8 border-1 border-gray-300 ${
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
                <label className="text-xl text-gray-500 font-montserrat font-semibold">
                  {t("IndustryType.AddOrEdit.Input.Label.ParentId")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`border font-montserrat font-light text-base text-indigo-900 rounded-md p-2 w-96 h-8 border-1 border-gray-300 ${
                      errors.ParentId ? "invalid" : ""
                    }`}
                    {...register("ParentId" )}
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
            <div className="flex justify-end p-3 md:p-5 border-t font-montserrat font-semibold rounded-b dark:border-gray-600">
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
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-blue-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
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
