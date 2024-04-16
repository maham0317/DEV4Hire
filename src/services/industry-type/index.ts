import {
  IndustryTypeModel,
  IndustryTypeWithRolesModel,
} from "@/interfaces/industry-type/industry-type.model";
import api from "@/services/ApiClient";

const controller = "industrytype";

export async function getAllIndustryType(): Promise<any> {
  let url = `${controller}/list`;
  const response: any = await api.get(url);
  return response.data;
}
export async function getIndustryTypeById(id: number): Promise<any> {
  let url = `${controller}/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}

export async function deleteIndustryTypeById(id: number): Promise<any> {
  let url = `${controller}/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}

export async function updateIndustryType(
  model: IndustryTypeModel
): Promise<any> {
  let url = `${controller}/update/${model}`;
  const response: any = await api.put(url, model);
  return response.data;
}

export async function createIndustryType(
  model: IndustryTypeModel
): Promise<any> {
  let url = `${controller}/create`;
  const response: any = await api.post(url, model);
  return response.data;
}

// export async function createIndustryTypeWithRole(
//   model: IndustryTypeWithRolesModel
// ): Promise<any> {
//   let url = `controller/createwithroles`;
//   const response: any = await api.post(url);
//   return response.data;
// }

export const industryTypeService = {
  getAllIndustryType,
  getIndustryTypeById,
  deleteIndustryTypeById,
  updateIndustryType,
  createIndustryType,
  // createIndustryTypeWithRole,
};
