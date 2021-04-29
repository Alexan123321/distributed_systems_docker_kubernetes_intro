const fetch = require('node-fetch');

fetch("http://192.168.99.100:30850")
    .then(response => response.text())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log());
