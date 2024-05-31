import BaseFilterModel from "../base-filter.model";

export enum SortByProficiency {
  Name,
}

export default interface ProficiencyModel {
  Id: number;
  Name: string;
}

export interface IAddOrEditProficiencyModalProp {
  isOpen: boolean;
  isEdit: boolean;
  onClose: () => void;
  onSuccess: () => void;
  formState: ProficiencyModel;
}

export interface ColumnProps<T> {
  key: string;
  title: string | React.ReactElement;
  render?: (column: ColumnProps<T>, item: T) => React.ReactElement;
}

export interface ProficiencyFilterModel extends BaseFilterModel {
  SortBy: SortByProficiency;
}
