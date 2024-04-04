import { SortByWorkRole } from "@/enums/work-role/work-role.enum";
import BaseFilterModel from "@/interfaces/base-filter.model";

export default interface WorkRoleFilterModel extends BaseFilterModel {
  SortBy: SortByWorkRole;
}
