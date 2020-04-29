"use strict";

const User = use("App/Models/User");
const Database = use("Database");

class UserService {
  async login({ request, auth }) {
    const { email, password } = request.all();
    let token = await auth.attempt(email, password);
    return token;
  }

  async create(request) {
    const data = request.only(["username", "email", "password"]);
    const user = await User.create(data);
    return user;
  }
}
