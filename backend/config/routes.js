module.exports = app => {
    app.route('/products')
        .post(app.api.products.save)
}