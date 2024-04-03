import { IndustryRoleModel } from "@/interfaces/industry-type/industry-type.model";
import api from "@/services/ApiClient";

export async function getAllIndustryRole(): Promise<any> {
  let url = `industryrole/list`;
  const response: any = await api.get(url);
  return response.data;
}
export async function getIndustryRoleById(id: number): Promise<any> {
  let url = `industryrole/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}

export async function deleteIndustryRoleById(id: number): Promise<any> {
  let url = `industryrole/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}

export async function updateIndustryRoleById(id: number): Promise<any> {
  let url = `industryrole/update/${id}`;
  const response: any = await api.put(url);
  return response.data;
}

export async function createIndustryRole(
  args: IndustryRoleModel
): Promise<any> {
  let url = `industryrole/create`;
  const response: any = await api.post(url);
  return response.data;
}

export const industryRoleService = {
  getAllIndustryRole,
  getIndustryRoleById,
  deleteIndustryRoleById,
  updateIndustryRoleById,
  createIndustryRole,
};
