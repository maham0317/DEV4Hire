import React, { useState } from 'react';
import * as Yup from 'yup';

interface EditTitleFormProps {
  onSave: (newTitle: string) => void;
  onCancel: () => void;
}

const EditTitleForm: React.FC<EditTitleFormProps> = ({ onSave, onCancel }) => {
  const [newTitle, setNewTitle] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const schema = Yup.object().shape({
        newTitle: Yup.string().required('Title is required'),
      });

      await schema.validate({ newTitle });

      onSave(newTitle);
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
      <h2 className="text-2xl font-bold ml-3 mb-2">Edit CV Title</h2>
      <form className="ml-3" onSubmit={handleSubmit}>
        <label className="tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="new-title">
          CV Title
        </label>
        <input
          className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white mt-1"
          type="text"
          id="new-title"
          value={newTitle}
          onChange={handleTitleChange}
          placeholder="e.g. Resume for 7N"
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        <div className="mt-5">
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5"
          >
            Save changes
          </button>
          <a
            href="#"
            onClick={onCancel}
            className="text-blue-700 hover:text-blue-500 font-semibold py-2 px-4 rounded"
          >
            Discard Changes
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditTitleForm;
