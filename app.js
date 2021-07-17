const express = require('express');
const app = express();
const path = require('path');
let port = 3000;

app.use(express.static('public'));


// index.html
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, './views/home.html')) });


// Register.html
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'))
})

/* login.html */
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'))
})


app.listen(port, () => console.log(`Servidor corriendo en el ${port}\n http://localhost:${port}`));