const bodyParser = require("body-parser")

module.exports = app => {

    const save = async (req, res) => {
        const product = { ...req.body }

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