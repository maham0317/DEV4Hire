import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ErrorResponseModel } from "@/interfaces/error-response.model";
import {
  IAddOrEditIndustryTypeModalProp,
  IndustryTypeModel,
} from "@/interfaces/industry-type-listing";
import {
  useCreateIndustryTypeMutation,
  useUpdateIndustryTypeMutation,
} from "@/services/industry-type-listing";

export const useAddOrEditIndusrtyTypeModal = (
  props: IAddOrEditIndustryTypeModalProp
) => {
  const { t } = useTranslation();
  const { isEdit, onClose, onSuccess, formState } = props;

  const [createIndustryType, { isLoading: isSubmiting }] =
    useCreateIndustryTypeMutation();
  const [updateIndustryType, { isLoading: isUpdating }] =
    useUpdateIndustryTypeMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IndustryTypeModel>({ defaultValues: isEdit ? formState : {} });

  const onSubmit = async (model: IndustryTypeModel) => {
    try {
      if (isEdit) {
        await updateIndustryType(model).unwrap();
        toast.success(t("IndustryTypeListing.Toast.Update.Success"));
      } else {
        await createIndustryType({ ...model, isActive: true }).unwrap();
        toast.success(t("IndustryTypeListing.Toast.Save.Success"));
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
