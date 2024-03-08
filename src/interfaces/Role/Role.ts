// export default interface RoleModel {
//   Id: Number;
//   Name: string;
// }

 interface Roles {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  isLoading: boolean;

}
export default Roles