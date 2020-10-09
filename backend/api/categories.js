const bodyParser = require("body-parser")

module.exports = app => {
    
    const save = (req, res) => {
        const category = { ...req.body }

        app.db('products_categories')
            .insert(category)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const get = (req, res) => {
        app.db('products_categories')
            .then(categories => res.json(categories))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }
}