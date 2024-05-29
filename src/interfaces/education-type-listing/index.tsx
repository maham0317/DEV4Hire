import BaseFilterModel from "../base-filter.model";

export enum SortByEducationType {
  Name,
  Description,
}

export default interface EducationTypeModel {
  Id: number;
  Name: string;
  IsActive: boolean;
}

export interface IAddOrEditEducationTypeModalProp {
  isOpen: boolean;
  isEdit: boolean;
  onClose: () => void;
  onSuccess: () => void;
  formState: EducationTypeModel;
}

export interface ColumnProps<T> {
  key: string;
  title: string | React.ReactElement;
  render?: (column: ColumnProps<T>, item: T) => React.ReactElement;
}

export interface EducationTypeFilterModel extends BaseFilterModel {
  SortBy: SortByEducationType;
}
