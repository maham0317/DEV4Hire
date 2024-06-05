import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, Label, TextInput, Modal } from "flowbite-react";
import { useAddOrEditIndustryTypeModal } from "./hooks";
import { IAddOrEditIndustryTypeModalProp, IndustryTypeModel } from "@/interfaces/industry-type-listing";
import SearchableDropdown from "@/components/common/searchabledropdown";

const AddOrEditIndustryTypeModal: FC<IAddOrEditIndustryTypeModalProp & { ParentName: IndustryTypeModel[] }> = (props) => {
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
    setValue,
    parentOptions,
    fetchParentOptions,
   
  } = useAddOrEditIndustryTypeModal(props);

  console.log("Parent Options in Modal:", parentOptions);

  return (
    <Modal show={isOpen} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header className="pt-3 pb-2 px-6">
          {t(`IndustryTypeListing.Modal.${isEdit ? "Edit" : "Add"}.Title`)}
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-flow-row justify-stretch space-y-4">
            <div className="flex gap-x-2">
              <Label
                className="w-36 text-md"
                htmlFor="IndustryType"
                value={t("IndustryTypeListing.Input.IndustryName.Label")}
              />
              <div className="flex-1">
                <TextInput
                  sizing="sm"
                  id="IndustryType"
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
                  color={errors.IndustryName && "failure"}
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.IndustryName?.message}
                </p>
              </div>
            </div>
            <div className="flex gap-x-2">
              <Label
                className="w-36 text-md"
                htmlFor="Description"
                value={t("IndustryTypeListing.Input.Description.Label")}
              />
              <div className="flex-1">
                <TextInput
                  sizing="sm"
                  id="Description"
                  type="text"
                  {...register("Description", {
                    required: t("IndustryTypeListing.Input.Error.Required"),
                    maxLength: {
                      value: 25,
                      message: t("IndustryTypeListing.Input.Error.MaxLength", {
                        MaxLength: 25,
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
            <div className="flex gap-x-2">
              <Label
                className="w-36 text-md"
                htmlFor="ParentId"
                value={t("IndustryTypeListing.Input.ParentId.Label")}
              />
              <div className="flex-1 z-50">
                <SearchableDropdown
                  options={parentOptions}
                  fetchParentOptions={fetchParentOptions}
                  onChange={(selectedOption) => setValue("ParentId", selectedOption?.value)}
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.ParentId?.message}
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
            isProcessing={isSubmitting || isUpdating }
          >
            {t(`IndustryTypeListing.Button.${isEdit ? "Update" : "Save"}`)}
          </Button>
          <Button size="sm" color="gray" onClick={handleClose}>
            {t("IndustryTypeListing.Button.Cancel")}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AddOrEditIndustryTypeModal;
