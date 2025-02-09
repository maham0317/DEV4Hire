export interface BaseListModel<T> {
  CurrentPage: number;
  TotalPages: number;
  TotalItems: number;
  ItemsPerPage: number;
  Items: T[];
}
