class individual {
   constructor(fName, lName, linkedin, insta, site, work1, work2, work3, bio) {
      this.fName = fName;
      this.lName = lName;
      this.name = fName + ' ' + lName;
      this.linkedin = 'https://www.linkedin.com/in/' + linkedin;
      this.insta = '@' + insta;
      this.instaLink = 'https://www.instagram.com/' + insta;
      this.siteLink = "https://" + site;
      this.site = site;
      this.poster = './images/posters/smaller/' + fName + '.jpg';
      this.work1 = './images/individuals/' + fName + '/' + work1;
      this.work2 = './images/individuals/' + fName + '/' + work2;
      this.work3 = './images/individuals/' + fName + '/' + work3;
      this.bio = bio;
   }
}

let abby = new individual('Abby', 'Blend', 'abby-blend-96a363198', 'abbyblendart', 'abbyblend.com', 'work1', 'champs.jpg', 'foreverUSA.gif', 'bio');

let dani = new individual('Danielle', 'Berman', '', 'daniberman.dzn', 'daniberman.com', 'posters.gif', 'converse.gif', 'wmag.gif', 'bio');

let carly = new individual('Carly', 'Blonski', 'carly-blonski-a60178130', 'carlyblonski.dzn', 'carlyblonski.com', 'work1', 'diarrheaData.gif', 'work3', 'bio');

let ron = new individual('Ron', 'Feinberg', 'ronald-feinberg-094379113', 're.fein', 'refein.com', 'packaging.gif', 'wodsmall.gif', 'wmag.gif', 'bio');

let amber = new individual('Amber', 'Lai', 'amber-lai-233471160', 'amsterbunny.jpg', 'amberglai.com', 'atla.gif', 'work2', 'cumulus.gif', 'bio');

let michaela = new individual('Michaela', 'Lucas', 'michaela-lucas-980371198', 'm_m_lucas', 'michaelalucas.com', 'dataviz.gif', 'omag.jpg', 'titlesequence.gif', 'bio');

let cassie = new individual('Cassie', 'Luzenski', 'cassie-luzenski-628a97166', 'cassieluzenski', 'cassieluzenski.com', 'ludus.jpg', 'meloday.jpg', 'glossier.gif', 'bio');

let sarah = new individual('Sarah', 'Martin', 'sarah-martin-694079181', 'martindesign_', 'sarahmartindesign.com', 'promo.gif', 'work2', 'portrait.jpg', 'bio');

let taylor = new individual('Taylor', 'Mazzarella', 'taylor-mazzarella-b2391b181', 'tmz.dzn', 'taylormazzarella.com', 'thePost.gif', 'work2', 'critic.gif', 'bio');

let tamar = new individual('Tamar', 'Najarian', 'tamar-najarian-7baa31180', 'bytamar_', 'tamarnajarian.com', 'snownote.gif', 'apricotTypeface.png', 'zodiac.png', 'bio');

let emp = new individual('Emily', 'Parker', 'emilylanaparker', 'emma.jeanbean', 'emilylana.com', 'wmag.png', 'work2', 'sustainableFashion.gif', 'bio');

let jackie = new individual('Jackie', 'Siry', 'jacqueline-siry-142a5519b', 'artxjac', 'jackiesiry.com', 'warmestColor.jpg', 'mag.jpg', 'sunshine.gif', 'bio');

let sam = new individual('Samantha', 'Smith', 'samantha-smith-590b2a177', 'blueyedblony16', 'smsmth.com', 'work1', 'irirs.jpg', 'menus.jpg', 'bio');

let zane = new individual('Zane', 'Sommese', 'zanesommese', 'legoknife', 'zanesommese.com', 'laJetee.gif', 'thrifter.jpg', 'wmag.jpg', 'bio');

let megan = new individual('Megan', 'Tam', 'megan-tam', 'megtamdesign', 'megtam.com', 'work1', 'work2', 'skipper.gif', 'bio');

let christie = new individual('Christie', 'Warren', 'christina-warren', '', 'christiewarren.github.io', 'biodiversity.gif', 'freeTime.png', 'kineticType.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.');

let emw = new individual('Emily', 'Watkins', 'emily-watkins1', 'emilywatkins5', 'emily-watkins.com', 'lightning.gif', 'ludus.gif', 'lifewtr.jpg', 'bio');

let eileen = new individual('Eileen', 'Yu', 'eileen-yu-615432155', '', 'eileenyudesign.com', 'dataviz.gif', 'mag.gif', 'socialCampaign.gif', 'bio');

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

loadIndividualInfo(christie);

