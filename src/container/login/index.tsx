import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, TextInput } from 'flowbite-react';
import { useAppDispatch } from '@/hooks/appDispatch';
import { useLoginMutation } from '@/store/auth/apiSlice';
import { setCredentials } from '@/store/auth/slice';
import { Config } from '@/config';
import { ErrorResponseModel } from '@/interfaces/error-response.model';

type LoginFields = 'UserName' | 'Password' | 'ClientId' | 'Scope' | 'ClientSecret';
type LoginFormType = {
    [key in LoginFields]: string
};

const Login: React.FC = () => {
    const appDispatch = useAppDispatch();
    const { t } = useTranslation();
    const [login, { isLoading }] = useLoginMutation();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>({defaultValues: Config.DefaultLoginCredentials});

    const onSubmit: SubmitHandler<LoginFormType> = async data=> {
        try {
            const userData = await login(data).unwrap();
            toast.success(t('Login.Toast.Success'));
            appDispatch(setCredentials(userData));
        } catch (e) {
            const apiError = e as ErrorResponseModel;
            const errorTitle = apiError.data?.title || 'UnexpectedError';
            const errorMessage = t(`ApiError.${errorTitle}`, { defaultValue: '' });
      
            toast.error(errorMessage as string);
        }
    };

    return (
        <div className='p-24 sm:p-20 flex flex-col md:flex-row md:gap-24'>
            <div className='my-auto'>
                <img src={'/assets/images/login.png'} alt='login-banner' />
            </div>
            <form className='my-auto' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col h-full gap-4'>
                    <p className='text-xl font-bold text-primary mt-3'>{t("AppInfo.Name")}.</p>

                    <p className='text-xl font-semibold text-custom-gray'>{t('Login.SubHeading')}</p>

                    <TextInput type='email' placeholder='email@developerforhire.com' {...register('UserName', { required: true })} color={errors.UserName && 'failure'} />
                    <TextInput type='password' placeholder='Password...' {...register('Password', { required: true })} color={errors.Password && 'failure'} />
        
                    <Button type='submit' color='primary' size="md" isProcessing={isLoading} disabled={isLoading}>{t("Login.Button.SignIn")}</Button>

                    <Link to='#' className='text-primary hover:underline'>{t("Login.ForgotPassword")}</Link>
                    <p className='text-xs text-dark-gray'>{t("Login.Contact.text")} <span className='text-primary'>{t("Login.Contact.email")}</span> or <span className='text-primary'>+92 00 0000 000</span></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
