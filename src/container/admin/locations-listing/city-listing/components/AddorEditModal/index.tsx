import React, { FC, JSX } from "react";
import { useTranslation } from "react-i18next";
import { Button, Label, TextInput, Modal } from "flowbite-react";
import { IAddOrEditCityModalProp } from "@/interfaces/location-listing/city-listing";
import { useAddOrEditCityModal } from "./hooks";
import CountryModel from "@/interfaces/location-listing/country-listing";
// import SearchableDropdown from "@/components/common/searchabledropdown";
import { Select } from 'antd';

const AddOrEditCityModal: FC<IAddOrEditCityModalProp> = (
  props
): JSX.Element => {
  const { t } = useTranslation();
  const { isOpen, isEdit } = props;
  const {
    register,
    handleSubmit,
    countries,
    onSubmit,
    handleClose,
    isSubmiting,
    isUpdating,
    errors,
    onSearch,
    onChange,
    filteredOption,countryOptions
  } = useAddOrEditCityModal(props);


  return (
    <Modal show={isOpen} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header className="pt-3 pb-2 px-6">
          {t(`CityListing.Modal.${isEdit ? "Edit" : "Add"}.Title`)}
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-flow-row justify-stretch space-y-4">
          <div className="flex gap-x-2">
              <Label
                className="w-36 text-md"
                htmlFor="CountryId"
                value={t("CityListing.Input.CountryId.Label")}
              />
              <div className="flex-1 z-50">
                <Select
                 className="w-full"
                  showSearch
                  placeholder="Select Option"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filteredOption}
                  options={countryOptions}
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.CountryId?.message}
                </p>
              </div>
            </div>
            <div className="flex gap-x-2">
              <Label
                className="w-36 text-md"
                htmlFor="City"
                value={t("CityListing.Input.CityName.Label")}
              />
              <div className="flex-1">
                <TextInput
                  sizing="sm"
                  id="City"
                  type="text"
                  {...register("CityName", {
                    required: t("CityListing.Input.Error.Required"),
                    maxLength: {
                      value: 25,
                      message: t("CityListing.Input.Error.MaxLength", {
                        MaxLength: 25,
                      }),
                    },
                  })}
                  shadow
                  color={errors.CityName && "failure"}
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.CityName?.message}
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
            isProcessing={isSubmiting || isUpdating}
          >
            {t(`CityListing.Button.${isEdit ? "Update" : "Save"}`)}
          </Button>
          <Button size="sm" color="gray" onClick={handleClose}>
            {t("CityListing.Button.Cancel")}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AddOrEditCityModal;
