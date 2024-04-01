import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

interface IndustryInfoAddProps {
  onClose: () => void;
}

const IndustryInfoAdd: React.FC<IndustryInfoAddProps> = ({ onClose }) => {

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
      <h2 className="text-2xl font-bold">Industry Knowledge</h2>
      <p className="mt-3 text-[#332c55]">
        By picking industry sectors you give us an overview regarding your experience. It helps us in matching your business focus with job opportunities.
      </p>
      <div className="title">
        <div className="flex items-center select-none">
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Application Manager"
          />
        </div>
        <div className="flex items-center select-none">
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Education"
          />
        </div>
        <div className="flex items-center select-none">
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Accounting"
          />
        </div>
        <div className="flex items-center select-none">
          <FormControlLabel
            control={
              <Checkbox checked={glad} onChange={handleChange} name="glad" />
            }
            label="Aerospace"
          />
        </div>
        <div className="flex items-center select-none">
          <FormControlLabel
            control={
              <Checkbox checked={antine} onChange={handleChange} name="antine" />
            }
            label="Application Manager"
          />
        </div>
        <div className="flex items-center select-none">
          <FormControlLabel
            control={
              <Checkbox checked={json} onChange={handleChange} name="json" />
            }
            label="Application Manager"
          />
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <button
          type="submit"
          className="save-button"
          onClick={onClose}
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
    </div>
  );
};

export default IndustryInfoAdd;