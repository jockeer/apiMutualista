const express = require('express');
const conectarDB = require('./config/db') 

//crear el servidor

const app = express();

//Conectar ala BD
conectarDB();

//puero de la app
const PORT = process.env.PORT || 4000;

//importar rutas

app.use('/api/usuarios', require('./routes/usuarios'))

//Definiendo la pagina principal

// app.get('/',(req,res) =>{
//     res.send('Hola Mundo')
// })

//arrancar la app

app.listen(PORT, () =>{
    console.log(`El servidor esta funcionando en el puerto ${PORT}`)
})