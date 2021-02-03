const express = require('express');
const server = express();
const path = require('path');



const publicPath = path.join(__dirname, 'build');

server.use(express.static(publicPath));

server.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });


server.listen(4000, () => {
    console.log('now listenning on port 4000')
})