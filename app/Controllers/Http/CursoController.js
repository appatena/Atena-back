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
  async getCategories() {
    return await service.getCategories();
  }
  async getCourseUser({ params }) {
    return await service.getCourseByUser(params.id);
  }
  async showStudents({ params }) {
    let paramId = await service.showStudents(params.id)
    return paramId;
  }
  async curseByCategory({ params }) {
    let curse = await service.cursesCategory(params.categoria_id)
    return curse
  }
  async update({ auth, params, request }) {
    return await service.updateStudantCourses(auth, params, request);
  }
}

module.exports = CursoController;
