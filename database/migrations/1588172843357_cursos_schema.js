'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CursosSchema extends Schema {
  up () {
    this.table('cursos', (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users')
    })
  }

  down () {
    this.table('cursos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CursosSchema
