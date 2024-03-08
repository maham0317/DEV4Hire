import api from "../ApiClient";

//GET
export const getAllWorkRole: any = async () => {
    let url = `workrole/list`
    const response = await api.get(url);
    return response.data
};

//UPDATE
export const updateWorkRole: any = async (id: number) => {
    let url = `workrole/update/${id}`
    const response = await api.put(url);
    return response.data
};
//CREATE
export const createWorkrole: any = async () => {
    let url = `workrole/create`
    const response = await api.post(url);
    return response.data;
}
//DELETE
export const deleteWorkrole: any = async (id: number) => {
    let url = `workrole/delete/${id}`
    const response = await api.delete(url);
    return response.data
}
//GET BY ID
export const getWorkRoleByid: any = async (id: number) => {
    let url = `workrole/list/${id}`
    const response = await api.get(url);
    return response.data
};
export const roleServices = {
    getAllWorkRole,
    updateWorkRole,
    createWorkrole,
    deleteWorkrole,
    getWorkRoleByid,
};

