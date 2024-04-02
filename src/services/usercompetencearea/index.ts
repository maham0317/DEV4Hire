import api from "@/services/ApiClient";

//GET
export const getAllCompetenceArea: any = async () => {
  let url = `usercompetencearea/list`;
  const response = await api.get(url);
  return response.data;
};

//CREATE
export const createCompetenceArea: any = async () => {
  let url = `usercompetencearea/create`;
  const response = await api.post(url);
  return response.data;
};

//GETBYID
export const getcompetenceAreaById: any = async (id: number) => {
  let url = `usercompetencearea/list/${id}`;
  const response = await api.get(url);
  return response.data;
};

//UPDATE
export const updatecompetenceAreaById: any = async (id: number) => {
  let url = `usercompetencearea/update/${id}`;
  const response = await api.put(url);
  return response.data;
};

//DELETE
export const deletecompetenceAreaById: any = async (id: number) => {
  let url = `usercompetencearea/delete/${id}`;
  const response = await api.delete(url);
  return response.data;
};

export const CompetenceAreaServices = {
  getAllCompetenceArea,
  getcompetenceAreaById,
  deletecompetenceAreaById,
  updatecompetenceAreaById,
  createCompetenceArea,
};
