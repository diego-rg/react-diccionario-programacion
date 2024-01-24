import axios from "axios";

//Función auxiliar con la url base a la que haremos requests con axios
export default axios.create({
  baseURL: "https://api-diccionario-programacion.onrender.com/api",
});
