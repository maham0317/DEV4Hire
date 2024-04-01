import React from 'react';
import UserLanguagesModel from '../../../interfaces/user/user-languages.model';
import { useForm } from 'react-hook-form';

interface LanguagesEditProps {
  onClose: () => void;
}

export const LanguagesEdit: React.FC<LanguagesEditProps> = ({ onClose }) => {

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
      <h2 className="text-2xl font-bold">Edit language</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="title">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="label-text">Edit Language</label>
              <select
                className="input-text w-full text-gray-300 mt-3"
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
              <label className="label-text">Proficiency<i className="fas fa-question-circle text-gray-300 ml-1"></i></label>
              <select
                className="input-text w-full text-gray-300 mt-3"
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
            className="save-button"
          >
            Save changes
          </button>
          <a
            href="#"
            onClick={onClose}
            className="discard-button ml-2"
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default LanguagesEdit;
