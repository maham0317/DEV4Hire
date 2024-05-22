import { FC, JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Label, TextInput, Select, Modal } from 'flowbite-react';
import { useAddOrEditIndusrtyTypeModal } from './hooks';
import { IAddOrEditIndustryTypeModalProp } from '@/interfaces/industry-type-listing';

const AddOrEditIndusrtyTypeModal: FC<IAddOrEditIndustryTypeModalProp> = (props): JSX.Element=> {
    const { t } = useTranslation();
    const { isOpen, isEdit } = props;
    const { register, handleSubmit, handleClose, onSubmit, isSubmiting, isUpdating, errors } = useAddOrEditIndusrtyTypeModal(props);
    
    return (
        <Modal show={isOpen} onClose={handleClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header className='pt-3 pb-2 px-6'>{t(`IndustryTypeListing.Modal.${isEdit? 'Edit': 'Add'}.Title`)}</Modal.Header>
                <Modal.Body>
                    <div className='grid grid-flow-row justify-stretch space-y-4'>
                        <div className='flex gap-x-2'>
                            <Label className='w-36 text-md' htmlFor='IndustryType' value={t('IndustryTypeListing.Input.IndustryName.Label')} />
                            <div className='flex-1'>
                                <TextInput sizing='sm' id='IndustryType' type='text' {...register('IndustryName', {
                                    required: t('IndustryTypeListing.Input.Error.Required'),
                                    maxLength: {
                                        value: 25,
                                        message: t('IndustryTypeListing.Input.Error.MaxLength', { MaxLength: 25 }),
                                    }
                                    })}
                                shadow color={errors.IndustryName && 'failure'} />
                                <p className='mt-2 text-sm text-red-600 dark:text-red-500'>{errors.IndustryName?.message}</p>
                            </div>
                        </div>
                        <div className='flex gap-x-2'>
                            <Label className='w-36 text-md' htmlFor='Description' value={t('IndustryTypeListing.Input.Description.Label')} />
                            <div className='flex-1'>
                                <TextInput sizing='sm' id='Description' type='text' {...register('Description', {
                                    required: t('IndustryTypeListing.Input.Error.Required'),
                                    maxLength: {
                                        value: 25,
                                        message: t('IndustryTypeListing.Input.Error.MaxLength', { MaxLength: 25 }),
                                    }
                                    })}
                                shadow color={errors.Description && 'failure'} />
                                <p className='mt-2 text-sm text-red-600 dark:text-red-500'>{errors.Description?.message}</p>
                            </div>
                        </div>
                        <div className='flex gap-x-2'>
                            <Label className='w-36 text-md' htmlFor='ParentId' value={t('IndustryTypeListing.Input.ParentId.Label')} />
                            <Select className='flex-1' sizing='sm' id='ParentId' {...register('ParentId', { required: t('IndustryTypeListing.Input.Error.Required') })}>
                                <option value={1}>React</option>
                            </Select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='pt-3 pb-3 px-6 justify-end'>
                    <Button size='sm' color='primary' type='submit' isProcessing={isSubmiting || isUpdating}>{t(`IndustryTypeListing.Button.${isEdit? 'Update': 'Save'}`)}</Button>
                    <Button size='sm' color='gray' onClick={handleClose}>{t('IndustryTypeListing.Button.Cancel')}</Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default AddOrEditIndusrtyTypeModal;