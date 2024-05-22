import { ErrorResponseModel } from "@/interfaces/error-response.model";
import { IndustryTypeModel } from "@/interfaces/industry-type/industry-type.model";
import { useUpdateIndustryTypeMutation } from "@/services/industry-type";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const useIndustryTypeEdit = (props: any) => {
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
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const onSubmit = async (data: IndustryTypeModel) => {
    try {
      await updateIndustryType(data);
      toast.success(t("IndustryType.AddOrEdit.Input.Toast.Success.Update"));
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
  const MaxLength = {
    Name: 25,
  };
  return {
    onSubmit,
    isLoading,
    isOpen,
    handleCloseModal,
    register,
    handleSubmit,
    t,
    errors,
    MaxLength,
  };
};
