const scroll = new LocomotiveScroll({
   el: document.querySelector('[data-scroll-container]'),
   smooth: true,
   multiplier: 1
});

//give all posters hidden visibility
let nonHovered = document.getElementsByClassName('nonHover');

function addHoverListenerToPosters(){
   Array.from(nonHovered).forEach((element) => {
      element.addEventListener("mouseover", function( event ) {
         // highlight the mouseover target
         event.target.classList.remove('nonHover');
         
         hideNonHoveredPosters();
      });
   });
}

function addNonHoverClass(){
   Array.from(nonHovered).forEach((element) => {
      element.addEventListener("mouseout", function( event ) {
         // highlight the mouseover target
         event.target.classList.add('nonHover');
         
         showNonHoveredPosters();
      });
   });
}

function hideNonHoveredPosters(){
   Array.from(nonHovered).forEach((element) => {
      element.style.opacity = '0.25';
   });
}

function showNonHoveredPosters(){
   Array.from(nonHovered).forEach((element) => {
      element.style.opacity = '1';
   });
}

function addListeners(){
   addHoverListenerToPosters();
   addNonHoverClass();
}

document.addEventListener('DOMContentLoaded', addListeners);
