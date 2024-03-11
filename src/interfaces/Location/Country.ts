import City from "./City";

export default interface CountryModel {
  id: number;
  CountryName: string;
  Cities: City[];
}
export interface CountryStateModel {
  status: string;
  error: object | null;
  isLoading: boolean;
  isError: boolean;
  data: CountryModel | null;
}
