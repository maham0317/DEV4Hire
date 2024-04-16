import React, { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../../store/store";
// import { updateIndustryType } from "../../../store/industry-type/industry-type";
import { IndustryTypeModel } from "@/interfaces/industry-type/industry-type.model";
import { useUpdateIndustryTypeMutation } from "@/services/industry-type";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const IndustryTypeEdit = (props: any) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(true);

  const [updateIndustryType, { isLoading, isSuccess, error, isError }] =
    useUpdateIndustryTypeMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IndustryTypeModel>({
    defaultValues: props.selectedData,
  });

  const MaxLength = {
    Name: 25,
    Description: 67,
  };

  useEffect(() => {
    if (isError) {
      toast.error("there is some Error");
    }
  }, [error, isError]);
  useEffect(() => {
    if (isSuccess) {
      toast.error("Industry Type Update successfully");
      setIsOpen(false);
      reset();
    }
  }, [isSuccess]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // Form Validtion

  const onSubmit = (data: any) => {
    updateIndustryType(data);
  };
  //////////////////////////////////////////////////////////////

  // const { IndustryTypeById } = useParams<{ IndustryTypeById: string }>();

  // const navigate = useNavigate();

  // const dispatch = useDispatch();

  // if (!IndustryTypeById) {
  //   return <div>Error:Industry Type By Id is noo provided.</div>;
  // }

  // const industryType: IndustryTypeModel = useSelector(
  //   (state: RootState) => state.industrytype.data
  // )?.find((x: any) => x.Id === parseInt(IndustryTypeById));

  // const [updatedData, setUpdatedData] = useState(industryType);

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setUpdatedData((prevData: any) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const goBack = () => {
  //   navigate(-1);
  // };

  // const handleUpdateProduct = async () => {
  //   try {
  //     if (updatedData) {
  //       await dispatch(updateIndustryType(updatedData));
  //       console.log("Product uppdated successfully");
  //       goBack();
  //     }
  //   } catch (error) {
  //     console.log("Error updating product:", error);
  //   }
  // };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex justify-center items-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative bg-white shadow-lg">
            <div className="p-2 border-b">
              <h1 className="text-xl text-gray-500 ml-3 font-montserrat font-semibold ">
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
                <label className="text-lg text-gray-500 font-montserrat font-semibold">
                  {t("IndustryType.AddOrEdit.Input.Label.Name")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="border font-montserrat font-medium text-base text-indigo-900 rounded-md p-2 w-96 h-8 border-1 border-gray-300"
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
                <label className="text-lg text-gray-500 font-montserrat font-semibold">
                  {t("IndustryType.AddOrEdit.Input.Label.Description")}
                </label>
                <div>
                  <input
                    type="text"
                    className="border font-montserrat font-medium text-base text-indigo-900 rounded-md p-2 w-96 h-8 border-1 border-gray-300"
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
            <div className="flex justify-end p-3 md:p-5 border-t font-montserrat font-semibold rounded-b dark:border-gray-600">
              <button
                type="submit"
                className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled={isLoading}
              >
                {isLoading
                  ? t("IndustryType.AddOrEdit.Input.Button.saving")
                  : t("IndustryType.AddOrEdit.Input.Button.save")}
              </button>
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-blue-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-700"
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
