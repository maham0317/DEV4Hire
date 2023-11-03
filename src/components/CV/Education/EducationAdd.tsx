import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { useFormik } from 'formik';

interface EducationAddProps {
  onClose: () => void;
}

const EducationAdd: React.FC<EducationAddProps> = ({ onClose }) => {
  const { t } = useTranslation();


  const validationSchema = Yup.object({
    courseName: Yup.string().required('Course name is required'),
    date: Yup.string().required('Year is required'),
  });

  const [selectedEducationType, setSelectedEducationType] = useState<string>(''); 
  const formik = useFormik({
    initialValues: {
      courseName: '',
      date: '',
    
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
     
      console.log('Form values:', values);
      onClose();
    },
  });

  const handleEducationTypeChange = (educationType: string) => {
    setSelectedEducationType(educationType);
    console.log('Selected Education Type:', educationType);
  };
  

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Add education entry</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col mt-4">
          <label className="block text-sm font-medium text-gray-400">Type of education</label>
          <div className="mt-2 flex items-center">
            <input
              type="radio"
              className="hidden" 
              name="educationType"
              value="highSchool"
              checked={selectedEducationType === 'highSchool'}
              onChange={() => handleEducationTypeChange('highSchool')}
            />
            <label
              htmlFor="custom-radio"
              className={`flex mr-2 items-center justify-center w-6 h-6 border border-gray-300 rounded-full cursor-pointer ${
                selectedEducationType === 'highSchool' ? 'bg-blue-200' : ''
              }`}
              style={{ position: 'relative' }}
            ></label>
            <span>School</span>
          </div>
          <div className="mt-2 flex items-center">
            <input
              type="radio"
              className="hidden"
              name="educationType"
              value="bachelors"
              checked={selectedEducationType === 'bachelors'}
              onChange={() => handleEducationTypeChange('bachelors')}
            />
            <label
              htmlFor="custom-radio"
              className={`flex mr-2 items-center justify-center w-6 h-6 border border-gray-300 rounded-full cursor-pointer ${
                selectedEducationType === 'bachelors' ? 'bg-white-200' : ''
              }`}
              style={{ position: 'relative' }}
            ></label>
            <span>Bachelors</span>
          </div>
          <div className="mt-2 flex items-center">
            <input
              type="radio"
              className="hidden"
              name="educationType"
              value="masters"
              checked={selectedEducationType === 'masters'}
              onChange={() => handleEducationTypeChange('masters')}
            />
            <label
              htmlFor="custom-radio"
              className={`flex mr-2 items-center justify-center w-6 h-6 border border-gray-300 rounded-full cursor-pointer ${
                selectedEducationType === 'masters' ? 'bg-white-200' : ''
              }`}
              style={{ position: 'relative' }}
            ></label>
            <span>Masters</span>
          </div>
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-400">Course name</label>
          <input
            type="text"
            className="border rounded-md p-2"
            placeholder="e.g. Data Science - Coursera"
            name="courseName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.courseName}
          />
          {formik.touched.courseName && formik.errors.courseName ? (
            <div className="text-red-500">{formik.errors.courseName}</div>
          ) : null}
        </div>

        <div className="flex flex-col space-y-2 mt-4 w-1/4">
          <label className="block text-sm font-medium text-gray-400">Year</label>
          <div className="flex items-center">
            <span className="text-sm mt-1 mr-2">
              <i className="far fa-calendar"></i>
            </span>
            <input
              type="text"
              className="border rounded-md p-2"
              placeholder="YYYY"
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
            Add course
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

export default EducationAdd;
