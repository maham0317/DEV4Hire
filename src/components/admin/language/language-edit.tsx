import { IEditLanguageProp } from "@/interfaces/language/language.model";
import { useLanguageEdit } from "./language-edit-hook";
import { Button, Modal, Label, TextInput } from "flowbite-react";

const LanguageEdit = (props: IEditLanguageProp) => {
  const {
    onSubmit,
    isLoading,
    isOpen,
    register,
    errors,
    handleSubmit,
    t,
    MaxLength,
    handleCloseModal,
  } = useLanguageEdit(props);

  return (
    <>
      <Modal show={isOpen} onClose={handleCloseModal}>
        <Modal.Header>{t("Language.AddOrEdit.Title")}</Modal.Header>
        <Modal.Body>
          <div className="grid grid-flow-row justify-stretch space-y-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="Language"
                  value={t("Language.AddOrEdit.Input.Placeholder.Name")}
                />
              </div>
              <TextInput
                id="Language"
                type="text"
                helperText={errors.LanguageName?.message}
                {...register("LanguageName", {
                  required: t(
                    "Language.AddOrEdit.Input.ValidationError.Required"
                  ),
                  maxLength: {
                    value: 25,
                    message: t(
                      "Language.AddOrEdit.Input.ValidationError.NameMaxLength",
                      { MaxLength: MaxLength.Name }
                    ),
                  },
                })}
                shadow
                color={errors.LanguageName && "failure"}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="Description"
                  value={t("Language.AddOrEdit.Input.Placeholder.Description")}
                />
              </div>
              <TextInput
                id="Description"
                type="text"
                helperText={errors.Description?.message}
                {...register("Description", {
                  required: t(
                    "Language.AddOrEdit.Input.ValidationError.Required"
                  ),
                  maxLength: {
                    value: 25,
                    message: t(
                      "Language.AddOrEdit.Input.ValidationError.NameMaxLength",
                      { MaxLength: MaxLength.Name }
                    ),
                  },
                })}
                shadow
                color={errors.Description && "failure"}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={isLoading} onClick={handleSubmit(onSubmit)}>
            {isLoading
              ? t("Language.AddOrEdit.Input.Button.saving")
              : t("Language.AddOrEdit.Input.Button.save")}
          </Button>
          <Button color="gray" onClick={handleCloseModal}>
            {t("Language.AddOrEdit.Input.Button.cancel")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LanguageEdit;
