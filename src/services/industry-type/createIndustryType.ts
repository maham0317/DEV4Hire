import { IndustryTypeModel } from "../../interfaces/industry-type/industry-type.model";

//CREATE
export async function createIndustryType(
  model: IndustryTypeModel
): Promise<any> {
  let url = `workrole/create`;
  const response: any = await api.post(url, model);
  return response.data;
}
