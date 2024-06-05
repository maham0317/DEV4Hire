import { FC, JSX, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Card, TextInput } from "flowbite-react";
import Pagination from "@/components/Pagination"
import { RxCross2 } from "react-icons/rx";
import { FaPlus, FaSearch } from "react-icons/fa";
import List from "@/components/common/List";
import AddOrEditModal from "./components/AddorEditModal";
import ConfirmationModal from "@/components/common/ConfirmationModal";
import LanguageModel, { ColumnProps } from "@/interfaces/language-listing";
import { useLanguageListing } from "./hooks";

const LanguageListing: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const {
    isLoading,
    data,
    formData,
    filters,
    addNewLanguage,
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
  } = useLanguageListing();

  const columns: ColumnProps<LanguageModel>[] = [
    {
      key: "LanguageName",
      title: t("LanguageListing.Table.Heading.Name"),
      },
    {
      key: "Description",
      title: t("LanguageListing.Table.Heading.Description"),
    },
    {
      key: "action",
      title: t("LanguageListing.Table.Heading.Actions"),
      render: (_, record) => (
        <div
          className="ml-8 cursor-pointer"
        >
          <RxCross2 color="red" onClick={(e) => {e.stopPropagation(); handleDelete(record.Id)}}/>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-blue-50 p-4 min-h-screen">
      <div className="flex flex-col gap-3 p-3 ">
        <p className="text-xl text-indigo-900 bg-blue-50 font-montserrat font-normal">
          {t("LanguageListing.Title")}
        </p>
        <Button
          size="md"
          color="primary"
          className=" w-40 h-10 rounded"
          onClick={addNewLanguage}
        >
          <FaPlus className="mt-0.5 mr-2 h-4 w-4" />
          {t("LanguageListing.Button.CreateNew")}
        </Button>
      </div>
      <Card className="border-1 rounded-none">
        <div className="flex flex-col md:flex-row justify-between items-center p-2">
          <p className="text-xl text-indigo-900 font-semibold mb-2 md:mb-0">
            {/* {t("LanguageListing.Table.Title")} */}
          </p>
          <TextInput
            className="w-full md:w-72"
            placeholder={t("LanguageListing.Input.Search.Placeholder")}
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
        <List isLoading={isLoading} data={data?.Items} columns={columns} onRowClick={handleEdit}/>
        <div className="flex overflow-x-auto justify-center mt-4">
          <Pagination
            currentPage={filters.CurrentPage}
            totalPages={filters.totalPages}
            onChange={onPageChange}
          />
        </div>
      </Card>
      <AddOrEditModal
        key={`AEM-${formData.LanguageName}`}
        isOpen={isOpen}
        onClose={handleClose}
        onSuccess={onSuccess}
        isEdit={isEdit}
        formState={formData}
      />
      <ConfirmationModal
        messageString={t("LanguageListing.Modal.Confirmation.Title")}
        isOpen={isConfirm ? true : false}
        onClose={onCloseConfirm}
        onSuccess={onConfirmSuccess}
      />
    </div>
  );
};
export default LanguageListing;
