export interface AwardModel {
  id: Number;
  AwardTitle: string;
  Year: Number;
}

export interface AwardStateModel {
  status: String;
  error: Object | null;
  isLoading: Boolean;
  isError: Boolean;
  awardData: AwardModel | null
}
