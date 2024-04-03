import BaseFilterModel from "@/interfaces/base-filter.model";

export default interface SkillFilterModel extends BaseFilterModel {
  SortBy: SortBySkill;
}
