import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, Label, TextInput, Modal, Textarea } from "flowbite-react";
import { useAddOrEditIndustryTypeModal } from "./hooks";
import { IAddOrEditIndustryTypeModalProp } from "@/interfaces/industry-type-listing";
import { Select } from 'antd';

const AddOrEditIndustryTypeModal: FC<IAddOrEditIndustryTypeModalProp> = (props) => {
  const { t } = useTranslation();
  const { isOpen, isEdit } = props;
  const {
    register, 
    handleSubmit, 
    onSubmit, 
    handleClose, 
    isSubmitting, 
    isUpdating, 
    errors, 
    parentOptions, 
    onSearch,
    onChange,
    filteredOption,
    formState,
  } = useAddOrEditIndustryTypeModal(props);

  return (
    <Modal show={isOpen} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header className="pt-3 text-xl font-semibold pb-2 px-6">
        <span className="font-semibold text-custom-gray">{t(`IndustryTypeListing.Modal.${isEdit ? "Edit" : "Add"}.Title`)}</span>
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-flow-row justify-stretch space-y-4">
            <div className="flex gap-x-2">
              <Label
                className="w-36 text-custom-gray text-lg font-semibold"
                htmlFor="ParentId"
                value={t("IndustryTypeListing.Input.ParentId.Label")}
              />
              <div className="flex-1 z-50">
                <Select
                  className="w-full custom-select"
                  showSearch
                  placeholder="Select Option"
                  optionFilterProp="children"
                  defaultValue={formState.ParentName}
                  {...register("ParentId")}
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filteredOption}
                  options={parentOptions}
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.ParentId?.message}
                </p>
              </div>
            </div>
            <div className="flex gap-x-2">
              <Label
                className="w-36 text-custom-gray text-lg font-semibold"
                htmlFor="IndustryName"
                value={t("IndustryTypeListing.Input.IndustryName.Label")}
              />
              <div className="flex-1">
                <TextInput
                className="text-custom-gray"
                  sizing="lg"
                  id="Name"
                  type="text"
                  {...register("IndustryName", {
                    required: t("IndustryTypeListing.Input.Error.Required"),
                    maxLength: {
                      value: 25,
                      message: t("IndustryTypeListing.Input.Error.MaxLength", {
                        MaxLength: 25,
                      }),
                    },
                  })}
                  shadow
                  color={errors.IndustryName ? "failure" : undefined}
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.IndustryName?.message}
                </p>
              </div>
            </div>
            <div className="flex gap-x-2">
              <Label
                className="w-36 text-custom-gray text-lg font-semibold"
                htmlFor="Description"
                value={t("IndustryTypeListing.Input.Description.Label")}
              />
              <div className="flex-1">
                <Textarea
                  rows={4}
                  className="p-1 text-lg font-medium resize-none" 
                  id="Description"
                  {...register("Description", {  
                    maxLength: {
                      value: 500,
                      message: t("IndustryTypeListing.Input.Error.MaxLength", {
                        MaxLength: 500,
                      }),
                    },
                  })}
                  shadow
                  color={errors.Description ? "failure" : undefined}
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
            isProcessing={isSubmitting || isUpdating }
          >
            {t(`IndustryTypeListing.Button.${isEdit ? "Update" : "Save"}`)}
          </Button>
          <Button size="md" color="gray" onClick={handleClose}>
            {t("IndustryTypeListing.Button.Cancel")}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AddOrEditIndustryTypeModal;
