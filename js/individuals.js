class individual {
   constructor(fName, lName, linkedin, insta, site, work1, work2, work3, bio, uniqueId) {
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
   }
}

const  
      abby = new individual('abby', 'blend', 'abby-blend-96a363198', 'abbyblendart', 'abbyblend.com', 'work1', 'champs.jpg', 'foreverUSA.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'abby'),

      dani = new individual('danielle', 'berman', '', 'daniberman.dzn', 'daniberman.com', 'posters.gif', 'converse.gif', 'wmag.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'dani'),

      carly = new individual('carly', 'blonski', 'carly-blonski-a60178130', 'carlyblonski.dzn', 'carlyblonski.com', 'work1', 'diarrheaData.gif', 'work3', 'bio', 'carly'),

      ron = new individual('ron', 'feinberg', 'ronald-feinberg-094379113', 're.fein', 'refein.com', 'packaging.gif', 'wodsmall.gif', 'wmag.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'ron'),

      amber = new individual('amber', 'lai', 'amber-lai-233471160', 'amsterbunny.jpg', 'amberglai.com', 'atla.gif', 'work2', 'cumulus.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'amber'),

      michaela = new individual('michaela', 'lucas', 'michaela-lucas-980371198', 'm_m_lucas', 'michaelalucas.com', 'dataviz.gif', 'omag.jpg', 'titlesequence.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'michaela'),

      cassie = new individual('cassie', 'luzenski', 'cassie-luzenski-628a97166', 'cassieluzenski', 'cassieluzenski.com', 'ludus.jpg', 'meloday.jpg', 'glossier.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'cassie'),

      sarah = new individual('sarah', 'martin', 'sarah-martin-694079181', 'martindesign_', 'sarahmartindesign.com', 'promo.gif', 'work2', 'portrait.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'sarah'),

      taylor = new individual('taylor', 'mazzarella', 'taylor-mazzarella-b2391b181', 'tmz.dzn', 'taylormazzarella.com', 'thePost.gif', 'work2', 'critic.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'taylor'),

      tamar = new individual('tamar', 'najarian', 'tamar-najarian-7baa31180', 'bytamar_', 'tamarnajarian.com', 'snownote.gif', 'apricotTypeface.png', 'zodiac.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'tamar'),

      emilyp = new individual('emily', 'parker', 'emilylanaparker', 'emma.jeanbean', 'emilylana.com', 'wmag.png', 'work2', 'sustainableFashion.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'emilyp'),

      jackie = new individual('jackie', 'siry', 'jacqueline-siry-142a5519b', 'artxjac', 'jackiesiry.com', 'warmestColor.jpg', 'mag.jpg', 'sunshine.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'jackie'),

      sam = new individual('samantha', 'smith', 'samantha-smith-590b2a177', 'blueyedblony16', 'smsmth.com', 'work1', 'irirs.jpg', 'menus.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'sam'),

      zane = new individual('zane', 'sommese', 'zanesommese', 'legoknife', 'zanesommese.com', 'laJetee.gif', 'thrifter.jpg', 'wmag.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'zane'),

      megan = new individual('megan', 'tam', 'megan-tam', 'megtamdesign', 'megtam.com', 'work1', 'work2', 'skipper.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'megan'),

      christie = new individual('christie', 'warren', 'christina-warren', '', 'christiewarren.github.io', 'biodiversity.gif', 'freeTime.png', 'kineticType.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'christie'),
      
      emilyw = new individual('emily', 'watkins', 'emily-watkins1', 'emilywatkins5', 'emily-watkins.com', 'lightning.gif', 'ludus.gif', 'lifewtr.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'emilyw'),

       eileen = new individual('eileen', 'yu', 'eileen-yu-615432155', '', 'eileenyudesign.com', 'dataviz.gif', 'mag.gif', 'socialCampaign.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br><br>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'eileen');

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
      bio = document.getElementById('bio');

function loadIndividualInfo(individual){
   //fullName.innerHTML = individual.name;
   poster.src = individual.poster;
   site.href = individual.siteLink;
   site.innerHTML = individual.site;
   insta.href = individual.insta;
   linkedin.href = individual.linkedin;
   work1.src = individual.work1;
   work2.src = individual.work2;
   work3.src = individual.work3;
   bio.innerHTML = individual.bio;
}


function getSelectedPoster(){
   let params = new URLSearchParams(document.location.search.substring(1));
   let selectedPoster = params.get('name');
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



