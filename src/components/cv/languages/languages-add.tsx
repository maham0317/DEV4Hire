import React from 'react';
import { useForm } from 'react-hook-form';
import UserLanguagesModel from '../../../interfaces/user/user-languages.model';

interface LanguagesAddProps {
  onClose: () => void;
}

export const LanguagesAdd: React.FC<LanguagesAddProps> = ({ onClose }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLanguagesModel>();

  const onSubmit = (data: any) => {
    onClose();
  };

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Add language</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-2 mt-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-400">Language</label>
              <select
                className="border rounded-md p-2 w-full text-gray-300 mt-3"
                {...register("LanguageId", { required: true })}
              >
                <option value="">e.g. English</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
              </select>
              {errors.LanguageId && <span className="text-red-500">Select a language</span>}
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-400">Proficiency</label>
              <select
                className="border rounded-md p-2 w-full text-gray-300 mt-3"
                {...register("ProficiencyId", { required: true })}
              >
                <option value="">Select proficiency</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              {errors.ProficiencyId && <span className="text-red-500">Proficiency must be set</span>}
            </div>
          </div>
        </div>
        <hr className="ml-5 mt-5 w-full border-t border-gray-300" />
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Add language
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

export default LanguagesAdd;
