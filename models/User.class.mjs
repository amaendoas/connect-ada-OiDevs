import Functions from "./Functions.class.mjs";
import database from "./DataBase.class.mjs";
import Post from "./Post.class.mjs";

class User {
  #idUser;
  #name;
  #password;
  #email;
  #followList;

  constructor(name, password, email) {
    this.#idUser = Functions.createRandomId();
    this.#name = name;
    this.#password = password;
    this.#email = email.toLowerCase();
    this.#followList = [];
    database.addUser(this);
  }

  get idUser() {
    return this.#idUser;
  }

  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  get password() {
    return this.#password;
  }

  get followList() {
    return this.#followList;
  }

  set name(newName) {
    this.#name = newName;
    // database.updateUserOnDatabase(this)
  }

  set password(newPassword) {
    this.#password = newPassword;
    // database.updateUserOnDatabase(this)
  }

  set email(newEmail) {
    this.#email = newEmail;
    // database.updateUserOnDatabase(this)
  }

  addFollow(idFollow) {
    this.#followList.push(idFollow);
    // database.updateUserOnDatabase(this)
  }

  removeFollow(idFollow) {
    for (let i = 0; i < this.#followList.length; i++) {
      if (this.#followList[i] === idFollow) {
        this.#followList.splice(i, 1);
      }
    }
  }

  deleteSelfUser() {
    database.removeUser(this.idUser);
    // database.removeAllPostsByAuthor(this.idUser);
  }
}

export default User;