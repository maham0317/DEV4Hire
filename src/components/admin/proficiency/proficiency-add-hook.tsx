import { ErrorResponseModel } from "@/interfaces/error-response.model";
import ProficiencyModel from "@/interfaces/setup/proficiency.model";
import { useCreateProficiencyMutation } from "@/services/proficiency";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const useProficiencyAdd = (props: any) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [createProficiency, { isLoading, isSuccess, error, isError, data }] =
    useCreateProficiencyMutation();

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  // Form Validtion

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProficiencyModel>();

  const onSubmit = async (data: ProficiencyModel) => {
    try {
      await createProficiency(data).unwrap();
      toast.success(t("Proficiency.AddOrEdit.Input.Toast.Success.Save"));
      setIsOpen(false);
      props.refreshResult(data);
      reset();
    } catch (err) {
      const apiError = err as ErrorResponseModel;
      toast.error(
        t(`Proficiency.AddOrEdit.Input.Toast.Error.${apiError.data?.title}`)
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
    errors,
    handleSubmit,
    register,
    MaxLength,
    t,
  };
};
