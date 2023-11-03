import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

interface EducationEditProps {
  onClose: () => void;
}

const EducationEdit: React.FC<EducationEditProps> = ({ onClose }) => {
  const validationSchema = Yup.object({
    courseName: Yup.string().required('School is required'),
    field2: Yup.string().required('Field of study is required'),
    date: Yup.string().matches(/^(0[1-9]|1[0-2])\/(20)\d{2}$/, 'Invalid MM/YYYY format'),
  });

  const formik = useFormik({
    initialValues: {
      courseName: '',
      field1: '',
      field2: '',
      field3: '',
      date: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onClose();
    },
  });

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Edit education entry</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-400">School</label>
          <input
            type="text"
            className="border rounded-md p-2"
            placeholder="e.g. Harvard University"
            name="courseName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.courseName}
          />
          {formik.touched.courseName && formik.errors.courseName ? (
            <div className="text-red-500">{formik.errors.courseName}</div>
          ) : null}
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-400">Degree (optional)</label>
          <input
            type="text"
            className="border rounded-md p-2"
            placeholder="e.g. B.S.c"
            name="field1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.field1}
          />
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-400">Field of study</label>
          <input
            type="text"
            className="border rounded-md p-2"
            placeholder="e.g. Information technology"
            name="field2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.field2}
          />
          {formik.touched.field2 && formik.errors.field2 ? (
            <div className="text-red-500">{formik.errors.field2}</div>
          ) : null}
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-400">Grade (optional)</label>
          <input
            type="text"
            className="border rounded-md p-2"
            name="field3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.field3}
          />
        </div>

        <div className="flex flex-col space-y-2 mt-4 w-1/4">
          <label className="block text-sm font-medium text-gray-400">Year of graduation/completion</label>
          <div className="flex items-center">
            <span className="text-sm mt-1 mr-2">
              <i className="far fa-calendar"></i>
            </span>
            <input
              type="text"
              className="border rounded-md p-2"
              placeholder="MM/YYYY"
              name="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="text-red-500">{formik.errors.date}</div>
            ) : null}
          </div>
        </div>

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

export default EducationEdit;
