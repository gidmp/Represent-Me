import axios from "axios";
require("dotenv").config();

export default {
  getLegislatorsCID: function (state) {
    return axios.get(
      `http://www.opensecrets.org/api/?method=getLegislators&id=${state}&apikey=${process.env.REACT_APP_OPENSECRET_API_KEY}&output=json`
    );
  },

  getCandContrib: function (CID) {
    return axios.get(
      `https://www.opensecrets.org/api/?method=candContrib&cid=${CID}&cycle=2020&apikey=${process.env.REACT_APP_OPENSECRET_API_KEY}`
    );
  },

  getCandIndustry: function (CID) {
    return axios.get(
      `https://www.opensecrets.org/api/?method=candIndustry&cid=${CID}&cycle=2020&apikey=${process.env.REACT_APP_OPENSECRET_API_KEY}`
    );
  },

  getVoterInfo: function (address) {
    return axios.get(
      `https://civicinfo.googleapis.com/civicinfo/v2/voterinfo?address=${address}&returnAllAvailableData=true&key=${process.env.REACT_APP_GOOGLE_CIVICS_API_KEY}`
    );
  },

  getRepresentatives: function (address) {
    return axios.get(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}&levels=country&key=${process.env.REACT_APP_GOOGLE_CIVICS_API_KEY}`
    );
  },
};
