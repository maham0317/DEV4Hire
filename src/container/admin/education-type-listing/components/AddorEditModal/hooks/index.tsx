import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ErrorResponseModel } from "@/interfaces/error-response.model";
import EducationTypeModel, {
  IAddOrEditEducationTypeModalProp,
} from "@/interfaces/education-type-listing";
import {
  useCreateEducationTypeMutation,
  useUpdateEducationTypeMutation,
} from "@/services/education-type-listing";

export const useAddOrEditEducationTypeModal = (
  props: IAddOrEditEducationTypeModalProp
) => {
  const { t } = useTranslation();
  const { isEdit, onClose, onSuccess, formState } = props;

  const [createEducationType, { isLoading: isSubmiting }] =
    useCreateEducationTypeMutation();
  const [updateEducationType, { isLoading: isUpdating }] =
    useUpdateEducationTypeMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EducationTypeModel>({ defaultValues: isEdit ? formState : {} });

  const onSubmit = async (model: EducationTypeModel) => {
    try {
      if (isEdit) {
        await updateEducationType(model).unwrap();
        toast.success(t("EducationTypeListing.Toast.Update.Success"));
      } else {
        await createEducationType({ ...model, isActive: true }).unwrap();
        toast.success(t("EducationTypeListing.Toast.Save.Success"));
      }
      onSuccess();
      handleClose();
    } catch (err) {
      const apiError = err as ErrorResponseModel;
      toast.error( t(`ApiError.${apiError.data?.title}`, { defaultValue: t('ApiError.UnexpectedError') })as string);   
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
