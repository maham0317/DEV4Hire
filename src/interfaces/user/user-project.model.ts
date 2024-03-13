export default interface UserProjectModel {
  Id: Number;
  ProjectTitle: string;
  Role: string;
  StartDate: Date;
  EndDate: Date;
  Description: string;
  UserCareerId: Number;

  //   UserCareer: UserCareerModel;
}
