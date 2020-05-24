'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CursoFeaturesSchema extends Schema {
  up () {
    this.table('cursos', (table) => {
      table.integer('categoria_id').unsigned().references('id').inTable('categorias')
    })
  }

  down () {
    this.table('curso_features', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CursoFeaturesSchema
