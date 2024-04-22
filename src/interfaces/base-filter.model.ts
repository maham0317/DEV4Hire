import { SortOrder } from "@/enums/sort-order.enum";

export default interface BaseFilterModel {
  CurrentPage: Number;
  PageSize: Number;
  SearchTerm: string;
  SortOrder: SortOrder;
}
