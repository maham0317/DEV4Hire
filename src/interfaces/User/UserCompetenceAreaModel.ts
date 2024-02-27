import ProfileInfoModel from "../ProfileInfo/ProfileInfo";
import SkillTypeModel from "../Skill/SkillType";

export default interface UserCompetenceAreaModel {
  Id: Number;
  ProfileInfoId: Number;
  SkillTypeId: Number;
  OrderNumber: Number;

  //   profileInfo: ProfileInfoModel,
  //   SkillType: SkillTypeModel
}
