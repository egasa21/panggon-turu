(function(){
    window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
          let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
          });
    
          let portfolioFilters = select('#portfolio-flters li', true);
    
          on('click', '#portfolio-flters li', function(e) {
            e.preventDefault();
            portfolioFilters.forEach(function(el) {
              el.classList.remove('filter-active');
            });
            this.classList.add('filter-active');
    
            portfolioIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            aos_init();
          }, true);
        }
    
      });
    
        /**
       * Initiate portfolio lightbox 
       */
        const portfolioLightbox = GLightbox({
            selector: '.portfokio-lightbox'
          });
        
          /**
           * Portfolio details slider
           */
          new Swiper('.portfolio-details-slider', {
            speed: 400,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            }
          });


          function aos_init() {
            AOS.init({
              duration: 1000,
              easing: "ease-in-out",
              once: true,
              mirror: false
            });
          }
          window.addEventListener('load', () => {
            aos_init();
          });
        
          /**
           * Initiate Pure Counter 
           */
          new PureCounter();

})();