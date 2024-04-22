import { SortByIndustryType } from "@/enums/industry-type/industry-type.enum";
import BaseFilterModel from "@/interfaces/base-filter.model";

export default interface IndustryTypeFilterModel extends BaseFilterModel {
  SortBy: SortByIndustryType;
}
