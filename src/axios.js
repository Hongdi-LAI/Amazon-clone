// axios as the fetching

import axios from "axios";

const instance = axios.create({
  //CLOUD FUNCTION API URL
  //baseURL: 'http://localhost:5001/clone-27d1c/us-central1/api'
  baseURL: "https://us-central1-clone-27d1c.cloudfunctions.net/api",
});

export default instance;
