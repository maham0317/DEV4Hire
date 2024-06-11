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
    const { register, handleSubmit } = useForm<LoginFormType>({defaultValues: Config.defaultLoginValues});

    const onSubmit: SubmitHandler<LoginFormType> = async data=> {
        try {
            const userData = await login(data).unwrap();
            toast.success(t('Login.Toast.Success'));
            appDispatch(setCredentials(userData));
        } catch (e) {
            const err = e as ErrorResponseModel;
            toast.error(err.data?.Message);
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

                    <p className='text-xl font-semibold text-dark-gray'>{t("Login.SignInEmail")}</p>

                    <TextInput type='email' placeholder='email@developerforhire.com' {...register('UserName', {
                        required: 'Enter Email',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Entered value does not match email'
                        }
                    })} />
                    <TextInput type='password' placeholder='Password...' {...register('Password', { required: 'Enter Password' })} />
                    <Button type='submit' color='primary' className='w-32' isProcessing={isLoading} disabled={isLoading}>{t("Login.Button.SignIn")}</Button>

                    <Link to='#' className='text-primary hover:underline'>{t("Login.ForgotPassword")}</Link>
                    <p className='text-xs text-dark-gray'>{t("Login.Contact.text")} <span className='text-primary'>{t("Login.Contact.email")}</span> or <span className='text-primary'>+92 00 0000 000</span></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
