import { FC, JSX } from "react";
import { useTranslation } from "react-i18next";
import { Button, Label, TextInput, Select, Modal } from "flowbite-react";
import { useAddOrEditSkillModal } from "./hooks";
import { IAddOrEditSkillTypeModalProp } from "@/interfaces/skill-listing";
import { hasHtmlTags } from "@/utils";

const AddOrEditLanaguageModal: FC<IAddOrEditSkillTypeModalProp> = (
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
  } = useAddOrEditSkillModal(props);

  return (
    <Modal show={isOpen} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header className="pt-3 pb-2 px-6">
        <span className="font-semibold text-custom-gray">{t(`SkillListing.Modal.${isEdit ? "Edit" : "Add"}.Title`)}</span>
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-flow-row justify-stretch space-y-4">
            <div className="flex gap-x-2">
              <Label
                className="w-36 text-custom-gray text-lg font-semibold"
                htmlFor="Skill"
                value={t("SkillListing.Input.SkillName.Label")}
              />
              <div className="flex-1">
                <TextInput
                  sizing="lg"
                  id="Name"
                  type="text"
                  {...register("SkillName", {
                    required: t("SkillListing.Input.Error.Required"),
                    validate:hasHtmlTags,
                    maxLength: {
                      value: 25,
                      message: t("SkillListing.Input.Error.MaxLength", {
                        MaxLength: 25,
                      }),
                    },
                  })}
                  shadow
                  color={errors.SkillName && "failure"}
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.SkillName?.message}
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
            {t(`SkillListing.Button.${isEdit ? "Update" : "Save"}`)}
          </Button>
          <Button size="md" color="gray" onClick={handleClose}>
            {t("SkillListing.Button.Cancel")}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AddOrEditLanaguageModal;
