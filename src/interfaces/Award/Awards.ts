export interface AwardModel {
  id: Number;
  AwardTitle: string;
  Year: Number;
}

export interface AwardStateModel {
  status: string;
  error: object | null;
  isLoading: boolean;
  isError: boolean;
  data: AwardModel | null;
}
