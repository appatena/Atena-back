"use strict";
const CursoService = use("App/Services/CursoService");
const service = new CursoService();
class CursoController {
  async index() {
    return await service.getAll();
  }
  async store({request }) {
    debugger
    return await service.crateCourse(request);
  }
  async getCourseUser({ params }) {
    return await service.getCourseByUser(params.id);
  }
  async showStudents({ params }) {
    let paramId = await service.showStudents(params.id)
    return paramId;
  }

  async update({ auth, params, request }) {
    return await service.updateStudantCourses(auth, params, request);
  }
}

module.exports = CursoController;
