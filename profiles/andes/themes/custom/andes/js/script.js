(function ($) {


  // function adctivar modal Masonry
  // jQuery(document).on("click", ".open-modal", function() {
  //   var imageSrc = jQuery(this).parents(".masonry-item").find("img").attr("src");
  //   jQuery(".modal-masonry").attr("src", imageSrc);
  // });

  // function galeria home
  jQuery(document).on("click", ".galeria-home", function() {
    var imageSrc = jQuery(this).parents(".box-modal").find("img").attr("src");
    jQuery(".modal-gallery-home").attr("src", imageSrc);
  });

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
    if($('.view-id-slider_homes').length > 0){
      var ParentSlideClass = $('.view-id-slider_homes .field-content').children('div').eq(1).attr("class");
      $('.view-id-slider_homes').addClass(ParentSlideClass+"-container");
      $('.view-id-slider_homes .views-slideshow-simple-pager div').eq(0).addClass('active');
      var slideActive = $('.view-id-slider_homes').find('li.swiper-slide-active').attr('id');
      var slideActivePosition = $('#'+slideActive+' span.field-content').children('div').eq(1).attr('class');
      $('.view-id-slider_homes div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");

      SlideClass = slideActivePosition+"-control";
    }
    if($('.view-banner-nodes').length > 0){
      var ParentSlideClass = $('.view-banner-nodes .field-content').children('div').eq(1).attr("class");
      $('.view-banner-nodes').addClass(ParentSlideClass+"-container");
      $('.view-banner-nodes .views-slideshow-simple-pager div').eq(0).addClass('active');
      var slideActive = $('.view-banner-nodes').find('li.swiper-slide-active').attr('id');
      var slideActivePosition = $('#'+slideActive+' span.field-content').children('div').eq(1).attr('class');
      $('.view-banner-nodes div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
      SlideClass = slideActivePosition+"-control";
    }
    checkSize();
    $(window).resize(checkSize);

    // function wrapper to image element

    $('img').each(function() {
      $(this).wrap('<figure></figure>');
    });

    // funcion que acomoda div .slider-homes-bottom

    acoplar_top();

    function acoplar_top() {
      var ancho = $(window).width();
      if (ancho > 992) {
        var caja_bottom = $('.slider-homes-bottom').outerHeight();
        var alto = $('#views_slideshow_swiper_slider_homes-block_1').find('.img-desktop img').attr('height');
        $('#views_slideshow_swiper_slider_homes-block_1 li').each(function() {
          if ($(this).find('.slider-homes-bottom').length < 1) {
            switch ($(this).find('.iframe-conten').length) {
              case 0:
                $(this).find('.img-desktop img').height(parseInt(alto) + parseInt(caja_bottom));
                break;
              case 1:
                $(this).find('.iframe-conten').css('height', parseInt(alto)+parseInt(caja_bottom));
                break;
              default:
                break;
            }
          } else{
              $(this).find('.img-desktop img').height(parseInt(alto));
              if ($(this).find('.iframe-conten').length > 0) {
                var otro = parseInt(alto)+6;
                $(this).find('.iframe-conten').css('height', otro);
              }
            }
        });
      }
    }

    $(window).resize(function(event) {
      acoplar_top();
    });


	});
	function checkSize(){
		var docWidth = $(document).width();
	 	var data = {
	    slidesPerView: ((docWidth >= 1200) ? 4 : ((docWidth > 992 && docWidth <= 1200) ? 3 : ((docWidth > 555 && docWidth <= 992) ? 2 : 1)) ),
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
function actionClick(item, parentClass, swiperId, SliderBullet =1){
  var sibling  = $(item).parents('div.views-slideshow-controls-bottom').siblings().attr('id');
  var slideActive = $('#'+sibling).find('li.swiper-slide-active').attr('id');
  var slidePosition = $('#'+sibling).find('li.swiper-slide-active').attr('data-swiper-slide-index');
  var slideActivePosition = $('#'+slideActive+' span.field-content').children('div').eq(1).attr('class');
  var SlideClassParent = swiperId;

  if (SlideClass == "") {
    $(item).parents('div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
    $('.'+parentClass).addClass(SlideClassParent+"-container");
    SlideClass = slideActivePosition+"-control";
    ParentSlideClass = slideActivePosition+"-container";
    PositionSlide = slidePosition;
    if(SliderBullet == 1){
      $('.'+parentClass+' .views-slideshow-simple-pager div').eq(slidePosition).addClass('active');
    }
    lastPosition = slidePosition;
  }
  else{
    $(item).parents('div.views-slideshow-controls-bottom').removeClass(SlideClass);
    $(item).parents('div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
    $('.'+parentClass).removeClass(ParentSlideClass);
    $('.'+parentClass).addClass(slideActivePosition+"-container");
    if(SliderBullet == 1){
      $('.'+parentClass+' .views-slideshow-simple-pager div').eq(lastPosition).removeClass('active');
      $('.'+parentClass+' .views-slideshow-simple-pager div').eq(slidePosition).addClass('active');
    }

    SlideClass = slideActivePosition+"-control";
    ParentSlideClass = slideActivePosition+"-container";
    lastPosition = slidePosition;
  }
}
setTimeout(function(){

  //functionality used for Sliders actions onClick
  if($(".views_slideshow_swiper_main").length > 0){
    $.each($('.views_slideshow_swiper_main'),function(index, val){

      var swiperId = this.id;
      var parent = $('#'+swiperId).parents(".view");
      var parentClass = returnClassParent(parent);
      var controlClass  = $("."+parentClass+" .views-slideshow-controls-bottom").attr('class');
      $('.'+parentClass+' .views-slideshow-simple-pager .views-slideshow-pager-field-item a').attr('href','#')

      //views-slideshow-pager-field-item
      if(controlClass.length > 0){
        $("."+parentClass+"  .views-slideshow-controls-text-previous, ."+parentClass+ " .views-slideshow-controls-text-next").on('click', function(event) {
          actionClick(this, parentClass, swiperId);
        });
        //views-slideshow-simple-pager
        $('.'+parentClass+' .views-slideshow-simple-pager div').on('click',function(e){
          e.preventDefault();
          var swiper = new Swiper("#"+jQuery('.'+parentClass+' .swiper-container-horizontal').attr('id'), {});
          swiper.slideTo($(this).find('a').text(), 1000, true);
          actionClick(this, parentClass, swiperId, 0)
        })
      }
    });
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

// funcion que acomoda div .slider-homes-bottom
  // jQuery(document).ready(function($) {
  //   acoplar_top();

  //   function acoplar_top() {
  //     var ancho = $(window).width();
  //     if (ancho > 992) {
  //       var caja_bottom = $('.slider-homes-bottom').outerHeight();
  //       var alto = $('#views_slideshow_swiper_slider_homes-block_1').find('.img-desktop img').attr('height');
  //       $('#views_slideshow_swiper_slider_homes-block_1 li').each(function() {
  //         if ($(this).find('.slider-homes-bottom').length < 1) {
  //           switch ($(this).find('.iframe-conten').length) {
  //             case 0:
  //               $(this).find('.img-desktop img').height(parseInt(alto) + parseInt(caja_bottom));
  //               break;
  //             case 1:
  //               $(this).find('.iframe-conten').css('height', parseInt(alto)+parseInt(caja_bottom));
  //               break;
  //             default:
  //               break;
  //           }
  //         } else{
  //             $(this).find('.img-desktop img').height(parseInt(alto));
  //             if ($(this).find('.iframe-conten').length > 0) {
  //               var otro = parseInt(alto)+6;
  //               $(this).find('.iframe-conten').css('height', otro);
  //             }
  //           }
  //       });
  //     }
  //   }

  //   $(window).resize(function(event) {
  //     acoplar_top();
  //   });

  // });


}(jQuery));


