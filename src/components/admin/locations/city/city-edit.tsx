import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useUpdateCityMutation } from "@/services/locations/city";
import CityModel from "@/interfaces/location/city.model";
import CountryModel from "@/interfaces/location/country.model";
import { useCountry } from "@/container/admin/locations/country/country-list-hook";
import { ErrorResponseModel } from "@/interfaces/error-response.model";

const CityEdit = (props: any) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [updateCity, { isLoading, isSuccess, error, isError }] =
    useUpdateCityMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CityModel>({
    defaultValues: props.selectedData,
  });
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const { filteredItems } = useCountry();
  const onSubmit = async (data: CityModel) => {
    try {
      await updateCity(data).unwrap();
      toast.success(t("City.AddOrEdit.Input.Toast.Success.Update"));
      setIsOpen(false);
      props.refreshResult(true);
      reset();
    } catch (err) {
      const apiError = err as ErrorResponseModel;
      toast.error(
        t(`City.AddOrEdit.Input.Toast.Error.${apiError.data?.title}`)
      );
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
              <h1 className="modal-title ">{t("City.AddOrEdit.Title")}</h1>
              <button onClick={handleCloseModal} className="corss-button">
                <RxCross2 className="h-6 w-6" />
              </button>
            </div>
            <div className="px-5 md:p-5 space-y-4">
              <div className="flex justify-between gap-5">
                <label className="modal-title">
                  {t("City.AddOrEdit.Input.Label.Name")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`input-field ${
                      errors.CityName ? "invalid" : ""
                    }`}
                    {...register("CityName", {
                      required: t(
                        "City.AddOrEdit.Input.ValidationError.Required"
                      ),
                      maxLength: {
                        value: 25,
                        message: t(
                          "Ciity.AddOrEdit.Input.ValidationError.NameMaxLength",
                          { MaxLength: MaxLength.Name }
                        ),
                      },
                    })}
                    placeholder={t("City.AddOrEdit.Input.Placeholder.Name")}
                  />
                  {errors.CityName && (
                    <div className=" text-red-500 ">
                      {errors.CityName?.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <label className="modal-title">
                  {t("City.AddOrEdit.Input.Label.CountryName")}
                </label>
                <div className="relative">
                  <select
                    className={`input-field ${
                      errors.CountryId ? "invalid" : ""
                    }`}
                    {...register("CountryId", {
                      required: t(
                        "Country.AddOrEdit.Input.ValidationError.Required"
                      ),
                    })}
                  >
                    {filteredItems?.map((item: CountryModel) => (
                      <option value={item.Id}>{item.CountryName}</option>
                    ))}
                  </select>
                  {errors.CountryId && (
                    <div className=" text-red-500 ">
                      {errors.CountryId?.message}
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
                  ? t("City.AddOrEdit.Input.Button.saving")
                  : t("City.AddOrEdit.Input.Button.save")}
              </button>
              <button
                data-modal-hide="static-modal"
                onClick={handleCloseModal}
                type="button"
                className="cancel-button"
              >
                {t("City.AddOrEdit.Input.Button.cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CityEdit;
