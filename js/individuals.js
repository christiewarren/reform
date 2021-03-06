class individual {
   constructor(fName, lName, linkedin, insta, site, work1, work2, work3, cover1, cover2, cover3, bio, uniqueId, work1Alt, work2Alt, work3Alt) {
      this.fName = fName;
      this.lName = lName;
      this.name = fName + ' ' + lName;
      this.linkedin = linkedin;
      this.linkedinLink = 'https://www.linkedin.com/in/' + linkedin;
      this.insta = insta;
      this.instaLink = 'https://www.instagram.com/' + insta + '/';
      this.siteLink = "https://" + site;
      this.site = site;
      this.uniqueId = uniqueId;
      this.poster = '../images/posters/' + uniqueId + '.jpg';
      this.work1 = '../images/individuals/' + uniqueId + '/' + work1;
      this.work2 = '../images/individuals/' + uniqueId + '/' + work2;
      this.work3 = '../images/individuals/' + uniqueId + '/' + work3;
      this.bio = bio;
      if(this.uniqueId == 'abby' || this.uniqueId == 'dani' || this.uniqueId == 'eileen'){
         this.cursor = '../images/cursors/' + uniqueId + 'Cursor.png';
      }else{
         this.cursor = '../images/cursors/' + uniqueId + 'Cursor.svg';
      }
      this.cover1 = '../images/individuals/' + uniqueId + '/' + cover1;
      this.cover2 = '../images/individuals/' + uniqueId + '/' + cover2;
      this.cover3 = '../images/individuals/' + uniqueId + '/' + cover3;
      this.fullQueryStr = 'name=' + uniqueId;
      this.work1Alt = work1Alt;
      this.work2Alt = work2Alt;
      this.work3Alt = work3Alt;
      this.square = '../images/slidePuzzle/' + uniqueId + 'Square.jpg';
   }
}

const  
      abby = new individual('abby', 'blend', 'abby-blend-96a363198', 'abbyblendart', 'abbyblend.com', 'figment.gif', 'champs.jpg', 'foreverUSA.gif', 'figmentBW.jpg', 'champsBW.jpg', 'foreverUSABW.jpg', "Hello, I’m Abby! Whether I am designing for websites, packaging, or motion, my goal is to provide an experience for the audience. After graduation, I hope to pursue a career in branding or UI/UX.<br><br>Inspired by my appreciation for and experience with tactile design elements, I created this poster to represent the grid in a physical space. I used a punch needling technique to produce gridded shapes with stimulating textures.", 'abby', 'work1Alt', 'Champs menu design', 'Forever USA data visualization'),

      dani = new individual('danielle', 'berman', 'danielle-avery-berman', 'daniberman.dzn', 'daniberman.com', 'covid.gif', 'gratif.gif', 'wmag.gif', 'covidBW.jpg', 'gratifBW.jpg', 'wmagBW.jpg', "Hello! I'm Dani, a passionate creative who aspires to communicate and storytell through design. I hope to pursue a career where I can focus on my aspirations of creating lasting impacts on an audience through decisions and engaging solutions.<br><br>My poster utilizes digital manipulation and long-exposure photography. Juxtaposing these techniques with the constraint of a grid makes an abstract, textured composition that resembles my curiosity for innovating and creating new perspectives.", 'dani', 'COVID-19 Unemployment data visualization', 'Gratif branding', 'Irresistable Magazine'),

      carly = new individual('carly', 'blonski', 'carly-blonski-a60178130', 'carlyblonski.dzn', 'carlyblonski.com', 'hedy.gif', 'diarrheaData.gif', 'gigis.jpg', 'hedyBW.jpg', 'diarrheaDataBW.jpg', 'gigisBW.jpg', "Hello! I'm Carly! I enjoy utilizing design to bring stories to life, whether that's through branding, motion, UI/UX, or creating a physical space to allow the audience to fully immerse themselves into the story.<br><br>With the idea of design extending off the page into physical spaces and being interactive, I played with the notion of taking a grid made up of the X and Y planes and added the Z plane to physically create a perspective.", 'carly', 'Hedy Lamarr motion design', 'Diarrhea data visualization', 'Gigis restaurant design'),

      ron = new individual('ron', 'feinberg', 'ronald-feinberg-094379113', 're.fein', 'refein.com', 'packaging.gif', 'wodsmall.gif', 'wmag.gif', 'packagingBW.jpg', 'wodsmallBW.jpg', 'wmagBW.jpg', "What's up friends! The name's Ron. My life in design thrives off of my inherent need to constantly break the glass ceiling, whether that be through self-taught skills or using the layout less traveled. From motion to editorial design and everything in between, I'm not one settle.<br><br>To showcase this, I based my poster off of my 3D composition skills, utilizing my appreciation for pushing boundaries and my in-your-face design style, while also featuring my love for music.", 'ron', 'Master of deception packaging', 'World of Dreams poster', 'Fire and Ice Magazine'),

      amber = new individual('amber', 'lai', 'amber-lai-233471160', 'amsterbunny.jpg', 'amberglai.com', 'atla.gif', 'beepBoop.gif', 'cumulus.gif', 'atlaBW.jpg', 'beepBoopBW.jpg', 'cumulusBW.jpg', "Oh, hello! I'm Amber. As a designer, being able to make connections between my interests, cultures, and people is probably my biggest inspiration. My goal is to create work that encourages people to look a little deeper at the little things. From motion design and craft to UX/UI, I'm excited to pursue a career that encourages me to learn and explore a wide variety of skillsets.<br><br>Inspired by my love for asymmetrical balance, illustration, and motion graphics, my poster explores playful interaction between simple geometric shapes and organic elements.", 'amber', 'Avatar: The Last Airbender Magazine', 'Beep Boop animation', 'Cumulus app'),

      michaela = new individual('michaela', 'lucas', 'michaela-lucas-980371198', 'm_m_lucas', 'michaelalucas.com', 'dataviz.gif', 'omag.jpg', 'titlesequence.gif', 'datavizBW.jpg', 'omagBW.jpg', 'titleSequenceBW.jpg', "Hi! I'm Michaela. My goal is to create design in which engaging style is rooted in innovative concepts in order to valuably impact culture. After graduation, I want to pursue my passion for image-making through a career in art direction, publication, photography, or branding.<br><br>My poster design is a collage of my photography and painting; the fragments depict how various personal experiences form the cohesive whole that is my identity and design style. It also alludes to my interest in physically conveying abstract ideas and incorporating tactile elements into my work.", 'michaela', 'Domestic violence data visualization', 'O Magazine', '20th Century Women title sequence'),

      cassie = new individual('cassie', 'luzenski', 'cassie-luzenski-628a97166', 'cassieluzenski', 'cassieluzenski.com', 'ludus.jpg', 'meloday.jpg', 'glossier.gif', 'ludusBW.jpg', 'melodayBW.jpg', 'glossierBW.jpg', "Hi, I’m Cassie! I strive to design work that is not only strong in concept but also tells a story and inspires people. After graduation, I hope to start my career in branding, photography and art direction.<br><br>Inspired by my passions for the multiple aspects of design, my poster was created layering a variety of mediums to represent the different types of design I have experimented with in the past 4 years.", 'cassie', 'Ludus social campaign', 'Meloday app', 'Glossier social campaign'),

      sarah = new individual('sarah', 'martin', 'sarah-martin-694079181', 'martindesign_', 'sarahmartindesign.com', 'promo.jpg', 'mag.png', 'portrait.jpg', 'promoBW.jpg', 'magBW.jpg', 'portraitBW.jpg', "Hello friends, I'm Sarah! Years of watching HGTV and browsing editorial magazines have brought me here. Okay actually it was a lot of hard work and problem solving that got me here. However, I love a good challenge. I'm excited to start my career in photography, editorial design, and art direction.<br><br>I love working with people and curating a positive atmosphere is very important to me. My poster is inspired by my process as a designer via photography. I am a very detail oriented person which explains why I enjoy making sure every style choice has a purpose and fixing rags in copyright.", 'sarah', 'Personal promo', 'Alice in Wonderland Magazine', 'Experimental portrait'),

      taylor = new individual('taylor', 'mazzarella', 'taylor-mazzarella-b2391b181', 'tmz.dzn', 'taylormazzarella.com', 'sustainability.gif', 'dezignFest.gif', 'critic.gif', 'sustainabilityBW.jpg', 'dezignFestBW.jpg', 'criticBW.jpg', "Hey what’s up? I’m Taylor! I’m looking to design comprehensive and strategic brands that pack a punch. After graduation I hope to pursue a career in branding and motion design.<br><br>Inspired by self-expression and how education evolves our sense of identity, I created a poster to represent the transformation of personal identity through design.", 'taylor', 'The Post title sequence', 'Dezign Fest', 'Critic app'),

      tamar = new individual('tamar', 'najarian', 'tamar-najarian-7baa31180', 'bytamar_', 'tamarnajarian.com', 'apricot.png', '1915.gif', 'zodiac.png', 'apricotBW.jpg', '1915BW.jpg', 'zodiacBW.jpg', "Hey guys I’m Tamar! I've recently become increasingly fascinated by typography and the way its details hold so much communicative power. I hope to pursue a career in branding where I’ll be able to create typefaces that bring an extra level of personality to whatever it is I’m creating.<br><br>Inspired by my love for typography and Armenian heritage, my poster was designed by manipulating the vector forms of a custom Armenian typeface I created.", 'tamar', 'Snownote app', 'Apricot typeface', 'The Zodiac Collection wine'),

      emilyp = new individual('emily', 'parker', 'emilylanaparker', 'emma.jeanbean', 'emilylana.com', 'wmag.png', 'sustainableFashion.gif', 'light.jpg', 'wmagBW.jpg', 'sustainableFashionBW.jpg', 'lightBW.jpg', "Hey there, I'm Emily! I'm constantly inspired by the world around me, and always search for new places to explore. I love to collaborate with others and appreciate how design connects individuals from different backgrounds, locations, and walks of life. After graduation I'm hoping to land a job that allows me to grow as a designer, and work with a variety of brands and creatives. My poster highlights my interests in sustainability as a designer. After noticing an uncomfortable amount of face masks littering State College, I decided to collect, cut up, and repurpose them into something new.", 'emilyp', 'Unapologetic magazine', 'Lightbulb packaging', 'Sustainable Fashion data visualization'),

      jackie = new individual('jackie', 'siry', 'jackie-siry-6428731bb', 'artxjac', 'jackiesiry.com', 'warmestColor.jpg', 'mag.jpg', 'sunshine.gif', 'warmestColorBW.jpg', 'magBW.jpg', 'sunshineBW.jpg', "Heyo, I'm Jackie, a creative trained in Design with a strong flare for Visual Arts. I believe that as designers, we have the power to dismantle faulty perspectives and push our culture into a new terrain. Through design, we can create a more sustainable and socially responsible world.<br><br>As displayed in my poster, my style plays with the relationship between art and design. I aim to create work that is as visually captivating as it is efficiently communicative, all while persuading the viewer to alter their original perspective.", 'jackie', 'Blue is the Warmest Color book cover', 'Kinetic Magazine', 'Little Miss Sunshine title sequence'),

      sam = new individual('samantha', 'smith', 'samantha-smith-590b2a177', 'blueyedblony16', 'smsmth.com', 'chewPoint.jpg', 'irirs.jpg', 'menus.jpg', 'chewPointBW.jpg', 'irirsBW.jpg', 'menusBW.jpg', "Hi, I'm Sam Smith (I know I'm not the only one). I am a creative little lady with an affinity for puns and wordplay. While I am not locked down into a specific career path at this time, I am quite fond of digital design (UX/UI) and anything with illustration.<br><br>Inspired by my foundation in art and drawing, I have incorporated illustration and arts/crafts into my poster design.", 'sam', 'Chew Point app', 'irirs notification system', 'Sowers Harvest menu'),

      zane = new individual('zane', 'sommese', 'zanesommese', 'legoknife', 'zanesommese.com', 'laJetee.gif', 'thrifter.jpg', 'wmag.jpg', 'laJeteeBW.jpg', 'thrifterBW.jpg', 'wmagBW.jpg', "Hello, I’m Zane. I am a creative who is always looking to get passionate about a new project. I love a good poster or typeface and have an interest in fashion. After graduation, I hope to pursue a career in branding or fashion. I love to experiment with edgy and nonconventional forms of design and hope to continue this in my professional career. My poster was created by manipulating a polaroid photograph I took of a vintage glass head clothing display.", 'zane', 'La Jetee title sequence', 'Thrifter app', 'U.S. Daze Magazine'),

      megan = new individual('megan', 'tam', 'megan-tam', 'megtamdesign', 'megtam.com', 'affair.jpg', 'kyubiTarot.gif', 'skipper.gif', 'affairBW.jpg', 'kyubiBW.jpg', 'skipperBW.jpg', "Hi, I’m Megan! I have tremendous love for creating conceptual designs that bring new perspectives to the audience. After graduation, my goal is to land a design career in branding or fashion within the entertainment industry. I won’t settle until I can work on insane projects with amazing creatives that I have yet to imagine.<br><br>My poster exhibits my personal style of curating hybrid designs by overlapping multiple concepts and elements. Each layer holds its own story, but when combined, they come alive as an innovative and even stronger design piece.", 'megan', 'Affair experimental portrait', 'Kyubi Tarot', 'Skipper app'),

      christie = new individual('christie', 'warren', 'christina-warren', '', 'christiewarren.com', 'biodiversity.gif', 'learnThis.jpg', 'kineticType.gif', 'biodiversityBW.jpg', 'learnThisBW.jpg', 'kineticTypeBW.jpg', "Hey, I'm Christie! Some true things about me: there’s nothing I love more than a 3 hour class-critique, my heart belongs to CSS, and I like my designs clean and simple. Up next I'll be starting a career as a UX designer and improving my technical skills on the side!<br><br>The intersection of code and design is the inspiration for my poster, and I used a JavaScript library called p5.js to code the cube design.", 'christie', 'Biodiversity data visualization', 'Learn This Instead Chrome Extension', 'Most Astounding Fact kinetic typography'),
      
      emilyw = new individual('emily', 'watkins', 'emily-watkins1', 'emilywatkins5', 'emily-watkins.com', 'lightning.gif', 'ludus.gif', 'lifewtr.jpg', 'lightningBW.jpg', 'ludusBW.jpg', 'lifewtrBW.jpg', "Hi everyone! My name is Emily. I am a creative soul who has a deep love for digital storytelling and finding the why behind design.<br><br>After graduation, I will begin my career as a graphic designer. Inspired by my experimentation within different disciplines of design, this poster represents the fluidity of design specialties and how they all play critical roles with one another.", 'emilyw', 'Lightning app', 'Ludus social campaign', 'LifeWTR brand campaign'),

      eileen = new individual('eileen', 'yu', 'eileen-yu-615432155', '', 'eileenyudesign.com', 'dataviz.gif', 'mag.gif', 'socialCampaign.gif', 'datavizBW.jpg', 'magBW.jpg', 'socialCampaignBW.jpg', "Hi, I'm Eileen. I am obsessed with any visual experience that could convey a story or just bring happiness to viewers or to encourage people to live boldly.  After graduation, I hope to pursue a career in creative design, art and UI/UX design.<br><br>In my poster, I played with the photos I took and incorporated the hand-drawing illustration to create this mysterious vibe, and to express my interest in art and design.", 'eileen', 'Deforestation data visualization', 'Wonderland Magazine', 'Heinz social campaign');

const individuals = [
   dani,
   abby,
   carly,
   ron,
   amber,
   michaela,
   cassie,
   sarah,
   taylor,
   tamar,
   emilyp,
   jackie,
   sam,
   zane,
   megan,
   christie,
   emilyw,
   eileen,
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
      individualPageWrap = document.getElementById('individualPageWrap'),
      cover1 = document.getElementById('cover1'),
      cover2 = document.getElementById('cover2'),
      cover3 = document.getElementById('cover3'),
      imgModal = document.getElementById('imgModal');

let covers = [cover1, cover2, cover3];
let modalImg = document.getElementById('modalImg');

function loadIndividualInfo(individual){
   //fullName.innerHTML = individual.name;
   poster.src = individual.poster;
   site.href = individual.siteLink;
   site.innerHTML = individual.site;
   if(individual.instaLink != 'https://www.instagram.com/@'){
      insta.href = individual.instaLink;
      insta.style.display = 'inline-block';
   }else{
      insta.style.display = 'none';
   }
   linkedin.href = individual.linkedinLink;
   bio.innerHTML = individual.bio;
   cover1.src = individual.cover1;
   cover2.src = individual.cover2;
   cover3.src = individual.cover3;
   work1.src = individual.work1;
   work1.alt = individual.work1Alt;
   work2.src = individual.work2;
   work2.alt = individual.work2Alt;
   work3.src = individual.work3;
   work3.alt = individual.work3Alt;
   setCursor(individual);
   getNavIndividuals(individual);
   addWorkClickListeners();
}

function addWorkClickListeners(){
   covers.forEach((element) => {
      element.addEventListener('click', () => {
         showImgModal(element);
      })
   })
}

function showImgModal(clickedCover){
   if(clickedCover == cover1){
      modalImg.src = work1.src;
   }else if(clickedCover == cover2){
      modalImg.src = work2.src;
   }else{
      modalImg.src = work3.src;
   }
   
   imgModal.style.display = 'grid';

   addModalCloseListener();
}

function addModalCloseListener(){
   imgModal.addEventListener('click', () => {
      imgModal.style.display = 'none';
      modalImg.src = '';
   })
}

const customCursor = document.getElementById('customCursor');

function setCursor(individual) {
   if(!isMobile){
      document.body.style.cursor = "none";
      customCursor.src = individual.cursor;
   
      document.addEventListener('mousemove', event => {
         customCursor.style.top = event.clientY + 8 + 'px';
         customCursor.style.left = event.clientX - 5 + 'px';
      })
   }
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

let nextIndividual;
let previousIndividual;
const previousPersonImage = document.getElementById('previousImg'),
      nextPersonImage = document.getElementById('nextImg'),
      previousName = document.getElementById('previousName'),
      nextName = document.getElementById('nextName'),
      previousNavBtn = document.getElementById('previousNav'),
      nextNavBtn = document.getElementById('nextNav');


function getNavIndividuals(individual) {
   getPreviousIndividual(individual);
   getNextIndividual(individual);
   loadPersonNavInfo();
}

function getPreviousIndividual(individual){
   if(individuals.indexOf(individual) == 0){
      previousIndividual = individuals[17];
   }else{
      previousIndividual = individuals[individuals.indexOf(individual)-1];
   }
   addLinkToPersonNav(previousNavBtn, previousIndividual);
}

function getNextIndividual(individual){
   if(individuals.indexOf(individual) == 17){
      nextIndividual = individuals[0];
   }else{
      nextIndividual = individuals[individuals.indexOf(individual)+1];
   }
   addLinkToPersonNav(nextNavBtn, nextIndividual);
}

function loadPersonNavInfo(){
   previousName.innerHTML = previousIndividual.fName + '<br>' + previousIndividual.lName;
   previousPersonImage.src = previousIndividual.square;
   previousPersonImage.alt = previousIndividual.fName + previousIndividual.lName;
   nextName.innerHTML = nextIndividual.fName + '<br>' + nextIndividual.lName;
   nextPersonImage.src = nextIndividual.square;
   nextPersonImage.alt = nextIndividual.fName + nextIndividual.lName;
}

function addLinkToPersonNav(navBtn, navIndividual){
   navBtn.addEventListener('click', () => {
      urlSearchParam = new URLSearchParams(navIndividual.fullQueryStr);
      window.location = './individual.html?' + urlSearchParam;
   })
}