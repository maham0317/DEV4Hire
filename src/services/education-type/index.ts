import EducationTypeModel from "../../interfaces/setup/education-type.model";
import api from "../ApiClient";

export async function getAllEducationType(): Promise<any> {
  let url = `educationtype/list`;
  const response: any = await api.get(url);
  return response.data;
}

export async function getEducationTypeById(id: number): Promise<any> {
  let url = `educationtype/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}

export async function deleteEducationTypeById(id: number): Promise<any> {
  let url = `educationtype/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}

export async function updateEducationTypeById(id: number): Promise<any> {
  let url = `educationtype/update/${id}`;
  const response: any = await api.put(url);
  return response.data;
}

export async function createEducationType(
  data: EducationTypeModel
): Promise<any> {
  let url = `educationtype/create`;
  const response: any = await api.post(url, data);
  return response.data;
}

export const educationService = {
  getAllEducationType,
  getEducationTypeById,
  deleteEducationTypeById,
  updateEducationTypeById,
  createEducationType,
};
