import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { getAllWorkRole } from '../../../store/roles/roles'; // Assuming this is the correct path to your action creator

interface WorkRolesAddProps {
  onClose: () => void;
}

const WorkRolesAdd: React.FC<WorkRolesAddProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const workRoles = useSelector((state: RootState) => state.workRole.data);
  const isLoading = useSelector((state: RootState) => state.workRole.isLoading);
  const status = useSelector((state: RootState) => state.workRole.status);

  useEffect(() => {
    dispatch(getAllWorkRole());
  }, []);

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Work roles</h2>
      <p className='mt-3 text-[#332c55]'>Pick the job functions which best describe the roles you work within.</p>
      <div className="flex flex-col space-y-2 mt-4">
        <h2 className="text-xl font-bold">A</h2>
        {isLoading && <p>Loading...</p>}
        {status == 'failed' && <p>Error occurred while fetching work roles.</p>}
        {Array.isArray(workRoles) && workRoles.map((role, index) => (
          <div key={index} className="flex items-center">
            <input type="checkbox" className="hidden" id={`custom-checkbox-${index}`} />
            <label
              htmlFor={`custom-checkbox-${index}`}
              className="flex mr-3 items-center justify-center w-6 h-6 border border-gray-300 rounded cursor-pointer"
            >
              <span className="block w-4 h-4 bg-indigo-500 rounded transform scale-0 translate-x-1 translate-y-1 transition-transform"></span>
            </label>
            <span>{role.WorkRoleName}</span>
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
