import axios from "axios";

export default {
  postItem: function(itemData) {
    return axios.post("/api/inventory", itemData);
  }
};