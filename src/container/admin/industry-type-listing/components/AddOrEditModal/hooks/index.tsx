import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useCreateIndustryTypeMutation, useGetAllIndustryTypeMutation, useUpdateIndustryTypeMutation } from "@/services/industry-type-listing";
import { useEffect, useState } from "react";
import { ErrorResponseModel } from "@/interfaces/error-response.model";
import { IAddOrEditIndustryTypeModalProp, IndustryTypeModel, SortByIndustryType } from "@/interfaces/industry-type-listing";
import { SortOrder } from "@/enums/sort-order.enum";
import useDebounce from "@/hooks/useDebounce";

export const useAddOrEditIndustryTypeModal = (props: IAddOrEditIndustryTypeModalProp) => {
  const { t } = useTranslation();
  const { isEdit, onClose, onSuccess, formState, isOpen } = props;
  const [filters, setFilters] = useState({
    fetchCount: 0,
    totalPages: 0,
    currentPage: 1,
    pageSize: 2,
    searchTerm: "",
    sortBy: SortByIndustryType.Name,
    sortOrder: SortOrder.ASC,
  });

  const [createIndustryType, { isLoading: isSubmitting }] = useCreateIndustryTypeMutation();
  const [updateIndustryType, { isLoading: isUpdating }] = useUpdateIndustryTypeMutation();
  const [parentOptions, setParentOptions] = useState<{ value: string; label: string }[]>([]);
  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm<IndustryTypeModel>({ defaultValues: isEdit ? formState : {} });
  const [getParentId, { isLoading: isOption }] = useGetAllIndustryTypeMutation();
  const debouncedValue = useDebounce(filters.searchTerm, 500);

  const fetchParentOptions = async () => {
    try {
      const res = await getParentId(filters).unwrap();
      if (res.Items) {
        setParentOptions(res?.Items?.map(item => ({ value: item.Id, label: item.IndustryName })));
        setFilters(prev => ({ ...prev, totalPages: res.TotalPages }));
      }
    } catch (e) {
      console.error("Error fetching parent IDs:", e);
      toast.error(t("IndustryTypeListing.Toast.FetchParentOptionsError"));
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchParentOptions();
    }
  }, [isOpen, debouncedValue]); 
  
  useEffect(() => {
    const { Description, IndustryName, ParentId } = formState;
    setValue("Description", Description);
    setValue("IndustryName", IndustryName);
    setValue("ParentId", ParentId);
  }, [formState, setValue]);

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
      toast.error(t(apiError.data?.Message || "An error occurred"));
    }
  };

  const handleClose = () => {
    onClose();
    reset();
  };

  const onSearch = (value: string) => {
    setFilters(prev => ({ ...prev, searchTerm: value }));
  };

  const onChange = (selectedOption: any) => {
    setValue("ParentId", selectedOption?.value);
  };

  const filteredOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

   return { 
    register, 
    handleSubmit, 
    onSubmit, 
    handleClose, 
    isSubmitting, 
    isUpdating, 
    isOption,
    errors, 
    setValue, 
    parentOptions, 
    fetchParentOptions,
    onSearch,
    onChange,
    filteredOption,
    reset
  };
};