import api from "@/services/ApiClient";
import WorkRoleModel from "@/interfaces/work-role/work-role.model";

//GET
export async function getAllWorkRole(): Promise<any> {
  let url = `workrole/list`;
  const response: any = await api.get(url);
  return response.data;
}
//GET BY ID
export async function getWorkRoleByid(id: number): Promise<any> {
  let url = `workrole/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}
//DELETE
export async function deleteWorkrole(id: number): Promise<any> {
  let url = `workrole/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}
//UPDATE
export async function updateWorkRole(model: WorkRoleModel): Promise<any> {
  let url = `workrole/update`;
  const response: any = await api.put(url, model);
  return response.data;
}
//CREATE
export async function createWorkrole(model: WorkRoleModel): Promise<any> {
  let url = `workrole/create`;
  const response: any = await api.post(url, model);
  return response.data;
}

export const roleServices = {
  getAllWorkRole,
  updateWorkRole,
  createWorkrole,
  deleteWorkrole,
  getWorkRoleByid,
};
