// src/services/customerService.js
import api from './axios';

export const getAllCustomers = async (search = '', page = 1) => {
  const response = await api.get(`/client/customer/?search=${search}&page=${page}`);
  return response.data;
};

export const addNewCustomer = (formData) => {
    return api.post('/client/customer/', formData);
  };
  
  

export const editCustomer = (id, credentials) => {
  return api.put(`/client/customer/${id}/`, credentials);
};

export const deleteCustomer = (id) => {
  return api.delete(`/client/customer/${id}/`);
};
