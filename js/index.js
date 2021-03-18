// const scroll = new LocomotiveScroll({
//    el: document.querySelector('[data-scroll-container]'),
//    smooth: true,
//    multiplier: 1
// });

const menuBtn = document.getElementById('menuBtnWrap'),
      menu = document.getElementById('menuWrap');

menuBtn.addEventListener('click', () => {
   if(menu.style.opacity == "0"){
      menu.style.opacity = "1";
      menu.style.transform = "translateX(0%)";
   }else{
      menu.style.opacity = "0";
      menu.style.transform = "translateX(100%)";
   }
})