import requests from "./httpService";

const UserServices = {
  getAllUsers(body) {
    return requests.get(`/user`, body);
  },
  getUserById(id) {
    return requests.get(`/user/${id}`);
  },
  login(payload) {
    return requests.post("/v1/user/login", payload);
  },
  deleteUser(id) {
    return requests.delete(`/user/${id}`);
  },
};

export default UserServices;
