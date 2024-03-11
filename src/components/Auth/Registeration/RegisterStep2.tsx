import React from "react";
import { useTranslation } from "react-i18next";
import RegisterData from "../../../interfaces/register/Register";
import { useForm } from "react-hook-form";

interface RegisterStep2Props {
  onNext: () => void;
  onPrev: () => void;
}

const RegisterStep2: React.FC<RegisterStep2Props> = (props) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterData>();

  const onSubmit = (data: RegisterData) => {
    console.log(data);
    reset();
    props.onNext();
  };

  return (
    <div className="flex justify-center items-center pb-32 min-h-screen  text-sm">
      <div className="bg-white p-8 mb-5  rounded shadow-md w-full max-w-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-[#332c55]  font-semibold mb-2"
                htmlFor="grid-specialization"
              >
                {t("Specialization")}
              </label>
              <select
                className={`block appearance-none w-full bg-white-200 border ${
                  errors.specialization ? "border-red-500" : "border-gray-200"
                } text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white`}
                {...register("specialization", {
                  required: "specialization is required",
                })}
                id="grid-specialization"
              >
                <option value="" disabled>
                  {t("SelectSpecialization")}
                </option>
                <option>.Net</option>
                <option>Agile</option>
                <option>Android</option>
              </select>
              {errors.specialization && (
                <div className="text-red-500">
                  {errors.specialization?.message}
                </div>
              )}
            </div>
          </div>

          <div>
            <p className=" italic text-[#332c55]"> {t("Career")}</p>
            <p className="font-medium italic  mt-2 text-[#332c55]">
              {" "}
              {t("UploadCV")}
            </p>
            <div className="relative mt-3">
              <input
                className={`block appearance-none w-full bg-white-200 border ${
                  errors.cvFile ? "border-red-500" : "border-gray-200"
                } text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white`}
                {...register("cvFile", { required: "cvFile is required" })}
                id="grid-cv-file"
                type="file"
                placeholder=""
              />
              <i className="fas fa-file-upload"></i>
              {errors.cvFile && (
                <div className="text-red-500">{errors.cvFile?.message}</div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="font-medium tracking-wide text-xs text-[#332c55]  mb-2"
                htmlFor="grid-linkedInProfile"
              >
                {t("LinkedInProfile")}
              </label>
              <input
                className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-linkedInProfile"
                type="text"
                placeholder={t("PasteLink")}
                {...register("linkedInProfile")}
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              type="button"
              onClick={props.onPrev}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-none rounded"
            >
              <span className="mr-2">
                <i className="fas fa-arrow-left"></i>
              </span>
              {t("Back")}
            </button>
            <button
              type="submit"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              {t("NextButtonLabel")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterStep2;
