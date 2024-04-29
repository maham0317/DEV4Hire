import BaseFilterModel from "@/interfaces/base-filter.model";

export default interface AwardFilterModel extends BaseFilterModel {
  SortBy: SortByAward;
}
