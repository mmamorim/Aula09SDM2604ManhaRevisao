
const routeName = "/filmes"

const filmes = {
    f01: {
        id: "f01",
        nome: "O Vento levou",
        ano: 1970
    },
    f02: {
        id: "f02",
        nome: "ET - Extra Terrestre",
        ano: 1980    
    }
}

export default function (app) {

    app.get(routeName, function (req, res) {
        res.json(filmes)
    });

    app.post(routeName, function (req, res) {
        res.json({ algo: "alguma coisa", msg: "uma menssagem" })
    });

    app.put(routeName, function (req, res) {
        res.json({ algo: "alguma coisa", msg: "uma menssagem" })
    });

    app.delete(routeName, function (req, res) {
        res.json({ algo: "alguma coisa", msg: "uma menssagem" })
    });

}