(function ($) {

  // $(window).resize(function() {
  //   var docWidth = $(document).width();
  //    var data = {
  //     slidesPerView: ((docWidth >= 1024) ? 4 : ((docWidth > 768 && docWidth <= 1024) ? 3 : ((docWidth > 640 && docWidth <= 768) ? 2 : 1)) ),
  //     spaceBetween: 50,
  //   }
  //  //	var swiper = new Swiper("#"+jQuery('.view-componente-noticias .swiper-container-horizontal').attr('id'), data);
  // });


		var SlideClass = "";
    var ParentSlideClass = "";
	//add breidpoint news component.
	$(window).ready(function() {
    if($('.view-banner-nodes').length > 0){
      // var ParentSlideClass = $('.view-banner-nodes .field-content').children('div').first().attr("class");
      // $('.view-banner-nodes').addClass(ParentSlideClass+"-container");
      // var slideActivePosition = $('#'+slideActive+' span.field-content').children('div').first().attr('class');
      // SlideClass = slideActivePosition+"-control";
    }
    checkSize();
    $(window).resize(checkSize);
	});
	function checkSize(){
		var docWidth = $(document).width();
	 	var data = {
	    slidesPerView: ((docWidth >= 1200) ? 4 : ((docWidth > 768 && docWidth <= 1200) ? 3 : ((docWidth > 555 && docWidth <= 768) ? 2 : 1)) ),
      spaceBetween: 20,
      swipeTo: 0,
    }
    // autoplay: {
    //   delay: 5000,
    // },
		if ($('.view-componente-noticias .swiper-container-horizontal').length > 0 && (docWidth > 0 && docWidth <= 1200) ) {
			setTimeout(function(){
				var swiper = new Swiper("#"+jQuery('.view-componente-noticias .swiper-container-horizontal').attr('id'), data);
			},50)
    }
    if ($('.view-id-componente_eventos .swiper-container-horizontal').length > 0) {
			setTimeout(function(){
				var swiper = new Swiper("#"+jQuery('.view-id-componente_eventos .swiper-container-horizontal').attr('id'), data);
			},50)
    }
    if ($('.view-display-id-componente_publicaciones .swiper-container-horizontal').length > 0) {
			setTimeout(function(){
				var swiper = new Swiper("#"+jQuery('.view-display-id-componente_publicaciones .swiper-container-horizontal').attr('id'), data);
			},50)
    }
    if ($('.view-display-id-especiales_destacadas .swiper-container-horizontal').length > 0) {
			setTimeout(function(){
				var swiper = new Swiper("#"+jQuery('.view-display-id-especiales_destacadas .swiper-container-horizontal').attr('id'), data);
			},50)
    }

    //
    //view-display-id-componente_publicaciones
    //view-id-componente_eventos
	}
setTimeout(function(){
  if($('.view-banner-nodes').length > 0){
    $(".view-banner-nodes .views-slideshow-controls-text-previous-processed, .view-banner-nodes .views-slideshow-controls-text-next-processed").on('click', function(event) {
      var sibling  = $(this).parents('div.views-slideshow-controls-bottom').siblings().attr('id');
      var slideActive = $('#'+sibling).find('li.swiper-slide-active').attr('id');
      var slideActivePosition = $('#'+slideActive+' span.field-content').children('div').first().attr('class');
      var SlideClassParent = $('.view-banner-nodes .field-content').children('div').first().attr("class");
      if (SlideClass == "") {
        $(this).parents('div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
        $('.view-banner-nodes').addClass(SlideClassParent+"-container");
        SlideClass = slideActivePosition+"-control";
        ParentSlideClass = slideActivePosition+"-container";
      }
      else{
        $(this).parents('div.views-slideshow-controls-bottom').removeClass(SlideClass);
        $(this).parents('div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
        $('.view-banner-nodes').removeClass(ParentSlideClass);
        $('.view-banner-nodes').addClass(slideActivePosition+"-container");
        SlideClass = slideActivePosition+"-control";
        ParentSlideClass = slideActivePosition+"-container";
      }
    });
    $(".view-banner-nodes .views-slideshow-controls-text-previous-processed").click();
  }
  if($('.view-slider-homes').length > 0){
    $(".view-slider-homes .views-slideshow-controls-text-previous-processed, .view-slider-homes .views-slideshow-controls-text-next-processed").on('click', function(event) {
      var sibling  = $(this).parents('div.views-slideshow-controls-bottom').siblings().attr('id');
      var slideActive = $('#'+sibling).find('li.swiper-slide-active').attr('id');
      var slideActivePosition = $('#'+slideActive+' span.field-content').children('div').first().attr('class');
      var SlideClassParent = $('.view-slider-homes .field-content').children('div').first().attr("class");
      if (SlideClass == "") {
        $(this).parents('div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
        $('.view-slider-homes').addClass(SlideClassParent+"-container");
        SlideClass = slideActivePosition+"-control";
        ParentSlideClass = slideActivePosition+"-container";
      }
      else{
        $(this).parents('div.views-slideshow-controls-bottom').removeClass(SlideClass);
        $(this).parents('div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
        $('.view-slider-homes').removeClass(ParentSlideClass);
        $('.view-slider-homes').addClass(slideActivePosition+"-container");
        SlideClass = slideActivePosition+"-control";
        ParentSlideClass = slideActivePosition+"-container";
      }
    });
    $(".view-slider-homes .views-slideshow-controls-text-previous-processed, .view-slider-homes .views-slideshow-controls-text-next-processed").mouseover(function(e){
      clearInterval(SliderHomesInterval);
    }
    );
    var SliderHomesInterval =  setInterval(function(){
      $(".view-slider-homes .views-slideshow-controls-text-next-processed").click();
    },2000);
  }
}, 1000)
	//Slider home position, top, ring, botton, left.
	$(window).load(function() {

		// $(".view-slider-homes .views-slideshow-controls-text-previous-processed, .view-slider-homes .views-slideshow-controls-text-next-processed").on('click', function(event) {
		// 	var sibling  = $(this).parents('div.views-slideshow-controls-bottom').siblings().attr('id');
		// 	var slideActive = $('#'+sibling).find('li.swiper-slide-active').attr('id');
		// 	var slideActivePosition = $('#'+slideActive+' span.field-content').children('div').first().attr('class');
		// 	if (SlideClass == "") {
		// 		$(this).parents('div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
		// 		SlideClass = slideActivePosition+"-control";
		// 	}
		// 	else{
		// 		$(this).parents('div.views-slideshow-controls-bottom').removeClass(SlideClass);
		// 		$(this).parents('div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
		// 		SlideClass = slideActivePosition+"-control";
		// 	}
		// });

  });

  // funcion abir barra de busqueda
  $(document).ready(function() {
    /* $(".wrapper-mega-menu").append('<div class="barra-buscar mega-menu-2"><span>Cerrar</span></div>');

    $(".barra-buscar").click(function(){
      $( '#block-google-cse-google-cse' ).toggleClass( "buscador-open" );
    }); */
  });

}(jQuery));


