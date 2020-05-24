'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Curso extends Model {
    users () {
        return this.belongsToMany('App/Models/User', 'user_id','id').pivotTable('curso_user')
      }
    categorias () {
      return this.hasOne('App/Models/Category')
    }
}

module.exports = Curso
