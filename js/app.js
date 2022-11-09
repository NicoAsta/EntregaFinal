// Constantes globales

const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");


//get item + array

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// set item
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};


// codigo

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

//Promesa

// const hacerPedido = () => {
//     return new Promise ((resolve, reject) => {
        
//             resolve(productos)
//         }
//     )
// }

// let productos = []
// const renderProductos = (arr) => {
//     let html;
//     for (const item of arr) {
//         const {id, img, nombre, precio, cantidad} = item;

//         html `<div class= "modal-content"
//         <img src="${product.img}">
//         <h3>${product.nombre} </h3>
//         <p> ${product.precio} $ </p>
//         <span class= "restar"> - </span>
//         <p> Cantidad: ${product.cantidad} </p>
//         <span class= "sumar"> + </span>
//         <p> Total: ${product.cantidad * product.precio} </p>

//         <button> comprar </button> </div>` 
//     }
// }

// pedirProductos().then((res)=> {
//     productos= res;
//     renderProductos(productos)
// })


// fetch

// fetch (`../data.json`)
// .then (response=> response.json())
// .then (data => {
//     console.log(data);
//     renderProductos (data);
// })
// .catch(err=>console.log(err))

