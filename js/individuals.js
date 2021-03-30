class individual {
   constructor(fName, lName, linkedin, insta, site, work1, work2, work3, cover1, cover2, cover3, bio, uniqueId) {
      this.fName = fName;
      this.lName = lName;
      this.name = fName + ' ' + lName;
      this.linkedin = 'https://www.linkedin.com/in/' + linkedin;
      this.insta = '@' + insta;
      this.instaLink = 'https://www.instagram.com/' + insta;
      this.siteLink = "https://" + site;
      this.site = site;
      this.uniqueId = uniqueId;
      this.poster = '../images/posters/' + uniqueId + '.jpg';
      this.work1 = '../images/individuals/' + uniqueId + '/' + work1;
      this.work2 = '../images/individuals/' + uniqueId + '/' + work2;
      this.work3 = '../images/individuals/' + uniqueId + '/' + work3;
      this.bio = bio;
      this.cursor = '../images/cursors/' + uniqueId + 'Cursor.png';
      this.cover1 = '../images/individuals/' + uniqueId + '/' + cover1;
      this.cover2 = '../images/individuals/' + uniqueId + '/' + cover2;
      this.cover3 = '../images/individuals/' + uniqueId + '/' + cover3;
   }
}

const  
      abby = new individual('abby', 'blend', 'abby-blend-96a363198', 'abbyblendart', 'abbyblend.com', 'work1', 'champs.jpg', 'foreverUSA.gif', 'cover1', 'champs.jpg', 'foreverUSA.jpg', 'Hello, I’m Abby! Whether I am designing for websites, packaging, or motion, my goal is to provide an experience for the audience. After graduation, I hope to pursue a career in branding or UI/UX. <br><br>Inspired by my appreciation for and experience with tactile design elements, I created this poster to represent the grid in a physical space. I used a punch needling technique to produce gridded shapes with stimulating textures.', 'abby'),

      dani = new individual('danielle', 'berman', '', 'daniberman.dzn', 'daniberman.com', 'posters.gif', 'converse.gif', 'wmag.gif', 'posters.jpg', 'converse.jpg', 'wmag.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'dani'),

      carly = new individual('carly', 'blonski', 'carly-blonski-a60178130', 'carlyblonski.dzn', 'carlyblonski.com', 'work1', 'diarrheaData.gif', 'work3', 'cover1', 'diarrheaData.jpg', 'cover2', 'bio', 'carly'),

      ron = new individual('ron', 'feinberg', 'ronald-feinberg-094379113', 're.fein', 'refein.com', 'packaging.gif', 'wodsmall.gif', 'wmag.gif', 'packaging.jpg', 'wodsmall.jpg', 'wmag.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'ron'),

      amber = new individual('amber', 'lai', 'amber-lai-233471160', 'amsterbunny.jpg', 'amberglai.com', 'atla.gif', 'work2', 'cumulus.gif', 'atla.jpg', 'cover2', 'cumulus.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'amber'),

      michaela = new individual('michaela', 'lucas', 'michaela-lucas-980371198', 'm_m_lucas', 'michaelalucas.com', 'dataviz.gif', 'omag.jpg', 'titlesequence.gif', 'dataviz.jpg', 'omag.jpg', 'titlesequence.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'michaela'),

      cassie = new individual('cassie', 'luzenski', 'cassie-luzenski-628a97166', 'cassieluzenski', 'cassieluzenski.com', 'ludus.jpg', 'meloday.jpg', 'glossier.gif', 'ludus.jpg', 'meloday.jpg', 'glossier.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'cassie'),

      sarah = new individual('sarah', 'martin', 'sarah-martin-694079181', 'martindesign_', 'sarahmartindesign.com', 'promo.gif', 'work2', 'portrait.jpg', 'promo.jpg', 'cover2', 'portrait.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'sarah'),

      taylor = new individual('taylor', 'mazzarella', 'taylor-mazzarella-b2391b181', 'tmz.dzn', 'taylormazzarella.com', 'thePost.gif', 'work2', 'critic.gif', 'thePost.jpg', 'cover2', 'critic.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'taylor'),

      tamar = new individual('tamar', 'najarian', 'tamar-najarian-7baa31180', 'bytamar_', 'tamarnajarian.com', 'snownote.gif', 'apricotTypeface.png', 'zodiac.png', 'snownote.jpg', 'apricotTypeface.png',  'zodiac.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'tamar'),

      emilyp = new individual('emily', 'parker', 'emilylanaparker', 'emma.jeanbean', 'emilylana.com', 'wmag.png', 'work2', 'sustainableFashion.gif', 'wmag.png', 'cover2', 'sustainableFashion.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'emilyp'),

      jackie = new individual('jackie', 'siry', 'jacqueline-siry-142a5519b', 'artxjac', 'jackiesiry.com', 'warmestColor.jpg', 'mag.jpg', 'sunshine.gif', 'warmestColor.jpg', 'mag.jpg', 'sunshine.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'jackie'),

      sam = new individual('samantha', 'smith', 'samantha-smith-590b2a177', 'blueyedblony16', 'smsmth.com', 'work1', 'irirs.jpg', 'menus.jpg', 'cover1', 'irirs.jpg', 'menus.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'sam'),

      zane = new individual('zane', 'sommese', 'zanesommese', 'legoknife', 'zanesommese.com', 'laJetee.gif', 'thrifter.jpg', 'wmag.jpg', 'laJetee.jpg', 'thrifter.jpg', 'wmag.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'zane'),

      megan = new individual('megan', 'tam', 'megan-tam', 'megtamdesign', 'megtam.com', 'work1', 'work2', 'skipper.gif', 'cover1', 'cover2', 'skipper.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'megan'),

      christie = new individual('christie', 'warren', 'christina-warren', '', 'christiewarren.github.io', 'biodiversity.gif', 'freeTime.png', 'kineticType.gif', 'biodiversity.jpg', 'freeTime.png', 'kineticType.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'christie'),
      
      emilyw = new individual('emily', 'watkins', 'emily-watkins1', 'emilywatkins5', 'emily-watkins.com', 'lightning.gif', 'ludus.gif', 'lifewtr.jpg', 'lightning.jpg', 'ludus.jpg', 'lifewtr.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'emilyw'),

       eileen = new individual('eileen', 'yu', 'eileen-yu-615432155', '', 'eileenyudesign.com', 'dataviz.gif', 'mag.gif', 'socialCampaign.gif', 'dataviz.jpg', 'mag.jpg', 'socialCampaign.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'eileen');

const individuals = [
   abby,
   dani,
   carly,
   ron,
   michaela,
   sarah,
   amber,
   sam,
   tamar,
   taylor,
   emilyp,
   emilyw,
   christie,
   eileen,
   cassie,
   jackie,
   zane,
   megan 
];

let isMobile;

if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

const fullName = document.getElementById('name'),
      poster = document.getElementById('poster'),
      site = document.getElementById('site'),
      insta = document.getElementById('insta'),
      linkedin = document.getElementById('linkedin'),
      work1 = document.getElementById('work1'),
      work2 = document.getElementById('work2'),
      work3 = document.getElementById('work3'),
      bio = document.getElementById('bio'),
      individualPageWrap = document.getElementById('individualPageWrap');

function loadIndividualInfo(individual){
   //fullName.innerHTML = individual.name;
   poster.src = individual.poster;
   site.href = individual.siteLink;
   site.innerHTML = individual.site;
   insta.href = individual.insta;
   linkedin.href = individual.linkedin;
   bio.innerHTML = individual.bio;
   individualPageWrap.style.cursor = 'url("../images/' + individual.cursor + '"), pointer';
   if(isMobile){
      work1.src = individual.work1;
      work2.src = individual.work2;
      work3.src = individual.work3;
   }else{
      work1.src = individual.cover1;
      work2.src = individual.cover2;
      work3.src = individual.cover3;
   }
   
   checkForGifs(individual);
}

let selectedPoster;

function getSelectedPoster(){
   let params = new URLSearchParams(document.location.search.substring(1));
   selectedPoster = params.get('name');
   getSelectedIndividual(selectedPoster);
}

function getSelectedIndividual(selectedPoster){
   individuals.forEach((individual) => {
      if(individual.uniqueId == selectedPoster)
      loadIndividualInfo(individual);
      return;
   })
}


document.addEventListener('DOMContentLoaded', getSelectedPoster);

let workImgs = Array.from(document.getElementsByClassName('workImg'));

function checkForGifs(individual){
   workImgs.forEach((img) => {
      addGifListeners(img, individual);
   })
}

function addGifListeners(img, individual){
   addMouseOverListener(img, individual);
   addMouseOutListener(img, individual);
}

function addMouseOverListener(img, individual){
   img.addEventListener('mouseout', () => {
      if(workImgs.indexOf(img) == 0){
         img.src = individual.cover1;
      }else if(workImgs.indexOf(img) == 1){
         img.src = individual.cover2;
      }else{
         img.src = individual.cover3;
      }
   })
}

function addMouseOutListener(img, individual){
   img.addEventListener('mouseover', () => {
      if(workImgs.indexOf(img) == 0){
         img.src = individual.work1;
      }else if(workImgs.indexOf(img) == 1){
         img.src = individual.work2;
      }else{
         img.src = individual.work3;
      }
   })
}