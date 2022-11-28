import database from "../models/DataBase.class.mjs";
import Functions from "../../models/Functions.class.mjs";

class CommentCardView {
  constructor(comment, userName, userImg) {
    this.divOfComment = document.createElement("div");
    this.divOfComment.setAttribute("id", `comment-card-${comment.idComment}`);
    this.divOfComment.setAttribute("class", `comment-card`);

    this.divOfComment.innerHTML = `
    <figure>
    <img class="img-post-card" src=${userImg}>
  </figure>
    <div class="comment">
      <div class="comment-info">
        <p class="user-name">${userName}</p>
        <p class="comment-content">${comment.content}</p>
      </div>
      <div class="btn-delete">
        <button id="btn-trash-${comment.idComment}" >
          <img src="../../assets/trash.svg"></img>
        </button>
      </div>
    </div>
    `;

    // const allComments = document.getElementById(`all-comments-${comment.idPost}`);
    document
      .getElementById(`all-comments-${comment.idPost}`)
      .append(this.divOfComment);
  }
}

export default CommentCardView;
