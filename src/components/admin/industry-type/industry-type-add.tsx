import "react-toastify/dist/ReactToastify.css";
import { useIndustryTypeAdd } from "./industry-type-add-hook";
import { Button, Modal, Label, TextInput, Select } from "flowbite-react";

const IndustryTypeAdd = (props: any) => {
  const { onSubmit, isLoading, handleCloseModal, isOpen, register, handleSubmit, errors, t } = useIndustryTypeAdd(props);

  return (
    <>
    <Modal show={isOpen} onClose={handleCloseModal}>
      <Modal.Header>{t("IndustryType.AddOrEdit.Title")}</Modal.Header>
      <Modal.Body>
        <div className="grid grid-flow-row justify-stretch space-y-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="IndustryType" value={t("IndustryType.AddOrEdit.Input.Label.Name")} />
            </div>
            <TextInput id="IndustryType" type="text" helperText={errors.IndustryName?.message} {...register("IndustryName", {
              required: t("IndustryType.AddOrEdit.Input.ValidationError.Required"),
              maxLength: {
                value: 25,
                message: t("IndustryType.AddOrEdit.Input.ValidationError.NameMaxLength", { MaxLength: 25 }),
              }
            })}
            shadow color={errors.IndustryName && "failure"}  />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Description" value={t("IndustryType.AddOrEdit.Input.Label.Description")} />
            </div>
            <TextInput id="Description" type="text" helperText={errors.Description?.message} {...register("Description", {
              required: t("IndustryType.AddOrEdit.Input.ValidationError.Required"),
              maxLength: {
                value: 25,
                message: t("IndustryType.AddOrEdit.Input.ValidationError.NameMaxLength", { MaxLength: 25 }),
              }
            })}
            shadow color={errors.Description && "failure"}  />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="ParentId" value={t("IndustryType.AddOrEdit.Input.Label.ParentId")} />
            </div>
            <Select id="ParentId" {...register("ParentId", { required: t("IndustryType.AddOrEdit.Input.ValidationError.Required") })}>
              <option>React</option>
            </Select>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit(onSubmit)}>{t("Save")}</Button>
        <Button color="gray" onClick={handleCloseModal}>{t("Cancel")}</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default IndustryTypeAdd;
