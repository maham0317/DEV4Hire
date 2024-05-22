import { RxCross2 } from "react-icons/rx";
import { useProficiencyEdit } from "./proiciency-edit-hook";

const ProficiencyEdit = (props: any) => {
  const {
    onSubmit,
    handleSubmit,
    isOpen,
    isLoading,
    errors,
    register,
    handleCloseModal,
    MaxLength,
    t,
  } = useProficiencyEdit(props);
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex justify-center items-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative bg-white  shadow-lg">
            <div className="p-2 border-b">
              <h1 className="modal-title ">
                {t("Proficiency.AddOrEdit.Title")}
              </h1>
              <button onClick={handleCloseModal} className="corss-button">
                <RxCross2 className="h-6 w-6" />
              </button>
            </div>
            <div className="px-5 md:p-5 space-y-4">
              <div className="flex justify-between gap-5">
                <label className="modal-title">
                  {t("Proficiency.AddOrEdit.Input.Label.Name")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`input-field ${errors.Name ? "invalid" : ""}`}
                    {...register("Name", {
                      required: t(
                        "Proficiency.AddOrEdit.Input.ValidationError.Required"
                      ),
                      maxLength: {
                        value: 25,
                        message: t(
                          "Proficiency.AddOrEdit.Input.ValidationError.NameMaxLength",
                          { MaxLength: MaxLength.Name }
                        ),
                      },
                    })}
                    placeholder={t(
                      "Proficiency.AddOrEdit.Input.Placeholder.Name"
                    )}
                  />
                  {errors.Name && (
                    <div className=" text-red-500 ">{errors.Name?.message}</div>
                  )}
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button
                data-modal-hide="static-modal"
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={isLoading}
                className="Save-button"
              >
                {isLoading
                  ? t("Proficiency.AddOrEdit.Input.Button.saving")
                  : t("Proficiency.AddOrEdit.Input.Button.save")}
              </button>
              <button
                data-modal-hide="static-modal"
                onClick={handleCloseModal}
                type="button"
                className="cancel-button"
              >
                {t("Proficiency.AddOrEdit.Input.Button.cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProficiencyEdit;
