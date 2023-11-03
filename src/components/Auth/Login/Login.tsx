import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('InvalidEmailFormat'))
      .required(t('EmailIsRequired')),
    password: Yup.string().required(t('PasswordIsRequired')),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-xs mr-6">
        <img src="./assets/images/login.png" alt="Your Image" className="w-full h-auto" />
      </div>

      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              {t('Email')}
            </label>
            <input
              className={
                formik.errors.email && formik.touched.email
                  ? 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                  : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              }
              id="email"
              type="text"
              placeholder={t('Email')}
              {...formik.getFieldProps('email')}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              {t('Password')}
            </label>
            <input
              className={
                formik.errors.password && formik.touched.password
                  ? 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                  : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              }
              id="password"
              type="password"
              placeholder="******************"
              {...formik.getFieldProps('password')}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500 text-xs italic">{formik.errors.password}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {t('SignIn')}
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              {t('ForgotPassword')}
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">&copy;2020 Acme Corp. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;
