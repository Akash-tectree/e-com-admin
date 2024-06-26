import requests from './httpService';

const BrandServices = {
  getAllBrand() {
    return requests.get('/v1/brand/all');
  },

  getBrandById(id) {
    return requests.get(`/Brand/${id}`);
  },

  addBrand(body) {
    return requests.post('/Brand/add', body);
  },

  updateBrand(id, body) {
    return requests.put(`/Brand/${id}`, body);
  },

  updateStatus(id, body) {
    return requests.put(`/Brand/status/${id}`, body);
  },

  deleteBrand(id, body) {
    return requests.patch(`/Brand/${id}`, body);
  },
};

export default BrandServices;
