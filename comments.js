// Create web server
// Run: node comments.js
// Access: http://localhost:3000
// Access: http://localhost:3000/comments
// Access: http://localhost:3000/comments/1

// Call modules
var http = require('http');
var url = require('url');
var items = [];

// Create web server
var server = http.createServer(function(req, res) {
    switch (req.method) {
        case 'POST':
            var item = '';
            req.setEncoding('utf8');
            req.on('data', function(chunk) {
                item += chunk;
            });
            req.on('end', function() {
                items.push(item);
                res.end('OK\n');
            });
            break;
        case 'GET':
            items.forEach(function(item, i) {
                res.write(i + ') ' + item + '\n');
            });
            res.end();
            break;
    }
});

// Run web server
server.listen(3000);
