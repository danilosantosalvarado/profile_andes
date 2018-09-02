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
    var lastPosition = 0;

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
      slidesPerGroup: ((docWidth >= 1200) ? 4 : ((docWidth > 768 && docWidth <= 1200) ? 3 : ((docWidth > 555 && docWidth <= 768) ? 2 : 1)) ),
      slidesPerColumn: 1,
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

  function returnClassParent(parent){
    var parentArray = parent.attr('class').split(' ');
    var data = "";
    $.each(parentArray,function(index, val){
      if(val.indexOf('view-display-id-') != -1){
        data = val;
      }
    });
    return data;
  }
setTimeout(function(){
  //functionality used for Sliders actions onClick
  if($(".views_slideshow_swiper_main").length > 0){
    $.each($('.views_slideshow_swiper_main'),function(index, val){
      var swiperId = this.id;
      var parent = $('#'+swiperId).parents(".view");
      var parentClass = returnClassParent(parent);
      var controlClass  = $("."+parentClass+" .views-slideshow-controls-bottom").attr('class');
      if(controlClass.length > 0){
        $("."+parentClass).bind('touchmove', function (e)
        {
            console("it worked but i don't know the direction");
        });
        $("."+parentClass+"  .views-slideshow-controls-text-previous, ."+parentClass+ " .views-slideshow-controls-text-next").on('click', function(event) {
          var sibling  = $(this).parents('div.views-slideshow-controls-bottom').siblings().attr('id');
          var slideActive = $('#'+sibling).find('li.swiper-slide-active').attr('id');
          var slidePosition = $('#'+sibling).find('li.swiper-slide-active').attr('data-swiper-slide-index');
          //views-slideshow-simple-pager
          var slideActivePosition = $('#'+slideActive+' span.field-content').children('div').first().attr('class');
          var SlideClassParent = swiperId;

          if (SlideClass == "") {
            $(this).parents('div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
            $('.'+parentClass).addClass(SlideClassParent+"-container");
            SlideClass = slideActivePosition+"-control";
            ParentSlideClass = slideActivePosition+"-container";
            PositionSlide = slidePosition;
            $('.'+parentClass+' .views-slideshow-simple-pager div').eq(slidePosition).addClass('active');
            lastPosition = slidePosition;
          }
          else{
            $(this).parents('div.views-slideshow-controls-bottom').removeClass(SlideClass);
            $(this).parents('div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
            $('.'+parentClass).removeClass(ParentSlideClass);
            $('.'+parentClass).addClass(slideActivePosition+"-container");
            $('.'+parentClass+' .views-slideshow-simple-pager div').eq(lastPosition).removeClass('active');
            $('.'+parentClass+' .views-slideshow-simple-pager div').eq(slidePosition).addClass('active');
            SlideClass = slideActivePosition+"-control";
            ParentSlideClass = slideActivePosition+"-container";
            lastPosition = slidePosition;
          }
        });
      }

    });
  }

  //.view-banner-nodes
  //.view-slider-homes
  // if($('.view-banner-nodes').length > 0){
  //   $(".view-banner-nodes .views-slideshow-controls-text-previous-processed, .view-banner-nodes .views-slideshow-controls-text-next-processed").on('click', function(event) {
  //     var sibling  = $(this).parents('div.views-slideshow-controls-bottom').siblings().attr('id');
  //     var slideActive = $('#'+sibling).find('li.swiper-slide-active').attr('id');
  //     var slideActivePosition = $('#'+slideActive+' span.field-content').children('div').first().attr('class');
  //     var SlideClassParent = $('.view-banner-nodes .field-content').children('div').first().attr("class");
  //     if (SlideClass == "") {
  //       $(this).parents('div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
  //       $('.view-banner-nodes').addClass(SlideClassParent+"-container");
  //       SlideClass = slideActivePosition+"-control";
  //       ParentSlideClass = slideActivePosition+"-container";
  //     }
  //     else{
  //       $(this).parents('div.views-slideshow-controls-bottom').removeClass(SlideClass);
  //       $(this).parents('div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
  //       $('.view-banner-nodes').removeClass(ParentSlideClass);
  //       $('.view-banner-nodes').addClass(slideActivePosition+"-container");
  //       SlideClass = slideActivePosition+"-control";
  //       ParentSlideClass = slideActivePosition+"-container";
  //     }
  //   });
  //   $(".view-banner-nodes .views-slideshow-controls-text-previous-processed").click();
  // }
  // if($('.view-slider-homes').length > 0){
  //   $(".view-slider-homes .views-slideshow-controls-text-previous-processed, .view-slider-homes .views-slideshow-controls-text-next-processed").on('click', function(event) {
  //     var sibling  = $(this).parents('div.views-slideshow-controls-bottom').siblings().attr('id');
  //     var slideActive = $('#'+sibling).find('li.swiper-slide-active').attr('id');
  //     var slideActivePosition = $('#'+slideActive+' span.field-content').children('div').first().attr('class');
  //     var SlideClassParent = $('.view-slider-homes .field-content').children('div').first().attr("class");
  //     if (SlideClass == "") {
  //       $(this).parents('div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
  //       $('.view-slider-homes').addClass(SlideClassParent+"-container");
  //       SlideClass = slideActivePosition+"-control";
  //       ParentSlideClass = slideActivePosition+"-container";
  //     }
  //     else{
  //       $(this).parents('div.views-slideshow-controls-bottom').removeClass(SlideClass);
  //       $(this).parents('div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
  //       $('.view-slider-homes').removeClass(ParentSlideClass);
  //       $('.view-slider-homes').addClass(slideActivePosition+"-container");
  //       SlideClass = slideActivePosition+"-control";
  //       ParentSlideClass = slideActivePosition+"-container";
  //     }
  //   });
  //   $(".view-slider-homes .views-slideshow-controls-text-previous-processed, .view-slider-homes .views-slideshow-controls-text-next-processed").mouseover(function(e){
  //     clearInterval(SliderHomesInterval);
  //   }
  //   );
  //   var SliderHomesInterval =  setInterval(function(){
  //     $(".view-slider-homes .views-slideshow-controls-text-next-processed").click();
  //   },2000);
  //}
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


