import { AwardModel } from "../../interfaces1/award/award.model";
import api from "../ApiClient";

export async function getAllAwards(): Promise<any> {
  let url = `award/list`;
  const response: any = await api.get(url);
  return response.data;
}

export async function getAwardById(id: number): Promise<any> {
  let url = `award/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}

export async function deleteAwardById(id: number): Promise<any> {
  let url = `award/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}

export async function updateAwardById(id: number): Promise<any> {
  let url = `award/update/${id}`;
  const response: any = await api.put(url);
  return response.data;
}

export async function createAward(args: AwardModel): Promise<any> {
  let url = `award/create`;
  const response: any = await api.post(url);
  return response.data;
}

export const awardService = {
  getAllAwards,
  getAwardById,
  deleteAwardById,
  updateAwardById,
  createAward,
};
