const select = document.querySelector('.order__form_select');
const toggleButton = document.querySelector('.toggle__menu');
const navBar = document.querySelector('.nav-bar');
const header = document.querySelector('.header__bg');
const sticky = header.offsetTop;

select.addEventListener('click', () => {
  if (select.classList.contains('grey')) {
    select.classList.remove('grey');
  } else {
    select.classList.add('grey');
  }
});

toggleButton.addEventListener('click', function () {
  navBar.classList.toggle('toggle');
});

window.onscroll = () => {
  headerSticky();
};

function headerSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
