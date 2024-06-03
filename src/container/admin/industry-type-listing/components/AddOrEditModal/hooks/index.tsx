import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ErrorResponseModel } from '@/interfaces/error-response.model';
import { IAddOrEditIndustryTypeModalProp, IndustryTypeModel } from '@/interfaces/industry-type-listing';
import { useCreateIndustryTypeMutation, useUpdateIndustryTypeMutation } from '@/services/industry-type-listing';
import { useEffect } from 'react';
import { useIndustryTypeListing } from '../../../hooks';

export const useAddOrEditIndusrtyTypeModal = (props: IAddOrEditIndustryTypeModalProp)=> {
    const { t } = useTranslation();
    const { isEdit, onClose, onSuccess, formState } = props;

    const [createIndustryType, { isLoading: isSubmiting }] = useCreateIndustryTypeMutation();
    const [updateIndustryType, { isLoading: isUpdating }] = useUpdateIndustryTypeMutation();
    const { ParentName } = useIndustryTypeListing();

    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm<IndustryTypeModel>({defaultValues: isEdit? formState: {}});

    useEffect(()=> {
        setValue('Description', formState.Description);
        setValue('IndustryName', formState.IndustryName);
        setValue('ParentId', formState.ParentId)
    }, [formState]);

    const onSubmit = async (data: IndustryTypeModel)=> {
        try {
            if(isEdit) {
                await updateIndustryType(data).unwrap();
                toast.success(t('IndustryTypeListing.Toast.Update.Success'));
            } else {
                await createIndustryType({...data, isActive: true}).unwrap();
                toast.success(t('IndustryTypeListing.Toast.Save.Success'));
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
    

  return { register, handleSubmit, onSubmit, handleClose, isSubmiting, isUpdating, errors,setValue };
};
