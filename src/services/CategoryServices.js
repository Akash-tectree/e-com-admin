import requests from './httpService';

const CategoryServices = {
  getAllCategory() {
    return requests.get('/v1/category/all');
  },

  getCategoryById(id) {
    return requests.get(`/v1/category/${id}`);
  },

  addCategory(body) {
    return requests.post('/category/add', body);
  },

  updateCategory(id, body) {
    return requests.put(`/v1/category/update/${id}`, body);
  },

  updateStatus(id, body) {
    return requests.put(`/category/status/${id}`, body);
  },

  deleteCategory(id, body) {
    return requests.patch(`/category/${id}`, body);
  },
};

export default CategoryServices;
