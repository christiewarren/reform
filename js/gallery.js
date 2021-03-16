
// for each img tag set the src to a random image from the poster array and remove that image from the array
// on window load reset the array to include all images

const posterSlots = Array.from(document.getElementsByClassName('poster'));

class poster {
   constructor(fileName, link) {
      let abby = new individual('abby.jpg', '');
   }
}

const posterImgs = [
   'abby.jpg',
   'dani.jpg',
   'carly.jpg',
   'ron.jpg',
   'sarah.jpg',
   'michaela.jpg',
   'emilyw.jpg',
   'emilyp.jpg',
   'taylor.jpg',
   'sam.jpg',
   'tamar.jpg',
   'megan.jpg',
   'zane.jpg',
   'christie.jpg',
   'eileen.jpg',
   'amber.jpg',
   'cassie.jpg',
   'jackie.jpg'
];
let availablePosters = [];

function resetAvailablePosters(){
   availablePosters = posterImgs;
}

let randomPoster = '';

function getRandomPoster(){
   randomPoster = availablePosters[Math.floor(Math.random()*availablePosters.length)];
   availablePosters.splice(availablePosters.indexOf(randomPoster), 1);
   return randomPoster;
}

function displayPostersRandomly(){
   posterSlots.forEach((element) => {
      getRandomPoster();
      element.src = './images/posters/smaller/' + randomPoster;
   })
}

document.addEventListener('DOMContentLoaded', () => {
   resetAvailablePosters();
   displayPostersRandomly();
 });

//hover posters 
const smSpacers = Array.from(document.getElementsByClassName('sm')),
      mdSpacers = Array.from(document.getElementsByClassName('md')),
      lgSpacers = Array.from(document.getElementsByClassName('lg')),
      allSpacers = Array.from(document.getElementsByClassName('spacer'));

let nonHovered = document.getElementsByClassName('nonHover');

//decrease width of each spacer
// function shrinkSpacerWidths(spacerArray){
//    spacerArray.forEach((element) => {
//       element.offsetWidth -= 200;
//    })
// }

// function unShrinkSpacerWidths(spacerArray){
//    spacerArray.forEach((element) => {
//       element.offsetWidth += 20;
//    })
// }

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
      element.style.flexBasis = '150px'
   });
   // shrinkSpacerWidths(allSpacers);
}

function showNonHoveredPosters(){
   Array.from(nonHovered).forEach((element) => {
      element.style.opacity = '1';
   });
   // unShrinkSpacerWidths(allSpacers);
}

function addListeners(){
   addHoverListenerToPosters();
   addNonHoverClass();
}

document.addEventListener('DOMContentLoaded', addListeners);

//window.onload = addListeners;
