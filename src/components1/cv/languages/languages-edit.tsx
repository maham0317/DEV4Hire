import React, { FormEvent } from 'react';

interface LanguagesEditProps {
  onClose: () => void;
}

export const LanguagesEdit: React.FC<LanguagesEditProps> = ({ onClose }) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Edit language</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2 mt-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-400">Edit Language</label>
              <select
                className="border rounded-md p-2 w-full text-gray-300 mt-3"
                name="language"
              >
                <option value="english">e.g. English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
              </select>
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-400">Proficiency<i className="fas fa-question-circle text-gray-300 ml-1"></i></label>
              <select
                className="border rounded-md p-2 w-full text-gray-300 mt-3"
                name="proficiency"
              >
                <option value="beginner">Select proficiency</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>
        <hr className="ml-5 mt-5 w-full border-t border-gray-300" />
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
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default LanguagesEdit;
