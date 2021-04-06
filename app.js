const navSlide = () => {
  const burger =document.querySelector('.burger');
  const nav= document.querySelector('.links');


  
  burger.addEventListener('click', () => {
      // Toogle Nav
    nav.classList.toggle('nav-active');
  });
}
navSlide();
