export default interface WorkRoleModel {
  Id: Number;
  WorkRoleName: string;
  WorkRoleDesc: string;
  isCreate: boolean;
  isLoading: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;



}