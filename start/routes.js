'use strict'


/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/api/users', 'UserController.create')
Route.get('/api/logout', 'UserController.logout')
Route.post( '/api/auth', 'UserController.login')
Route.get('/api/cursos', 'CursoController.index')
Route.get('/api/cursos/students/:id', 'CursoController.showStudents')
Route.put('/api/update/:id', 'CursoController.update')
Route.group(() => {
  Route.post('/api/curso/create', 'CursoController.store')
  Route.get('/api/me', 'UserController.me')
  })
  .middleware(['auth:jwt'])
