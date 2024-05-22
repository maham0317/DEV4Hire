import City from "@/interfaces/location/city.model";

export default interface CountryModel {
  Id: number;
  CountryName: string;
  Cities: City[];
}
