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