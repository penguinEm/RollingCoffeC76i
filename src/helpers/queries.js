const URI_PRODUCTOS = import.meta.env.VITE_API_PRODUCTOS;

/* Funcion para leer productos de la api (con una solicitud GET) */
export const leerProductosApi = async () => {
  try {
    const respuesta = await fetch(URI_PRODUCTOS); //Aqui el response es una promesa
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

/* solicitud GET de 1 producto Funcion para obtener productos de la api ( para hacer el EDIT) */
export const obtenerProductoApi = async (id) => {
  try {
    const respuesta = await fetch(`${URI_PRODUCTOS}/${id}`);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

/*POST: Funcion para CREAR un producto nuevo (con una solicitud POST) y meterlo en la api db.json */
export const crearProductoApi = async (productoNuevo) => {
  try {
    const respuesta = await fetch(URI_PRODUCTOS, {
      // Especificamos el paquete de datos que vamos a cargar, el header es el formato json,que gaurdara en nuestrao db.json
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoNuevo),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

/*DELETE: Funcion para BORRAR producto (solicitud delete) */
export const borrarProductoApi = async (id) => {
  try {
    const respuesta = await fetch(`${URI_PRODUCTOS}/${id}`, {
      // Especificamos el paquete de datos que vamos a cargar, el header es el formato json,que gaurdara en nuestrao db.json
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

/* PUT: PARA EDITAR  */

export const editarProductoApi = async (id, producto) => {
  try {
    const respuesta = await fetch(`${URI_PRODUCTOS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

/* POST PARA EL LOGIN: cuando tenga el backend realizar un post para el login */

/* objeto hardcodeado del ADMIN */
const admin = {
  email: "admin@admin.com",
  contrasenia: "12345678",
};

export const login = (usuario) => {
  if (
    usuario.email === admin.email &&
    usuario.contrasenia === admin.contrasenia
  ) {
    sessionStorage.setItem("loginRollingCoffe", JSON.stringify(usuario.email));

    return true;
  } else {
    return false;
  }
};
