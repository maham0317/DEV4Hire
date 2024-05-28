import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Config } from '@/config';
import { SortOrder } from '@/enums/sort-order.enum';
import { useTranslation } from 'react-i18next';
import { WorkRoleModel, SortByWorkRole } from '@/interfaces/work-role-listing';
import { useDeleteWorkRoleMutation, useGetAllWorkRoleMutation } from '@/services/work-role-listing';
import useDebounce from '@/hooks/useDebounce';

export const useWorkRoleListing = ()=> {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isConfirm, setIsConfirm] = useState(0);
    const [filters, setFilters] = useState({fetchCount: 0, totalPages: 0, CurrentPage: 1, 
          PageSize: Config.Filter.PageSize, SearchTerm: '', SortBy: SortByWorkRole.Name, SortOrder: SortOrder.ASC});
    const [formData, setFormData] = useState({} as WorkRoleModel);
    const debouncedValue = useDebounce(filters.SearchTerm, 500);

    const [getAllWorkRole, { data, isLoading }] = useGetAllWorkRoleMutation();
    const [deleteWorkRole] = useDeleteWorkRoleMutation();

    useEffect(()=> {
        getWorkRoleAsync();
    }, [filters.fetchCount, debouncedValue]);

    const getWorkRoleAsync = async ()=> {
        const res = await getAllWorkRole(filters).unwrap();
        setFilters(pre=> ({...pre, totalPages: res.TotalPages}));
    };

    const handleDelete = (id: number)=> {
        setIsConfirm(id);
    };

    const onCloseConfirm = ()=> {
        setIsConfirm(0);
    };

    const onConfirmSuccess = async ()=> {
        try {
            await deleteWorkRole(isConfirm).unwrap();
            toast.success(t('WorkRoleListing.Toast.Delete.Success'));
            setFilters(pre=> ({...pre, totalPages: pre.fetchCount+1}));
            setIsConfirm(0);
        } catch (e: any) {
            toast.error(t('WorkRoleListing.Toast.Delete.Error'));
        }
    };

    const addNewWorkRole = ()=> {
        setIsOpen(true);
        setIsEdit(false);
    };

    const handleEdit = ({WorkRoleName,ParentId, WorkRoleDesc}: WorkRoleModel)=> {
        setFormData({Id: 0, WorkRoleName, ParentId,WorkRoleDesc});
        setIsOpen(true);
        setIsEdit(true);
    };

    const handleClose = ()=> {
        setIsOpen(false);
        setIsEdit(false);
    };

    const onSuccess = ()=> {
        setFilters(pre=> ({...pre, fetchCount: pre.fetchCount+1}));
    };

    const onPageChange = (page: number)=> {
        setFilters(pre=> ({...pre, CurrentPage: page, fetchCount: pre.fetchCount+1}));
    };

  return { isLoading, data, formData, filters, addNewWorkRole, handleEdit, handleDelete, handleClose, onSuccess, isEdit, isOpen, isConfirm, onCloseConfirm, onConfirmSuccess, onPageChange, setFilters };
};
