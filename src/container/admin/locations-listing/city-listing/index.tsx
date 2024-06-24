import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, Card, TextInput } from "flowbite-react";
import Pagination from '@/components/Pagination';
import { RxCross2 } from "react-icons/rx";
import { FaPlus, FaSearch } from "react-icons/fa";
import { useIndustryTypeListing } from "./hooks";
import List from "@/components/common/List";
import AddOrEditModal from "./components/AddorEditModal";
import ConfirmationModal from "@/components/common/ConfirmationModal";
import CityModel, { ColumnProps } from "@/interfaces/location-listing/city-listing";

const CityListing: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const {
    isLoading,
    data,
    formData,
    filters,
    addNewCity,
    handleEdit,
    handleDelete,
    handleClose,
    onSuccess,
    isOpen,
    isEdit,
    isConfirm,
    onCloseConfirm,
    onConfirmSuccess,
    onPageChange,
    setFilters,
  } = useIndustryTypeListing();

  const columns: ColumnProps<CityModel>[] = [
    {
      key: "CountryId",
      title: t("CityListing.Table.Heading.CountryId"),
    },
    {
      key: "CityName",
      title: t("CityListing.Table.Heading.CityName"),
   },
    {
      key: "action",
      title: t("CityListing.Table.Heading.Actions"),
      render: (_, record) => (
        <div className="ml-8 cursor-pointer">
          <RxCross2
            color="red"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(record.Id);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-blue-50 p-4">
      <div className="flex flex-col gap-3 py-3">
        <p className="text-2xl text-indigo-900 bg-blue-50 font-montserrat font-normal">
          {t("CityListing.Title")}
        </p>
        <Button
          size="md"
          color="primary"
          onClick={addNewCity}
        >
          <FaPlus className="mt-0.5 mr-2 h-4 w-4" />
          {t("CityListing.Button.CreateNew")}
        </Button>
      </div>
      <Card className="border-1 rounded-none h-[calc(100vh-220px)]">
        <div className="flex flex-row justify-between items-center p-2">
          <p className="text-xl text-indigo-900 font-semibold"></p>
          <TextInput
            sizing="lg"
            className="w-full md:w-72 text-18px" 
            placeholder={t("CityListing.Input.Search.Placeholder")}
            onChange={(e) =>
              setFilters((pre) => ({
             ...pre,
              SearchTerm: e.target.value,
              CurrentPage: 1,
              }))
             }
             addon={<FaSearch />}
             />
        </div>
        <div className="overflow-auto h-full">
          <List isLoading={isLoading} data={data?.Items} columns={columns} onRowClick={handleEdit} />
        </div>
          <div className="flex justify-center">
          <Pagination
            currentPage={filters.CurrentPage}
            totalPages={filters.totalPages}
            onChange={onPageChange}
          />
        </div>
      </Card>

      <AddOrEditModal
        key={`AEM-${formData.CityName}`}
        isOpen={isOpen}
        onClose={handleClose}
        onSuccess={onSuccess}
        isEdit={isEdit}
        formState={formData}
      />
      <ConfirmationModal
        messageString={t("CityListing.Modal.Confirmation.Title")}
        isOpen={isConfirm ? true : false}
        onClose={onCloseConfirm}
        onSuccess={onConfirmSuccess}
      />
    </div>
  );
};

export default CityListing;
