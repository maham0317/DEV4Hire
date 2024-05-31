import BaseFilterModel from "@/interfaces/base-filter.model";

export enum SortByCity {
  Name,
}

export default interface CityModel {
  Id: number;
  CityName: string;
  CountryId: number;
}

export interface IAddOrEditCityModalProp {
  isOpen: boolean;
  isEdit: boolean;
  onClose: () => void;
  onSuccess: () => void;
  formState: CityModel;
}

export interface ColumnProps<T> {
  key: string;
  title: string | React.ReactElement;
  render?: (column: ColumnProps<T>, item: T) => React.ReactElement;
}

export interface CityFilterModel extends BaseFilterModel {
  SortBy: SortByCity;
}
