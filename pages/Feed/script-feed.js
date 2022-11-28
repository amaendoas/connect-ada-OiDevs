import Header from '../../components/Header.js';

//renderizando header
const header = new Header();
header.addMenuLink('../../assets/home.svg', './feed.html', true);
header.addMenuLink('../../assets/search.svg', './explorer.html');
header.addMenuLink('../../assets/new.svg', './new.html');
header.addProfileDropdownLink('Ver perfil', '../Profile/profile.html');
header.addProfileDropdownLink('Editar Perfil', './edit-profile.html');
header.addProfileDropdownLink('Seguindo', '../Following/following.html');
header.addProfileDropdownLink('Sair', '../../index.html', false, true);
header.renderMenuLinks();
header.renderDropDownMenu('../../assets/woman.jpg');

//funções da página
const menuDropDown = document.getElementById('dropdown');
const dropDownContent = document.getElementById('dropdown-links');

menuDropDown.addEventListener('click', () => {
  dropDownContent.classList.toggle('show');
});
