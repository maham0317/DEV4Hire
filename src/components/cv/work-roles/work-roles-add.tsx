import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store'

interface WorkRolesAddProps {
  onClose: () => void;
}

const WorkRolesAdd: React.FC<WorkRolesAddProps> = ({ onClose }) => {
  
  const workRoles = useSelector((state: RootState) => state.workRole.data);


  const [state, setState] = React.useState<{ [key: string]: boolean }>({});


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Work roles</h2>
      <p className="mt-3 text-[#332c55]">
        Pick the job functions which best describe the roles you work within.
      </p>
      <div className="flex flex-col space-y-2 mt-4">
        <h2 className="text-xl font-bold">A</h2>
        {Array.isArray(workRoles) && workRoles.map((role, index) => (
          <div key={index} className="flex items-center select-none">
            <FormControlLabel
              control={
                <Checkbox
                  checked={role.WorkRoleId}
                  onChange={handleChange}
                  name={role.WorkRoleId}
                />
              }
              label={role.WorkRoleName}
            />
          </div>
        ))}
      </div>
      <hr className="mt-5 w-full border-t border-gray-200" />
      <div className="flex justify-between mt-3">
        <button
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

export default WorkRolesAdd;
