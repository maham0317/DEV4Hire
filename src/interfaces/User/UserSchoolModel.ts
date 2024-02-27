import ProfileInfoModel from "../ProfileInfo/ProfileInfo";

export default interface UserSchoolModel {
  Id: number;
  SchoolName: string;
  Degree?: string;
  FieldOfStudy: string;
  Grade: string;
  Year: number;
  ProfileInfoId: number;

  // profileInfo: ProfileInfoModel
}
