import BaseFilterModel from "../base-filter.model";

export enum SortByLanguage {
  Name,
  Description,
}

export default interface LanguageModel {
  Id: number;
  LanguageName: string;
  Description: string;
  IsCVLanguage: string;
}

export interface IAddOrEditLanguageModalProp {
  isOpen: boolean;
  isEdit: boolean;
  onClose: () => void;
  onSuccess: () => void;
  formState: LanguageModel;
}

export interface ColumnProps<T> {
  key: string;
  title: string | React.ReactElement;
  render?: (column: ColumnProps<T>, item: T) => React.ReactElement;
}

export interface LanguageFilterModel extends BaseFilterModel {
  SortBy: SortByLanguage;
}
