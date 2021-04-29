const http = require('http');
const fs = require('fs');

console.log("fortune cookie server starting...");

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function handler(request, response) {
    console.log("Received request from " + request.connection.remoteAddress);
    await sleep(2000);
    // The first parameter is the relative path to the file to read, the
    // second is an optional parameter specifying the text encoding, and
    // the third is a callback that is run after the file has been read.
    fs.readFile(__dirname + "/fortune_cookie_generator.html", "utf-8", (err, data) => {
        if (err) {
            console.log("file read failed:", err);
            return;
        }

        response.writeHead(200);
        response.end(data);
    });

}


// async var handler = function (request, response) {
//     console.log("Received request from " + request.connection.remoteAddress);
//     // The first parameter is the relative path to the file to read, the
//     // second is an optional parameter specifying the text encoding, and
//     // the third is a callback that is run after the file has been read.
//     fs.readFile(__dirname + "/index.html", "utf-8", (err, data) => {
//         if (err) {
//             console.log("file read failed:", err);
//             return;
//         }

//         response.writeHead(200);
//         response.end(data);
//     });
// };

var www = http.createServer(handler);
www.listen(8080);
