import React from 'react';

interface IndustryInfoAddProps {
  onClose: () => void;
}

const IndustryInfoAdd: React.FC<IndustryInfoAddProps> = ({ onClose }) => {
  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Industry Knowledge</h2>
      <p className="mt-3 text-[#332c55]">
        By picking industry sectors you give us an overview regarding your experience. It helps us in matching your business focus with job opportunities.
      </p>
      <div className="flex flex-col space-y-2 mt-4">
      <div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span>Application Manager</span>
</div>
<div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span>Education</span>
</div>
<div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span>Accounting</span>
</div>
<div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span>Aerospace</span>
</div>
<div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span>Application Manager</span>
</div>
<div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span>Application Manager</span>
</div>
      </div>
      <div className="flex justify-between mt-3">
        <button
          type="submit"
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

export default IndustryInfoAdd;
