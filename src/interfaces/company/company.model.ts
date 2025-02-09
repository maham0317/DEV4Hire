import BaseFilterModel from "@/interfaces/base-filter.model";

export default interface CompanyModel {
  Orgnumber: string;
  Name: string;
  Phone: string;
  Email: string;
  Address: string;
  ZipCode: string;
  City: string;
  Status: boolean;
}

export interface CompanyFilterModel extends BaseFilterModel {}
