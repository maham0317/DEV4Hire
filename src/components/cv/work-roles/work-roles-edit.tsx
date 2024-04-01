import React from 'react';

interface WorkRolesEditProps {
  onClose: () => void;
}

const WorkRolesEdit: React.FC<WorkRolesEditProps> = ({ onClose }) => {
  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Edit Work Roles</h2>
      <p className='mt-3 text-[#332c55]'>Edit the job functions to best describe the roles you work within.</p>
      <div className="title">
        <h2 className="text-xl font-bold">A</h2>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label
            htmlFor="custom-checkbox" className="label-checkbox">

            <span className="label-span"></span>
          </label>
          <span>Application Manager</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label
            htmlFor="custom-checkbox" className="label-checkbox">

            <span className="label-span"></span>
          </label>
          <span>Application Manager</span>
        </div>
      </div>
      <div className="title">
        <h2 className="text-xl font-bold">B</h2>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label
            htmlFor="custom-checkbox" className="label-checkbox">
            <span className="label-span"></span>
          </label>
          <span>Application Manager</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label
            htmlFor="custom-checkbox" className="label-checkbox">

            <span className="label-span"></span>
          </label>
          <span>Application Manager</span>
        </div>
      </div>
      <div className="title">
        <h2 className="text-xl font-bold">C</h2>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label
            htmlFor="custom-checkbox" className="label-checkbox">

            <span className="label-span"></span>
          </label>
          <span>Application Manager</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label
            htmlFor="custom-checkbox" className="label-checkbox">

            <span className="label-span"></span>
          </label>
          <span>Application Manager</span>
        </div>
      </div>
      <hr className="hr-tag" />

      <div className="flex justify-between mt-3">
        <button
          className="save-button"
          onClick={onClose}
        >
          Save changes
        </button>
        <a
          href="#"
          onClick={onClose}
          className="discard-button"
        >
          Discard changes
        </a>
      </div>
    </div>
  );
};

export default WorkRolesEdit;