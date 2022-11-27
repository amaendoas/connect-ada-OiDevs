import FollowerCard from '../../components/FollowerCard.js';
import database from '../../models/DataBase.class.mjs';
import User from '../../models/User.class.mjs';
import Header from '../../components/Header.js';

const currentImg = `${database.currentUserInSession.image}`;

//renderizando header
const header = new Header();
header.addMenuLink('../../assets/home.svg', '../Feed/feed.html', true);
header.addMenuLink('../../assets/search.svg', '../Explore/explore.html', true);
header.addMenuLink('../../assets/new.svg', '../NewPost/new-post.html');
header.addProfileDropdownLink('Ver perfil', '../Profile/profile.html');
header.addProfileDropdownLink(
  'Editar Perfil',
  '../EditProfile/edit-profile.html'
);
header.addProfileDropdownLink('Seguindo', '../Following/following.html');
header.addProfileDropdownLink('Sair', '../../index.html', false, true);
header.renderMenuLinks();
header.renderDropDownMenu(currentImg);
// Fim da header

database.initialization();

function renderCards() {
  database.users.forEach(user => {
    if (user.id !== database.currentUserInSession.id) {
      const followerCard = new FollowerCard(user);
      buttonFollow(user.id);
    }
  });
}

function buttonFollow(id) {
  const followButton = document.getElementById(`${id}`);
  followButton.addEventListener('click', function () {
    addFollowUserToFollowList(id);
  });
}

const followListOfLoggedUser = database.currentUserInSession.followList;

function addFollowUserToFollowList(id) {
  const idOfUser = id;
  const button = document.getElementById(`${id}`);

  const followUser = followListOfLoggedUser.find(
    element => element === idOfUser
  );

  if (!followUser) {
    followListOfLoggedUser.push(idOfUser);
    button.className = 'unfollow-btn';
    button.innerText = 'Deixar de seguir';
  } else {
    followListOfLoggedUser.pop(idOfUser);
    button.className = 'follow-btn';
    button.innerText = 'Seguir';
  }
}

// function addFollowUserToFollowList(id) {
//   return function clickEventListener(event) {
//     const idOfUser = id;
//     followListOfLoggedUser.find(
//       (idOfUser) => idOfUser === followListOfLoggedUser.id
//     );
//     followListOfLoggedUser.push(idOfUser);
//     this.className = "unfollow-btn";
//     this.innerText = "Deixar de seguir";
//   };
// }

renderCards();
