import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const CompetenceAreasAdd: React.FC<{ onClose: () => void }> = ({ onClose }) => {

  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
    glad: false,
    json: false,
    antine: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine, glad, json, antine } = state;


  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Main competence areas</h2>
      <p className="mt-3 text-[#332c55]">
        Main competence areas give us an overview regarding your experience and help in match your needs with job opportunities.
      </p>
      <div className="flex flex-col space-y-2 mt-4">
        <h2 className="text-xl font-bold">A</h2>
        <div className="flex items-center">
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Application Manager"
          />
        </div>
        <div className="flex items-center">
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Application Manager"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        <h2 className="text-xl font-bold">B</h2>
        <div className="flex items-center">
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Application Manager"
          />
        </div>
        <div className="flex items-center">
          <FormControlLabel
            control={
              <Checkbox checked={glad} onChange={handleChange} name="glad" />
            }
            label="Application Manager"
          />
        </div>
      </div>s
      <div className="flex flex-col space-y-2 mt-4">
        <h2 className="text-xl font-bold">C</h2>
        <div className="flex items-center">
          <FormControlLabel
            control={
              <Checkbox checked={json} onChange={handleChange} name="json" />
            }
            label="Application Manager"
          />
        </div>
        <div className="flex items-center">
          <FormControlLabel
            control={
              <Checkbox checked={antine} onChange={handleChange} name="antine" />
            }
            label="Application Manager"
          />
        </div>
      </div>
      <hr className="mt-5 w-full border-t border-gray-200" />
      <div className="flex justify-end mt-3">
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

export default CompetenceAreasAdd;
