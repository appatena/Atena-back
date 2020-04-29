"use strict";

const Curso = use('App/Models/Curso');
const User = use("App/Models/User");
const Database = use("Database");

class CursoService {
  async getAll() {
    const cursos = await Curso.all();
    return cursos;
  }
  async getCourseByUser({ params }) {
    let cursos = await Database.from("cursos").where("id", params);
    return cursos;
  }
  async crateCourse({ auth, request }) {
    const { id } = auth.user;
    const data = request.only(["nome"]);
    const curso = await Curso.create({ ...data, user_id: id });
    return curso;
  }

  async showStudents({ params }) {
    const curso = await Curso.findOrFail(params.id);
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
