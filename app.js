/**
 * Created by yiban on 15/8/11.
 */
var app = require('express')();

app.get('/', function (req, res) {
    console.log('received num is ', req.query.n);
    res.writeHead(200);
    res.end(filo(~~req.query.n || 1).toString());
}).listen(8000);

function filo(num) {
    return num > 1 ? filo(num - 1) + filo(num - 2 ) : 1;
}