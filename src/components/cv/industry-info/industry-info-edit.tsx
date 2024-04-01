import React from "react";

interface IndustryInfoEditProps {
  onClose: () => void;
}

const IndustryInfoEdit: React.FC<IndustryInfoEditProps> = ({ onClose }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Edit Industry Knowledge</h2>
      <p className="mt-3 text-[#332c55]">
        By picking industry sectors you give us an overview regarding your
        experience. It helps us in matching your business focus with job
        opportunities.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox"
              className="label-checkbox"
            >
              <span className="label-span"></span>
            </label>
            <span>Application Manager</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox"
              className="label-checkbox"
            >
              <span className="label-span"></span>
            </label>
            <span>Application Manager</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox"
              className="label-checkbox"
            >
              <span className="label-span"></span>
            </label>
            <span>Application Manager</span>
          </div>
        </div>

        <div className="flex justify-between mt-3">
          <button
            type="submit"
            className="save-button"
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
      </form>
    </div>
  );
};

export default IndustryInfoEdit;
