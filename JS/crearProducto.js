import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

//validaciones

async function crearProducto(evento){
    evento.preventDefault();

    const imagen = document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
   
    try{
        await conexionAPI.crearProducto(nombre, imagen, precio )
    
        window.location.href="../pages/envio-concluido.html"
    }catch(e){
        alert(e);
    }
}

formulario.addEventListener("submit",evento=>crearProducto(evento));