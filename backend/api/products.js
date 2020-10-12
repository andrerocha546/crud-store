const bodyParser = require("body-parser")

module.exports = app => {
    const { existsOrError } = app.api.validation

    const save = async (req, res) => {
        const product = { ...req.body }

        try {
            existsOrError(product.title, 'Titúlo do não informado')
            existsOrError(product.description, 'Descrição não informada')
            existsOrError(product.imageUrl, 'Imagem não informada')
            existsOrError(product.price, 'Preço não informado')
            existsOrError(product.quantity, 'Quantidade não informada')
            existsOrError(product.categoryId, 'Categoria não informada')
        } catch(msg) {
            res.status(400).send(msg)
        }

        app.db('products')
            .insert(product)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const get = (req,res) => {
        app.db('products')
            .then(product => res.json(product))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }
}