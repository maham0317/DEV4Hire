import React from "react";
import { useForm } from "react-hook-form";

interface EducationEditProps {
  onClose: () => void;
}

const EducationEdit: React.FC<EducationEditProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    onClose();
  };

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Edit education entry</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-400">
            School
          </label>
          <input
            type="text"
            className="border rounded-md p-2"
            placeholder="e.g. Harvard University"
            {...register("courseName", { required: "School is required" })}
          />
          {/* {errors.courseName && (
           <div className="text-red-500">{errors.courseName?.message}</div>
          )} */}
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-400">
            Degree (optional)
          </label>
          <input
            type="text"
            className="border rounded-md p-2"
            placeholder="e.g. B.S.c"
            {...register("field1")}
          />
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-400">
            Field of study
          </label>
          <input
            type="text"
            className="border rounded-md p-2"
            placeholder="e.g. Information technology"
            {...register("field2", { required: "Field of study is required" })}
          />
          {/* {errors.field2 && (
          <div className="text-red-500">{errors.field2?.message}</div>
          )} */}
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-400">
            Grade (optional)
          </label>
          <input
            type="text"
            className="border rounded-md p-2"
            {...register("field3")}
          />
        </div>

        <div className="flex flex-col space-y-2 mt-4 w-1/4">
          <label className="block text-sm font-medium text-gray-400">
            Year of graduation/completion
          </label>
          <div className="flex items-center">
            <span className="text-sm mt-1 mr-2">
              <i className="far fa-calendar"></i>
            </span>
            <input
              type="text"
              className="border rounded-md p-2"
              placeholder="MM/YYYY"
              {...register("date", {
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/(20)\d{2}$/,
                  message: "Invalid MM/YYYY format",
                },
              })}
            />
            {/* {errors.date && (
              <div className="text-red-500">{errors.date.message}</div>
            )} */}
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Save changes
          </button>
          <a
            href="#"
            onClick={onClose}
            className="text-blue-700 hover:text-blue-500 font-semibold py-1 px-4 rounded ml-2"
          >
            Discard changes
          </a>
        </div>
      </form>
    </div>
  );
};

export default EducationEdit;
