const http = require('http');
const url = require("url");

const behaviour = (req, res) => {
    console.log(req.method); //GET, POST, PUT, DELETE
    console.log(req.url); //books

    //GET - Get data
    //POST - Create data
    //PUT - Update data
    //PATCH - Update data partially
    //DELETE - Delete data

if(req.method === "GET" && req.url ==="/books"){
    res.write(
        JSON.stringify([
            {title: "The Alchemist", pages: 200},
            {title: "The Sugar Girl", pages: 250}
        ])
    );
}  else if(req.method ==="PUT" && req.url === "/books"){
    res.write("Hello from PUT /books/author. You are updating data")
}
 else if(req.method ==="DELETE" && req.url === "/books"){
    res.write("Hello from PUT /books/author. You are updating data")
}
else if(req.method === "POST" && req.url === "/books/authors"){
    res.write("Hello from POST /books/authors. You are creating new data");

} else if(req.method === "GET" && req.url === "/books/authors"){
    res.write("Hello from GET /books/authors. You are REQUESTING new data");

} else if(req.method === "PUT" && req.url === "/books/authors"){
    res.write("Hello from PUT /books/authors. You are updating new data");

} else{
    res.write("Route not found")
}
res.end();
};

const server = http.createServer(behaviour);
server.listen(8000, () => {
console.log("Server is running on port 8000 ")
})