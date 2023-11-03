import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const WorkrolesWizard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 p-12 rounded">
    <div className="bg-white p-10 rounded shadow text-0.75rem ">
      <div></div>
      <h2 className="text-2xl font-bold text-[#1f0f32] ">Work roles</h2>
      <p className="mt-3 text-[#332c55]">Pick the job functions which best describe the roles you work within.</p>

      <div className="flex mt-4">
        {/* Left Column */}
        <div className="w-1/2 pr-4">
          <div className="flex flex-col space-y-2 mt-5">
            <h2 className="text-xl font-bold text-[#332c55]">A</h2>
          
           <div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Agile Coach</span>
</div>
<div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Application Manager</span>
</div>

          </div>
          <div className="flex flex-col space-y-2 mt-5">
            <h2 className="text-xl font-bold text-[#332c55]">A</h2>
            <div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Agile Coach</span>
</div>
<div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Application Manager</span>
</div>

          </div>
          <div className="flex flex-col space-y-2 mt-5">
            <h2 className="text-xl font-bold text-[#332c55]">A</h2>
            <div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Agile Coach</span>
</div>
<div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Application Manager</span>
</div>

          </div>
          <div className="flex flex-col space-y-2 mt-5">
            <h2 className="text-xl font-bold text-[#332c55]">A</h2>
            <div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Agile Coach</span>
</div>
<div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Application Manager</span>
</div>

          </div>
          <div className="flex flex-col space-y-2 mt-5">
            <h2 className="text-xl font-bold text-[#332c55]">A</h2>
            <div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Agile Coach</span>
</div>
<div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Application Manager</span>
</div>

          </div>
          <div className="flex flex-col space-y-2 mt-5">
            <h2 className="text-xl font-bold text-[#332c55]">A</h2>
            <div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Agile Coach</span>
</div>
<div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Application Manager</span>
</div>

          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/2 pl-4">
          <div className="flex flex-col space-y-2 mt-5">
            <h2 className="text-xl font-bold text-[#332c55]">B</h2>
            <div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Agile Coach</span>
</div>
<div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Application Manager</span>
</div>

          </div>
          <div className="flex flex-col space-y-2 mt-5">
            <h2 className="text-xl font-bold text-[#332c55]">B</h2>
            <div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Agile Coach</span>
</div>
<div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Application Manager</span>
</div>

          </div>
          <div className="flex flex-col space-y-2 mt-5">
            <h2 className="text-xl font-bold text-[#332c55]">B</h2>
            <div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Agile Coach</span>
</div>
<div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Application Manager</span>
</div>

          </div>
          <div className="flex flex-col space-y-2 mt-5">
            <h2 className="text-xl font-bold text-[#332c55]">B</h2>
            <div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Agile Coach</span>
</div>
<div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Application Manager</span>
</div>

          </div>
          <div className="flex flex-col space-y-2 mt-5">
            <h2 className="text-xl font-bold text-[#332c55]">B</h2>
            <div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Agile Coach</span>
</div>
<div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Application Manager</span>
</div>

          </div>
          <div className="flex flex-col space-y-2 mt-5">
            <h2 className="text-xl font-bold text-[#332c55]">B</h2>
            <div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Agile Coach</span>
</div>
<div className="flex items-center">
  <input type="checkbox"className="hidden"id="custom-checkbox"/>
  <label
    htmlFor="custom-checkbox"className="flex mr-3  mt-1 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer">

    <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
  </label>
  <span className="text-[#332c55]">Application Manager</span>
</div>

          </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default WorkrolesWizard;
