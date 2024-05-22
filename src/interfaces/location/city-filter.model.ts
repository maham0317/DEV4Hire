import BaseFilterModel from "@/interfaces/base-filter.model";

export default interface CityFilterModel extends BaseFilterModel {
  SortBy: SortByCity;
}
