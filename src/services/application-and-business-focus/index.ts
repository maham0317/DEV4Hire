import { ApplicationAndBusinessFocusModel } from "../../interfaces/application-and-business-focus/application-and-business-focus.model";
import api from "../ApiClient";

export async function getAllApplicationAndBusinessFocus(): Promise<any> {
  let url = `applicationandbusinessfocus/list`;
  const response: any = await api.get(url);
  return response.data;
}
export async function getApplicationAndBusinessFocusById(
  id: number
): Promise<any> {
  let url = `applicationandbusinessfocus/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}

export async function deleteApplicationAndBusinessFocusById(
  id: number
): Promise<any> {
  let url = `applicationandbusinessfocus/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}

export async function updateApplicationAndBusinessFocusById(
  id: number
): Promise<any> {
  let url = `applicationandbusinessfocus/update/${id}`;
  const response: any = await api.put(url);
  return response.data;
}

export async function createApplicationAndBusinessFocus(
  args: ApplicationAndBusinessFocusModel
): Promise<any> {
  let url = `applicationandbusinessfocus/create`;
  const response: any = await api.post(url);
  return response.data;
}

export const applicationAndBusinessFocusService = {
  getAllApplicationAndBusinessFocus,
  getApplicationAndBusinessFocusById,
  deleteApplicationAndBusinessFocusById,
  updateApplicationAndBusinessFocusById,
  createApplicationAndBusinessFocus,
};
