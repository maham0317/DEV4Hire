import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Register: React.FC<{ onNext: () => void }> = (props) => {
  const { t } = useTranslation();
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(t('TitleRequired')),
    firstName: Yup.string().required(t('FirstNameRequired')),
    lastName: Yup.string().required(t('LastNameRequired')),
    email: Yup.string().email(t('InvalidEmailFormat')).required(t('EmailRequired')),
    country: Yup.string().required(t('CountryRequired')),
    city: Yup.string().required(t('CityRequired')),
    zip: Yup.string().required(t('ZipRequired')),
    prefix: Yup.string().required(t('PrefixRequired')),
    mobile: Yup.string().required(t('MobileRequired')),
  });

  const formik = useFormik({
    initialValues: {
      title: 'Mr.',
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      city: '',
      zip: '',
      prefix: '',
      mobile: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
      props.onNext();
    },
  });

  return (
    <div className="register-container text-sm">

      <div className="relative flex pb-8 justify-center items-center min-h-screen">
   
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
          <div className=" mb-4 text-[#332c55]">{t('TellUsYourName')}</div>
        
          <form onSubmit={formik.handleSubmit} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-title"
                >
             
                </label>
                <select
                  className={
                    formik.errors.title && formik.touched.title
                      ? 'block appearance-none w-full bg-white-200 border border-red-500 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white'
                      : 'block appearance-none w-full bg-white-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white'
                  }
                  id="grid-title"
                  {...formik.getFieldProps('title')}
                >
                  <option value="Mr.">{t('MrTitle')}</option>
                  <option value="Ms.">{t('MsTitle')}</option>
                </select>
                {formik.errors.title && formik.touched.title && (
                  <p className="text-red-500 text-xs italic">{formik.errors.title}</p>
                )}
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="grid-first-name"
                >
             
                </label>
                <input
                  className={
                    formik.errors.firstName && formik.touched.firstName
                      ? 'appearance-none block w-full bg-white-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                      : 'appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  }
                  id="grid-first-name"
                  type="text"
                  placeholder={t('First name')}
                  {...formik.getFieldProps('firstName')}
                />
                {formik.errors.firstName && formik.touched.firstName && (
                  <p className="text-red-500 text-xs italic">{formik.errors.firstName}</p>
                )}
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="grid-last-name"
                >
              
                </label>
                <input
                  className={
                    formik.errors.lastName && formik.touched.lastName
                      ? 'appearance-none block w-full bg-white-200 text-gray-700 border border-red-500 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      : 'appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  }
                  id="grid-last-name"
                  type="text"
                  placeholder={t('Last name')}
                  {...formik.getFieldProps('lastName')}
                />
                {formik.errors.lastName && formik.touched.lastName && (
                  <p className="text-red-500 text-xs italic">{formik.errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className=" tracking-wide text-[#332c55] text-xs font-light  mb-2"
                  htmlFor="grid-email"
                >
          Fill up your details, so we can easily contact you
                </label>
                <input
                  className={
                    formik.errors.email && formik.touched.email
                      ? 'appearance-none block w-full bg-white-200 text-gray-700 border border-red-500 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white'
                      : 'appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white'
                  }
                  id="grid-email"
                  type="email"
                  placeholder={t('Email Address')}
                  {...formik.getFieldProps('email')}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 ">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="grid-country"
                >

                </label>
                <div className="relative">
                  <select
                    className={
                      formik.errors.country && formik.touched.country
                        ? 'block appearance-none w-full bg-white-200 border border-red-500 text-gray-400 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        : 'block appearance-none w-full bg-white-200 border border-gray-200 text-gray-400 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    }
                    id="grid-country"
                    {...formik.getFieldProps('country')}
                  >
                    <option  value="" disabled>
                      {t('Country')}
                    </option>
                    <option className='text-gray-900' value="Pakistan">Pakistan</option>
                    <option className='text-gray-900' value="Bangladesh">Bangladesh</option>
                    <option className='text-gray-900' value="India">India</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-800">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {formik.errors.country && formik.touched.country && (
                  <p className="text-red-500 text-xs italic">{formik.errors.country}</p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="grid-city"
                >

                </label>
                <input
                  className={
                    formik.errors.city && formik.touched.city
                      ? 'appearance-none block w-full bg-white-200 text-gray-700 border border-red-500 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white'
                      : 'appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white'
                  }
                  id="grid-city"
                  type="text"
                  placeholder={t('City')}
                  {...formik.getFieldProps('city')}
                />
                {formik.errors.city && formik.touched.city && (
                  <p className="text-red-500 text-xs italic">{formik.errors.city}</p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="grid-zip"
                >
             
                </label>
                <input
                  className={
                    formik.errors.zip && formik.touched.zip
                      ? 'appearance-none block w-full bg-white-200 text-gray-700 border border-red-500 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white'
                      : 'appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white'
                  }
                  id="grid-zip"
                  type="text"
                  placeholder={t('Zip')}
                  {...formik.getFieldProps('zip')}
                />
                {formik.errors.zip && formik.touched.zip && (
                  <p className="text-red-500 text-xs italic">{formik.errors.zip}</p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="grid-prefix"
                >
       
                </label>
                <div className="relative">
                  <select
                    className={
                      formik.errors.prefix && formik.touched.prefix
                        ? 'block appearance-none w-full bg-white  border border-red-500 text-gray-400 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white'
                        : 'block appearance-none w-full bg-white border border-gray-200 text-gray-400 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white'
                    }
                    id="grid-prefix"
                    {...formik.getFieldProps('prefix')}
                  >
                    <option value="" disabled>
                      {t('Prefix')}
                    </option>
                    <option className='text-gray-900' value="+994">+994</option>
                    <option className='text-gray-900' value="+43">+43</option>
                    <option className='text-gray-900' value="33">33</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-800">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {formik.errors.prefix && formik.touched.prefix && (
                  <p className="text-red-500 text-xs italic">{formik.errors.prefix}</p>
                )}
              </div>
              <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="grid-mobile"
                >
         
                </label>
                <input
                  className={
                    formik.errors.mobile && formik.touched.mobile
                      ? 'appearance-none block w-full bg-white-200 text-gray-700 border border-red-500 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white'
                      : 'appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white'
                  }
                  id="grid-mobile"
                  type="text"
                  placeholder={t('Mobile')}
                  {...formik.getFieldProps('mobile')}
                />
                {formik.errors.mobile && formik.touched.mobile && (
                  <p className="text-red-500 text-xs italic">{formik.errors.mobile}</p>
                )}
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                {t('NextButtonLabel')}
              </button>
              
              
            </div>
            
            
          </form>
          
          
        </div>
        

      </div>

     
    </div>
  );
};

export default Register;
