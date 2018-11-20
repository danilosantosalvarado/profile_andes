"use strict";

// TODO: REMEMOVE THIS SECTION
/* ocultar el menu 
$ = jQuery;
(function($){

	setTimeout(function(){
		$('header').empty();
	}, 400);
})(jQuery);
*/
// -- END SECTION --

(function($) {
	var Swiper = window.Swiper;

	// function galeria home
	jQuery(document).on("click", ".galeria-home", function() {
		var imageSrc = $(this).find("img").attr("src");
		jQuery(".modal-gallery-home").attr("src", imageSrc);
	});

	//funcion redes sociales vertical scroll interna de eventos.
	$(window).ready(function() {
		var a = $(window).width();
		if (a > 992) {socialDesktop(); }else {socialMobile(); }
	});

	$(window).resize(function(event) {
		var a = $(window).width();
		if (a > 991) {socialDesktop(); }else {socialMobile(); }
	});

	$(window).scroll(function() {
		var a = $(window).width();
		if (a > 991) {socialScrollDesktop(); }else {socialScrollMobile(); }
	});

	function socialMobile(){

		if($('.align-social-vertical').hasClass('social-botton')){$('.align-social-vertical').removeClass('social-botton'); }
		if($('.align-social-vertical').hasClass('social-fixed')){$('.align-social-vertical').removeClass('social-fixed'); }
		if($('.align-social-vertical').hasClass('social-initial')){$('.align-social-vertical').removeClass('social-initial'); }
		$('.align-social-vertical').addClass('social-mobile');
	}

	function socialDesktop() {
		if($('.align-social-vertical').hasClass('social-mobile')){
			$('.align-social-vertical').removeClass('social-mobile');
		}
	}

	function socialScrollDesktop(){
		var validation = $('body').find('.align-social-vertical');
		if (validation.length > 0){

					var panel = jQuery('.align-social-vertical').parents('.panels-bootstrap-region').attr('id');
					var	panelId = '#'.concat(panel);
					var $menu_admin = $('#admin-menu').outerHeight(true);
					var $menu_navigation = $('.region-navigation').outerHeight(true);

					$('.align-social-vertical').prependTo(panelId);
					if( panelId !== null ) {
						var altoRerdes = $('.align-social-vertical').outerHeight(true);
						var scrollVentana = $(document).scrollTop();
						var contenedorTop = $(panelId).offset().top-($menu_navigation+$menu_admin);
						var contenerdorHeight = $(panelId).height() + contenedorTop;
						var endVerticalScroll = contenerdorHeight - altoRerdes;

						if (scrollVentana <= contenedorTop) {
							// exist social-bottom class
							if($('.align-social-vertical').hasClass('social-botton')){
								$('.align-social-vertical').removeClass('social-botton');
							}
							// exist social-fixed class
							if($('.align-social-vertical').hasClass('social-fixed')){
								$('.align-social-vertical').removeClass('social-fixed');
							}
							//social-initial
							$('.align-social-vertical').removeAttr("style");
							$('.align-social-vertical').addClass('social-initial');

						}
						else if (scrollVentana >= contenedorTop) {
							// exist social-initial class
							if($('.align-social-vertical').hasClass('social-initial')){
								$('.align-social-vertical').removeClass('social-initial');
							}
							// exist social-bottom class
							if($('.align-social-vertical').hasClass('social-botton')){
								$('.align-social-vertical').removeClass('social-botton');
							}
							//social-fixed
							$('.align-social-vertical').addClass('social-fixed');
							$(".social-fixed").css({top: ($menu_admin+$menu_navigation)});
							// $('.align-social-vertical').addClass('social-fixed');


						}
						if(scrollVentana > (contenerdorHeight-altoRerdes)) {
							// exist social-fixed class
							if($('.align-social-vertical').hasClass('social-fixed')){
								$('.align-social-vertical').removeClass('social-fixed');
							}
							// exist social-initial class
							if($('.align-social-vertical').hasClass('social-initial')){
								$('.align-social-vertical').removeClass('social-initial');
							}
							$('.align-social-vertical').removeAttr("style");
							//social-botton
							$('.align-social-vertical').addClass('social-botton');
						}
					}
		}			
	}

	function socialScrollMobile(){
		var validation = $('body').find('.social-mobile');
		if (validation.length > 0){
			var menu_admin = $('#admin-menu').outerHeight(true);
			var menu_navigation = $('.region-navigation').outerHeight(true);
			var scrollWindow = $(window).scrollTop();
			var scrollVerticalMenu = $('.social-mobile').offset().top;

			if (scrollWindow >= (scrollVerticalMenu-(menu_admin+menu_navigation))) {
				$('.social-mobile').addClass('social-mobile-fixed');
			}else {
				if($('.social-mobile').hasClass('social-mobile-fixed')){
					$('.social-mobile').removeClass('social-mobile-fixed');
				}
			}
		}		
	}
	//fin funcion redes sociales vertical scroll interna de eventos.


	var SlideClass = "";
	var ParentSlideClass = "";
	var lastPosition = 0;
	var slideActive = "";
	var slideActivePosition = "";

	$(window).ready(function() {
		//funcion cambio de colores anuncios.
		var color = $('.sabor').attr('data-color');

		if (color !== null) {

			$('#views_slideshow_swiper_componente_anuncios-block_1').find('.anuncios-conten').addClass('border-top-'+color);
			$('#widget_pager_bottom_componente_anuncios-block_1 , #widget_pager_bottom_componente_eventos-block_3_1').addClass('pager-'+color);
			$('.anuncios-enlace').addClass('pager-'+color);

			$('#views_slideshow_swiper_componente_anuncios .views-slideshow-pager-field-item').each(function(index, el) {
				$(this).click(function(event) {
					$('.views-slideshow-pager-field-item').find('a').removeClass('background-'+color);
					if ($(this).hasClass('active')) {
						$(this).find('a').addClass('background-'+color);
					}
				});
			});
		}

		//add breidpoint news component.
		/*if($('.view-id-slider_homes').length > 0) {
			ParentSlideClass = $('.view-id-slider_homes .field-content').children('div').eq(1).attr("class");
			$('.view-id-slider_homes').addClass(ParentSlideClass+"-container");
			$('.view-id-slider_homes .views-slideshow-simple-pager div').eq(0).addClass('active');
			slideActive = $('.view-id-slider_homes').find('li.swiper-slide-active').attr('id');
			slideActivePosition = $('#'+slideActive+' span.field-content').children('div').eq(1).attr('class');
			$('.view-id-slider_homes div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");

			SlideClass = slideActivePosition+"-control";
		}*/
		if($('.view-banner-nodes').length > 0){
			ParentSlideClass = $('.view-banner-nodes .field-content').children('div').eq(1).attr("class");
			$('.view-banner-nodes').addClass(ParentSlideClass+"-container");
			$('.view-banner-nodes .views-slideshow-simple-pager div').eq(0).addClass('active');
			slideActive = $('.view-banner-nodes').find('li.swiper-slide-active').attr('id');
			slideActivePosition = $('#'+slideActive+' span.field-content').children('div').eq(1).attr('class');
			$('.view-banner-nodes div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
			SlideClass = slideActivePosition+"-control";
		}

		// function wrapper to image element
		$('img').each(function() {
			$(this).wrap('<figure></figure>');
		});

		/**
		 * funcion que acomoda div .slider-homes-bottom
		 */
		/*
		function acoplarTop() {
			var ancho = $(window).width();
			if (ancho > 992) {
				var cajaBottom = $('.slider-homes-bottom').outerHeight();
				var alto = $('#views_slideshow_swiper_slider_homes-block_1').find('.img-desktop img').attr('height');
				$('#views_slideshow_swiper_slider_homes-block_1 li').each(function() {
					if ($(this).find('.slider-homes-bottom').length < 1) {
						switch ($(this).find('.iframe-conten').length) {
							case 0:
								$(this).find('.img-desktop img').height(parseInt(alto) + parseInt(cajaBottom));
								break;
							case 1:
								$(this).find('.iframe-conten').css('height', parseInt(alto)+parseInt(cajaBottom));
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
		}*/

		// acoplarTop();

		/*
		$(window).resize(function(event) {
			acoplarTop();
		});
		*/

		// Funcion breakpoint slider
		checkSize();
		$(window).resize(checkSize);
	});

	// Funcion breakpoint slider
	function checkSize() {
		var docWidth = $(document).width();
		var data = {
			slidesPerView: ((docWidth >= 1200) ? 4 : ((docWidth > 992 && docWidth <= 1200) ? 3 : ((docWidth > 555 && docWidth <= 992) ? 2 : 1)) ),
			spaceBetween: 20,
			swipeTo: 0,
			slidesPerGroup: ((docWidth >= 1200) ? 4 : ((docWidth > 768 && docWidth <= 1200) ? 3 : ((docWidth > 555 && docWidth <= 768) ? 2 : 1)) ),
			slidesPerColumn: 1
		};

		if ($('.view-componente-noticias .swiper-container-horizontal').length > 0 && (docWidth > 0 && docWidth <= 1200) ) {
			setTimeout(function(){
				var swiper = new Swiper("#"+jQuery('.view-componente-noticias .swiper-container-horizontal').attr('id'), data);
			},50);
		}
		if ($('.view-id-componente_eventos .swiper-container-horizontal').length > 0) {
			setTimeout(function(){
				var swiper = new Swiper("#"+jQuery('.view-id-componente_eventos .swiper-container-horizontal').attr('id'), data);
			},50);
		}
		if ($('.view-display-id-componente_publicaciones .swiper-container-horizontal').length > 0) {
			setTimeout(function(){
				var swiper = new Swiper("#"+jQuery('.view-display-id-componente_publicaciones .swiper-container-horizontal').attr('id'), data);
			},50);
		}
		if ($('.view-display-id-especiales_destacadas .swiper-container-horizontal').length > 0) {
			setTimeout(function(){
				var swiper = new Swiper("#"+jQuery('.view-display-id-especiales_destacadas .swiper-container-horizontal').attr('id'), data);
			},50);
		}
		//
		//view-display-id-componente_publicaciones
		//view-id-componente_eventos
	};

	function returnClassParent(parent) {
		var parentArray = parent.attr('class').split(' ');
		var data = "";
		$.each(parentArray,function(index, val) {
			if(val.indexOf('view-display-id-') != -1) {
				data = val;
			}
		});
		return data;
	};

	/*
	function actionClick(item, parentClass, swiperId, SliderBullet) {
		SliderBullet = SliderBullet || 1;
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
			var PositionSlide = slidePosition;
			if(SliderBullet == 1) {
				$('.'+parentClass+' .views-slideshow-simple-pager div').eq(slidePosition).addClass('active');
			}
			lastPosition = slidePosition;
		}
		else {
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
	};
	*/

	//functionality used for Sliders actions onClick
	function setSwipers(){

		return true;

		if( $(".views_slideshow_swiper_main").length == 0 ){
			setTimeout(function(){setSwipers();}, 200);
			return false;
		}

		var TIME_TO_ANIMATION_END = 400;
		window.mySwipers = [];
		var listSwiper =  $('.views_slideshow_swiper_main');

		$.each( listSwiper, function(index, val){
			var swiperId = this.id;
			var targetSwiper = "#" + swiperId;
			var parent = $(targetSwiper).parents(".view");
			var parentClass = returnClassParent(parent);
			var controlClass  = $("."+parentClass+" .views-slideshow-controls-bottom");
			$('.'+parentClass+' .views-slideshow-simple-pager div a').attr('href', '#');

			// console.log(Drupal.settings.viewsSlideshowSwiper[targetSwiper])

			// events
			attachSwipeTouchEvent(targetSwiper);

			// next prev events
			$("."+parentClass+"  .views-slideshow-controls-text-previous").on('click', function(event) {

				setTimeout(function(){
					var rix = Drupal.settings.viewsSlideshowSwiper[targetSwiper].swiper.realIndex
					var paginationDom = Drupal.settings.viewsSlideshowSwiper[targetSwiper].options.pagination
					$(paginationDom).children().removeClass('active');
					$(paginationDom).children().eq(rix).addClass('active');
				}, TIME_TO_ANIMATION_END);
			});

			$("."+parentClass+ " .views-slideshow-controls-text-next").on('click', function(event) {

				setTimeout(function(){
					var rix = Drupal.settings.viewsSlideshowSwiper[targetSwiper].swiper.realIndex
					var paginationDom = Drupal.settings.viewsSlideshowSwiper[targetSwiper].options.pagination
					$(paginationDom).children().removeClass('active');
					$(paginationDom).children().eq(rix).addClass('active');
				}, TIME_TO_ANIMATION_END);
			});

			// pagination events
			$('.'+parentClass+' .views-slideshow-simple-pager div').on('click',function(event){
				event.preventDefault();
				event.stopPropagation();
				var idx = parseInt($(this).find('a').text()) - 1;
				console.log(idx);
				Drupal.settings.viewsSlideshowSwiper[targetSwiper].swiper.slideToLoop(idx);
			});

		});
	};

	function attachSwipeTouchEvent(pTarget){
		return true;
		if (Drupal.settings.viewsSlideshowSwiper[pTarget].swiper == undefined){
			setTimeout(function(){attachSwipeTouchEvent(pTarget);}, 200);
			return false;
		}
		console.log(Drupal.settings.viewsSlideshowSwiper[pTarget].swiper)
		// Drupal.settings.viewsSlideshowSwiper[pTarget].swiper.autoplay.start()
		Drupal.settings.viewsSlideshowSwiper[pTarget].swiper.on('slideChange', function(){
			var rix = Drupal.settings.viewsSlideshowSwiper[pTarget].swiper.realIndex
			var paginationDom = Drupal.settings.viewsSlideshowSwiper[pTarget].options.pagination
			// console.log({'rix':rix, 'paginationDom':paginationDom});
			$(paginationDom).children().removeClass('active');
			$(paginationDom).children().eq(rix).addClass('active');
		});	
	};

	setTimeout(function(){
		$('#google-cse-results-searchbox-form').keypress(function(e) {
			e.preventDefault();
			if(e.which == 13) {
				$('#google-cse-results-searchbox-form #edit-query').val();
				window.location = Drupal.settings.basePath+Drupal.settings.pathPrefix + "search/google/"+$('#google-cse-results-searchbox-form #edit-query').val();
			}
		});

		// setSwipers();
		
	}, 1000);

	/**
	 * [listEvents description]
	 * @type {[type]}
	 */
	function slice(array, start, end) {
		var length = array == null ? 0 : array.length;
		if (!length) {
			return [];
		}
		start = start == null ? 0 : start;
		end = end === undefined ? length : end;

		if (start < 0) {
			start = -start > length ? 0 : (length + start);
		}
		end = end > length ? length : end;
		if (end < 0) {
			end += length;
		}
		length = start > end ? 0 : ((end - start) >>> 0);
		start >>>= 0;

		var index = -1;
		var result = new Array(length);
		while (++index < length) {
			result[index] = array[index + start];
		}
		return result;
	}
	function chunk(array, size) {
		size = Math.max(size, 0);
		var length = array == null ? 0 : array.length;
		if (!length || size < 1) {
			return [];
		}
		var index = 0;
		var resIndex = 0;
		var result = new Array(Math.ceil(length / size));

		while (index < length) {
			result[resIndex++] = slice(array, index, (index += size));
		}
		return result;
	}

	var eventsData = {size: 0};

	function listEvents(){
		var list = $('.view-eventos-decanatura .masonry-item').get();
		if (list.length == 0) {
			setTimeout(function(){listEvents();}, 200);
			return true;
		}
		eventsData.size = list.length;
		var partialEvents = chunk(list, 6);

		partialEvents.map(function(ls, idx){
			var opt = ls.length;

			switch(opt){
				case 6:
					$(ls[0]).addClass('item-full');
					$(ls[1]).addClass('item-lg');
					$(ls[2]).addClass('item-sm');
					$(ls[3]).addClass('item-lg');
					$(ls[4]).addClass('item-sm');
					$(ls[5]).addClass('item-full');
				break;
				case 5:
					$(ls[0]).addClass('item-lg');
					$(ls[1]).addClass('item-sm');
					$(ls[2]).addClass('item-lg');
					$(ls[3]).addClass('item-sm');
					$(ls[4]).addClass('item-full');
				break;
				case 4:
					$(ls[0]).addClass('item-lg');
					$(ls[1]).addClass('item-sm');
					$(ls[2]).addClass('item-lg');
					$(ls[3]).addClass('item-sm');
				break;
				case 3:
					$(ls[0]).addClass('item-sm');
					$(ls[1]).addClass('item-sm');
					$(ls[2]).addClass('item-full');
				break;
				case 2:
					$(ls[0]).addClass('item-sm');
					$(ls[1]).addClass('item-sm');
				break;
				case 1:
					$(ls[0]).addClass('item-full');
				break;
			}
		});

		var ua = window.navigator.userAgent;

		if( ua.indexOf("MSIE ") > 0 || ua.indexOf("rv:") > 0 ){
			ieSupport(partialEvents);
		}

		if( 'objectFit' in document.documentElement.style === false ){
			jQuery('.imge-conten, .iframe-conten').addClass('object-fit');
			jQuery('.imge-conten, .iframe-conten').each(function(idx, el){
				var srcImg = $(el).find('img').prop('src');
				$(el).css({'background-image': 'url(' + srcImg + ')'});
			});
		}

	}

	function onEventsLoad(){
		var newSizeEvents = $('.view-eventos-decanatura .masonry-item').length;
		if( newSizeEvents != eventsData.size ){
			listEvents();
			eventsLoad();
		}else{
			setTimeout(function(){onEventsLoad();}, 200);
		}
	}

	function eventsLoad() {
		var btnLoadMore = $('.view-eventos-decanatura .pager.pager-load-more a').get(0);
		if ( !btnLoadMore ) {
			setTimeout(function(){eventsLoad();}, 200);
			return false;
		}
		btnLoadMore.addEventListener('click', onEventsLoad, false);
	}

	function ieSupport(pList) {
		var partialEvents = pList;
		partialEvents.map(function(ls, idx) {
			var countRow = idx * 7;
			var opt = ls.length;

			jQuery('.view-eventos-decanatura .view-content').attr("style", "margin: 10px !important");

			switch(opt){
				case 6:
					$(ls[0]).attr("style", "-ms-grid-column: 1; -ms-grid-row: " + (countRow + 1) + "; -ms-grid-column-span: 2;");
					$(ls[1]).attr("style", "-ms-grid-column: 1; -ms-grid-row: " + (countRow + 3) + "; -ms-grid-row-span: 2;");
					$(ls[2]).attr("style", "-ms-grid-column: 2; -ms-grid-row: " + (countRow + 3) + "; -ms-grid-row-span: 1;");
					$(ls[3]).attr("style", "-ms-grid-column: 2; -ms-grid-row: " + (countRow + 4) + "; -ms-grid-row-span: 2;");
					$(ls[4]).attr("style", "-ms-grid-column: 1; -ms-grid-row: " + (countRow + 5) + "; -ms-grid-row-span: 1;");
					$(ls[5]).attr("style", "-ms-grid-column: 1; -ms-grid-row: " + (countRow + 7) + "; -ms-grid-column-span: 2;");
				break;
				case 5:
					$(ls[0]).attr("style", "-ms-grid-column: 1; -ms-grid-row: " + (countRow + 1) + "; -ms-grid-row-span: 2;");
					$(ls[1]).attr("style", "-ms-grid-column: 2; -ms-grid-row: " + (countRow + 1) + "; -ms-grid-row-span: 1;");
					$(ls[2]).attr("style", "-ms-grid-column: 2; -ms-grid-row: " + (countRow + 3) + "; -ms-grid-row-span: 2;");
					$(ls[3]).attr("style", "-ms-grid-column: 1; -ms-grid-row: " + (countRow + 4) + "; -ms-grid-row-span: 1;");
					$(ls[4]).attr("style", "-ms-grid-column: 1; -ms-grid-row: " + (countRow + 5) + "; -ms-grid-column-span: 2;");
				break;
				case 4:
					$(ls[0]).attr("style", "-ms-grid-column: 1; -ms-grid-row: " + (countRow + 1) + "; -ms-grid-row-span: 2;");
					$(ls[1]).attr("style", "-ms-grid-column: 2; -ms-grid-row: " + (countRow + 1) + "; -ms-grid-row-span: 1;");
					$(ls[2]).attr("style", "-ms-grid-column: 2; -ms-grid-row: " + (countRow + 2) + "; -ms-grid-row-span: 2;");
					$(ls[3]).attr("style", "-ms-grid-column: 1; -ms-grid-row: " + (countRow + 3) + "; -ms-grid-row-span: 1;");
				break;
				case 3:
					$(ls[0]).attr("style", "-ms-grid-column: 1; -ms-grid-row: " + (countRow + 1) + "; -ms-grid-row-span: 1;");
					$(ls[1]).attr("style", "-ms-grid-column: 2; -ms-grid-row: " + (countRow + 1) + "; -ms-grid-row-span: 1;");
					$(ls[2]).attr("style", "-ms-grid-column: 1; -ms-grid-row: " + (countRow + 2) + "; -ms-grid-row-column: 2;");
				break;
				case 2:
					$(ls[0]).attr("style", "-ms-grid-column: 2; -ms-grid-row: " + (countRow + 1) + "; -ms-grid-row-span: 1;");
					$(ls[1]).attr("style", "-ms-grid-column: 1; -ms-grid-row: " + (countRow + 1) + "; -ms-grid-row-span: 1;");
				break;
				case 1:
					$(ls[0]).attr("style", "-ms-grid-column: 1; -ms-grid-row: " + (countRow + 1) + "; -ms-grid-column-span: 2;");
				break;
			}
		});
	}

	eventsLoad();
	listEvents();

	// galleria home support IE
	if( 'objectFit' in document.documentElement.style === false ){
		jQuery('.wrapper-galeria-home .gh-item').addClass('object-fit');
		jQuery('.wrapper-galeria-home .gh-item').each(function(idx, el){
			var srcImg = $(el).find('img').prop('src');
			$(el).css({'background-image': 'url(' + srcImg + ')'});
		});
	}

	function configSwiperHome(){
		return true;
		var swiperHomeDom = document.getElementById("views_slideshow_swiper_main_slider_homes-block_1");
		if( !swiperHomeDom ){
			setTimeout(function(){configSwiperHome();}, 200);
			return false;
		}
		var swiperHomeRef = swiperHomeDom.swiper;
		if( !swiperHomeRef ){
			setTimeout(function(){configSwiperHome();}, 200);
			return false;
		}
		/*swiperHomeRef.on('slideChange', function(){
			$(swiperHomeRef.$el[0]).find('iframe').each(function(idx, el){
				var stringSrc = $(el).attr('src');
				$(el).attr('src', '')
				$(el).attr('src', stringSrc)
			});
		});*/
	};
	// configSwiperHome();

}(jQuery));


