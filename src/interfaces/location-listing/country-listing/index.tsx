import BaseFilterModel from "@/interfaces/base-filter.model";
import City from "@/interfaces/location-listing/city-listing";

export enum SortByCountry {
  Name,
}

export default interface CountryModel {
  Id: number;
  CountryName: string;
  Cities: City[];
}

export interface IAddOrEditCountryModalProp {
  isOpen: boolean;
  isEdit: boolean;
  onClose: () => void;
  onSuccess: () => void;
  formState: CountryModel;
}

export interface ColumnProps<T> {
  key: string;
  title: string | React.ReactElement;
  render?: (column: ColumnProps<T>, item: T) => React.ReactElement;
}

export interface CountryFilterModel extends BaseFilterModel {
  SortBy: SortByCountry;
}
