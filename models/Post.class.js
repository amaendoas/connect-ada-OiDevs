const Functions = require('./Functions.class')

class Post {
  #idPost;
  #idAuthor;
  #title;
  #content;

  constructor(idAuthor, title, content){
    this.#idPost = Functions.createRandomId();
    this.#idAuthor = idAuthor;
    this.#title = title;
    this.#content = content;
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

  set title(newTitle) {
    this.#title = newTitle;
  }

  get content() {
    return this.#content;
  }

  set content(newContent) {
    this.#content = newContent;
  }
}

module.exports = Post;