
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { useFormik } from 'formik';

interface ApplicationEditProps {
  onClose: () => void;
  initialValues: {
    applicationName: string;
  };
}

const ApplicationEdit: React.FC<ApplicationEditProps> = ({ onClose, initialValues }) => {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    applicationName: Yup.string().required('Application or business focus is required'),
  });

  const formik = useFormik({
    initialValues: {
      applicationName: initialValues.applicationName || '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onClose();
    },
  });

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Edit entry</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-400">Application or business focus</label>
          <input
            type="text"
            className="border rounded-md p-2"
            placeholder="e.g. Development, JavaScript"
            name="applicationName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.applicationName}
          />
          {formik.touched.applicationName && formik.errors.applicationName ? (
            <div className="text-red-500">{formik.errors.applicationName}</div>
          ) : null}
        </div>

        <hr className="mt-5 w-full border-t border-gray-200" />

        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Save changes
          </button>
          <a
            href="#"
            onClick={onClose}
            className="text-blue-700 hover:text-blue-500 font-semibold py-1 px-4 rounded ml-2"
          >
            Discard changes
          </a>
        </div>
      </form>
    </div>
  );
};

export default ApplicationEdit;
