module.exports = app => {
    app.post('/signin', app.api.auth.signin)

    app.route('/products')
        .post(app.api.products.save)
        .get(app.api.products.get)

    app.route('/categories')
        .post(app.api.categories.save)
        .get(app.api.categories.get)

    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)
}