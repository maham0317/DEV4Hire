export interface ErrorResponseModel {
  data: ErrorResponseData | null;
  status: number;
}

interface ErrorResponseData {
  status: number;
  title: string;
  details: string;
  sraceId: string;
  type: string;
}
