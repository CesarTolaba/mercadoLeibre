const express = require('express');
const app = express();
const path = require('path');
let port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
})
app.listen(port, () => console.log(`Servidor corriendo en el ${port}\n http:localhost:${port}`));