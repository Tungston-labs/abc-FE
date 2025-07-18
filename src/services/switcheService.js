import api from './axios';

export const addNewSwitch = (credentials) => {
  return api.post('/network/switches/', credentials);
};

export const EditSwitch = (credentials,id) => {
  return api.put(`/network/switches/${id}/`, credentials);
};

export const getAllSwitches = async () => {
  const response = await api.get("/network/switches/?page=1&page_size=10"); 
  return response.data;
};