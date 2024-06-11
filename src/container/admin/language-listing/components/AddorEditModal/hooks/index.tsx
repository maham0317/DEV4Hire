import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ErrorResponseModel } from "@/interfaces/error-response.model";
import LanguageModel from "@/interfaces/language-listing";
import {
  useCreateLanguageMutation,
  useUpdateLanguageMutation,
} from "@/services/language-listing";
import { IAddOrEditLanguageModalProp } from "@/interfaces/language-listing";

export const useAddOrEditLanguageModal = (
  props: IAddOrEditLanguageModalProp
) => {
  const { t } = useTranslation();
  const { isEdit, onClose, onSuccess, formState } = props;

  const [createLanguage, { isLoading: isSubmiting }] =
    useCreateLanguageMutation();
  const [updateLanguage, { isLoading: isUpdating }] =
    useUpdateLanguageMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LanguageModel>({ defaultValues: isEdit ? formState : {} });

  const onSubmit = async (model: LanguageModel) => {
    try {
      if (isEdit) {
        await updateLanguage(model).unwrap();
        toast.success(t("LanguageListing.Toast.Update.Success"));
      } else {
        await createLanguage({ ...model, isActive: true }).unwrap();
        toast.success(t("LanguageListing.Toast.Save.Success"));
      }
      onSuccess();
      handleClose();
    } catch (err) {
      const apiError = err as ErrorResponseModel;
      toast.error(t(`Common.${apiError.data?.Message as 'Default'}`));
    }
  };

  const handleClose = () => {
    onClose();
    reset();
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    handleClose,
    isSubmiting,
    isUpdating,
    errors,
  };
};
