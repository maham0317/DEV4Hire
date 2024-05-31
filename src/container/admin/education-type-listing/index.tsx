import { FC, JSX, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Card, TextInput, Pagination } from "flowbite-react";

import { RxCross2 } from "react-icons/rx";
import { FaPlus, FaSearch } from "react-icons/fa";
import { useEducationTypeListing } from "./hooks";
import List from "@/components/common/List";
import AddOrEditModal from "./components/AddorEditModal";
import ConfirmationModal from "@/components/common/ConfirmationModal";
import EducationTypeModel, {
  ColumnProps,
} from "@/interfaces/education-type-listing";

const EducationTypeListing: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const {
    isLoading,
    data,
    formData,
    filters,
    addNewEducation,
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
  } = useEducationTypeListing();

  const columns: ColumnProps<EducationTypeModel>[] = [
    {
      key: "EducationName",
      title: t("EducationTypeListing.Table.Heading.EducationName"),
      render: (_, record) => (
        <span className="cursor-pointer" onClick={() => handleEdit(record)}>
          {record.Name}
        </span>
      ),
    },
    {
      key: "action",
      title: t("EducationTypeListing.Table.Heading.Actions"),
      render: (_, record) => (
        <div
          onClick={() => handleDelete(record.Id)}
          className="ml-8 cursor-pointer"
        >
          <RxCross2 color="red" />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-blue-50 p-4 h-screen">
      <div className="flex flex-col gap-3 p-3">
        <p className="text-xl text-indigo-900 bg-blue-50 font-montserrat font-normal">
          {t("EducationTypeListing.Title")}
        </p>
        <Button
          size="md"
          color="primary"
          className="w-40 h-10 rounded"
          onClick={addNewEducation}
        >
          <FaPlus className="mt-0.5 mr-2 h-4 w-4" />
          {t("EducationTypeListing.Button.CreateNew")}
        </Button>
      </div>
      <Card className="border-1px rounded-none">
        <div className="flex flex-row justify-between align-item-center p-2">
          <p className="text-xl text-indigo-900 font-semibold">
            {t("EducationTypeListing.Table.Title")}
          </p>
          <TextInput
            style={{ width: 312 }}
            placeholder={t("EducationTypeListing.Input.Search.Placeholder")}
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

        <List isLoading={isLoading} data={data?.Items} columns={columns} />
        <div className="flex overflow-x-auto sm:justify-center">
          <Pagination
            currentPage={filters.CurrentPage}
            totalPages={filters.totalPages}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      </Card>

      <AddOrEditModal
        key={`AEM-${formData.Name}`}
        isOpen={isOpen}
        onClose={handleClose}
        onSuccess={onSuccess}
        isEdit={isEdit}
        formState={formData}
      />
      <ConfirmationModal
        messageString={t("EducationTypeListing.Modal.Confirmation.Title")}
        isOpen={isConfirm ? true : false}
        onClose={onCloseConfirm}
        onSuccess={onConfirmSuccess}
      />
    </div>
  );
};

export default EducationTypeListing;
