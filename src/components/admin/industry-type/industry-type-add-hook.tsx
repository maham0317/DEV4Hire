import { ErrorResponseModel } from "@/interfaces/error-response.model";
import { IndustryTypeModel } from "@/interfaces/industry-type/industry-type.model";
import { useCreateIndustryTypeMutation } from "@/services/industry-type";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const useIndustryTypeAdd = (props: any) => {
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
      await createIndustryType(data).unwrap();
      toast.success(t("IndustryType.AddOrEdit.Input.Toast.Success.Save"));
      setIsOpen(false);
      props.refreshResult(data);
      reset();
    } catch (err) {
      const apiError = err as ErrorResponseModel;
      toast.error(
        t(`IndustryType.AddOrEdit.Input.Toast.Error.${apiError.data?.title}`)
      );
    }
  };

  return {
    onSubmit,
    isLoading,
    handleCloseModal,
    isOpen,
    register,
    handleSubmit,
    errors,
    t,
  };
};
