export interface ErrorResponseModel {
  Data: ErrorResponseData | null;
  Status: number;
}

interface ErrorResponseData {
  Status: number;
  Title: string;
  Details: string;
  SraceId: string;
  Type: string;
}
