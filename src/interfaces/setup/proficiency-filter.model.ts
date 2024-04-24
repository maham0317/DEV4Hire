import { SortByProficiency } from "@/enums/proficiency/proficiency.enum";
import BaseFilterModel from "@/interfaces/base-filter.model";

export default interface ProficiencyFilterModel extends BaseFilterModel {
  SortBy: SortByProficiency;
}
