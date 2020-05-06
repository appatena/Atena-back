"use strict";

const Curso = use("App/Models/Curso");
const User = use("App/Models/User");
const Database = use("Database");

class CursoService {
  async getAll() {
    const cursos = await Curso.all();
    return cursos;
  }
  async getCourseByUser(userId) {
    let cursos = await Database.from("cursos").where("user_id", userId);
    return cursos;
  }
  async crateCourse(request) {
    debugger
    const data = request.all();
    const curso = await Curso.create({ nome: data.titulo, description: data.descricao, url: data.url, user_id: 1 });
    return curso;
  }

  async showStudents(id) {
    const curso = await Curso.findOrFail(id);
    const users = await Database.from("users").where("curso_id", curso.id);
    return users;
  }

  async updateStudantCourses({ auth, params, request }) {
    const { id } = auth.user;
    const user = await Curso.findOrFail(params.id);
    const data = request.all();
    user.merge({ curso_id: data.id });
    await user.save();
    return user;
  }
}

module.exports = CursoService;
