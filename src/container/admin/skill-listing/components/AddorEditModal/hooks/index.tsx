import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ErrorResponseModel } from "@/interfaces/error-response.model";
import SkillTypeModel, {
  IAddOrEditSkillTypeModalProp,
} from "@/interfaces/skill-listing";
import {
  useCreateSkillMutation,
  useUpdateSkillMutation,
} from "@/services/skill-listing";

export const useAddOrEditSkillModal = (props: IAddOrEditSkillTypeModalProp) => {
  const { t } = useTranslation();
  const { isEdit, onClose, onSuccess, formState } = props;

  const [createSkill, { isLoading: isSubmiting }] = useCreateSkillMutation();
  const [updateSkill, { isLoading: isUpdating }] = useUpdateSkillMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SkillTypeModel>({ defaultValues: isEdit ? formState : {} });

  const onSubmit = async (model: SkillTypeModel) => {
    try {
      if (isEdit) {
        await updateSkill(model).unwrap();
        toast.success(t("SkillListing.Toast.Update.Success"));
      } else {
        await createSkill({ ...model, isActive: true }).unwrap();
        toast.success(t("SkillListing.Toast.Save.Success"));
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
