"use strict";
const CursoService = use("App/Services/CursoService");
const service = new CursoService();
class CursoController {
  async index() {
    debugger;
    return await service.getAll();
  }

  async store({ auth, request }) {
    return await service.crateCourse(auth, request);
  }

  async showStudents({ params }) {
    return await service.showStudents(params);
  }

  async update({ auth, params, request }) {
    return await service.updateStudantCourses(auth, params, request);
  }
}

module.exports = CursoController;
