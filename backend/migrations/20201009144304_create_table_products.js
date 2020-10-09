
exports.up = function(knex) {
    return knex.schema.createTable('products', table => {
        table.increments('id').primary()
        table.string('title', 200).notNull()
        table.string('description', 1000).notNull()
        table.string('imageUrl', 1000)
        table.float('price', 2).notNull()
        table.decimal('discount')
        table.integer('quantity').notNull()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
