// Constantes globales

const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

// productos

const productos = [
    {
        id: 1,
        nombre: "Chocotorta",
        precio: 2000,
        img: "https://images.aws.nestle.recipes/original/e89d19d331ac413811e3b1c11a893991_torta-princesa.jpg",
        cantidad: 1,
},

{
    id: 2,
    nombre: "Brownie",
    precio: 1000,
    img: "https://images.aws.nestle.recipes/original/e89d19d331ac413811e3b1c11a893991_torta-princesa.jpg",
    cantidad: 1,
}

];

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
    `

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