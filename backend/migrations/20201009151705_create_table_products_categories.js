
exports.up = function(knex) {
    return knex.schema.createTable('products_categories', table => {
        table.increments('id').primary()
        table.string('name', 140).notNull()
        table.integer('parentId').references('id')
            .inTable('products_categories')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products_categories')
};
