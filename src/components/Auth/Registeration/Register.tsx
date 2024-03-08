import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import RegisterData from '../../../interfaces/register/Register';

const Register: React.FC<{ onNext: () => void }> = (props) => {
  const { t } = useTranslation();

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterData>();

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
    props.onNext();
  };


  return (
    <div className="register-container text-sm">
      <div className="relative flex pb-8 justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
          <div className=" mb-4 text-[#332c55]">{t('TellUsYourName')}</div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-title"
                >
                </label>
                <select
                  className={`block appearance-none w-full bg-white-200 border ${errors.title ? 'border-red-500' : 'border-gray-200'} text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white`}
                  {...register('title', { required: 'Title is required' })}
                  id="grid-title"
                >
                  <option value="Mr.">{t('MrTitle')}</option>
                  <option value="Ms.">{t('MsTitle')}</option>
                </select>
                {errors.title && <div className="text-red-500">{errors.title?.message}</div>}
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="grid-first-name"
                >
                </label>
                <input
                  className={`block appearance-none w-full bg-white-200 border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white`}
                  {...register('firstName', { required: 'firstName is required' })}
                  id="grid-first-name"
                  type="text"
                  placeholder={t('First name')}
                />
                {errors.firstName && <div className="text-red-500">{errors.firstName?.message}</div>}
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="grid-last-name"
                >
                </label>
                <input
                  className={`block appearance-none w-full bg-white-200 border ${errors.lastName ? 'border-red-500' : 'border-gray-200'} text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white`}
                  {...register('lastName', { required: 'lastName is required' })}
                  id="grid-last-name"
                  type="text"
                  placeholder={t('Last name')}
                />
                {errors.lastName && <div className="text-red-500">{errors.lastName?.message}</div>}
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
                  className={`input ${errors.email ? 'input-error' : ''} 
                  border rounded mt-3 w-full p-3 text-gray-700 leading-tight focus:outline-none
                  ${errors.email ? 'border-red-500' : ''}`}
                  id="grid-email"
                  type="email"
                  placeholder={t('Email Address')}
                  {...register('email',
                    {
                      required: "Enter valid email address",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Ente valid email address"
                      }
                    })}
                />
                <p className="text-red-500 text-xs italic">{errors.email?.message}</p>
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
                    className={`block appearance-none w-full bg-white-200 border ${errors.prefix ? 'border-red-500' : 'border-gray-200'} text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white`}
                    {...register('Country', { required: 'Country is required' })}
                    id="grid-country"
                  >
                    <option value="" disabled>
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
                {errors.Country && <div className="text-red-500">{errors.Country?.message}</div>}
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
                  className={`block appearance-none w-full bg-white-200 border ${errors.City ? 'border-red-500' : 'border-gray-200'} text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white`}
                  {...register('City', { required: 'City is required' })}
                  id="grid-city"
                  type="text"
                  placeholder={t('City')}
                />
                {errors.City && <div className="text-red-500">{errors.City?.message}</div>}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="grid-zip"
                >
                </label>
                <input
                  className={`block appearance-none w-full bg-white-200 border ${errors.Zip ? 'border-red-500' : 'border-gray-200'} text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white`}
                  {...register('Zip', { required: 'Zip is required' })}
                  id="grid-zip"
                  type="text"
                  placeholder={t('Zip')}
                />
                {errors.Zip && <div className="text-red-500">{errors.Zip?.message}</div>}
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
                    className={`block appearance-none w-full bg-white-200 border ${errors.prefix ? 'border-red-500' : 'border-gray-200'} text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white`}
                    {...register('prefix', { required: 'prefix is required' })}
                    id="grid-prefix"
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
                {errors.prefix && <div className="text-red-500">{errors.prefix?.message}</div>}
              </div>
              <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="grid-mobile"
                >
                </label>
                <input
                  className={`block appearance-none w-full bg-white-200 border ${errors.Mobile ? 'border-red-500' : 'border-gray-200'} text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white`}
                  {...register('Mobile', { required: 'Mobile is required' })}
                  id="grid-mobile"
                  type="text"
                  placeholder={t('Mobile')}
                />
                {errors.Mobile && <div className="text-red-500">{errors.Mobile?.message}</div>}
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
