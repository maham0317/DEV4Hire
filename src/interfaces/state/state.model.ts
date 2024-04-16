export interface StateModel<T> {
  status: string;
  error: object | null;
  isLoading: boolean;
  data: T | null;
}
