import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ErrorResponseModel } from '@/interfaces/error-response.model';
import { IAddOrEditWorkRoleModalProp, WorkRoleModel } from '@/interfaces/work-role-listing/index';
import { useCreateWorkRoleMutation, useUpdateWorkRoleMutation } from '@/services/work-role-listing';

export const useAddOrEditWorkRoleModal = (props: IAddOrEditWorkRoleModalProp)=> {
    const { t } = useTranslation();
    const { isEdit, onClose, onSuccess, formState } = props;

    const [createWorkRole, { isLoading: isSubmiting }] = useCreateWorkRoleMutation();
    const [updateWorkRole, { isLoading: isUpdating }] = useUpdateWorkRoleMutation();
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm<WorkRoleModel>({defaultValues: isEdit? formState: {}});

    const onSubmit = async (data: WorkRoleModel)=> {
        try {
            if(isEdit) {
                await updateWorkRole(data).unwrap();
                toast.success(t('WorkRoleListing.Toast.Update.Success'));
            } else {
                await createWorkRole({...data, isActive: true}).unwrap();
                toast.success(t('WorkRoleListing.Toast.Save.Success'));
            }
            onSuccess();
            handleClose();
        } catch (err) {
            const apiError = err as ErrorResponseModel;
            toast.error(t(`${apiError.data?.Message}`));
        }
    };

    const handleClose = ()=> {
        onClose()
        reset();
    };

  return { register, handleSubmit, onSubmit, handleClose, isSubmiting, isUpdating, errors };
};
