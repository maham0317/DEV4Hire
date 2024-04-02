import City from "@/interfaces/location/city.model";

export default interface CountryModel {
  id: number;
  CountryName: string;
  Cities: City[];
}
