const scroll = new LocomotiveScroll({
   el: document.querySelector('[data-scroll-container]'),
   smooth: true,
   multiplier: 1,
   touchMultiplier: 3,
   firefoxMultiplier: 50,
   tablet: {
      smooth: true
   },
   smartphone: {
      smooth: true
   }
});

const concept1Img = document.getElementById('concept1Img'),
      concept2Img = document.getElementById('concept2Img'),
      concept3Img = document.getElementById('concept3Img'),
      concept4Img = document.getElementById('concept4Img'),
      concept5Img = document.getElementById('concept5Img'),
      concept1Text = document.getElementById('concept1Text'),
      concept2Text = document.getElementById('concept2Text'),
      concept3Text = document.getElementById('concept3Text'),
      concept4Text = document.getElementById('concept4Text'),
      concept5Text = document.getElementById('concept5Text');

scroll.on('scroll', () => {
   let concept2Dist = window.pageYOffset + concept2Text.getBoundingClientRect().top;
   let concept3Dist = window.pageYOffset + concept3Text.getBoundingClientRect().top;
   let concept4Dist = window.pageYOffset + concept4Text.getBoundingClientRect().top;
   let concept5Dist = window.pageYOffset + concept5Text.getBoundingClientRect().top;

   if (concept2Dist < 50) {
      concept2Img.style.zIndex = "6";
   } else {
      concept2Img.style.zIndex = "1";
   }

   if (concept3Dist < 50) {
      concept3Img.style.zIndex = "6";
   } else {
      concept3Img.style.zIndex = "1";
   }

   if (concept4Dist < 50) {
      concept4Img.style.zIndex = "6";
   } else {
      concept4Img.style.zIndex = "1";
   }

   if (concept5Dist < 50) {
      concept5Img.style.zIndex = "6";
   } else {
      concept5Img.style.zIndex = "1";
   }
});