import { ErrorResponseModel } from "@/interfaces/error-response.model";
import ProficiencyModel from "@/interfaces/setup/proficiency.model";
import { useUpdateProficiencyMutation } from "@/services/proficiency";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const useProficiencyEdit = (props: any) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [updateProficiency, { isLoading, isSuccess, error, isError }] =
    useUpdateProficiencyMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProficiencyModel>({
    defaultValues: props.selectedData,
  });
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const onSubmit = async (data: ProficiencyModel) => {
    try {
      await updateProficiency(data).unwrap();
      toast.success(t("Proficiency.AddOrEdit.Input.Toast.Success.Update"));
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
    handleSubmit,
    isOpen,
    isLoading,
    errors,
    register,
    handleCloseModal,
    MaxLength,
    t,
  };
};
