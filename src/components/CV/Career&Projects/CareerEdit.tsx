import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import Career from '../../../interfaces/carrer/Career';

interface CareerEditProps {
  careerData: any;
  onClose: () => void;
}



const CareerEdit: React.FC<CareerEditProps> = ({ careerData, onClose }) => {
  const { t } = useTranslation();
  
  const { register, handleSubmit, formState: { errors } } = useForm<Career>();

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
    onClose();
  };


  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Edit job experience</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-500">Company</label>
          <input
            type="text"
            className="border rounded-md p-2"
            placeholder="e.g. Microsoft"
            {...register('company', { required: 'Company is required' })}
          />
          {errors.company && <div className="text-red-500">{errors.company.message}</div>}
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
                {...register('startDate', { required: 'Start Date is required' })}
              />
            </div>
            {errors.startDate && <div className="text-red-500">{errors.startDate.message}</div>}
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
                {...register('endDate', { required: 'End Date is required' })}
              />
            </div>
            {errors.endDate && <div className="text-red-500">{errors.endDate.message}</div>}
          </div>
          <div className="w-1/3 flex items-center space-x-2">
            <input
              type="checkbox"
              className="mr-2"
              {...register('stillWorking')}
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
            {...register('jobTitle', { required: 'Job Title is required' })}
          />
          {errors.jobTitle && <div className="text-red-500">{errors.jobTitle.message}</div>}
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-500">Description</label>
          <textarea
            className="border rounded-md p-2 w-full h-36"
            placeholder="Describe your role in the company."
            {...register('description', { required: 'Description is required' })}
          />
          {errors.description && <div className="text-red-500">{errors.description.message}</div>}


          <label className="block text-sm font-medium text-gray-500">
            Used skills (optional, maximum 10)
          </label>
          <select
            className="border rounded-md p-2 w-full text-gray-300"
            {...register('usedSkills', { required: 'Description is required' })}
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
