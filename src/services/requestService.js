import requests from './httpService';

const RequestServices = {
  getAllRequest() {
    return requests.get('/v2/request-quote/all');
  },

  getRequestById(id) {
    return requests.get(`/v2/request-quote/${id}`);
  },

  addRequest(body) {
    return requests.post('/Request/add', body);
  },

  updateRequest(id, body) {
    return requests.put(`/Request/${id}`, body);
  },

  updateStatus(id, body) {
    return requests.put(`/Request/status/${id}`, body);
  },

  deleteRequest(id, body) {
    return requests.patch(`/Request/${id}`, body);
  },
};

export default RequestServices;
