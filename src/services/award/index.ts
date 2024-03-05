import api from "../ApiClient";

export async function getAllAwards(): Promise<any> {
  let url = `award/list`;
  const response: any = await api.get(url);
  return response.data;
}

export const awardService = {
  getAllAwards,
};
