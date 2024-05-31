import BaseFilterModel from "../base-filter.model";

export enum SortBySortBySkillType {
  Name,
  Description,
}

export default interface SkillTypeModel {
  Id: number;
  SkillName: string;
}

export interface IAddOrEditSkillTypeModalProp {
  isOpen: boolean;
  isEdit: boolean;
  onClose: () => void;
  onSuccess: () => void;
  formState: SkillTypeModel;
}

export interface ColumnProps<T> {
  key: string;
  title: string | React.ReactElement;
  render?: (column: ColumnProps<T>, item: T) => React.ReactElement;
}

export interface SkillTypeFilterModel extends BaseFilterModel {
  SortBy: SortBySortBySkillType;
}
