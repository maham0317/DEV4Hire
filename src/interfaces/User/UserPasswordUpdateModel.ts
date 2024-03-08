import RoleModel from "../role/role";

export default interface UserModel {
  UserName: string;
  Email: string;
  Name: string;
  ActivationCode: string;
}

export interface UserPasswordUpdateModel {
  Password: string;
  ConfirmPassword: string;
  ActivationCode: string;
}

export interface ChangePasswordModel {
  OldPassword: string;
  NewPassword: string;
  ConfirmPassword: string;
}

export interface ProfileModel {
  Email: string;
  Phone: string;
}

export interface CompanyUserModel {
  Id: string;
  Email: string;
  FullName: string;
  Phone: string;
  IsAdmin: boolean;
  Roles: RoleModel[];
}

export interface UserForgotPasswordModel {
  UserName: string;
  Email: string;
}

export interface ResetPasswordModel {
  Password: string;
  ConfirmPassword: string;
  Email: string;
  Token: string;
}

export interface ResetPasswordTokenValidateModel {
  Email: string;
  Token: string;
}
