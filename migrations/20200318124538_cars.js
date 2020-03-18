
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();

    tbl.integer('VIN', 17)
        .notNullable()
        .unique()
        .index();
    tbl.string('Make', 255)
        .notNullable()
        .index();
    tbl.string('Model', 255)
        .notNullable()
        .index();
    tbl.integer('Mileage', 10)
        .notNullable()
        .index();
    tbl.string('TransmissionType', 255)
        .defaultTo('');
    tbl.string('StatusOfTitle', 255)
        .defaultTo('');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
