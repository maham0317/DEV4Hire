import { IAddLanguageProp } from "@/interfaces/language/language.model";
import { useLanguageAdd } from "./language-add-hook";
import { Button, Modal, Label, TextInput, Select } from "flowbite-react";

const LanguageAdd = (props: IAddLanguageProp) => {
  const {
    onSubmit,
    handleCloseModal,
    isLoading,
    isOpen,
    register,
    handleSubmit,
    errors,
    t,
    MaxLength,
  } = useLanguageAdd(props);

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
                  value={t("Language.AddOrEdit.Input.Label.Name")}
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
                      { MaxLength: 25 }
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
                  value={t("Language.AddOrEdit.Input.Label.Description")}
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
                      { MaxLength: 25 }
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
          <Button onClick={handleSubmit(onSubmit)}>{t("Save")}</Button>
          <Button color="gray" onClick={handleCloseModal}>
            {t("Cancel")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LanguageAdd;
