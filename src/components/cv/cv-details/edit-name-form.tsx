import React, { useState } from 'react';
import * as Yup from 'yup';

interface EditNameFormProps {
  onSave: (fullName: string) => void;
  onCancel: () => void;
}

const EditNameForm: React.FC<EditNameFormProps> = ({ onSave, onCancel }) => {
  const [newFirstName, setNewFirstName] = useState('');
  const [newMiddleName, setNewMiddleName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFirstName(e.target.value);
    setError(null);
  };

  const handleMiddleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMiddleName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewLastName(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const schema = Yup.object().shape({
        newFirstName: Yup.string().required('First name is required'),
        newLastName: Yup.string().required('Last name is required'),
      });

      await schema.validate({ newFirstName, newLastName });

      const fullName = `${newFirstName} ${newMiddleName} ${newLastName}`;
      onSave(fullName);
    } catch (validationError: any) {
      if (validationError.errors && validationError.errors.length > 0) {
        setError(validationError.errors[0]);
      } else {
        setError('An error occurred during validation.');
      }
    }
  };

  return (
    <div className="mt-5 bg-white p-4 text-base">
      <h2 className="text-2xl font-bold ml-3 mb-2">Edit Name</h2>
      <form className="ml-3" onSubmit={handleSubmit}>
        <label className="edit-label-text" htmlFor="new-first-name">
          First Name
        </label>
        <input
          className="edit-input-text mt-1"
          type="text"
          id="new-first-name"
          value={newFirstName}
          onChange={handleFirstNameChange}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

        <label className="edit-label-text" htmlFor="new-middle-name">
          Middle Name
        </label>
        <input
          className="edit-input-text mt-5"
          type="text"
          id="new-middle-name"
          value={newMiddleName}
          onChange={handleMiddleNameChange}
        />

        <label className="edit-label-text" htmlFor="new-last-name">
          Last Name
        </label>
        <input
          className="edit-input-text mt-5"
          type="text"
          id="new-last-name"
          value={newLastName}
          onChange={handleLastNameChange}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

        <div className="flex justify-between mt-3">
          <button
            type="submit"
            className="save-button"
          >
            Save changes
          </button>
          <a
            href="#"
            onClick={onCancel}
            className="discard-button"
          >
            Discard Changes
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditNameForm;
