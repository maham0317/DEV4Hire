import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Config } from '@/config';
import { SortOrder } from '@/enums/sort-order.enum';
import { useTranslation } from 'react-i18next';
import { IndustryTypeModel, SortByIndustryType } from '@/interfaces/industry-type-listing';
import { useDeleteIndustryTypeMutation, useGetAllIndustryTypeMutation } from '@/services/industry-type-listing';
import useDebounce from '@/hooks/useDebounce';

export const useIndustryTypeListing = ()=> {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isConfirm, setIsConfirm] = useState(0);
    const [filters, setFilters] = useState({fetchCount: 0, totalPages: 0, parentsOnly: false, CurrentPage: 1, PageSize: Config.Filter.PageSize, SearchTerm: '', SortBy: SortByIndustryType.Name, SortOrder: SortOrder.ASC});
    const [formData, setFormData] = useState({} as IndustryTypeModel);
    const debouncedValue = useDebounce(filters.SearchTerm);

    const [getAllIndustryType, { data, isLoading }] = useGetAllIndustryTypeMutation();
    const [deleteIndustryType] = useDeleteIndustryTypeMutation();

    useEffect(()=> {
        getIndustryTypeAsync();
    }, [filters.fetchCount, debouncedValue]);

    const getIndustryTypeAsync = async ()=> {
        try {
            const res = await getAllIndustryType(filters).unwrap();
            setFilters(pre=> ({...pre, totalPages: res.TotalPages || 1}));
        } catch(e) {
            console.log(e)
        }
    };

    const handleDelete = (id: number)=> {
        setIsConfirm(id);
    };

    const onCloseConfirm = ()=> {
        setIsConfirm(0);
    };

    const onConfirmSuccess = async ()=> {
        try {
            await deleteIndustryType(isConfirm).unwrap();
            toast.success(t('IndustryTypeListing.Toast.Delete.Success'));
            setFilters(pre=> ({...pre, fetchCount: pre.fetchCount+1, CurrentPage: 1}));
            setIsConfirm(0);
        } catch (e: any) {
            toast.error(t('IndustryTypeListing.Toast.Delete.Error'));
        }
    };

    const addNewIndustry = ()=> {
        setIsOpen(true);
        setIsEdit(false);
    };

    const handleEdit = (model: IndustryTypeModel)=> {
        setFormData(model);
        setIsOpen(true);
        setIsEdit(true);
    };

    const handleClose = ()=> {
        setFormData({} as IndustryTypeModel);
        setIsOpen(false);
        setIsEdit(false);
    };

    const onSuccess = ()=> {
        setFilters(pre=> ({...pre, fetchCount: pre.fetchCount+1}));
    };

    const onPageChange = (page: number)=> {
        setFilters(pre=> ({...pre, CurrentPage: page, fetchCount: pre.fetchCount+1}));
    };

    return {
        isLoading,
        data,
        formData,
        filters,
        addNewIndustry,
        handleEdit,
        handleDelete,
        handleClose,
        onSuccess,
        isEdit,
        isOpen,
        isConfirm,
        onCloseConfirm,
        onConfirmSuccess,
        onPageChange,
        setFilters
    };
};
