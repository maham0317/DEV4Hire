import { useEffect, useState } from "react";
import WorkRoleModel from "@/interfaces/work-role/work-role.model";
import { toast } from "react-toastify";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { BaseListModel } from "@/interfaces/base-list.model";
import EducationTypeModel from "@/interfaces/setup/education-type.model";
import {
  useDeleteEducationTypeMutation,
  useGetallEducationTypeMutation,
} from "@/services/education-type";
import EducationTypeFilterModel from "@/interfaces/setup/education-type-filter.model";
import { SortByEducationType } from "@/enums/education-type/education.enum";
import { useTranslation } from "react-i18next";
export const useEducation = () => {
  const { t } = useTranslation();
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<EducationTypeModel>();

  const [query, setQuery] = useState("");

  const [getAllEducationType, { data, isLoading: loading }] =
    useGetallEducationTypeMutation();

  const [deleteEducationType, { isLoading: isDeleteing }] =
    useDeleteEducationTypeMutation();
  const [result, setResult] = useState<
    BaseListModel<EducationTypeModel> | undefined
  >();
  const callApiAsyc = async () => {
    const payload: EducationTypeFilterModel = {
      CurrentPage: 1,
      PageSize: Config.Filter.PageSize,
      SearchTerm: "",
      SortBy: SortByEducationType.Name,
      SortOrder: SortOrder.ASC,
    };
    var data = await getAllEducationType(payload);
    setResult(data);
  };

  useEffect(() => {
    callApiAsyc();
  }, []);

  //Modal
  const toggleAddeModal = () => {
    setAddModal(!addModal);
  };
  const toggleUpdateModal = (item: WorkRoleModel) => {
    setUpdateModal(!updateModal);
    setCurrentItem(item);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteEducationType(id);
      toast.success(t("EducationType.AddOrEdit.Input.Toast.DeleteMessage"));
      callApiAsyc();
    } catch (e: any) {
      toast.error(t("EducationType.AddOrEdit.Input.Toast.ErrorMessage"));
    }
  };

  //Search Data
  const searchData = (e: any) => {
    const key = e.target.value;
    setQuery(key);
  };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: EducationTypeModel) => {
    return item.Name.toLowerCase().includes(query.toLowerCase());
  });

  return {
    toggleAddeModal,
    toggleUpdateModal,
    handleDelete,
    data,
    searchData,
    query,
    addModal,
    updateModal,
    currentItem,
    filteredItems,
    callApiAsyc,
  };
};
