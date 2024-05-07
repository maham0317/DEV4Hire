import React from "react";

const CompetenceAreasEdit: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  return (
    <div className="bg-white p-10 mt-5 rounded shadow">
      <h2 className="text-2xl font-bold">Edit Competence Areas</h2>
      <p className="mt-3 text-[#332c55]">
        Main competence areas give us an overview regarding your experience and
        help in match your needs with job opportunities.
      </p>
      <div className="title">
        <h2 className="text-xl font-bold">A</h2>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label htmlFor="custom-checkbox" className="label-checkbox">
            <span className="label-span"></span>
          </label>
          <span>Application Manager</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label htmlFor="custom-checkbox" className="label-checkbox">
            <span className="label-span"></span>
          </label>
          <span>Application Manager</span>
        </div>
      </div>
      <div className="title">
        <h2 className="text-xl font-bold">B</h2>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label htmlFor="custom-checkbox" className="label-checkbox">
            <span className="label-span"></span>
          </label>
          <span>Application Manager</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label htmlFor="custom-checkbox" className="label-checkbox">
            <span className="label-span"></span>
          </label>
          <span>Application Manager</span>
        </div>
      </div>
      <div className="title">
        <h2 className="text-xl font-bold">C</h2>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label htmlFor="custom-checkbox" className="label-checkbox">
            <span className="label-span"></span>
          </label>
          <span>Application Manager</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="hidden" id="custom-checkbox" />
          <label htmlFor="custom-checkbox" className="label-checkbox">
            <span className="label-span"></span>
          </label>
          <span>Application Manager</span>
        </div>
      </div>
      <hr className="hr-tag" />

      <div className="flex justify-end mt-3">
        <button className="save-button" onClick={onClose}>
          Save changes
        </button>
        <a href="#" onClick={onClose} className="discard-button">
          Discard changes
        </a>
      </div>
    </div>
  );
};

export default CompetenceAreasEdit;
