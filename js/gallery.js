
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
