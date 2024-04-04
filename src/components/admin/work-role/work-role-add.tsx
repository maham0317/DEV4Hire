import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { useCreateWorkRoleMutation } from "@/services/work-roles";
import WorkRoleModel from "@/interfaces/work-role/work-role.model";

const WorkRoleAdd = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [createWorkrole, { isLoading, isSuccess, error, isError }] =
    useCreateWorkRoleMutation();

  useEffect(() => {
    if (isError) {
      console.log("error", error);
      toast.error("Ther is some error");
    }
  }, [error, isError]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Work Role created successfully.");
      setIsOpen(false);
      reset();
    }
  }, [isSuccess]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  // Form Validtion

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WorkRoleModel>();

  const onSubmit = async (data: WorkRoleModel) => {
    try {
      await createWorkrole(data).unwrap();
    } catch (e: any) {}
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex justify-center items-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative bg-white  shadow-lg">
            <div className="p-2 border-b">
              <h1 className="text-xl text-gray-500 font-montserrat font-semibold ">
                Work Roles
              </h1>
              <button
                onClick={handleCloseModal}
                className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <RxCross2 className="h-6 w-6" />
              </button>
            </div>
            <div className="px-5 md:p-5 space-y-4">
              <div className="flex justify-between gap-5">
                <label className="text-xl text-gray-500 font-montserrat font-semibold">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`border font-montserrat font-light text-base text-indigo-900 rounded-md p-2 w-96 h-8 border-1 border-gray-300 ${
                      errors.WorkRoleName ? "invalid" : ""
                    }`}
                    {...register("WorkRoleName", {
                      required: "Name is required field.",
                      maxLength: {
                        value: 25,
                        message: "Name must be less than 25 characters",
                      },
                    })}
                    placeholder="Name"
                  />
                  {errors.WorkRoleName && (
                    <div className=" text-red-500 ">
                      {errors.WorkRoleName?.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="px-5 md:p-5 space-y-4">
              <div className="flex justify-between gap-5">
                <label className="text-xl text-gray-500 font-montserrat font-semibold">
                  Description
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`border font-montserrat font-light text-base text-indigo-900 rounded-md p-2 w-96 h-8 border-1 border-gray-300 ${
                      errors.WorkRoleDesc ? "invalid" : ""
                    }`}
                    {...register("WorkRoleDesc", {
                      required: "Description is required field.",
                      maxLength: {
                        value: 25,
                        message: "Description must be 50 characters",
                      },
                    })}
                    placeholder="Description"
                  />
                  {errors.WorkRoleDesc && (
                    <div className=" text-red-500 ">
                      {errors.WorkRoleDesc?.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="flex justify-end  p-3 md:p-5 border-t font-montserrat font-semibol rounded-b dark:border-gray-600">
              <button
                data-modal-hide="static-modal"
                type="button"
                onClick={handleSubmit(onSubmit)}
                className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
              <button
                data-modal-hide="static-modal"
                onClick={handleCloseModal}
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-blue-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkRoleAdd;
