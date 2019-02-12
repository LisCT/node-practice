const http = require('http');

const server = http.createServer((req, res) => {

    const user ={
        name: 'Lis',
        lastname: 'Cruz'
    }

    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(user));
});

server.listen(3000);