import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { Button, Modal } from "flowbite-react";
import { IndustryTypeModel } from "../../../interfaces/industry/industry.model";

const EducationTypeAdd = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // Form Validtion
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IndustryTypeModel>();

  const onSubmit = (data: any) => {
    console.log("form value", data);
  };
  //   const onSubmit = (data: any) => {
  //     console.log("Form values:", data);
  //     onClose();
  //   };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex justify-center items-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative bg-white shadow-lg">
            <div className="p-2 border-b">
              <h1 className="title">
                Industry Type
              </h1>
              <button
                onClick={handleCloseModal}
                className="corss-button"
              >
                <RxCross2 className="h-6 w-6 mt-3 mr-3" />
              </button>
            </div>
            <div className="px-5 md:p-5 space-y-4">
              <div className="flex justify-between gap-5">
                <label className="Label-text">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="Input-text"
                    {...register("IndustryName", {
                      required: "Name is required field.",
                      maxLength: {
                        value: 25,
                        message: "Name must be less than",
                      },
                    })}
                    placeholder="Name"
                  />
                  {errors.IndustryName && (
                    <div className=" text-red-500 ">
                      {errors.IndustryName?.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <label className="Label-text">
                  Description
                </label>
                <div>
                  <input
                    type="text"
                    className="Input-text"
                    {...register("Description", {
                      required: "Fill this field",
                    })}
                    placeholder="Description"
                  />
                  {errors.Description && (
                    <div className=" text-red-500 ">
                      {errors.Description?.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="create-page-buttons">
              <button
                data-modal-hide="static-modal"
                type="button"
                onClick={handleSubmit(onSubmit)}
                className="Save-button "
              >
                Save
              </button>
              <button
                data-modal-hide="static-modal"
                onClick={handleCloseModal}
                type="button"
                className="cancel-button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        // <Modal show={isOpen} onClose={() => setIsOpen(false)}>
        //   <Modal.Header> Industry Type</Modal.Header>
        //   <Modal.Body>
        //     <div className="space-y-6">
        //       <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        //         With less than a month to go before the European Union enacts
        //         new consumer privacy laws for its citizens, companies around the
        //         world are updating their terms of service agreements to comply.
        //       </p>
        //       <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        //         The European Union’s General Data Protection Regulation
        //         (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
        //         common set of data rights in the European Union. It requires
        //         organizations to notify users as soon as possible of high-risk
        //         data breaches that could personally affect them.
        //       </p>
        //     </div>
        //   </Modal.Body>
        //   <Modal.Footer>
        //     <Button onClick={() => setIsOpen(false)}>I accept</Button>
        //     <Button color="gray" onClick={() => setIsOpen(false)}>
        //       Decline
        //     </Button>
        //   </Modal.Footer>
        // </Modal>
      )}
    </>
  );
};

export default EducationTypeAdd;
