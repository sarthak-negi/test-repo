const http = require('http');

const server = http.createServer((req,res)=>{
res.writeHead(200);
res.write("Hello there");
res.end();
}).listen(3000, () => { console.log('Listening on 3000'); });

