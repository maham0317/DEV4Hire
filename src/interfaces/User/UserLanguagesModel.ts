import LanguageModel from "../Language/Language";
import ProfileInfoModel from "../ProfileInfo/ProfileInfo";
import ProficiencyModel from "../Setup/Proficiency";

export default interface UserLanguagesModel {
  Id: Number;
  LanguageId: Number;
  ProficiencyId: Number;
  ProfileInfoId: Number;

  // Language: LanguageModel
  // proficiency: ProficiencyModel
  // profileInfo: ProfileInfoModel
}
