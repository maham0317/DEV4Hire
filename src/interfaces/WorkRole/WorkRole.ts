// export default interface WorkRoleModel {
//   Id: Number;
//   WorkRoleName: string;
//   WorkRoleDesc: string;
//   isCreate: boolean;
//   isLoading: boolean;
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
//   error: string | null;



// }
// export interface WorkRoleState {
//   status: String;
//   error: Object | null;
//   isLoading: Boolean;
//   isError: Boolean;
//   workRole: WorkRoleModel | null
// }
export interface WorkRoleModel {
  Id: Number;
  WorkRoleName: string;
  WorkRoleDesc: string;
}

export interface WorkRoleStateModel {
  status: String;
  error: Object | null;
  isLoading: Boolean;
  isError: Boolean;
  workRole: WorkRoleModel | null
  
}
export interface WorkAdd {
  WorkRoleName: string;
  WorkRoleDesc: string;
} 