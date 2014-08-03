'usestrict';
var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/stixdb', function(err, connection) {
    var stixMsgs = connection.collection('messages'); 
        stixMsgs.find({Targets: '5'}).toArray(function(err, documents) { 
            console.dir(documents);
            connection.close();
        });  
});


var server=require("./server");
var router=require("./router");
var requestHandlers=require("./requestHandlers");

var handle={}
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;

server.start(router.route,handle);