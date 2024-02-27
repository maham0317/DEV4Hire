import ProfileInfoModel from "../ProfileInfo/ProfileInfo";
import WorkRoleModel from "../WorkRole/WorkRole";

export default interface UserWorkRoleModel {
  Id: number;
  ProfileInfoId: number;
  WorkRoleTypeId: number;
  OrderNumber: number;

  // profileInfo: ProfileInfoModel
  // WorkRoleType: WorkRoleModel
}
