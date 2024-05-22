import React from 'react';

const IndustryInfoWizard: React.FC = () => {
  return (
    <div className="bg-gray-100 p-12 rounded">
      <div className="bg-white p-10 rounded shadow text-0.75rem">
        <h2 className="text-2xl font-bold text-[#1f0f32]">Industry Knowledge</h2>
        <p className="mt-3 text-[#332c55]">By picking industry sectors you give us an overview regarding your experience. It helps us in matching your business focus with job opportunities.</p>
        <div className="title">
          <div className="title">
            <div className="flex items-center">
              <input type="checkbox" className="hidden" id="custom-checkbox" />
              <label
                htmlFor="custom-checkbox" className="label-checkbox">

                <span className="label-span"></span>
              </label>
              <span className="text-[#332c55]">Agile Coach</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="hidden" id="custom-checkbox" />
              <label
                htmlFor="custom-checkbox" className="label-checkbox">

                <span className="label-span"></span>
              </label>
              <span className="text-[#332c55]">Application Manager</span>
            </div>
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55]">Agile Coach</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55]">Application Manager</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="flex mr-3 mt-1  items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55]">Agile Coach</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55]">Application Manager</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55]">Agile Coach</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55]">Application Manager</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55]">Agile Coach</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55]">Application Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryInfoWizard;
