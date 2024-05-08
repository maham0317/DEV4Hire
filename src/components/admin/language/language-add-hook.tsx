import { ErrorResponseModel } from "@/interfaces/error-response.model";
import LanguageModel from "@/interfaces/language/language.model";
import { useCreateLanguageMutation } from "@/services/languages";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const useLanguageAdd = (props: any) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [createlanguage, { isLoading, isSuccess, error, isError, data }] =
    useCreateLanguageMutation();

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // Form Validtion
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LanguageModel>();

  const onSubmit = async (data: LanguageModel) => {
    try {
      await createlanguage(data).unwrap();
      toast.success(t("Language.AddOrEdit.Input.Toast.Success.Save"));
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
    handleCloseModal,
    isLoading,
    isOpen,
    register,
    handleSubmit,
    errors,
    t,
    MaxLength,
  };
};
