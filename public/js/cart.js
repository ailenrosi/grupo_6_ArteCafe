leerLocalStorageCompra()
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (producto){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <input type="number" class="form-control cantidad" min="1" value=${producto.cantidad}>
            </td>
            <td id='subtotales'>${producto.precio * producto.cantidad}</td>
            <td>
                <a href="#" class="borrar-producto fas fa-times-circle" style="font-size:30px" data-id="${producto.id}"></a>
            </td>
        `;
        listaCompra.appendChild(row);
    })

