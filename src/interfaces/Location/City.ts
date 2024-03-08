export default interface CityModel {
  id: Number;
  CityName: string;
  CountryId: Number;
}
export interface CityStateModel {
  status: string;
  error: object | null;
  isLoading: boolean;
  isError: boolean;
  data: CityModel | null;
}
