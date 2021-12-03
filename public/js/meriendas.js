/* Clases */

class Merienda {
    constructor(id, nombre, photo, precio){
        this.id = id;
        this.nombre = nombre;
        this.photo = photo;
        this.precio = precio;
    }

    getCard() {
        let card = `
            <div class="box">
                <a href="#" class="fas fa-eye"></a>
                <img src="${this.photo}" alt="">
                <h3>${this.nombre}</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    </div>
                    <span>$ ${this.precio}</span>
                <button class="btn" id="${this.id}">Agregar</button>
            </div>
            `;
            
            return card;
        }
    }

    class Pedido{
    constructor(producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

/* Funciones */
function agregarCantidadCarrito(id){
    let index = carrito.findIndex( pedido => pedido.producto.id === id);
    carrito[index].cantidad++;
}

function crearPedidoCargarCarrito(id){
    let elementoSeleccionado = arrayMeriendas.find( merienda => merienda.id === id );
    let agregarAlCarrito = new Pedido( elementoSeleccionado, 1 );
    carrito.push(agregarAlCarrito);
}

function verificarElemento(id){
    let validacion = false;
    carrito.map( pedido => {
        if(pedido.producto.id === id) {
            validacion = true;
        }
    });
    return validacion;
}

function totalCarrito() {
    let totalCarrito = 0;
    carrito.map( pedido => totalCarrito+= pedido.cantidad * pedido.producto.precio);
    return totalCarrito;
}

/* Ejecucion */
let arrayMeriendas = [];
let carrito = [];

let merienda1 = new Merienda(1, "Merienda Simple", "img/img_home/merienda.jpg", 400);
let merienda2 = new Merienda(2, "Merienda campo", "img/img_home/merienda_campo.jpg", 600);
let merienda3 = new Merienda(3, "Merienda premium", "img/img_home/merienda_2.jpg", 750);
let merienda4 = new Merienda(4, "Para compartir", "/img/imgVarios/para_compartir.jpg", 1200);

arrayMeriendas.push(merienda1);
arrayMeriendas.push(merienda2);
arrayMeriendas.push(merienda3);
arrayMeriendas.push(merienda4);

let meriendasContainer = $("#meriendasContainer");

arrayMeriendas.forEach( merienda => {
    meriendasContainer.append(merienda.getCard());
})

$("button").click( (e) => {
    let idElementoSeleccionado = parseInt(e.target.id);
    if(verificarElemento(idElementoSeleccionado)){
        agregarCantidadCarrito(idElementoSeleccionado);
    } else {
        crearPedidoCargarCarrito(idElementoSeleccionado);
    }
    renderizarCarrito();
});

const renderizarCarrito = () => {

    let carritoDiv = $("#carrito");
    carritoDiv.html("");
    carritoDiv.append(`
        <h1 class="carritoTitle"> Carrito </h1>
        <div class="tableCarritoHeader">
            <div class="tableCarritoCell"> Imagen </div>
            <div class="tableCarritoCell"> Producto </div>
            <div class="tableCarritoCell"> Cantidad </div>
            <div class="tableCarritoCell"> Precio Unitario </div>
            <div class="tableCarritoCell"> Subtotal </div>
            <div class="tableCarritoCell"> Borrar </div>
        </div>
    `);

    carrito.forEach( pedido => {
        carritoDiv.append(`
            <div class="tableCarritoBody">
                <div class="tableCarritoCell"><img class="carritoImg" src="${pedido.producto.photo}"/></div>
                <div class="tableCarritoCell"> ${pedido.producto.nombre} </div>
                <div class="tableCarritoCell"> ${pedido.cantidad} </div>
                <div class="tableCarritoCell"> $ ${pedido.producto.precio} </div>
                <div class="tableCarritoCell"> $ ${pedido.producto.precio * pedido.cantidad} </div>
                <div class="tableCarritoCell"><button class="btnCarrito" id="${pedido.producto.id}"> X </button></div>
            </div>
            `)
    });
    
    carritoDiv.append(`
        <div class="totalCarrito">
            <h2> Total: $ ${totalCarrito()} </h2>
        </div>
        `
    );
    
    $(".btnCarrito").click((e) => {
        let idProductoParaEliminar = parseInt(e.target.id);
        let index = carrito.findIndex( pedido => pedido.producto.id === idProductoParaEliminar);
        carrito.splice(index, 1);
        renderizarCarrito();
    });

}    



