import api from './axios';

export const addNewIsp = (credentials) => {
  return api.post('/network/isp/', credentials);
};

export const EditIsp = (credentials,id) => {
  return api.put(`/network/isp/${id}/`, credentials);
};

// export const deleteLcoById = (id) => {
//   return api.delete(`/lcos/lco/${id}/`);
// };

export const getAllIsp = async () => {
    //need pagination
  const response = await api.get("/network/isp/"); 
  return response.data;
};