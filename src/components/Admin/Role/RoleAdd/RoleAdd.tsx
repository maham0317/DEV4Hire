
import React, { useState } from 'react';
interface RoleAddProps {
    onCancel: () => void; 
  }
  
  const RoleAdd: React.FC<RoleAddProps> = ({ onCancel }) => {

   

  return (
    <form

      className="max-w-lg mx-auto bg-white shadow-lg rounded px-8 mt-5 pt-8 pb-8"
    >
      <h1 className="text-2xl font-bold mb-4">Role Add</h1>
      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
Role
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Role"/>
    </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-[#1d1d1eab] hover:bg-gray-500 text-white text-sm py-1 px-4 rounded mr-4 mt-4 mb-4"
        >
          Save
        </button>
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm py-1 px-4 rounded mr-4 mt-4 mb-4"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default RoleAdd;