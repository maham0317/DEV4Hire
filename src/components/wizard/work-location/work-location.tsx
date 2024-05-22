import React from 'react';

const WorkLocation: React.FC = () => {
  return (
    <div className="bg-gray-100 p-12 rounded">
      <div className="bg-white p-10 rounded shadow text-0.75rem">
        <h2 className="text-2xl font-bold text-[#1f0f32]">Preferred Work Location(s)</h2>
        <p className="mt-3 text-[#332c55]">Select your preferred work location(s), where you would like to work in case of an interesting job opportunity.</p>
        <div className="title">
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="block  h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
            </label>
            <span className="text-[#332c55] ml-1">Denmark</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55] ml-1">Finland</span>
          </div>  <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55] ml-1">Germany</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55] ml-1">India</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55] ml-1">Pakistan</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55] ml-1">Norway</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55] ml-1">UK</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55] ml-1">USA</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55] ml-1">China</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55] ml-1">Portugal</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55] ml-1">Brazil</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="hidden" id="custom-checkbox" />
            <label
              htmlFor="custom-checkbox" className="label-checkbox">

              <span className="label-span"></span>
            </label>
            <span className="text-[#332c55] ml-1">Agile Coach</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkLocation;
