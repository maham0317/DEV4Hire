import ProficiencyModel from "../../interfaces/setup/proficiency";
import api from "../ApiClient";

export async function getAllProficiency(): Promise<any> {
  let url = `proficiency/list`;
  const response: any = await api.get(url);
  return response.data;
}
export async function getProficiencyById(id: number): Promise<any> {
  let url = `proficiency/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}

export async function deleteProficiencyById(id: number): Promise<any> {
  let url = `proficiency/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}

export async function updateProficiencyById(id: number): Promise<any> {
  let url = `proficiency/update/${id}`;
  const response: any = await api.put(url);
  return response.data;
}

export async function createProficiency(args: ProficiencyModel): Promise<any> {
  let url = `proficiency/create`;
  const response: any = await api.post(url);
  return response.data;
}

export const proficiencyService = {
  getAllProficiency,
  getProficiencyById,
  deleteProficiencyById,
  updateProficiencyById,
  createProficiency,
};
