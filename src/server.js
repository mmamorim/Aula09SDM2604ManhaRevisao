
// ES modules
import config from "config";
import express from "express"
import bodyParser from "body-parser"
import filmes from "./controllers/filmes.js"
import produtos from "./controllers/produtos.js"

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use (bodyParser.json());

app.get("/", function(req,res) {
    res.json({ algo: "alguma coisa", msg: "uma menssagem" })
});

// Rotas de filmes adicionadas
filmes(app)
// Rotas de filmes adicionadas
produtos(app)

let port = config.get("server.port");
app.listen(port,function() {
    console.log("Servidor iniciado e escutando na porta "+port);
});