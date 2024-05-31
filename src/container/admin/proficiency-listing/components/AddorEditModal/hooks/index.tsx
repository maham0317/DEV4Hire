import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ErrorResponseModel } from "@/interfaces/error-response.model";
import ProficiencyModel, {
  IAddOrEditProficiencyModalProp,
} from "@/interfaces/proficiency-listing";
import {
  useCreateProficiencyMutation,
  useUpdateProficiencyMutation,
} from "@/services/proficiency-listing";

export const useAddOrEditProficiencyModal = (
  props: IAddOrEditProficiencyModalProp
) => {
  const { t } = useTranslation();
  const { isEdit, onClose, onSuccess, formState } = props;

  const [createProficiency, { isLoading: isSubmiting }] =
    useCreateProficiencyMutation();
  const [updateProficiency, { isLoading: isUpdating }] =
    useUpdateProficiencyMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProficiencyModel>({ defaultValues: isEdit ? formState : {} });

  const onSubmit = async (model: ProficiencyModel) => {
    try {
      if (isEdit) {
        await updateProficiency(model).unwrap();
        toast.success(t("ProficiencyListing.Toast.Update.Success"));
      } else {
        await createProficiency({ ...model, isActive: true }).unwrap();
        toast.success(t("ProficiencyListing.Toast.Save.Success"));
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
