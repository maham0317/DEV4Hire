import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
interface RegisterStep2Props {
  onNext: () => void;
  onPrev: () => void;

}

const RegisterStep2: React.FC<RegisterStep2Props> = (props) => {
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    specialization: Yup.string().required(t('ValidationSpecialization')),
    cvFile: Yup.string().required(t('ValidationCV')),
  });

  const formik = useFormik({
    initialValues: {
      specialization: '',
      cvFile: '',
      linkedInProfile: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.onNext();
      console.log('Form submitted with values:', values);
    },
  });

  return (
    <div className="flex justify-center items-center pb-32 min-h-screen  text-sm">
      <div className="bg-white p-8 mb-5  rounded shadow-md w-full max-w-lg">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-[#332c55]  font-semibold mb-2"
                htmlFor="grid-specialization"
              >
                {t('Specialization')}
              </label>
              <div className="relative">
                <select
                  className={
                    formik.errors.specialization && formik.touched.specialization
                      ? 'block appearance-none w-full bg-white-200 border border-red-500 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white'
                      : 'block appearance-none w-full bg-white-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white'
                  }
                  id="grid-specialization"
                  {...formik.getFieldProps('specialization')}
                >
                  <option value="" disabled>
                    {t('SelectSpecialization')}
                  </option>
                  <option>.Net</option>
                  <option>Agile</option>
                  <option>Android</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              {formik.errors.specialization && formik.touched.specialization && (
                <p className="text-red-500  italic">{formik.errors.specialization}</p>
              )}
            </div>
          </div>

          <div>
            <p className=" italic text-[#332c55]"> {t('Career')}</p>
            <p className="font-medium italic  mt-2 text-[#332c55]">  {t('UploadCV')}</p>
            <div className="relative mt-3 ">
              <input
                className={
                  formik.errors.cvFile && formik.touched.cvFile
                    ? 'appearance-none block w-1/2 bg-white-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white'
                    : 'appearance-none block w-1/2 bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                }
                id="grid-cv-file"
                type="file"
                placeholder=""
                {...formik.getFieldProps('cvFile')}
              />
              <i className="fas fa-file-upload"></i>
              {formik.errors.cvFile && formik.touched.cvFile && (
                <p className="text-red-500  italic">{formik.errors.cvFile}</p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="font-medium tracking-wide text-xs text-[#332c55]  mb-2"
                htmlFor="grid-linkedInProfile"
              >
                {t('LinkedInProfile')}
              </label>
              <input
                className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-linkedInProfile"
                type="text"
                placeholder={t('PasteLink')}
                {...formik.getFieldProps('linkedInProfile')}
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              type="button"
              onClick={props.onPrev}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-none rounded"
            >
              <span className="mr-2">
                <i className="fas fa-arrow-left"></i>
              </span>
              {t('Back')}
            </button>
            <button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              {t('NextButtonLabel')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterStep2;
