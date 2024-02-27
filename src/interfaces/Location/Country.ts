import City from "./City";

export default interface CountryModel {
  id: number;
  CountryName: string;
  Cities: City[];
}
