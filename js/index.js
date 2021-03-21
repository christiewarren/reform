// const scroll = new LocomotiveScroll({
//    el: document.querySelector('[data-scroll-container]'),
//    smooth: true,
//    multiplier: 1
// });

//init butter.js
// var canvas = document.getElementById('butterCanvas');
// var butter = new Butter();
// butter.sort(canvas);

//show and hide menu
const menuBtn = document.getElementById('menuBtnWrap'),
      menu = document.getElementById('menuWrap');

menuBtn.addEventListener('click', () => {
   if(menu.style.display == "none"){
      menu.style.display = "grid";
      menu.style.transform = "translateX(0%)";
      
   }else{
      menu.style.transform = "translateX(100%)";
      menu.style.display = "none";
   }
})

function hideMenu(){
   menu.style.display = "none";
}

document.addEventListener('DOMContentLoaded', hideMenu);