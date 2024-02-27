import ProfileInfoModel from "../ProfileInfo/ProfileInfo";
import SkillTypeModel from "../Skill/SkillType";

export default interface UserSkillModel {
  Id: Number;
  SkillTypeId: Number;
  SkillLevel: Number;
  SkillExperienceInYear: Number;
  SkillLastUsed: Number;
  ProfileInfoId: Number;

  //   SkillType: SkillTypeModel;
  //   profileInfo: ProfileInfoModel;
}
