import CountryModel from "../../interfaces/location/country.model";
import api from "../ApiClient";

export async function getAllCountries(): Promise<any> {
  let url = `locations/allcountries`;
  const response: any = await api.get(url);
  return response.data;
}
export async function getCountryById(id: number): Promise<any> {
  let url = `locations/getcountrybyid/${id}`;
  const response: any = await api.get(url);
  return response.data;
}
export async function deleteCountryById(id: number): Promise<any> {
  let url = `locations/deletecountry/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}
export async function updateCountryById(id: number): Promise<any> {
  let url = `locations/updatecountry/${id}`;
  const response: any = await api.put(url);
  return response.data;
}
export async function createCountry(args: CountryModel): Promise<any> {
  let url = `locations/addcountry`;
  const response: any = await api.post(url);
  return response.data;
}
export const countryService = {
  getAllCountries,
  getCountryById,
  deleteCountryById,
  updateCountryById,
  createCountry,
};
