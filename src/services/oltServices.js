import api from './axios';

export const addNewOlt = (credentials) => {
  return api.post('/network/olts/', credentials);
};

export const EditOlt = (credentials,id) => {
  return api.put(`/network/olts/${id}/`, credentials);
};

export const getAllOlts = async () => {
    //need pagination
  const response = await api.get("/network/olts/"); 
  return response.data;
};