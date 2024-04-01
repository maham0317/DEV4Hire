import React from "react";

interface WorkRolesReorderProps {
  onClose: () => void;
}

const WorkRolesReorder: React.FC<WorkRolesReorderProps> = ({ onClose }) => {
  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Work roles</h2>
      <p className="mt-3 text-[#332c55]">
        Set your work roles by dragging and dropping options. The top 5 work
        roles will be presented in your CV, and the rest will be used to match
        you with job opportunities in 7N.
      </p>

      <ul className="circle-list mt-5">
        <li>
          <i className="mb-3 fas fa-circle-notch circle-icon"></i> Developer
        </li>
        <li>
          <i className="mb-3 fas fa-circle-notch circle-icon"></i> Frontend
          Developer
        </li>
        <li>
          <i className="mb-3 fas fa-circle-notch circle-icon"></i> Lead
          Developer
        </li>
        <li>
          <i className="mb-3 fas fa-circle-notch circle-icon"></i> System
          Consultant
        </li>
      </ul>
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

export default WorkRolesReorder;
