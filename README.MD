# README -Aprendizaje
Se aprendio a configurar un servidor HTTP básico que proporciona páginas HTML y datos JSON
según diferentes rutas. Lee datos de archivos JSON, genera plantillas HTML y las rellena
dinámicamente con datos. El servidor escucha en el puerto 8000 para recibir solicitudes.

**Requisitos:**
- Node.js instalado
- Módulos requeridos: fs (sistema de archivos), http, url

--fs (File System) es un módulo de Node.js que proporciona funciones para trabajar con el sistema de archivos del sistema operativo. Permite leer y escribir archivos de manera síncrona y asíncrona, así como realizar diversas operaciones relacionadas con archivos y directorios.

--http es un módulo de Node.js que permite crear servidores HTTP. Con este módulo, puede crear y configurar servidores web para manejar solicitudes y respuestas HTTP.

--url es un módulo de Node.js que proporciona utilidades para analizar y manipular URLs (Uniform Resource Locators). Permite descomponer una URL en partes como el protocolo, el host, la ruta y los parámetros de consulta.

#### Manejo de Archivos

El código comentado dentro de la sección "FILES" muestra dos métodos para leer y escribir
archivos de manera sincrónica y asíncrona. El método síncrono bloquea la ejecución hasta
que la operación se completa, mientras que el método asíncrono no bloquea y permite que
el programa continúe ejecutándose mientras se realizan operaciones en segundo plano.

#### Creación del Servidor

1. Se leen los contenidos de las plantillas HTML y el archivo de datos JSON.
2. Se analiza el archivo JSON y se almacena como un objeto.
3. Se genera una lista de "slugs" (versiones en minúsculas y amigables para URLs) basados
   en los nombres de los productos en el archivo JSON.

#### Manejo de Rutas en el Servidor

El servidor está configurado para responder a diferentes rutas:

- **Ruta de la Página de Resumen (`/` o `/overview`):**
  - Devuelve una página HTML de resumen con tarjetas de productos generadas dinámicamente.

- **Ruta de la Página de Producto (`/product`):**
  - Devuelve una página HTML de un producto específico basado en el parámetro de consulta `id`.

- **Ruta de la API (`/api`):**
  - Devuelve los datos JSON en formato de respuesta de API.

- **Ruta no encontrada:**
  - Devuelve una página HTML de error 404 si la ruta no coincide con ninguna de las rutas anteriores.

#### Inicio del Servidor
El servidor se inicia y comienza a escuchar en el puerto 8000 y la dirección IP `127.0.0.1`. (localhost)

const fs = require('fs');
const http = require('http')

////////////////////////////////////////
//FILES

//Blocking, synchronous way
// const textIn= fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avocado : ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt',textOut);
// console.log('file Written!');

// Non-blocking asynchronous way

// fs.readFile('./txt/start.txt','utf-8',(err, data1)=>{
//     if (err) return console.log('ERROR!')

//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`,'utf-8',(err,data3)=>{
//             console.log(data3);
//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8',err=>{
//                 console.log('Your file has been written :)');
//             })
//         })
//     })
// });
// console.log('will read file!');

////////////////////////////////////////
//SERVER
const server =  http.createServer((req, res)=>{
    const pathName = req.url;
    if (pathName === '/' ||pathName === '/overview') {
        res.end('This is the OVERVIEW')
    }
    else if (pathName === '/product')
    res.end('This is the PRODUCT')
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to request on port 8000')
})