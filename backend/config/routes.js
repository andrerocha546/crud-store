module.exports = app => {
    app.route('/products')
        .post(app.api.products.save)
    app.route('/categories')
        .post(app.api.categories.save)
        .get(app.api.categories.get)
}