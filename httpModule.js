const http= require("http")

// const server= http.createServer((req, res) =>{
//     res.write("hello , im about to ee en dee my self");
//     res.end();
// })

// server.listen(5000);
const server= http.createServer( (req,res) => {
    if(req.url==='/'){
        res.end("This my home page foo");
    }
    else if (req.url==='/about'){
        res.end("a short intro");
    }
    else{
        res.end(
            `<div>
                <h1>oopsie daisies wrong urls pls recheak you dumbass</h1>
                <a href="/"> back home</a>
            </div>`
            
        )
    }
});

server.listen(5000);