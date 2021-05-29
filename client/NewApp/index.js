const { sum } = require("./helpers");
const http = require('http');
const server = http.createServer((req,res) => {
    res.end("hello world");
});

server.listen(3000);

const total = sum(10,200);

console.log("TOTAL: ", total);

