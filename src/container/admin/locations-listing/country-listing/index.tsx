import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Card, TextInput } from "flowbite-react";
import Pagination from "@/components/Pagination";
import { RxCross2 } from "react-icons/rx";
import { FaPlus, FaSearch } from "react-icons/fa";
import { useCountryListing } from "./hooks";
import List from "@/components/common/List";
import AddOrEditModal from "./components/AddorEditModal";
import ConfirmationModal from "@/components/common/ConfirmationModal";
import CountryModel, { ColumnProps } from "@/interfaces/location-listing/country-listing";

const CountryListing: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const {
    isLoading,
    data,
    formData,
    filters,
    addNewCountry,
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
  } = useCountryListing();

  const columns: ColumnProps<CountryModel>[] = [
    {
      key: "CountryName",
      title: t("CountryListing.Table.Heading.CountryName"),
    },
    {
      key: "action",
      title: t("CountryListing.Table.Heading.Actions"),
      render: (_, record) => (
        <div className="ml-8 cursor-pointer">
          <RxCross2 color="red" onClick={(e) => { e.stopPropagation(); handleDelete(record.Id) }} />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-blue-50 p-4">
      <div className="flex flex-col gap-3 py-3">
        <p className="text-xl text-indigo-900 bg-blue-50 font-montserrat font-normal">
          {t("CountryListing.Title")}
        </p>
        <Button
          size="md"
          color="primary"
          onClick={addNewCountry}
        >
          <FaPlus className="mt-0.5 mr-2 h-4 w-4" />
         {t("CountryListing.Button.CreateNew")}
        </Button>
      </div>
      <Card className="border-1px rounded-none h-[calc(100vh-216px)]">
        <div className="flex flex-row justify-between align-item-center p-2">
          <p className="text-xl text-indigo-900 font-semibold">
          </p>
          <TextInput
            sizing="lg"
            className="w-full md:w-72 text-18px" 
            placeholder={t("CountryListing.Input.Search.Placeholder")}
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
        <List isLoading={isLoading} data={data?.Items} columns={columns} onRowClick={handleEdit} />
        <Pagination
          currentPage={filters.CurrentPage}
          totalPages={filters.totalPages}
          onChange={onPageChange}
        />
      </Card>
      <AddOrEditModal
        key={`AEM-${formData.CountryName}`}
        isOpen={isOpen}
        onClose={handleClose}
        onSuccess={onSuccess}
        isEdit={isEdit}
        formState={formData}
      />
      <ConfirmationModal
        messageString={t("CountryListing.Modal.Confirmation.Title")}
        isOpen={isConfirm ? true : false}
        onClose={onCloseConfirm}
        onSuccess={onConfirmSuccess}
      />
    </div>
  );
};

export default CountryListing;