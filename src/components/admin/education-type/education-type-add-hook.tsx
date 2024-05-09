import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateEducationTypeMutation } from "@/services/education-type";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import EducationTypeModel from "@/interfaces/setup/education-type.model";
import { ErrorResponseModel } from "@/interfaces/error-response.model";

export const useEductionAdd = (props: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EducationTypeModel>();
  const [createEducationType, { isLoading }] = useCreateEducationTypeMutation();
  const [isOpen, setIsOpen] = useState(true);
  const { t } = useTranslation();

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const MaxLength = {
    Name: 25,
  };

  const onSubmit = async (data: EducationTypeModel) => {
    try {
      await createEducationType(data).unwrap();
      toast.success(t("EducationType.AddOrEdit.Input.Toast.Success.Save"));
      setIsOpen(false);
      props.refreshResult(data);
      reset();
    } catch (err) {
      const apiError = err as ErrorResponseModel;
      toast.error(
        t(`EducationType.AddOrEdit.Input.Toast.Error.${apiError.data?.title}`)
      );
    }
  };

  return {
    onSubmit,
    isLoading,
    handleCloseModal,
    isOpen,
    MaxLength,
    handleSubmit,
    register,
    errors,
    t,
  };
};
