import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import SkillTypeModel from "@/interfaces/skill/skill.model";
import { toast } from "react-toastify";
import { useUpdateSkillMutation } from "@/services/skill";
import { useTranslation } from "react-i18next";

const SkillEdit = (props: any) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [updateSkill, { isLoading, isSuccess, error, isError }] =
  useUpdateSkillMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SkillTypeModel>({
    defaultValues: props.selectedData,
  });
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const onSubmit = async (data: SkillTypeModel) => {
    try {
      await updateSkill(data).unwrap();
      toast.success(t("Skill.AddOrEdit.Input.Toast.UpdateMessage"));
      setIsOpen(false);
      props.refreshResult(true);
      reset();
    } catch (e: any) {
      toast.error(t("Skill.AddOrEdit.Input.Toast.ErrorMessage"));
    }
  };
  const MaxLength = {
    Name: 25,
  };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex justify-center items-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative bg-white  shadow-lg">
            <div className="p-2 border-b">
              <h1 className="text-xl text-gray-500 font-montserrat font-semibold ">
                {t("Skill.AddOrEdit.Title")}
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
                <label className="text-xl text-gray-500 font-montserrat font-semibold">
                  {t("Skill.AddOrEdit.Input.Label.Name")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`border font-montserrat font-light text-base text-indigo-900 rounded-md p-2 w-96 h-8 border-1 border-gray-300 ${
                      errors.SkillName ? "invalid" : ""
                    }`}
                    {...register("SkillName", {
                      required: t(
                        "Skill.AddOrEdit.Input.ValidationError.Required"
                      ),
                      maxLength: {
                        value: 25,
                        message: t(
                          "Skill.AddOrEdit.Input.ValidationError.NameMaxLength",
                          { MaxLength: MaxLength.Name }
                        ),
                      },
                    })}
                    placeholder={t("Skill.AddOrEdit.Input.Placeholder.Name")}
                  />
                  {errors.SkillName && (
                    <div className=" text-red-500 ">
                      {errors.SkillName?.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* <div className="px-5 md:p-5 space-y-4">
              <div className="flex justify-between gap-5">
                <label className="text-xl text-gray-500 font-montserrat font-semibold">
                  {t("Skill.AddOrEdit.Input.Label.Description")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`border font-montserrat font-light text-base text-indigo-900 rounded-md p-2 w-96 h-8 border-1 border-gray-300 ${
                      errors.Description ? "invalid" : ""
                    }`}
                    {...register("Description", {
                      required: t(
                        "Skill.AddOrEdit.Input.ValidationError.Required"
                      ),
                      maxLength: {
                        value: 25,
                        message: t(
                          "Skill.AddOrEdit.Input.ValidationError.NameMaxLength",
                          { MaxLength: MaxLength.Name }
                        ),
                      },
                    })}
                    placeholder="Description"
                  />
                  {errors.Description && (
                    <div className=" text-red-500 ">
                      {errors.Description?.message}
                    </div>
                  )}
                </div>
              </div>
            </div> */}
            {/* Modal footer */}
            <div className="flex justify-end  p-3 md:p-5 border-t font-montserrat font-semibol rounded-b dark:border-gray-600">
              <button
                data-modal-hide="static-modal"
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={isLoading}
                className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {isLoading
                  ? t("Skill.AddOrEdit.Input.Button.saving")
                  : t("Skill.AddOrEdit.Input.Button.save")}
              </button>
              <button
                data-modal-hide="static-modal"
                onClick={handleCloseModal}
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-blue-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-700"
              >
                {t("Skill.AddOrEdit.Input.Button.cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SkillEdit;
