import BaseFilterModel from "@/interfaces/base-filter.model";

export default interface ProficiencyFilterModel extends BaseFilterModel {
  SortBy: SortByProficiency;
}
