import React from 'react';

interface WorkRolesReorderProps {
  onClose: () => void;
}

const WorkRolesReorder: React.FC<WorkRolesReorderProps> = ({ onClose }) => {
  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Work roles</h2>
      <p className="mt-3 text-[#332c55]">
        Set your work roles by dragging and dropping options. The top 5 work roles will be presented in your CV, and the rest will be used to match you with job opportunities in 7N.
      </p>

      <ul className="circle-list mt-5">
        <li><i className="mb-3 fas fa-circle-notch circle-icon"></i> Developer</li>
        <li><i className="mb-3 fas fa-circle-notch circle-icon"></i> Frontend Developer</li>
        <li><i className="mb-3 fas fa-circle-notch circle-icon"></i> Lead Developer</li>
        <li><i className="mb-3 fas fa-circle-notch circle-icon"></i> System Consultant</li>
      </ul>
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

export default WorkRolesReorder;
