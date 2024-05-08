import { useCountry } from "@/container/admin/locations/country/country-list-hook";
import { ErrorResponseModel } from "@/interfaces/error-response.model";
import CityModel from "@/interfaces/location/city.model";
import { useCreateCityMutation } from "@/services/locations/city";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const useCityAdd = (props: any) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [createCity, { isLoading, isSuccess, error, isError, data }] =
    useCreateCityMutation();

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  // Form Validtion

  const { filteredItems } = useCountry();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CityModel>();

  const onSubmit = async (data: CityModel) => {
    try {
      await createCity(data).unwrap();
      toast.success(t("City.AddOrEdit.Input.Toast.Success.Save"));
      setIsOpen(false);
      props.refreshResult(data);
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
  return {
    isLoading,
    isOpen,
    onSubmit,
    handleCloseModal,
    filteredItems,
    MaxLength,
    register,
    handleSubmit,
    errors,
    t,
  };
};
