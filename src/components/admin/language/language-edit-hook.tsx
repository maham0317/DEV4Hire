import { ErrorResponseModel } from "@/interfaces/error-response.model";
import LanguageModel from "@/interfaces/language/language.model";
import { useUpdateLanguagesMutation } from "@/services/languages";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const useLanguageEdit = (props: any) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [updateLanguage, { isLoading, isSuccess, error, isError }] =
    useUpdateLanguagesMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LanguageModel>({
    defaultValues: props.selectedData,
  });

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const onSubmit = async (data: LanguageModel) => {
    try {
      await updateLanguage(data).unwrap();
      toast.success(t("Language.AddOrEdit.Input.Toast.Success.Update"));
      setIsOpen(false);
      props.refreshResult(data);
      reset();
    } catch (err) {
      const apiError = err as ErrorResponseModel;
      toast.error(
        t(`Language.AddOrEdit.Input.Toast.Error.${apiError.data?.title}`)
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
    register,
    errors,
    handleSubmit,
    t,
    MaxLength,
    handleCloseModal,
  };
};
