const express = require('express')
const porta = 3013
const servirdor = express()

servirdor.use(express.json())

let array_relogio = [
    {
        "descricao": "Relógio Rolex Submariner",
        "preco": 85300.00,
        "cor": "azul",
        "tipo": "relógios de mergulho"
    },
    {
        "descricao": "Relógio Samsung Galaxy Watch",
        "preco": 1200.00,
        "cor": "preto",
        "tipo": "smartwatch (relógio inteligente)"
    },

]

servirdor.listen(porta, () => {
    console.log("Servidor Rodando!")
})

servirdor.get("/ver_catalogo", (req, res) => {
    console.log("Acessou a rota Catalogo")
    res.json(array_relogio)
})

servirdor.post("/cadastrar_produtos", (req, res) => {
    console.log("A rota cadastrar produtos foi acessada!")
    const { descricao, preco, cor, tipo } = req.body

    if (descricao == "") {
        return res.send("Preencha a descrição do produto!")
    }
    else if (preco <= 0) {
        return res.send("Adicione um preço!")
    }
    else if (cor == "") {
        return res.send("Preencha uma cor!")
    }
    else if (tipo = "") {
        return res.send("Informe o tipo!")
    }

    const produto = { descricao, preco, cor, tipo }

    array_relogio.push(produto)
    res.send(`O produto foi adicionado!`)
})

servirdor.delete("/deletar_produto", (req, res) => {
    console.log("Acessou a rota deletar produto.")
    const deletar = req.body.apagar
    array_relogio.splice(deletar, 1)
    res.send("Produto Apagado!")
})