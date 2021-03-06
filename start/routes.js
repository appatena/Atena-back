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

Route.post('/users', 'UserController.create')
Route.get('/logout', 'UserController.logout')
Route.post( '/auth', 'UserController.login')
Route.get('/api/curso', 'CursoController.index')
Route.get('/api/categorias', 'CursoController.getCategories')
Route.get('/cursos/students/:id', 'CursoController.showStudents')
Route.get('/api/cursos/:categoria_id', 'CursoController.curseByCategory')
Route.get('/cursos/user/:id', 'CursoController.getCourseUser')
Route.put('/update/:id', 'CursoController.update')
Route.post('/api/curso/create', 'CursoController.store')
Route.group(() => {
  Route.get('me', 'UserController.me')
  })
  
