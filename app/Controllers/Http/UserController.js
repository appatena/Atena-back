"use strict";
const User = use("App/Models/User");
const UserService = use("App/Services/UserService");
const service = new UserService();
class UserController {
  async me({ auth }) {
    return auth.getUser();
  }

  async login({ request, auth, response }) {
    let token = await service.login(request, auth);
    return response
      .status(200)
      .json({ data: token, message: "Login successfull", status: true });
  }

  async logout({ auth, response }) {
    await auth.logout();
    return response.redirect("/");
  }
  async create({ request }) {
    let user = await service.create(request)
    return user;
  }
}

module.exports = UserController;
