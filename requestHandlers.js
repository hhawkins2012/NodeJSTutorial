var fs = require('fs');
var querystring=require("querystring");

function start(response, postData) {
    console.log("Request handler 'start' was called.");
    
    var bonsaiView=fs.readFileSync('./index.html');
    var body = bonsaiView.toString();

     response.writeHead(200, {"Content-Type": "text/html"});
     response.write(body);
     response.end();
 }

 function upload(response, postData) {
     console.log("Request handler 'upload' was called.");
     response.writeHead(200, {"Content-Type": "text/plain"});
     response.write("You've sent the text: " + querystring.parse(postData).text);
     response.end();
 }

function startStylesheet(response, postData) {
    console.log("Request handler 'startStylesheet' was called.");
    
    var style=fs.readFileSync('./stylesheet.css');
    var body = style.toString();

     response.writeHead(200, {"Content-Type": "text/css"});
     response.write(body);
     response.end();
}

function startScript(response, postData) {
    console.log("Request handler 'startScript' was called.");
    
    var script=fs.readFileSync('./script.js');
    var body = script.toString();

     response.writeHead(200, {"Content-Type": "text/javascript"});
     response.write(body);
     response.end();
}

function bonsaiLogo(response, postData) {
    console.log("Request handler 'bonsaiLogo' was called.");
    
    var image=fs.readFileSync('./resources/bonsaiLogo.jpg');
     response.write(image);
     response.end();
}

function greenBackground(response, postData) {
    console.log("Request handler 'greenBackground' was called.");
    
    var image=fs.readFileSync('./resources/background.jpg');
     response.write(image);
     response.end();
}

exports.start=start;
exports.upload=upload;
exports.startStylesheet=startStylesheet;
exports.startScript=startScript;
exports.bonsaiLogo=bonsaiLogo;
exports.greenBackground=greenBackground;