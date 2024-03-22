import CityModel from "../../interfaces/location/city.model";
import api from "../ApiClient";

export async function getAllCities(): Promise<any> {
  let url = `locations/allcities`;
  const response: any = await api.get(url);
  return response.data;
}
export async function getCityById(id: number): Promise<any> {
  let url = `locations/getcitybyid/${id}`;
  const response: any = await api.get(url);
  return response.data;
}
export async function deleteCityById(id: number): Promise<any> {
  let url = `locations/deletecity/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}
export async function updateCity(model: CityModel): Promise<any> {
  let url = `locations/updatecity/${model}`;
  const response: any = await api.put(url, model);
  return response.data;
}
export async function createCity(model: CityModel): Promise<any> {
  let url = `locations/addcity`;
  const response: any = await api.post(url, model);
  return response.data;
}
export const cityService = {
  getAllCities,
  getCityById,
  deleteCityById,
  updateCity,
  createCity,
};
