export interface IndustryRoleModel {
  id: Number;
  RoleName: string;
  Description: string;
}

export interface IndustryTypeModel {
  Id: number;
  IndustryName: string;
  Description: string;
  ParentId: number;
}

export interface IndustryTypeWithRolesModel extends IndustryTypeModel {
  IndustryRoleList: IndustryRoleModel[];
}

export interface IAddIndustryProp {
  refreshResult: (model: IndustryTypeModel) => void;
}

export interface IEditIndustryProp extends IAddIndustryProp {
  selectedData: IndustryTypeModel | undefined;
}