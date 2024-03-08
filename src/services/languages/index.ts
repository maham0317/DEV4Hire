import LanguageModel from "../../interfaces/language/language";
import api from "../ApiClient";

export async function getAllLanguages(): Promise<any> {
  let url = `languages/list`;
  const response: any = await api.get(url);
  return response.data;
}

export async function getLanguagesById(id: number): Promise<any> {
  let url = `languages/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}

export async function deleteLanguagesById(id: number): Promise<any> {
  let url = `languages/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}

export async function updateLanguagesById(id: number): Promise<any> {
  let url = `languages/update/${id}`;
  const response: any = await api.put(url);
  return response.data;
}

export async function createLanguages(args: LanguageModel): Promise<any> {
  let url = `languages/create`;
  const response: any = await api.put(url);
  return response.data;
}

export const languagesService = {
  getAllLanguages,
  getLanguagesById,
  deleteLanguagesById,
  updateLanguagesById,
  createLanguages,
};
