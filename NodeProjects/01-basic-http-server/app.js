const http = require("http");
const url = require("url");
const fs = require("node:fs"); // node:prefix means core module
const path = require("node:path");


const server =  http.createServer((req, res) => {
    const URLPathName = url.parse(req.url).pathname;
    const RequestMethod = req.method;
    if(URLPathName == "/" && RequestMethod === "GET"){
        const filePath = path.resolve(__dirname + "/index.html");
        fs.readFile(filePath, (err, data) => {
            if(err){
                res.write("Error while fetching files");
                res.statusCode(400);
                res.end();
            } else {
                // res.setHeader("Content-Type", "text/plain");
                res.write(data);
                res.end();
            }
        })
    }
})

server.listen(3000);
