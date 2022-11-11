// Constantes globales

const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const agregarCarrito = document.getElementsByClassName("comprar")


//get item + array

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// set item
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};


// codigo

// Perdon Dani, con fetch no me funciona, nose como seguirlo desde aca estoy trabado y ya no me queda tiempo...:S
// te lo dejo comentado, ya que el proyecto funciona sin el fetch.


// const listado = document.getElementById("shopContent");

// const listadoProductos = `../data.json`;

// fetch(listadoProductos)
//     .then(respuesta => respuesta.json())
//     .then(datos => {
//         datos.forEach( producto => {
//             listado.innerHTML += `  <div class= "card">
//                                     <h3> ${producto.nombre} </h3>
//                                     <img src="${producto.img}"
//                                     <strong class="price"> Precio: $${producto.precio} </strong>
//                                     <button class= "comprar">comprar</button>
//                                     </div>
//                                     `
//         })
//     })
//     .catch(error => console.log(error))
//     .finally(() => console.log("Proceso Finalizado"));

    

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}"
    <h3> ${product.nombre}</h3>
    <p class="price"> ${product.precio} $ </p>
    `;
    

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";
    

    content.append(comprar);

    comprar.addEventListener("click", () => {

        
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        
        if (repeat) {
            carrito.map ((prod) => {
                if (prod.id === product.id){
                    prod.cantidad++;
                }
            });
        } else {

        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
            
             });
         }
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();
        saveLocal();
    });

});


