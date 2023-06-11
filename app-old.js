


const http = require('http');

http.createServer( (req, res)=>{

    //res.writeHead(200,{'Content-Type': 'text/plain'});
    //res.writeHead(200,{'Content-Type': 'application/csv'});

    res.write( 'hola mundo' );

    res.end();

})
.listen( 8080 );

console.log('escuchando el puerto', 8080);