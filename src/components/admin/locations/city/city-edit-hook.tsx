import { useCountry } from "@/container/admin/locations/country/country-list-hook";
import { ErrorResponseModel } from "@/interfaces/error-response.model";
import CityModel from "@/interfaces/location/city.model";
import { useUpdateCityMutation } from "@/services/locations/city";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const useCityEdit = (props: any) => {
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
    onSubmit,
    isLoading,
    isOpen,
    handleCloseModal,
    filteredItems,
    MaxLength,
    register,
    handleSubmit,
    errors,
    t,
  };
};
