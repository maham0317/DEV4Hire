import BaseFilterModel from "@/interfaces/base-filter.model";

export default interface LanguageFilterModel extends BaseFilterModel {
  SortBy: SortByLanguage;
}
