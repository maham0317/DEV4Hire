import ProfileInfoModel from "../ProfileInfo/ProfileInfo";

export default interface UserCareerModel {
  Id: Number;
  CompanyName: string;
  StartDate: Date;
  EndDate: Date;
  IsStillWorking: boolean;
  JobTile: string;
  Description: string;
  ProfileInfoId: Number;

  //   profileInfo: ProfileInfoModel
  //   projects: UserProjectModel
}
