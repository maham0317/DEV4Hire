import { FC, JSX, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSkillListing } from "./hooks";
import SkillTypeModel, { ColumnProps } from "@/interfaces/skill-listing";
import { RxCross2 } from "react-icons/rx";
import { Button, Card, TextInput } from "flowbite-react";
import Pagination from "@/components/Pagination"
import { FaPlus, FaSearch } from "react-icons/fa";
import ConfirmationModal from "@/components/common/ConfirmationModal";
import List from "@/components/common/List";
import AddOrEditModal from "./components/AddorEditModal";

const SkillListing: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const {
    isLoading,
    data,
    formData,
    filters,
    addNewSkill,
    handleEdit,
    handleDelete,
    handleClose,
    onSuccess,
    isEdit,
    isOpen,
    isConfirm,
    onCloseConfirm,
    onConfirmSuccess,
    onPageChange,
    setFilters,
  } = useSkillListing();

  const columns: ColumnProps<SkillTypeModel>[] = [
    {
      key: "SKillName",
      title: t("SkillListing.Table.Heading.Name"),
      render: (_, record) => (
        <span className="cursor-pointer">
          {record.SkillName}
        </span>
      ),
    },
    {
      key: "action",
      title: t("SkillListing.Table.Heading.Actions"),
      render: (_, record) => (
        <div
          className="ml-8 cursor-pointer"
        >
          <RxCross2 color="red"  onClick={(e) => {e.stopPropagation(); handleDelete(record.Id)}}/>
        </div>
      ),
    },
  ];
  return (
    <div className="bg-blue-50 p-4 h-screen">
      <div className="flex flex-col gap-3 p-3">
        <p className="text-xl text-indigo-900 bg-blue-50 font-montserrat font-normal">
          {t("SkillListing.Title")}
        </p>
        <Button
          size="md"
          color="primary"
          className="w-40 h-10 rounded"
          onClick={addNewSkill}
        >
          <FaPlus className="mt-0.5 mr-2 h-4 w-4" />
          {t("SkillListing.Button.CreateNew")}
        </Button>
      </div>
      <Card className="border-1px rounded-none">
        <div className="flex flex-row justify-between align-item-center p-2">
          <p className="text-xl text-indigo-900 font-semibold">
            {/* {t("SkillListing.Table.Title")} */}
          </p>
          <TextInput
            style={{ width: 312 }}
            placeholder={t("SkillListing.Input.Search.Placeholder")}
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
        <div className="flex overflow-x-auto sm:justify-center">
          <Pagination
            currentPage={filters.CurrentPage}
            totalPages={filters.totalPages}
            onChange={onPageChange}
          />
        </div>
      </Card>

      <AddOrEditModal
        key={`AEM-${formData.SkillName}`}
        isOpen={isOpen}
        onClose={handleClose}
        onSuccess={onSuccess}
        isEdit={isEdit}
        formState={formData}
      />
      <ConfirmationModal
        messageString={t("SkillListing.Modal.Confirmation.Title")}
        isOpen={isConfirm ? true : false}
        onClose={onCloseConfirm}
        onSuccess={onConfirmSuccess}
      />
    </div>
  );
};

export default SkillListing;
