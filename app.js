const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/home.html'))
})
app.get('/header', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/header.html'))
})
app.get('/footer', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/footer.html'))
})
app.get('/registrarse', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/registrarse.html'))
})
app.get('/iniciar-sesion', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/iniciar-sesion.html'))
})
app.get('/productos', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/productos.html'))
})
app.get('/detalleProducto', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/detalleProducto.html'))
})
app.get('/carousel', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/carousel.html'))
})
app.get('/formulario', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/formulario.html'))
})
app.get('/realizado', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/realizado.html'))
})
app.get('/vista', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/vista.html'))
})
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/error_404.html'))
})

app.listen(port, () => {
    console.log(`Puerto corriendo en ${port}\n http://localhost:${port}`)
});