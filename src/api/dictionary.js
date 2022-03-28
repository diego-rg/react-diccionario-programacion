import axios from "axios";

export default axios.create({
  baseURL: "https://api-diccionarioprogramacion.herokuapp.com/api",
});
