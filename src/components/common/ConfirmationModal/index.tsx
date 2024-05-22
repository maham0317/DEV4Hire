import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

interface Iprops {
    messageString: string;
    isOpen: boolean;
    onSuccess: ()=> void;
    onClose: ()=> void;
}

const ConfirmationModal: FC<Iprops> = (props)=> {
    const { t } = useTranslation();
    const { messageString, isOpen, onClose, onSuccess } = props;

    return (
        <Modal show={isOpen} size='md' onClose={onClose} popup>
            <Modal.Header />
            <Modal.Body>
                <div className='text-center'>
                    <HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
                    <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                        {messageString}
                    </h3>
                    <div className='flex justify-center gap-4'>
                        <Button color='failure' onClick={onSuccess}>{t('IndustryTypeListing.Modal.Confirmation.Confirm')}</Button>
                        <Button color='gray' onClick={onClose}>{t('IndustryTypeListing.Modal.Confirmation.Cancel')}</Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ConfirmationModal;
