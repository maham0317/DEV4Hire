import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, TextInput } from 'flowbite-react';
import { useAppDispatch } from '@/hooks/appDispatch';
import { useLoginMutation } from '@/store/auth/apiSlice';
import { setCredentials } from '@/store/auth/slice';
import { Config } from '@/config';

type LoginFields = 'UserName' | 'Password' | 'ClientId' | 'Scope' | 'ClientSecret';
type LoginFormType = {
    [key in LoginFields]: string
};

const Login: React.FC = () => {
    const appDispatch = useAppDispatch();
    const [login] = useLoginMutation();
    const { register, handleSubmit } = useForm<LoginFormType>({defaultValues: Config.defaultLoginValues});

    const onSubmit: SubmitHandler<LoginFormType> = async data=> {
        try {
            const userData = await login(data).unwrap();
            appDispatch(setCredentials(userData));
        } catch (err) {
            console.log('error', err)
        }
    };

    return (
        <div className='p-24 h-screen flex gap-24'>
            <div className='my-auto'>
                <img src={'/assets/images/login.png'} />
            </div>
            <form className='my-auto' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col h-full gap-4'>
                    <p className='text-2xl font-bold text-primary'>Developerforhire.</p>

                    <p className='text-xl font-semibold text-dark-gray'>Sign in with your e-mail address</p>

                    <TextInput type='email' placeholder='email@developerforhire.com' {...register('UserName', {
                        required: 'Enter Email',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Entered value does not match email'
                        }
                    })} />
                    <TextInput type='password' placeholder='Password...' {...register('Password', { required: 'Enter Password' })} />
                    <Button type='submit' color='primary' className='w-28'>Sign in</Button>

                    <Link href='#' className='text-primary hover:underline'>Forgot your password?</Link>
                    <p className='text-xs text-dark-gray'>For any assistance please contact <span className='text-primary'>support@developerforhire.no</span> or <span className='text-primary'>+92 00 0000 000</span></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
