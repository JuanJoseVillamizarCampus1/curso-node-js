const fs = require('fs');
const http = require('http')
const url =require('url')

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

const tempOverview= fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8', (err, data)=>{
})
const tempCard= fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8', (err, data)=>{
})
const tempProduct= fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8', (err, data)=>{
})
const data= fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data)=>{
})
const dataObj= JSON.parse(data)

const server =  http.createServer((req, res)=>{
    const pathName = req.url;

    //Overview page
    if (pathName === '/' ||pathName === '/overview') {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end(tempOverview)
    }
    //Product page
    else if (pathName === '/product'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end(tempProduct)
    }
    //API
    else if (pathName === '/api'){
            res.writeHead(200, {'Content-Type':'application/json'})
            res.end(data)

    }
    //Not found
    else{
        res.writeHead(404,{
            'Content-Type':'text/html',
            'my-own-header': 'hello-word'
        })
        res.end('<h1>Page not found!</h1>')
    }
});
server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to request on port 8000')
})