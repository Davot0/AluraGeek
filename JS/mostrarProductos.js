import { conexionAPI } from "./conexionAPI.js";

const list = document.querySelector("[data-list]")

function createCard(id, imagen, nombre, precio) {
    const product = document.createElement("article");
    product.className = "item_creation";
    product.innerHTML = `<img src="${imagen}" alt="img no encontrada">
    <h3>${nombre}</h3>
    <p>El precio es de: ${precio}</p>
    <a data-delete><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></a>`;


    const botonEliminar = product.querySelector("[data-delete]");
    botonEliminar.addEventListener("click", () => {
        conexionAPI.borrarCuadro(id)
        .then(() => {
            product.remove();
        })
        .catch(err => console.log(err));
    });

    return product;
}

async function listProducts(){
    const listAPI = await conexionAPI.listProducts();
    listAPI.forEach(product =>list.appendChild(createCard(product.id, product.imagen, product.nombre, product.precio)));
}



listProducts();