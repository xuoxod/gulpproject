import user from "./User.js";

class Users {
  private users = {};

  constructor() {}

  public addUser(newUser: object): void {
    this.users[`${newUser[`uid`]}`] = new user(newUser);
  }
}

const users = new Users();

export default users;
