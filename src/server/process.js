var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs
        .writeFile("/tmp/test.json", "Hey there!", function (err, data) {
            if (err) {
                return console.log(err);
            }

            fs
                .readFile("/tmp/test.json", function (err, data) {
                    if (err) {
                        res.writeHead(404);
                        res.end(JSON.stringify(err));
                        return;
                    }
                    res.writeHead(200);
                    res.end(data);
                });
        });
}).listen("80");
