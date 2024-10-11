const express = require("express");
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const produtoMidleware = require('../middleware/validarProduto.middleware')

const produtos = {}

router.post('/', produtoMidleware)
router.put('/', produtoMidleware)

router.use(express.json());

router.get('/', (req, res) => {
    res.json({ produtos: produtos[req.params.id] })
})


router.put('/:id', (req, res) => {
    const id = req.query.id
    if (id && produtos[id]) {
        const produto = req.body
        produto.id = id
        produtos[id] = produto
        res.json({ msg: "Produto atualizado com sucesso!" })
    } else {
        res.status(400).json({ msg: "Produto não encontrado!" })
    }
})


router.post('/', (req, res) => {
    const produto = req.body
    const idProduto = uuidv4()
    produto.id = idProduto
    produtos[idProduto] = produto
    res.json({ msg: "produto adicionado com sucesso!" })
})



router.delete('/:id', (req, res) => {
    const id = req.params.id
    if (id && produtos[id]) {
        delete produtos[id]
        res.json({ msg: "Produto deletado com sucesso!" })
    } else {
        res.status(400).json({ msg: "Produto não encontrado!" })
    }
})


module.exports = router