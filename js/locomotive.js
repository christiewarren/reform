const scroll = new LocomotiveScroll({
   el: document.querySelector('[data-scroll-container]'),
   smooth: true,
   multiplier: 1,
   touchMultiplier: 4,
   tablet: {
      smooth: true
   },
   smartphone: {
      smooth: true
   }
});