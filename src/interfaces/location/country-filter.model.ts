import BaseFilterModel from "@/interfaces/base-filter.model";

export default interface CountryFilterModel extends BaseFilterModel {
  SortBy: SortByCountry;
}
