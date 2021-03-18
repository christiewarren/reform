
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
      imgTag.src = '../images/posters/' + randomPoster.fileName;
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

let isMobile;

if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

function addListeners(){
   if(!isMobile){
      addHoverListenerToPosters();
      addNonHoverClass();
  }
}


document.addEventListener('DOMContentLoaded', addListeners);

//window.onload = addListeners;




