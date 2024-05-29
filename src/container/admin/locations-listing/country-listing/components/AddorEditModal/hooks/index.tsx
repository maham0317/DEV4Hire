import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ErrorResponseModel } from "@/interfaces/error-response.model";
import CountryModel, {
  IAddOrEditCountryModalProp,
} from "@/interfaces/location-listing/country-listing";
import {
  useCreateCountryMutation,
  useUpdateCountryMutation,
} from "@/services/locations-listing/country-listing";

export const useAddOrEditCountryModal = (props: IAddOrEditCountryModalProp) => {
  const { t } = useTranslation();
  const { isEdit, onClose, onSuccess, formState } = props;

  const [createCountry, { isLoading: isSubmiting }] =
    useCreateCountryMutation();
  const [updateCountry, { isLoading: isUpdating }] = useUpdateCountryMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CountryModel>({ defaultValues: isEdit ? formState : {} });

  const onSubmit = async (data: CountryModel) => {
    try {
      if (isEdit) {
        await updateCountry(data).unwrap();
        toast.success(t("CountryListing.Toast.Update.Success"));
      } else {
        await createCountry({ ...data, isActive: true }).unwrap();
        toast.success(t("CountryListing.Toast.Save.Success"));
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
