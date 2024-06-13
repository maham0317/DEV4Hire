import { FC, JSX } from "react";
import { useTranslation } from "react-i18next";
import { Button, Label, TextInput, Select, Modal } from "flowbite-react";
import { IAddOrEditEducationTypeModalProp } from "@/interfaces/education-type-listing";
import { useAddOrEditEducationTypeModal } from "./hooks";

const AddOrEditEducationTypeModal: FC<IAddOrEditEducationTypeModalProp> = (
  props
): JSX.Element => {
  const { t } = useTranslation();
  const { isOpen, isEdit } = props;
  const {
    register,
    handleSubmit,
    handleClose,
    onSubmit,
    isSubmiting,
    isUpdating,
    errors,
  } = useAddOrEditEducationTypeModal(props);

  return (
    <Modal show={isOpen} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header className="pt-3 font-semibold pb-2 px-6">
        <span className="font-semibold text-custom-gray ">{t(`EducationTypeListing.Modal.${isEdit ? "Edit" : "Add"}.Title`)}</span>
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-flow-row justify-stretch space-y-4">
            <div className="flex gap-x-2">
              <Label
                className="w-36 text-lg text-custom-gray font-semibold"
                htmlFor="EducationType"
                value={t("EducationTypeListing.Input.EducationName.Label")}
              />
              <div className="flex-1">
                <TextInput
                  sizing="lg"
                  id="Name"
                  type="text"
                  {...register("Name", {
                    required: t("EducationTypeListing.Input.Error.Required"),
                    maxLength: {
                      value: 25,
                      message: t("EducationTypeListing.Input.Error.MaxLength", {
                        MaxLength: 25,
                      }),
                    },
                  })}
                  shadow
                  color={errors.Name && "failure"}
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.Name?.message}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="pt-3 pb-3 px-6 justify-end">
          <Button
            size="sm"
            color="primary"
            type="submit"
            isProcessing={isSubmiting || isUpdating}
          >
            {t(`EducationTypeListing.Button.${isEdit ? "Update" : "Save"}`)}
          </Button>
          <Button size="sm" color="gray" onClick={handleClose}>
            {t("EducationTypeListing.Button.Cancel")}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AddOrEditEducationTypeModal;
