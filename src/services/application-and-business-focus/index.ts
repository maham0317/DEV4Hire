import { ApplicationAndBusinessFocusModel } from "../../interfaces/application-and-business-focus/application-and-business-focus.model";
import api from "../ApiClient";

const controller = "applicationandbusinessfocus";
export async function getAllApplicationAndBusinessFocus(): Promise<any> {
  let url = `${controller}/list`;
  const response: any = await api.get(url);
  return response.data;
}
export async function getApplicationAndBusinessFocusById(
  id: number
): Promise<any> {
  let url = `${controller}/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}

export async function deleteApplicationAndBusinessFocusById(
  id: number
): Promise<any> {
  let url = `${controller}/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}

export async function updateApplicationAndBusinessFocus(
  model: ApplicationAndBusinessFocusModel
): Promise<any> {
  let url = `${controller}/update/${model}`;
  const response: any = await api.put(url, model);
  return response.data;
}

export async function createApplicationAndBusinessFocus(
  model: ApplicationAndBusinessFocusModel
): Promise<any> {
  let url = `${controller}/create`;
  const response: any = await api.post(url, model);
  return response.data;
}

export const applicationAndBusinessFocusService = {
  getAllApplicationAndBusinessFocus,
  getApplicationAndBusinessFocusById,
  deleteApplicationAndBusinessFocusById,
  updateApplicationAndBusinessFocus,
  createApplicationAndBusinessFocus,
};
