const app = require('./app');
const http = require('http');

let port = process.env.port || '3001';
app.set('port', port);

let server = http.createServer(app);

const onListening = () => {
    let addr = server.address();
    console.log('listenting on, ' +  addr + ' at port ' + port);
}

const onError = (error) => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    console.error(error.code);
};

server.listen(port);
server.on('errpr', onError);
server.on('listening', onListening);
