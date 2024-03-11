export default interface SkillTypeModel {
  Id: number;
  SkillName: string;
  Description: string;
}
export interface SkillTypeStateModel {
  status: string;
  error: object | null;
  isLoading: boolean;
  isError: boolean;
  data: SkillTypeModel | null;
}
