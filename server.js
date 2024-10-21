const http = require('http');

const books = [
    {
        id: 1,
        title: "C#",
        author: "Martin Freeman",
        pages: 345
    },
    {
        id: 2,
        title: "ASP.NET",
        author: "Martin Freeman",
        pages: 725
    },
    {
        id: 3,
        title: "Java",
        author: "Jhosua Bloch",
        pages: 287
    }
]

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/api/books") {
        res.setHeader('Content-Type', 'application/json;charset=utf-8')
        res.write(JSON.stringify(books));
        res.end();
        return;
    }

    if (req.method === "GET" && req.url.startsWith("/api/books/")) {
        id = Number(req.url.slice(11));
        console.log(`id = ${id}`)
        if (id) {
            const book = books.filter(b => b.id === id)[0];
            if (book) {
                res.setHeader('Content-Type', 'application/json;charset=utf-8')
                res.write(JSON.stringify(book));
                res.end();
                return;
            } else {
                res.setHeader('Content-Type', 'application/json;charset=utf-8')
                res.statusCode = 404;
                res.end();
                return;
            }
        }
    }
    res.write("Error, unkwnon path!")
    res.end();
})
console.log("server started")
server.listen(9000);