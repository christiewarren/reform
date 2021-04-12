//show and hide menu
const menuBtn = document.getElementById('menuBtnWrap'),
      menu = document.getElementById('menuWrap'),
      loadWrap = document.getElementById('loadWrap');

menuBtn.addEventListener('click', () => {
   if(menu.style.display == "none"){
      menu.style.display = "grid";
      menu.style.transform = "translateX(0%)";
      menu.style.cursor = 'auto';
      
   }else{
      menu.style.transform = "translateX(100%)";
      menu.style.display = "none";
   }
})

function hideMenuShowLoader(){
   loadWrap.style.opacity = '1';
   menu.style.display = "none";
}

function hideLoader(){
   loadWrap.style.opacity = '0';
   loadWrap.style.visibility = 'hidden';
}


window.onload = hideLoader;

document.addEventListener('DOMContentLoaded', hideMenuShowLoader);