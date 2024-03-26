import { AwardModel } from "@/interfaces/award/award.model";
import api from "@/services/ApiClient";

const controller = "award";
export async function getAllAwards(): Promise<any> {
  let url = `${controller}/list`;
  const response: any = await api.get(url);
  return response.data;
}

export async function getAwardById(id: number): Promise<any> {
  let url = `${controller}/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}

export async function deleteAwardById(id: number): Promise<any> {
  let url = `${controller}/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}

export async function updateAward(model: AwardModel): Promise<any> {
  let url = `${controller}/update/${model}`;
  const response: any = await api.put(url, model);
  return response.data;
}

export async function createAward(model: AwardModel): Promise<any> {
  let url = `${controller}/create`;
  const response: any = await api.post(url, model);
  return response.data;
}

export const awardService = {
  getAllAwards,
  getAwardById,
  deleteAwardById,
  updateAward,
  createAward,
};
