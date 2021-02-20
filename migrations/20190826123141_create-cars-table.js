
exports.up = function(knex) {
    return knex.schema.createTable("cars", table => {
        table.increments();
        table.text("VIN", 17)
        .unique()
        .notNullable();
        table.text("Make",32)
        .notNullable();
        table.text("Model",32)
        .notNullable();
        table.integer("Milage")
        .notNullable();
        table.text("TransType",32);
        table.text("TitleStatus");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
