import BaseFilterModel from "../base-filter.model";

export enum SortByWorkRole {
    Name,
    Description,
  }

export interface WorkRoleModel {
    Id: number;
    WorkRoleName: string;
    WorkRoleDesc: string;
    ParentId: number;

}

export interface IAddOrEditWorkRoleModalProp {
  isOpen: boolean;
  isEdit: boolean;
  onClose: ()=> void;
  onSuccess: ()=> void;
  formState: WorkRoleModel;
}

export interface ColumnProps<T> {
  key: string;
  title: string | React.ReactElement;
  render?: (column: ColumnProps<T>, item: T) => React.ReactElement;
}

export interface WorkRoleFilterModel extends BaseFilterModel {
  SortBy: SortByWorkRole;
}