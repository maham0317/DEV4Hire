export interface ErrorResponseModel {
  data: ErrorResponseData | null;
  status: number;
}

interface ErrorResponseData {
  status: number;
  title: string;
  Message: string;
  traceId: string;
  type: string;
}
