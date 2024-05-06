import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import CountryModel from "@/interfaces/location/country.model";
import { useCreateCountryMutation } from "@/services/locations/country";
import { ErrorResponseModel } from "@/interfaces/error-response.model";

const CountryAdd = (props: any) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [createCountry, { isLoading, isSuccess, error, isError, data }] =
    useCreateCountryMutation();

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  // Form Validtion

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CountryModel>();

  const onSubmit = async (data: CountryModel) => {
    try {
      await createCountry(data).unwrap();
      toast.success(t("Country.AddOrEdit.Input.Toast.Success.Save"));
      setIsOpen(false);
      props.refreshResult(true);
      reset();
    } catch (err) {
      const apiError = err as ErrorResponseModel;
      toast.error(
        t(`Country.AddOrEdit.Input.Toast.Error.${apiError.data?.title}`)
      );
    }
  }

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
              <h1 className="modal-title ">{t("Country.AddOrEdit.Title")}</h1>
              <button onClick={handleCloseModal} className="corss-button">
                <RxCross2 className="h-6 w-6" />
              </button>
            </div>
            <div className="px-5 md:p-5 space-y-4">
              <div className="flex justify-between gap-5">
                <label className="modal-title">
                  {t("Country.AddOrEdit.Input.Label.Name")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`input-field ${
                      errors.CountryName ? "invalid" : ""
                    }`}
                    {...register("CountryName", {
                      required: t(
                        "Country.AddOrEdit.Input.ValidationError.Required"
                      ),
                      maxLength: {
                        value: 25,
                        message: t(
                          "Country.AddOrEdit.Input.ValidationError.NameMaxLength",
                          { MaxLength: MaxLength.Name }
                        ),
                      },
                    })}
                    placeholder={t("Country.AddOrEdit.Input.Placeholder.Name")}
                  />
                  {errors.CountryName && (
                    <div className=" text-red-500 ">
                      {errors.CountryName?.message}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal footer */}
            <div className="modal-footer">
              <button
                data-modal-hide="static-modal"
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={isLoading}
                className="Save-button"
              >
                {isLoading
                  ? t("Country.AddOrEdit.Input.Button.saving")
                  : t("Country.AddOrEdit.Input.Button.save")}
              </button>
              <button
                data-modal-hide="static-modal"
                onClick={handleCloseModal}
                type="button"
                className="cancel-button"
              >
                {t("Country.AddOrEdit.Input.Button.cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryAdd;
