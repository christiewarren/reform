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
   work1.src = individual.cover1;
   work2.src = individual.cover2;
   work3.src = individual.cover3;
   bio.innerHTML = individual.bio;
   individualPageWrap.style.cursor = 'url("../images/' + individual.cursor + '"), pointer';
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