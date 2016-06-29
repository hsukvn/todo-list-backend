var Http = require('http');
var Router = require('router');
var router = new Router();
var server;

// temporal array for todo list
var counter = 0;
var todoList = {};

server = Http.createServer(function(request, response) {
    router(request, response, function(error) {
        if (!error) {
            response.writeHead(404);
        } else {
            // Handle errors
            console.log(error.message, error.stack);
            response.writeHead(400);
        }
        response.end('RESTful API Server is running!');
    });
});

function createItem(request, response) {
    var id = counter += 1;
    console.log('Create item', id);
    response.writeHead( 201, {
        'Content-Type' : 'text/plain'
    });
    response.end('Item ' + id);
}
router.post( '/todo', createItem );

server.listen(5566, function() {
    console.log('Listening on port 5566');
});
