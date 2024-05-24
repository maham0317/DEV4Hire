import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ErrorResponseModel } from "@/interfaces/error-response.model";
import LanguageModel from "@/interfaces/language-listing";
import {
  useCreateLanguageMutation,
  useUpdateLanguagesMutation,
} from "@/services/languages";
import { IAddOrEditLanguageModalProp } from "@/interfaces/language-listing";

export const useAddOrEditLanguageModal = (
  props: IAddOrEditLanguageModalProp
) => {
  const { t } = useTranslation();
  const { isEdit, onClose, onSuccess, formState } = props;

  const [createLanguage, { isLoading: isSubmiting }] =
    useCreateLanguageMutation();
  const [updateLanguage, { isLoading: isUpdating }] =
    useUpdateLanguagesMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LanguageModel>({ defaultValues: isEdit ? formState : {} });

  const onSubmit = async (data: LanguageModel) => {
    try {
      if (isEdit) {
        await updateLanguage(data).unwrap();
        toast.success(t("Language.AddOrEdit.Input.Toast.Success.Update"));
      } else {
        await createLanguage({ ...data, isActive: true }).unwrap();
        toast.success(t("Language.AddOrEdit.Input.Toast.Save.Success"));
      }
      onSuccess();
      handleClose();
    } catch (err) {
      const apiError = err as ErrorResponseModel;
      toast.error(t(`${apiError.data?.Message}`));
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
