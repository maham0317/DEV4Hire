import { useIndustryTypeEdit } from "./industry-type-edit-hook";
import { Button, Modal, Label, TextInput } from "flowbite-react";

const IndustryTypeEdit = (props: any) => {
  const { onSubmit, isLoading, isOpen, handleCloseModal, register, handleSubmit, t, errors, MaxLength } = useIndustryTypeEdit(props);

  return (
    <Modal show={isOpen} onClose={handleCloseModal}>
      <Modal.Header>{t("IndustryType.AddOrEdit.Title")}</Modal.Header>
      <Modal.Body>
        <div className="grid grid-flow-row justify-stretch space-y-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="IndustryType" value={t("IndustryType.AddOrEdit.Input.Placeholder.Name")} />
            </div>
            <TextInput id="IndustryType" type="text" helperText={errors.IndustryName?.message} {...register("IndustryName", {
              required: t("IndustryType.AddOrEdit.Input.ValidationError.Required"),
              maxLength: {
                value: 25,
                message: t("IndustryType.AddOrEdit.Input.ValidationError.NameMaxLength", { MaxLength: MaxLength.Name }),
              }
            })}
            shadow color={errors.IndustryName && "failure"}  />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Description" value={t("IndustryType.AddOrEdit.Input.Placeholder.Description")} />
            </div>
            <TextInput id="Description" type="text" helperText={errors.Description?.message} {...register("Description", {
              required: t("IndustryType.AddOrEdit.Input.ValidationError.Required"),
              maxLength: {
                value: 25,
                message: t("IndustryType.AddOrEdit.Input.ValidationError.NameMaxLength", { MaxLength: MaxLength.Name }),
              }
            })}
            shadow color={errors.Description && "failure"}  />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button disabled={isLoading} onClick={handleSubmit(onSubmit)}>{isLoading? t("IndustryType.AddOrEdit.Input.Button.saving"): t("IndustryType.AddOrEdit.Input.Button.save")}</Button>
        <Button color="gray" onClick={handleCloseModal}>{t("IndustryType.AddOrEdit.Input.Button.cancel")}</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IndustryTypeEdit;
