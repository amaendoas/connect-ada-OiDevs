import database from "./DataBase.class.mjs";
import Functions from "./Functions.class.mjs";

class Post {
  #idPost;
  #idAuthor;
  #title;
  #content;

  constructor(idAuthor, title, content) {
    this.#idPost = Functions.createRandomId();
    this.#idAuthor = idAuthor;
    this.#title = title;
    this.#content = content;
    database.addPost(this);
  }

  get idPost() {
    return this.#idPost;
  }

  get idAuthor() {
    return this.#idAuthor;
  }

  get title() {
    return this.#title;
  }

  get content() {
    return this.#content;
  }

  set title(newTitle) {
    this.#title = newTitle;
  }

  set content(newContent) {
    this.#content = newContent;
  }

  deletePost() {
    database.removePost(this.idPost);
  }
}

export default Post;
