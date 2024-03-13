import SkillTypeModel from "../../interfaces1/skill/skill-type.model";
import api from "../ApiClient";

export async function getAllSkill(): Promise<any> {
  let url = `skill/list`;
  const response: any = await api.get(url);
  return response.data;
}
export async function getSkillById(id: number): Promise<any> {
  let url = `skill/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}
export async function deleteSkillById(id: number): Promise<any> {
  let url = `skill/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}
export async function updateSkillById(id: number): Promise<any> {
  let url = `skill/update/${id}`;
  const response: any = await api.put(url);
  return response.data;
}
export async function createSkill(args: SkillTypeModel): Promise<any> {
  let url = `skill/create`;
  const response: any = await api.post(url);
  return response.data;
}
export const SkillService = {
  getAllSkill,
  getSkillById,
  deleteSkillById,
  updateSkillById,
  createSkill,
};
