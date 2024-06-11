import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useCreateIndustryTypeMutation, useGetAllIndustryTypeMutation, useUpdateIndustryTypeMutation } from "@/services/industry-type-listing";
import { useEffect, useState } from "react";
import { ErrorResponseModel } from "@/interfaces/error-response.model";
import { IAddOrEditIndustryTypeModalProp, IndustryTypeFilterModel, IndustryTypeModel, SortByIndustryType } from "@/interfaces/industry-type-listing";
import { SortOrder } from "@/enums/sort-order.enum";
import useDebounce from "@/hooks/useDebounce";

export const useAddOrEditIndustryTypeModal = (props: IAddOrEditIndustryTypeModalProp) => {
  const { t } = useTranslation();
  const { isEdit, onClose, onSuccess, formState, isOpen } = props;
  const [filters, setFilters] = useState<IndustryTypeFilterModel>({
      CurrentPage: 1,
      PageSize: 2,
      SearchTerm: "",
      ParentsOnly: false,
      SortBy: SortByIndustryType.Name,
      SortOrder: SortOrder.ASC,
    });

  const [createIndustryType, { isLoading: isSubmitting }] = useCreateIndustryTypeMutation();
  const [updateIndustryType, { isLoading: isUpdating }] = useUpdateIndustryTypeMutation();
  const [parentOptions, setParentOptions] = useState<{ value: number; label: string }[]>([]);
  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm<IndustryTypeModel>({ defaultValues: isEdit ? formState : {} });
  const [getParents, { isLoading: isOption }] = useGetAllIndustryTypeMutation();
  const debouncedValue = useDebounce(filters.SearchTerm);

  const fetchParentOptions = async () => {
    try {
      const res = await getParents({...filters, ParentsOnly:true}).unwrap();
      if (res.Items) {
        setParentOptions(res.Items.map(item => ({ value: item.Id, label: item.IndustryName })));
      }
    } catch (e) {
      console.error("Error fetching parent options:", e);
      toast.error("Error fetching parent options");
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchParentOptions();
    }
  }, [isOpen, debouncedValue,filters]);

  const onChange = (value: number) => {
    setValue("ParentId", value);
  };

  useEffect(() => {
    const { Id, Description, IndustryName, ParentId } = formState;
    setValue('Id', Id);
    setValue('Description', Description);
    setValue('IndustryName', IndustryName);
    setValue('ParentId', ParentId);
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
      toast.error(t(`Common.${apiError.data?.Message as 'Default'}`));
    }
  };

  const handleClose = () => {
    onClose();
    reset();
  };

  const onSearch = (value: string) => {
    setFilters(prev => ({ ...prev, searchTerm: value }));
  };

  const filteredOption = (input: string, option?: { label: string; value: number }) =>
  {

  return  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  }
  
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
    reset,
    formState
  };
};
