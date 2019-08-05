import axios from "axios";

export default {
  postItem: function(itemData) {
    return axios.post("/api/inventory", itemData);
  },
  signUp: function(userData) {
    return axios.post("api/user", userData);
  }
};