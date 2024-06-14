export interface ErrorResponseModel {
  data: ErrorResponseData | null;
  status: number;
}

interface ErrorResponseData {
  status: number;
  title: string;
  message: string;
  traceId: string;
  type: string;
}
