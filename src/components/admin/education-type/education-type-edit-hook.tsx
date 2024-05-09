import { ErrorResponseModel } from "@/interfaces/error-response.model";
import EducationTypeModel from "@/interfaces/setup/education-type.model";
import { useUpdateEducationTypeMutation } from "@/services/education-type";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const useEductionEdit = (props: any) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EducationTypeModel>({
    defaultValues: props.selectedData,
  });

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const [updateEducationType, { isLoading, isSuccess, error, isError }] =
    useUpdateEducationTypeMutation();
  const onSubmit = async (data: EducationTypeModel) => {
    try {
      await updateEducationType(data).unwrap();
      toast.success(t("EducationType.AddOrEdit.Input.Toast.Success.Update"));
      setIsOpen(false);
      props.refreshResult(data);
      reset();
    } catch (err) {
      const apiError = err as ErrorResponseModel;
      toast.error(
        t(`WorkRole.AddOrEdit.Input.Toast.Error.${apiError.data?.title}`)
      );
    }
  };

  const MaxLength = {
    Name: 25,
  };
  return {
    onSubmit,
    handleCloseModal,
    isLoading,
    isOpen,
    MaxLength,
    t,
    register,
    handleSubmit,
    errors,
  };
};
