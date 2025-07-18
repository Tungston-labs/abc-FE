import api from './axios';

export const addNewLco = (credentials) => {
  return api.post('/lcos/lco/', credentials);
};

export const EditLco = (credentials,id) => {
  return api.put(`/lcos/lco/${id}/`, credentials);
};

export const deleteLcoById = (id) => {
  return api.delete(`/lcos/lco/${id}/`);
};

export const getAllLcos = async () => {
    //need pagination
  const response = await api.get("/lcos/lco/"); 
  return response.data;
};