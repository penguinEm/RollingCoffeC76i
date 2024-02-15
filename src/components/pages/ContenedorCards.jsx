import { Container } from "react-bootstrap";
import Producto from "../pages/producto/Producto";
import { leerProductosApi } from "../../helpers/queries";
import { useState, useEffect } from "react";

const ContenedorCards = () => {
   /* Variables globlaes---------------------------------- */
   const [productos, setProductos] = useState([]);

   /* Funciones ------------------------------------------ */
   useEffect(() => {
     traerProductos();
   }, []);
 
   const traerProductos = async () => {
     try {
       await leerProductosApi();
     } catch {
       console.log(error);
     }
   };
 
   /* Logica extra y maquetado --------------------------- */
  return (
    <Container>
      <h1 className=" display-4 mt-5 border-bottom pb-3">Nuestros Productos</h1>
      <article className="row justify-content-center justify-content-sm-center justify-content-lg-between justify-content-md-between">
        <Producto></Producto>
        <Producto></Producto>
        <Producto></Producto>
        <Producto></Producto>
      </article>
    </Container>
  );
};

export default ContenedorCards;
