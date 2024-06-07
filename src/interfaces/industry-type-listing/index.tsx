import BaseFilterModel from "../base-filter.model";

export enum SortByIndustryType {
  Name,
  Description,
}

export interface IndustryTypeModel {
  Id: number;
  IndustryName: string;
  Description: string;
  ParentId: number;
  ParentName:string;
}

export interface IAddOrEditIndustryTypeModalProp {
  isOpen: boolean;
  isEdit: boolean;
  onClose: ()=> void;
  onSuccess: ()=> void;
  formState: IndustryTypeModel;
}

export interface ColumnProps<T> {
  key: string;
  title: string | React.ReactElement;
  render?: (column: ColumnProps<T>, item: T) => React.ReactElement;
}

export interface IndustryTypeFilterModel extends BaseFilterModel {
  SortBy: SortByIndustryType;
  parentsOnly: boolean;
}