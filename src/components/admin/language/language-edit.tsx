import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import LanguageModel from "@/interfaces/language/language.model";
import { toast } from "react-toastify";
import { useUpdateLanguagesMutation } from "@/services/languages";
import { useTranslation } from "react-i18next";

const LanguageEdit = (props: any) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [updateLanguage, { isLoading, isSuccess, error, isError }] =
    useUpdateLanguagesMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LanguageModel>({
    defaultValues: props.selectedData,
  });
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const onSubmit = async (data: LanguageModel) => {
    try {
      await updateLanguage(data).unwrap();
      toast.success(t("Language.AddOrEdit.Input.Toast.UpdateMessage"));
      setIsOpen(false);
      props.refreshResult(true);
      reset();
    } catch (e: any) {
      toast.error(t("Language.AddOrEdit.Input.Toast.ErrorMessage"));
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
              <h1 className="modal-title ">{t("Language.AddOrEdit.Title")}</h1>
              <button onClick={handleCloseModal} className="corss-button">
                <RxCross2 className="h-6 w-6" />
              </button>
            </div>
            <div className="px-5 md:p-5 space-y-4">
              <div className="flex justify-between gap-5">
                <label className="modal-title">
                  {t("Language.AddOrEdit.Input.Label.Name")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`input-field ${
                      errors.LanguageName ? "invalid" : ""
                    }`}
                    {...register("LanguageName", {
                      required: t(
                        "Language.AddOrEdit.Input.ValidationError.Required"
                      ),
                      maxLength: {
                        value: 25,
                        message: t(
                          "Language.AddOrEdit.Input.ValidationError.NameMaxLength",
                          { MaxLength: MaxLength.Name }
                        ),
                      },
                    })}
                    placeholder={t("Language.AddOrEdit.Input.Placeholder.Name")}
                  />
                  {errors.LanguageName && (
                    <div className=" text-red-500 ">
                      {errors.LanguageName?.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="px-5 md:p-5 space-y-4">
              <div className="flex justify-between gap-5">
                <label className="modal-title">
                  {t("Language.AddOrEdit.Input.Label.Description")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`input-field ${
                      errors.Description ? "invalid" : ""
                    }`}
                    {...register("Description", {
                      required: t(
                        "Language.AddOrEdit.Input.ValidationError.Required"
                      ),
                      maxLength: {
                        value: 25,
                        message: t(
                          "Language.AddOrEdit.Input.ValidationError.NameMaxLength",
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
            </div>
            {/* Modal footer */}
            <div className="flex justify-end  p-3 md:p-5 border-t font-montserrat font-semibol rounded-b dark:border-gray-600">
              <button
                data-modal-hide="static-modal"
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={isLoading}
                className="Save-button"
              >
                {isLoading
                  ? t("Language.AddOrEdit.Input.Button.saving")
                  : t("Language.AddOrEdit.Input.Button.save")}
              </button>
              <button
                data-modal-hide="static-modal"
                onClick={handleCloseModal}
                type="button"
                className="cancel-button"
              >
                {t("Language.AddOrEdit.Input.Button.cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LanguageEdit;
