async function listProducts(){
    const conection = await fetch("http://localhost:3001/Productos");

    const combretConection = conection.json();

    return combretConection
}

async function crearProducto(nombre, imagen, precio){
    const conection = await fetch("http://localhost:3001/Productos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    });
    if (!conection.ok) {
        throw new Error("No fue posible crear el producto");
    }
    const combretConection = await conection.json();
    return combretConection;
}

const borrarCuadro = async (id) => {
    try {
        const res = await fetch(`http://localhost:3001/Productos/${id}`, {
            method: "DELETE"
        });
        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        return await res.json();
    } catch(err) {
        console.log(err);
    }
}

export const conexionAPI = {
    listProducts, crearProducto, borrarCuadro
}