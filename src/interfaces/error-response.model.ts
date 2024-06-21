export interface ErrorResponseModel {
  data: ErrorResponseData | null;
  status: number;
}

interface ErrorResponseData {
  status: number;
  Title: string;
  details: string;
  traceId: string;
  type: string;
}
