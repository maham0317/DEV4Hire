import { FC, JSX } from "react";
import { useTranslation } from "react-i18next";
import { Button, Label, TextInput,Modal, Textarea } from "flowbite-react";
import { IAddOrEditLanguageModalProp } from "@/interfaces/language-listing";
import { useAddOrEditLanguageModal } from "./hooks";
import { hasHtmlTags } from "@/utils";

const AddOrEditLanaguageModal: FC<IAddOrEditLanguageModalProp> = (
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
  } = useAddOrEditLanguageModal(props);

  return (
    <Modal show={isOpen} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header className="pt-3 pb-2 px-6">
       <span className="font-semibold text-custom-gray ">{t(`LanguageListing.Modal.${isEdit ? "Edit" : "Add"}.Title`)}</span>
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-flow-row justify-stretch space-y-4">
            <div className="flex gap-x-2">
              <Label
                className="w-36 text-custom-gray text-lg font-semibold"
                htmlFor="Language"
                value={t("LanguageListing.Input.LanguageName.Label")}
              />
              <div className="flex-1">
              <TextInput
                sizing="lg"
                id="LanguageName"
                type="text"
                {...register("LanguageName", {
                  required: t("LanguageListing.Input.Error.Required"),
                  validate:hasHtmlTags,
                  maxLength: {
                    value: 25,
                    message: t("LanguageListing.Input.Error.MaxLength", {
                      MaxLength: 25,
                    }),
                  },
                })}
                shadow
                color={errors.LanguageName ? "failure" : undefined}
              />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.LanguageName?.message}
                </p>
              </div>
            </div>
            <div className="flex gap-x-2">
              <Label
                className="w-36 text-lg text-custom-gray  font-semibold"
                htmlFor="Description"
                value={t("LanguageListing.Input.Description.Label")}
              />
              <div className="flex-1">
                <Textarea
                  rows={4}
                  className="p-1 text-lg font-medium resize-none"
                  id="Description"
                 {...register("Description", {
                  validate:hasHtmlTags,
                    maxLength: {
                      value: 500,
                      message: t("LanguageListing.Input.Error.MaxLength", {
                        MaxLength: 500,
                      }),
                    },
                  })}
                  shadow
                  color={errors.Description && "failure"}
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.Description?.message}
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
            {t(`LanguageListing.Button.${isEdit ? "Update" : "Save"}`)}
          </Button>
          <Button size="md" color="gray" onClick={handleClose}>
            {t("LanguageListing.Button.Cancel")}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AddOrEditLanaguageModal;
