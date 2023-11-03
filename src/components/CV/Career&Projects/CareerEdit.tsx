import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

interface CareerEditProps {
  careerData: any; 
  onClose: () => void;
}

const CareerEdit: React.FC<CareerEditProps> = ({ careerData, onClose }) => {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    company: Yup.string().required('Company is required'),
    startDate: Yup.string().required('Start Date is required'),
    endDate: Yup.string().required('End Date is required'),
    jobTitle: Yup.string().required('Job Title is required'),
    description: Yup.string().required('Description is required'),
  });

  const formik = useFormik({
    initialValues: {
      company: '',
      startDate: '',
      endDate: '',
      jobTitle: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      onClose();
    },
  });

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Edit job experience</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-500">Company</label>
          <input
            type="text"
            className="border rounded-md p-2"
            placeholder="e.g. Microsoft"
            {...formik.getFieldProps('company')}
          />
          {formik.touched.company && formik.errors.company ? (
            <div className="text-red-500">{formik.errors.company}</div>
          ) : null}
        </div>

        <div className="flex justify-between mt-5">
          <div className="w-1/3 mr-2">
            <label className="block text-sm font-medium text-gray-500">Start Date</label>
            <div className="flex items-center">
              <span className="text-sm mt-1 mr-2">
                <i className="far fa-calendar"></i>
              </span>
              <input
                type="text"
                className="border rounded-md p-2 w-full"
                placeholder="MM/YYYY"
                {...formik.getFieldProps('startDate')}
              />
            </div>
            {formik.touched.startDate && formik.errors.startDate ? (
              <div className="text-red-500">{formik.errors.startDate}</div>
            ) : null}
          </div>

          <div className="w-1/3 mr-2">
            <label className="block text-sm font-medium text-gray-500">End Date</label>
            <div className="flex items-center">
              <span className="text-sm mt-1 mr-2">
                <i className="far fa-calendar"></i>
              </span>
              <input
                type="text"
                className="border rounded-md p-2 w-full"
                placeholder="MM/YYYY"
                {...formik.getFieldProps('endDate')}
              />
            </div>
            {formik.touched.endDate && formik.errors.endDate ? (
              <div className="text-red-500">{formik.errors.endDate}</div>
            ) : null}
          </div>

          <div className="w-1/3 flex items-center space-x-2">
            <input
              type="checkbox"
              className="mr-2"
              {...formik.getFieldProps('stillWorking')}
            />
            <label className="mr-2">Still working here</label>
          </div>
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-500">Job title</label>
          <input
            type="text"
            className="border rounded-md p-2"
            placeholder="e.g. Manager"
            {...formik.getFieldProps('jobTitle')}
          />
          {formik.touched.jobTitle && formik.errors.jobTitle ? (
            <div className="text-red-500">{formik.errors.jobTitle}</div>
          ) : null}
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-500">Description</label>
          <textarea
            className="border rounded-md p-2 w-full h-36"
            placeholder="Describe your role in the company."
            {...formik.getFieldProps('description')}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500">{formik.errors.description}</div>
          ) : null}

          <label className="block text-sm font-medium text-gray-500">
            Used skills (optional, maximum 10)
          </label>
          <select
            className="border rounded-md p-2 w-full text-gray-300"
            {...formik.getFieldProps('usedSkills')}
          >
            <option value="">e.g. HTML</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>
        <hr className="mt-5 w-full border-t border-gray-200" />

        <div className="flex justify-end mt-3">
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Save
          </button>
          <a
            href="#"
            onClick={onClose}
            className="text-blue-700 hover:text-blue-500 font-semibold py-1 px-4 rounded"
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default CareerEdit;
