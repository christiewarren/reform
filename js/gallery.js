
// for each img tag set the src to a random image from the poster array and remove that image from the array
// on window load reset the array to include all images

const posterSlots = Array.from(document.getElementsByClassName('poster'));

class person {
   constructor(fileName, queryStr) {
      this.fileName = fileName;
      this.fullQueryStr = 'name=' + queryStr;
   }
}

const abby = new person('abby.jpg', 'abby'),
      dani = new person('dani.jpg', 'dani'),
      carly = new person('carly.jpg', 'carly'),
      ron = new person('ron.jpg', 'ron'),
      sarah = new person('sarah.jpg', 'sarah'),
      michaela = new person('michaela.jpg', 'michaela'),
      emilyw = new person('emilyw.jpg', 'emilyw'),
      emilyp = new person('emilyp.jpg', 'emilyp'),
      taylor = new person('taylor.jpg', 'taylor'),
      sam = new person('sam.jpg', 'sam'),
      tamar = new person('tamar.jpg', 'tamar'),
      megan = new person('megan.jpg', 'megan'),
      zane = new person('zane.jpg', 'zane'),
      christie = new person('christie.jpg', 'christie'),
      eileen = new person('eileen.jpg', 'eileen'),
      amber = new person('amber.jpg', 'amber'),
      cassie = new person('cassie.jpg', 'cassie'),
      jackie = new person('jackie.jpg', 'jackie');



const posterImgsAndLinks = [
   abby, 
   dani, 
   carly, 
   ron, 
   sarah, 
   michaela, 
   emilyw, 
   emilyp, 
   taylor, 
   sam, 
   tamar, 
   megan, 
   zane, 
   christie, 
   eileen, 
   amber, 
   cassie, 
   jackie
];

let availablePosters = [];

function resetAvailablePosters(){
   availablePosters = posterImgsAndLinks;
}

let randomPoster = '';

function getRandomPoster(){
   randomPoster = availablePosters[Math.floor(Math.random()*availablePosters.length)];
   availablePosters.splice(availablePosters.indexOf(randomPoster), 1);
   return randomPoster;
}

let urlSearchParam = '';

function addLinkToPoster(imgTag, randomPoster){
   imgTag.addEventListener('click', () => {
      urlSearchParam = new URLSearchParams(randomPoster.fullQueryStr);
      window.location = './individual.html?' + urlSearchParam;
   })
}


function displayPostersRandomly(){
   posterSlots.forEach((imgTag) => {
      getRandomPoster();
      addLinkToPoster(imgTag, randomPoster);
      imgTag.src = './images/posters/' + randomPoster.fileName;
   })
}

document.addEventListener('DOMContentLoaded', () => {
   resetAvailablePosters();
   displayPostersRandomly();
 });

//hover posters 

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

