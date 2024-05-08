import { ErrorResponseModel } from "@/interfaces/error-response.model";
import CountryModel from "@/interfaces/location/country.model";
import { useCreateCountryMutation } from "@/services/locations/country";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const useCountryAdd = (props: any) => {
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
      props.refreshResult(data);
      reset();
    } catch (err) {
      const apiError = err as ErrorResponseModel;
      toast.error(
        t(`Country.AddOrEdit.Input.Toast.Error.${apiError.data?.title}`)
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
    MaxLength,
    register,
    handleSubmit,
    errors,
    t,
  };
};
