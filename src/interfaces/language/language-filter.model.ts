import { SortByLanguage } from "@/enums/language/language.enum";
import BaseFilterModel from "@/interfaces/base-filter.model";

export default interface LanguageFilterModel extends BaseFilterModel {
  SortBy: SortByLanguage;
}
