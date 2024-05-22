import BaseFilterModel from "@/interfaces/base-filter.model";

export default interface CourseFilterModel extends BaseFilterModel {
  SortBy: SortByCourse;
}
