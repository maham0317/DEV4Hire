import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ErrorResponseModel } from "@/interfaces/error-response.model";
import CityModel, {
  IAddOrEditCityModalProp,
  SortByCity,
} from "@/interfaces/location-listing/city-listing";
import {
  useCreateCityMutation,
  useGetAllCityMutation,
  useUpdateCityMutation,
} from "@/services/locations-listing/city-listing";
import { useCountryListing } from "@/container/admin/locations-listing/country-listing/hooks";
import { useEffect, useState } from "react";
import { SortOrder } from "@/enums/sort-order.enum";
import useDebounce from "@/hooks/useDebounce";
import { useGetAllCountryMutation } from "@/services/locations-listing/country-listing";

export const useAddOrEditCityModal = (props: IAddOrEditCityModalProp) => {
  const { t } = useTranslation();
  const { isEdit, onClose, onSuccess, formState, isOpen  } = props;
  const [filters, setFilters] = useState({
    fetchCount: 0,
    totalPages: 0,
    currentPage: 1,
    pageSize: 2,
    searchTerm: "",
    sortBy: SortByCity.Name,
    sortOrder: SortOrder.ASC,
  });
  const [createCity, { isLoading: isSubmiting }] = useCreateCityMutation();
  const [updateCity, { isLoading: isUpdating }] = useUpdateCityMutation();
  const debouncedValue = useDebounce(filters.searchTerm, 500);
  const [getCountryId] = useGetAllCountryMutation();
  const [countryOptions, setcountryOptions] = useState<{ value: string; label: string }[]>([]);

  const fetchcountryOptions = async () => {
    try {
      const res = await getCountryId(filters).unwrap();
      if (res.Items) {
        setcountryOptions(res?.Items?.map(item => ({ value: item.Id, label: item.CountryName })));
        setFilters(prev => ({ ...prev, totalPages: res.TotalPages }));
      }
    } catch (e) {
      console.error("Error fetching parent IDs:", e);
      toast.error(t("IndustryTypeListing.Toast.FetchcountryOptionsError"));
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchcountryOptions();
    }
  }, [isOpen, debouncedValue]); 

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
  const onSearch = (value: string) => {
    setFilters(prev => ({ ...prev, searchTerm: value }));
  };

  const onChange = (selectedOption: any) => {
    setValue("CountryId", selectedOption?.value);
  };

  const filteredOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

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
    onSearch,
    onChange,
    filteredOption,
    countryOptions,
  };
};
