(function ($) {
	$(window).resize(function() {
		var docWidth = $(document).width();
	 	var data = {
      slidesPerView: ((docWidth >= 1024) ? 4 : ((docWidth > 768 && docWidth <= 1024) ? 3 : ((docWidth > 640 && docWidth <= 768) ? 2 : 1)) ),
      spaceBetween: 50,
  	}
 	//	var swiper = new Swiper("#"+jQuery('.view-componente-noticias .swiper-container-horizontal').attr('id'), data);
	});		
}(jQuery));


