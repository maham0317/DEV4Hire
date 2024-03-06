

import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import logo from '../../../logo.svg'
interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { t } = useTranslation();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-2xl mr-6">
        <img src="./assets/images/login.png" alt="Your Image" className="w-full h-auto" />
      </div>
      <div className="w-full max-w-xl mx-4">
        <img src={logo} alt="Your Image" className="w-1/4  h-auto" />

        <h4 className='title mx-7 mt-7 text-xl font-normal font-sans'>Sign in</h4>
        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 m" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              className={`input ${errors.email ? 'input-error' : ''} 
              border rounded mt-3 w-full p-3 text-gray-700 leading-tight focus:outline-none
              ${errors.email ? 'border-red-500' : ''}`}
              {...register("email", {
                required: "Enter Email",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email"
                }
              })}
              placeholder={t('Enter your e-mail address')}
            />
            <p className="text-red-500 text-xs ">{errors.email?.message}</p>
          </div>
          <div className="mb-4">
            <input
              type="password"
              className={`input ${errors.password ? 'input-error' : ''} 
              border rounded mt-3 w-full p-3 text-gray-700 leading-tight focus:outline-none
              ${errors.password ? 'border-red-500' : ''}`}
              {...register("password", {
                required: "Enter Password"

              })}
              placeholder={t('Enter your password')}
            />
            <p className="text-red-500 text-xs ">{errors.password?.message}</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {t('SignIn')}
            </button>
          </div>
        </form>
        <p className="mx-7 text-gray-500 text-xs">&copy;2020 Acme Corp. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;