export interface StateModel<T> {
    status: String;
    error: Object | null;
    isLoading: Boolean;
    data: T | null
}