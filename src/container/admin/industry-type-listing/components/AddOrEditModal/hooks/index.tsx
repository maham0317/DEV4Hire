import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useCreateIndustryTypeMutation, useGetAllIndustryTypeMutation, useUpdateIndustryTypeMutation } from "@/services/industry-type-listing";
import { useEffect, useState, useCallback } from "react";
import { Config } from "@/config";
import { ErrorResponseModel } from "@/interfaces/error-response.model";
import { IAddOrEditIndustryTypeModalProp, IndustryTypeModel, SortByIndustryType } from "@/interfaces/industry-type-listing";
import { debounce } from 'lodash';
import { SortOrder } from "@/enums/sort-order.enum";
import useDebounce from "@/hooks/useDebounce";

export const useAddOrEditIndustryTypeModal = (props: IAddOrEditIndustryTypeModalProp) => {
  const { t } = useTranslation();
  const { isEdit, onClose, onSuccess, formState } = props;
  const [filters, setFilters] = useState({
    fetchCount: 0,
    totalPages: 0,
    CurrentPage: 1,
    PageSize: 2,
    SearchTerm: "",
    SortBy: SortByIndustryType.Name,
    SortOrder: SortOrder.ASC,
  });
  const debouncedValue = useDebounce(filters.SearchTerm, 500);

  const [createIndustryType, { isLoading: isSubmitting }] = useCreateIndustryTypeMutation();
  const [updateIndustryType, { isLoading: isUpdating }] = useUpdateIndustryTypeMutation();
  const [parentOptions, setParentOptions] = useState<IndustryTypeModel[]>([]);
  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm<IndustryTypeModel>({ defaultValues: isEdit ? formState : {} });
  const [getParentId, { isLoading: isOption }] = useGetAllIndustryTypeMutation();

  const fetchParentOptions = useCallback(async (filters: any) => {
    try {
      const response = await getParentId(filters).unwrap();
      if (response.Items) {
        setParentOptions(response?.Items?.map(item => ({ value: item.Id, label: item.IndustryName })));
        console.log("Fetched Parent Options:", response.Items); 
      }
    } catch (error) {
      console.error("Error fetching parent IDs:", error);
      toast.error(t("Error fetching parent IDs"));
    } 
  }, [getParentId]);

  const debouncedFetchParentOptions = useCallback(debounce(fetchParentOptions, 300), [fetchParentOptions]);

  

  useEffect(() => {
    const { Description, IndustryName, ParentId } = formState;
    setValue("Description", Description);
    setValue("IndustryName", IndustryName);
    setValue("ParentId", ParentId);
    if (props.isOpen) {
      fetchParentOptions(filters);
    }
  }, [formState, props.isOpen, fetchParentOptions, setValue]);

  const onSubmit = async (model: IndustryTypeModel) => {
    try {
      const mutation = isEdit ? updateIndustryType(model) : createIndustryType({ ...model, isActive: true });
      await mutation.unwrap();
      const successMessage = isEdit ? "IndustryTypeListing.Toast.Update.Success" : "IndustryTypeListing.Toast.Save.Success";
      toast.success(t(successMessage));
      onSuccess();
      handleClose();
    } catch (err) {
      handleSubmissionError(err);
    }
  };

  const handleSubmissionError = (err: any) => {
    const apiError = err as ErrorResponseModel;
    toast.error(t(`${apiError.data?.Message}`));
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
    isSubmitting, 
    isUpdating, 
    isOption,
    errors, 
    setValue, 
    parentOptions, 
    fetchParentOptions: debouncedFetchParentOptions, 
  };
};
