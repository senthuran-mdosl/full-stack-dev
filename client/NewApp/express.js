const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("hey whatsup");
});

app.listen(3000);