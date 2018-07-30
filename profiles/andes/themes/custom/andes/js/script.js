(function ($) {
	Drupal.behaviors.agenda = {
		attach: function (context, settings) {

			console.log("hola mundo tbwa");
			//slider pagination
			//http://idangero.us/swiper/   .view-componente-noticias .views_slideshow_swiper_main
			
setTimeout(function(){
	var swiper = new Swiper('.view-componente-noticias .views_slideshow_swiper_main', {
	  slidesPerView: 4,
	  spaceBetween: 20,
	  breakpoints: {
	    1197: {
	      slidesPerView: 3,
	      spaceBetweenSlides: 50
	    },
	    999: {
	      slidesPerView: 2,
	      spaceBetweenSlides: 50
	    }
	  }
	});
},700);
			// var swiper = new Swiper('.view-componente-noticias .views_slideshow_swiper_main', {
	  //     breakpoints: {
	  //       1197: {
	  //         slidesPerView: 3,
	  //       },
	  //       992: {
	  //         slidesPerView: 2, 
	  //       },
	  //       550: {
	  //         slidesPerView: 1,
	  //       }
	  //     },
			//   on:{
			// 		resize() {
			// 			if (window.innerWidth >= 1197) {
			// 		  	swiper.slides.css('width', '');
			// 		 	}
			// 		 	if (window.innerWidth >= 640) {
			// 		  	swiper.slides.css('width', '');
			// 		 	}
			// 		}
		 //    }
   //  	});
   //  	
  

// 
// var swiper_banner = new Swiper('.view-componente-noticias .views_slideshow_swiper_main', {
//     pagination: '.swiper-pagination',
//     paginationClickable: true,
//     loop: true
// });
// var swiper_services = new Swiper('.view-componente-noticias .views_slideshow_swiper_main', {
//     slidesPerView: 4,
//     spaceBetween: 20,
    
// });
// // Breakpoints
// $(window).on('resize', function(){
//     var width = $(window).width();
//     if(width < 1000 && width >= 500) {
//         swiper_services.params.slidesPerView = 2;
//         swiper_services.params.spaceBetween = 20;
//     } else if(width < 500) {
//         swiper_services.params.slidesPerView = 1;
//         swiper_services.params.spaceBetween = 20;
//     } else {
//         swiper_services.params.slidesPerView = 3;
//         swiper_services.params.spaceBetween = 20;
//     }
//     swiper_services.onResize();
// }).resize(); 

 
//
//
//
//
		}
	};
}(jQuery));


