import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ErrorResponseModel } from "@/interfaces/error-response.model";
import CityModel, {
  IAddOrEditCityModalProp,
} from "@/interfaces/location-listing/city-listing";
import {
  useCreateCityMutation,
  useUpdateCityMutation,
} from "@/services/locations-listing/city-listing";
import { useCountryListing } from "@/container/admin/locations-listing/country-listing/hooks";

export const useAddOrEditCityModal = (props: IAddOrEditCityModalProp) => {
  const { t } = useTranslation();
  const { isEdit, onClose, onSuccess, formState } = props;

  const [createCity, { isLoading: isSubmiting }] = useCreateCityMutation();
  const [updateCity, { isLoading: isUpdating }] = useUpdateCityMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue
  } = useForm<CityModel>({ defaultValues: isEdit ? formState : {} });

  const onSubmit = async (model: CityModel) => {
    try {
      if (isEdit) {
        await updateCity(model).unwrap();
        toast.success(t("CityListing.Toast.Update.Success"));
      } else {
        await createCity({ ...model, isActive: true }).unwrap();
        toast.success(t("CityListing.Toast.Save.Success"));
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
  const { countries } = useCountryListing();

  return {
    register,
    handleSubmit,
    countries,
    onSubmit,
    handleClose,
    isSubmiting,
    isUpdating,
    errors,
    setValue,
  };
};
