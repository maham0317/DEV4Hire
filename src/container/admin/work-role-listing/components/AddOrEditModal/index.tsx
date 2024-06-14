import { FC, JSX } from "react";
import { useTranslation } from "react-i18next";
import { Button, Label, TextInput, Select, Modal, Textarea } from "flowbite-react";
import { useAddOrEditWorkRoleModal } from "./hooks";
import { IAddOrEditWorkRoleModalProp } from "@/interfaces/work-role-listing";

const AddOrEditWorkRoleModal: FC<IAddOrEditWorkRoleModalProp> = (
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
  } = useAddOrEditWorkRoleModal(props);

  return (
    <Modal show={isOpen} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header className="pt-3 pb-2 px-6">
        <span className="font-semibold text-custom-gray">{t(`WorkRoleListing.Modal.${isEdit ? "Edit" : "Add"}.Title`)}</span>
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-flow-row justify-stretch space-y-4">
            <div className="flex gap-x-2">
              <Label
                className="w-36 text-custom-gray text-lg font-semibold"
                htmlFor="WorkRole"
                value={t("WorkRoleListing.Input.WorkRole.Label")}
              />
              <div className="flex-1">
                <TextInput
                  sizing="lg"
                  id="Name"
                  type="text"
                  {...register("WorkRoleName", {
                    required: t("WorkRoleListing.Input.Error.Required"),
                    maxLength: {
                      value: 25,
                      message: t("WorkRoleListing.Input.Error.MaxLength", {
                        MaxLength: 25,
                      }),
                    },
                  })}
                  shadow
                  color={errors.WorkRoleName && "failure"}
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.WorkRoleName?.message}
                </p>
              </div>
            </div>
            <div className="flex gap-x-2">
              <Label
                className="w-36 text-custom-gray text-lg font-semibold"
                htmlFor="WorkRoleDesc"
                value={t("WorkRoleListing.Input.Description.Label")}
              />
              <div className="flex-1">
                <Textarea
                rows={4}
                  className="p-1 text-lg font-medium resize-none"
                  id="Description"
                  {...register("WorkRoleDesc", {
                    maxLength: {
                      value: 500,
                      message: t("WorkRoleListing.Input.Error.MaxLength", {
                        MaxLength: 500,
                      }),
                    },
                  })}
                  shadow
                  color={errors.WorkRoleDesc && "failure"}
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.WorkRoleDesc?.message}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="pt-3 pb-3 px-6 justify-end">
          <Button
            size="md"
            color="primary"
            type="submit"
            isProcessing={isSubmiting || isUpdating}
          >
            {t(`WorkRoleListing.Button.${isEdit ? "Update" : "Save"}`)}
          </Button>
          <Button size="md" color="gray" onClick={handleClose}>
            {t("WorkRoleListing.Button.Cancel")}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AddOrEditWorkRoleModal;
