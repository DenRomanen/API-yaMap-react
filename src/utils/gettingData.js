import axios from "axios";
import { KAZAN_PlACES } from "./config.js";

export const gettingData = () => {
  return axios
    .get(KAZAN_PlACES)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => console.log(error));
};
