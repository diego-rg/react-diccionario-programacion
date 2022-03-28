import axios from "axios";

//función auxiliar con la url base a la que haremos requests con axios
export default axios.create({
  baseURL: "https://api-diccionarioprogramacion.herokuapp.com/api",
});
