export interface ApiResponse<T> {
  data: T;
  meta: {
    timestamp: string;
  };
}
