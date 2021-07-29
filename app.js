const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/home.html'))
})
app.get('/error', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/error_404.html'))
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

app.listen(port, () => {
    console.log(`Puerto corriendo en ${port}\n http://localhost:${port}`)
});