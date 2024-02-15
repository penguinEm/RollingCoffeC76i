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

/* Funcion para crear un producto nuevo (con una solicitud POST) y meterlo en la api db.json */
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
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
