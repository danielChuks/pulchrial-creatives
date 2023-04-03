export interface UseFetchProps<T> {
    error: Boolean;
    loading: Boolean;
    data: T;
    success: Boolean;
    fetchData: () => void;
}