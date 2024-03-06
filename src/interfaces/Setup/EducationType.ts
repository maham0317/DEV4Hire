export default interface EducationTypeModel {
  Id: Number;
  Name: string;
}
export interface EducationTypeStateModel {
  status: string;
  error: object | null;
  isLoading: boolean;
  isError: boolean;
  data: EducationTypeModel | null;
}
