const header = document.querySelector('header');
const listBtn = document.querySelector('.listBtn');
const closeBtn = document.querySelector('.closeBtn');
const headerMenu = document.querySelector('.header-menu');
const menuLinks = document.querySelectorAll('.header-menu li a');
listBtn.addEventListener('click', () => {
  closeBtn.classList.add('showCloseBtn');
  listBtn.classList.add('closeListBtn');
  listBtn.classList.remove('showListBtn');
  headerMenu.classList.add('showMobile');
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {      
      closeBtn.classList.remove('showCloseBtn');
      listBtn.classList.add('showListBtn');
      headerMenu.classList.remove('showMobile');
    })
  })
})
closeBtn.addEventListener('click', () => {
  closeBtn.classList.remove('showCloseBtn');
  listBtn.classList.remove('closeListBtn');
  headerMenu.classList.remove('showMobile');
})
window.addEventListener('scroll', () => {
  const value = window.scrollY;
  value > 50
    ? header.classList.add('showHeader')
    : header.classList.remove('showHeader');  
})