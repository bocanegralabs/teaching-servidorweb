//* Require no existe en el navegador, existe en el servidor, que busca las librerías
//* que fueron instaladas con npm install

const express = require('express');
const aplicacion = express();

// * '/' equivale al home
aplicacion.get('/', inicio);
aplicacion.get('/cursos', cursos);

function inicio(peticion, resultado) {
    resultado.send("Este es el <strong>home</strong> :)");
}
function cursos(peticion, resultado) {
    resultado.send("Este es el site de <strong>cursos!</strong>");
}

aplicacion.listen(8989);