import CityModel from "../Location/City";
import CountryModel from "../Location/Country";
import ProfileInfoModel from "../ProfileInfo/ProfileInfo";

export default interface UserLocationModel {
  Id: Number;
  CityId: Number;
  CountryId: Number;
  ProfileInfoId: Number;

  // ProfileInfo: ProfileInfoModel
  // City: CityModel
  // Country: CountryModel
}
