import React from 'react';

interface WorkRolesEditProps {
  onClose: () => void;
}

const WorkRolesEdit: React.FC<WorkRolesEditProps> = ({ onClose }) => {
  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Edit Work Roles</h2>
      <p className='mt-3 text-[#332c55]'>Edit the job functions to best describe the roles you work within.</p>
      <div className="flex flex-col space-y-2 mt-4">
        <h2 className="text-xl font-bold">A</h2>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label
            htmlFor="custom-checkbox" className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

            <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
          </label>
          <span>Application Manager</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label
            htmlFor="custom-checkbox" className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

            <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
          </label>
          <span>Application Manager</span>
        </div>
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        <h2 className="text-xl font-bold">B</h2>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label
            htmlFor="custom-checkbox" className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

            <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
          </label>
          <span>Application Manager</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label
            htmlFor="custom-checkbox" className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

            <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
          </label>
          <span>Application Manager</span>
        </div>
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        <h2 className="text-xl font-bold">C</h2>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label
            htmlFor="custom-checkbox" className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

            <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
          </label>
          <span>Application Manager</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label
            htmlFor="custom-checkbox" className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

            <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
          </label>
          <span>Application Manager</span>
        </div>
      </div>
      <hr className="mt-5 w-full border-t border-gray-200" />

      <div className="flex justify-between mt-3">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={onClose}
        >
          Save changes
        </button>
        <a
          href="#"
          onClick={onClose}
          className="text-blue-700 hover:text-blue-500 font-semibold py-1 px-4 rounded"
        >
          Discard changes
        </a>
      </div>
    </div>
  );
};

export default WorkRolesEdit;
