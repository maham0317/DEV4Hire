export interface IndustryRoleModel {
  id: Number;
  RoleName: string;
  Description: string;
}

export interface IndustryTypeModel {
  id: Number;
  IndustryName: string;
  Description: string;
}

export interface IndustryTypeWithRolesModel extends IndustryTypeModel {
  IndustryRoleList: IndustryRoleModel[];
}
