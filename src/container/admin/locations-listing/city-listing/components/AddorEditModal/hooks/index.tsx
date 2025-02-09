import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ErrorResponseModel } from "@/interfaces/error-response.model";
import CityModel, { IAddOrEditCityModalProp } from "@/interfaces/location-listing/city-listing";
import { useCreateCityMutation, useUpdateCityMutation } from "@/services/locations-listing/city-listing";
import { useEffect, useState } from "react";
import { SortOrder } from "@/enums/sort-order.enum";
import useDebounce from "@/hooks/useDebounce";
import { useGetAllCountryMutation } from "@/services/locations-listing/country-listing";
import { SortByCountry } from "@/interfaces/location-listing/country-listing"; 

export const useAddOrEditCityModal = (props: IAddOrEditCityModalProp) => {
  const { t } = useTranslation();
  const { isEdit, onClose, onSuccess, formState, isOpen } = props;

  const [filters, setFilters] = useState({
    fetchCount: 0,
    totalPages: 0,
    CurrentPage: 1,
    PageSize: 2,
    SearchTerm: "",
    SortBy: SortByCountry.Name,
    SortOrder: SortOrder.ASC,
  });

  const [createCity, { isLoading: isSubmitting }] = useCreateCityMutation();
  const [updateCity, { isLoading: isUpdating }] = useUpdateCityMutation();
  const debouncedValue = useDebounce(filters.SearchTerm, 500);
  const [getCountryId] = useGetAllCountryMutation();
  const [countryOptions, setCountryOptions] = useState<{ value: number; label: string }[]>([]);
  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm<CityModel>({ defaultValues: isEdit ? formState : {} });

  const fetchCountryOptions = async () => {
    try {
      const res = await getCountryId(filters).unwrap();
      if (res.Items) {
        // setCountryOptions(res.Items.map(item => ({ value: item.Id, label: item.CountryName })));
        const options = res.Items.map(item => ({
        value: item.Id,
        label: item.CountryName,
      }));
        const filteredOptions = isEdit ? options.filter(x => x.value !== formState.Id) : options;
        setCountryOptions(filteredOptions)
      }
    } catch (error) {
      const apiError = error as ErrorResponseModel;
      const errorTitle = apiError.data?.title || 'UnexpectedError';
      const errorMessage = t(`ApiError.${errorTitle}`, {item:'City', defaultValue:''});

      toast.error(errorMessage as string);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchCountryOptions();
    }
  }, [isOpen, debouncedValue]);

  useEffect(() => {
    const { Id, CountryId, CityName } = formState;
    setValue('Id', Id);
    setValue('CountryId', CountryId);
    setValue('CityName', CityName);
  }, [formState, setValue]);

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
      const errorTitle = apiError.data?.title || 'UnexpectedError';
      const errorMessage = t(`ApiError.${errorTitle}`, {item:'City', defaultValue:''});

      toast.error(errorMessage as string);
     }
  };

  const handleClose = () => {
    onClose();
    reset();
  };

  const onSearch = (value: string) => {
    setFilters(prev => ({ ...prev, SearchTerm: value }));
  };

  const onChange = (value: number) => {
    setValue("CountryId", value);
  };

  const filteredOption = (input: string, option?: { label: string; value: number }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return {
    register,
    handleSubmit,
    onSubmit,
    handleClose,
    isSubmitting,
    isUpdating,
    errors,
    setValue,
    onSearch,
    onChange,
    filteredOption,
    countryOptions,
    formState,
  };
};
