'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CursoUrlSchema extends Schema {
  up () {
    this.table('cursos', (table) => {
      table.string('url', 80).unique()
    })
  }

  down () {
    this.table('cursos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CursoUrlSchema
