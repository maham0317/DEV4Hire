export default interface ProficiencyModel {
  Id: Number;
  Name: string;
}
export interface ProficiencyStateModel {
  status: string;
  error: object | null;
  isLoading: boolean;
  isError: boolean;
  data: ProficiencyModel | null;
}
