"use strict";
const User = use("App/Models/User");

class UserController {
  async me({ auth }) {
    return auth.getUser();
  }

  async login({ request, auth, response }) {
    const { email, password } = request.all();
    let token = await auth.attempt(email, password);
    return response
      .status(200)
      .json({ data: token, message: "Login successfull", status: true });
  }

  async logout({ auth, response }) {
    await auth.logout();
    return response.redirect("/");
  }
  async create({ request }) {
    const data = request.only(["username", "email", "password"]);
    const user = await User.create(data);
    return user;
  }
}

module.exports = UserController;
