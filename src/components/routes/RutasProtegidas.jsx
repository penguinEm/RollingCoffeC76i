/* Componente que va a tener la logica para proteger las rutas */

import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
  //Agregar la logica que quiero que ocurra si soy admin o no.
  //    1. si en el sesion esta la key del login dejo que vea las rutas, en caso contrario no.
  /* traigo del sesion storage */
  const admin =
    JSON.parse(sessionStorage.getItem("keyLoginRollingCoffe")) || null;
  // 2. quiero saber si no es el admin.
  if (admin === null) {
    //Si no es el edmin lo redirecciono al login
    return <Navigate to={"/login"}></Navigate>;
  } else {
    /* si soy admin - entonces le permito ingresar a las rutas protegidas */
    return children;
  }
};

export default RutasProtegidas;
