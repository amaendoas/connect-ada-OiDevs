import User from './models/User.class.mjs';
import Comment from './models/Comment.class.mjs';
import database from './models/DataBase.class.mjs';
import Post from './models/Post.class.mjs';
import Manager from './models/Manager.class.mjs';

//instanciando database

//criando usuário
console.log('criando o usuário');

const userNatasha = new User('Natasha', 2541, 'natasha@natasha.gmail');
const userJunior = new User('Junior', 2541, 'junior@junior.gmail');
const userIvina = new User('Ivina', 2541, 'Ivina@Ivina.gmail');
const userAmanda = new User('Amanda', 2541, 'Amanda@Amanda.gmail');
const userCarol = new User('Carol', 2541, 'Carol@Carol.gmail');
const userPerola = new User('Perola', 2541, 'perola@perola.gmail');

console.log(database.users);

console.log('teste de autenticação');
database.authenticate('natasha@natasha.gmail', 2541);

console.log('criando posts');

const post1 = new Post(
  userNatasha.idUser,
  'Esse é o post teste',
  'esse post tem que sumir'
);

const post2 = new Post(userNatasha.idUser, 'Blabla é o melhor', 'Toca ansada');

const post3 = new Post(
  userNatasha.idUser,
  'Blabla é o melhor',
  'Guilherme acha larica interessante'
);

const manager1 = new Manager('Vitoria', 1234, 'vitoria@vitoria.gmail');

manager1.removeOtherUser(userNatasha.idUser);
// manager1.removeOtherUser(userCarol.idUser);
// manager1.removeOtherUser(manager1.idUser);

// userNatasha.deleteSelfUser();

post3.title = 'Este título está melhor';

const comment = new Comment(
  userNatasha.idUser,
  post2.idPost,
  'Este é um comentário'
);

console.log(database.posts);

//criando comentário
console.log('criando comentários');

const comment1 = new Comment(
  userAmanda.idUser,
  database.posts[0].idPost,
  'esse comentário tem que sumir'
);

const comment2 = new Comment(
  userJunior.idUser,
  database.posts[0].idPost,
  'esse comentário tambem tem que sumir'
);

// const comment3 = new Comment(
//   userJunior.idUser,
//   database.posts[1].idPost,
//   'comentário em outro post'
// );

console.log(database.comments);

//Removendo usuários e com isso seu post e comentários do post
console.log('removendo usuários');

userNatasha.deleteSelfUser();

console.log(database.users);
console.log(database.posts);
console.log(database.comments);

// console.log('deletando posts')
// post1.deletePost();
// console.log(database.posts);

//Alterando atributos do objeto e fazendo update no banco de dados
// userAmanda.email = "amanha"
// userAmanda.addFollow(userIvina.idUser)
// userAmanda.addFollow(userNatasha.idUser)
// userAmanda.addFollow(userJunior.idUser)

// userAmanda.removeFollow(userNatasha.idUser)

// //const user1 = new User('vitoria', '777777', 'vit@haha.com');
// // const user2 = new User('amanda', '12346', 'amanda@haha.com');

// //criando e adicionando usuario no database
// const user1 = database.addUser("vitoria", "12387", "vit@haha.com");
// const user2 = database.addUser("amanda", "12346", "amanda@haha.com");
// console.log(user1);

// console.log("PAROUUUUUUUUUUUUUU");

// //adicionando post no database
// database.addPost(user1.idUser, "Titulo", "Conteúdo do post");
// database.addPost(user1.idUser, "Post2", "Vamo ver o que vai dá");
// console.log(database.posts);

// //removendo post do database
// database.removePost(database.posts[1].idPost);
// console.log(database.posts);

// //criando comentário
// const comment = new Comment(
//   user1.idUser,
//   database.posts[0].idPost,
//   "Comentário teste"
// );
// const comment2 = new Comment(
//   user1.idUser,
//   database.posts[0].idPost,
//   "Um novo comentário"
// );
// console.log(comment);

// //adicionando comentário no database
// database.addComment(user1.idUser, database.posts[0].idPost, "Comentário teste");
// database.addComment(
//   user1.idUser,
//   database.posts[0].idPost,
//   "Um novo comentário"
// );
// console.log(database.comments);

// //removendo comentário do database
// database.removeComment(database.comments[1].idComment);
// console.log(database.comments);

// console.log("Acabou");
