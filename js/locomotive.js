const scroll = new LocomotiveScroll({
   el: document.querySelector('[data-scroll-container]'),
   smooth: true,
   multiplier: 1,
   tablet: {
      smooth: true
   },
   smartphone: {
      smooth: true
   }
});