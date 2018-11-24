"use strict";

// expose jquery in browser as $
$ = jQuery;

// TODO: REMEMOVE THIS SECTION - ocultar el menu 
// (function($){
// 	setTimeout(function(){
// 		$('header').empty();
// 	}, 400);
// })(jQuery);

// -- END SECTION --

(function($) {
	var Swiper = window.Swiper;

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
		jQuery(".content-desktop").css("margin-left", "inherit");

		$('.align-social-vertical').addClass('social-mobile');
	}

	function socialDesktop() {
		if($('.align-social-vertical').hasClass('social-mobile')){$('.align-social-vertical').removeClass('social-mobile');	}
		$('.align-social-vertical').addClass('content-desktop');
		var margen =  jQuery(".container-node").offset();
		if (margen != null) {
			margen = margen['left']-jQuery(".content-desktop").width();
		}
			
			jQuery(".content-desktop").css("margin-left", margen);
	}

	function socialScrollDesktop(){
		var validation = $('body').find('.align-social-vertical');
		if (validation.length > 0){

					var margen =  jQuery(".container-node").offset();
					if (margen != null) {
						margen = margen['left']-jQuery(".content-desktop").width();
					}
						

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

							jQuery(".content-desktop").css("margin-left", margen);

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

							jQuery(".content-desktop").css("margin-left", margen);


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

							jQuery(".content-desktop").css("margin-left", margen);
						}
					}
		}			
	}

	function socialScrollMobile(){
		var validation = $('body').find('.social-mobile');

		if (validation.length > 0){
			
			$(panelId).css("background-color","red");


			var altoRerdes = $('.align-social-vertical').outerHeight(true);
			var menu_admin = $('#admin-menu').outerHeight(true);
			var menu_admin_height = $('#admin-menu').height();
			var menu_navigation = $('.region-navigation').outerHeight(true);
			var	panelId = '#'.concat(jQuery('.align-social-vertical').parents('.panels-bootstrap-region').attr('id'));
			var heightContent = $(panelId).height()-(menu_navigation+menu_admin);
			var scrollWindow = $(window).scrollTop();
			var total =(menu_admin+menu_navigation+heightContent+$(panelId).offset().top)-(altoRerdes+20);

			if (scrollWindow < ($(panelId).offset().top - menu_admin_height) || scrollWindow > total) {
				if($('.social-mobile').hasClass('social-mobile-fixed')){
					jQuery(".content-desktop").css("margin-left", "inherit");
					$('.social-mobile').removeClass('social-mobile-fixed');
				}
			}else {
				jQuery(".content-desktop").css("margin-left", "inherit");
				$('.social-mobile').addClass('social-mobile-fixed');
				$('.social-mobile-fixed').css({
					top: menu_admin_height
				});

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
		}

		// function wrapper to image element
		$('img').each(function() {
			$(this).wrap('<figure></figure>');
		});

	});

	setTimeout(function(){
		$('#google-cse-results-searchbox-form #edit-query').attr("placeholder", "Buscar");
		$('#google-cse-results-searchbox-form').keypress(function(e) {
			if(e.which == 13) {
				$('#google-cse-results-searchbox-form #edit-query').val();
				window.location = Drupal.settings.basePath+Drupal.settings.pathPrefix + "search/google/"+$('#google-cse-results-searchbox-form #edit-query').val();
			}
		});
		
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
		// return true;
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
		swiperHomeRef.on('slideChange', function(){
			console.log('slide change home');
			$(swiperHomeRef.$el[0]).find('iframe').each(function(idx, el){
				var stringSrc = $(el).attr('src');
				$(el).attr('src', '')
				$(el).attr('src', stringSrc)
			});
		});
	};
	configSwiperHome();

}(jQuery));


