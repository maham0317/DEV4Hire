import City from "./city.model";

export default interface CountryModel {
  id: number;
  CountryName: string;
  Cities: City[];
}
