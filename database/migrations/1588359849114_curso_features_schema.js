'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CursoFeaturesSchema extends Schema {
  up () {
    this.table('cursos', (table) => {
      table.binary('image')
      table.string('description')
    })
  }

  down () {
    this.table('curso_features', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CursoFeaturesSchema
