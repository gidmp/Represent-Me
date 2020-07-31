import axios from "axios";

export default {
  getLegislators: function (state) {
    return axios.get("/api/legislators/" + state);
  },
};
