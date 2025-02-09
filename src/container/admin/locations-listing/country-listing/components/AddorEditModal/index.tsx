import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, Label, TextInput, Modal } from "flowbite-react";
import { IAddOrEditCountryModalProp } from "@/interfaces/location-listing/country-listing";
import { useAddOrEditCountryModal } from "./hooks";
import { hasHtmlTags } from "@/utils";

const AddOrEditCountryModal: FC<IAddOrEditCountryModalProp> = (props) => {
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
  } = useAddOrEditCountryModal(props);

  return (
    <Modal show={isOpen} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header className="pt-3 pb-2 px-6">
        <span className="font-semibold text-custom-gray ">{t(`CountryListing.Modal.${isEdit ? "Edit" : "Add"}.Title`)}</span>
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-flow-row justify-stretch space-y-4">
            <div className="flex gap-x-2">
              <Label
                className="w-36 text-custom-gray text-lg font-semibold"
                htmlFor="Country"
                value={t("CountryListing.Input.CountryName.Label")}
              />
              <div className="flex-1">
                <TextInput
                  sizing="lg"
                  id="Country"
                  type="text"
                  {...register("CountryName", {
                    required: t("CountryListing.Input.Error.Required"),
                    validate:hasHtmlTags,
                    maxLength: {
                      value: 25,
                      message: t("CountryListing.Input.Error.MaxLength", {
                        MaxLength: 25,
                      }),
                    },
                  })}
                  shadow
                  color={errors.CountryName ? "failure" : undefined}
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.CountryName?.message}
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
            {t(`CountryListing.Button.${isEdit ? "Update" : "Save"}`)}
          </Button>
          <Button size="md" color="gray" onClick={handleClose}>
            {t("CountryListing.Button.Cancel")}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AddOrEditCountryModal;
