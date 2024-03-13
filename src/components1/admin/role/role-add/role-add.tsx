import React, { useState } from "react";
import { createWorkrole } from "../../../../store1/roles/roles";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/appDispatch";
interface RoleAddProps {
  onCancel: () => void;
  onAddRole: (role: any) => void;
}

const RoleAdd: React.FC<RoleAddProps> = ({ onCancel, onAddRole }) => {
  const [addRole, setAddRole] = useState({
    WorkRoleName: "",
    WorkRoleDesc: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setAddRole({ ...addRole, [name]: value });
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAddRole = async () => {
    try {
      const payload = {
        WorkRoleName: addRole.WorkRoleName,
        WorkRoleDesc: addRole.WorkRoleDesc,
      };
      console.log("add roles", payload);

      dispatch(createWorkrole(payload));
      onAddRole(addRole);
      setAddRole({
        WorkRoleName: "",
        WorkRoleDesc: "",
      });
      // navigate("/role-list");
    } catch (error) {
      console.log("Error Add Role.", error);
    }
  };

  return (
    <form className="max-w-lg mx-auto bg-white shadow-lg rounded px-8 mt-5 pt-8 pb-8">
      <h1 className="text-2xl font-bold mb-4">Role Add</h1>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="role"
        >
          Role Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          name="WorkRoleName"
          value={addRole.WorkRoleName}
          onChange={handleInputChange}
          placeholder="Name"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="role"
        >
          Role Description
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          name="WorkRoleDesc"
          value={addRole.WorkRoleDesc}
          onChange={handleInputChange}
          placeholder="Descc"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-[#1d1d1eab] hover:bg-gray-500 text-white text-sm py-1 px-4 rounded mr-4 mt-4 mb-4"
          onClick={handleAddRole}
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
