import IndustryRoleModel, { IndustryTypeModel } from "../Industry/Industry";
import ProfileInfoModel from "../ProfileInfo/ProfileInfo";

export default interface UserIndustryModel {
  Id: Number;
  IndustryTypeId: Number;
  IndustryRoleId: Number;
  ProfileInfoId: Number;

  //   IndustryType: IndustryTypeModel;
  //   IndustryRole: IndustryRoleModel;
  //   profileInfo: ProfileInfoModel;
}
