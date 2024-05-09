import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

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
    <div className="bg-white p-10 mt-5 rounded shadow">
      <h2 className="text-2xl font-bold">Main competence areas</h2>
      <p className="mt-3 text-[#332c55]">
        Main competence areas give us an overview regarding your experience and
        help in match your needs with job opportunities.
      </p>
      <div className="title">
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
      <div className="title">
        <h2 className="text-xl font-bold">B</h2>
        <div className="flex items-center">
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name="antoine"
              />
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
      </div>
      <div className="title">
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
              <Checkbox
                checked={antine}
                onChange={handleChange}
                name="antine"
              />
            }
            label="Application Manager"
          />
        </div>
      </div>
      <hr className="hr-tag" />
      <div className="flex justify-end mt-3">
        <button className="save-button" onClick={onClose}>
          Save changes
        </button>
        <a href="#" onClick={onClose} className="discard-button">
          Discard changes
        </a>
      </div>
    </div>
  );
};

export default CompetenceAreasAdd;
