import { SortByProfileInfo } from "@/enums/profile-info/profile-info.enums";
import BaseFilterModel from "@/interfaces/base-filter.model";

export default interface ProfileInfoFilterModel extends BaseFilterModel {
  SortBy: SortByProfileInfo;
}
