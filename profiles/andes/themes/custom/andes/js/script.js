"use strict";
(function($, Drupal) {
	$('html').hide();
	setTimeout(function(){
		$("body").first().prepend('<div class="container-loader"><div class="loader-loader"><div class="loader--dot"></div><div class="loader--dot"></div><div class="loader--dot"></div><div class="loader--dot"></div><div class="loader--dot"></div><p>CARGANDO</p></div></div>');
		$('html').show();
	},200);
	$(window).load(function(){
		$('.container-loader').remove();
	});
	Drupal.behaviors.Script = {
		attach: function (context, settings) {
			if($('.wrapper-mega-menu').length == 0 || $('.wrapper-mega-menu').length == undefined){
				$('html').show();
			}
			// function galeria home
			jQuery(document).on("click", ".galeria-home", function() {
				var imageSrc = $(this).find("img").attr("src");
				jQuery(".modal-gallery-home").attr("src", imageSrc);
			});
			//called the function for bullet container arrows
			bulletsContainerArrows();

			//move the arrows to outside to wrapper
			/*
			* get function bulletsContainerArrows();
			* this function is the responsible to get into Sliders class [container-arrows]
			* and move the arrows to outside from wrapper
			*/
			function bulletsContainerArrows() {
				// get a class [container-arrows] into slider
				var container_arrows = $('.container-arrows').find('.slider-pricipal-node');
				//verified if exist the lasted class
				if(container_arrows.length > 0) {
					// This item is responsible to move to outside the arrow prev
					$('.container-arrows .slider-pricipal-node .swiper-button-prev').appendTo('.container-arrows .skin-default');
					// This item is responsible to move to outside the arrow next
					$('.container-arrows .slider-pricipal-node .swiper-button-next').appendTo('.container-arrows .skin-default');
				}
			}

			//called the function activeEquipo for items active into page team.
			activeEquipo();
			/*
			* get function activeEquipo();
			* this function is the responsible to add class [team-active]
			* for principal page team
			*/
			function activeEquipo(){
				//verified url
				var u = String( decodeURI(window.location.href));
				//find a item a with a  team name
				$('.view-componente-equipo-trabajo').find('a[href="'+u+'"]').addClass('team-active');
			}
			//get a function homeFeaturedMultimedia() used for arrows ubication
			homeFeaturedMultimedia();

			/*
			* get function homeFeaturedMultimedia();
			* this function is the responsible to move the arrows
			* for principal Slider page home multimedia slider
			*/
			function homeFeaturedMultimedia() {
				$('.view-display-id-componente_multimedia_noticia_destacada .swiper-button-next')
					.appendTo('.view-display-id-componente_multimedia_noticia_destacada .pagination-wrap')
					.wrap( "<div class='wrap-arrows'></div>" );
				$('.view-display-id-componente_multimedia_noticia_destacada .swiper-button-prev').appendTo('.wrap-arrows');
				$('.view-display-id-componente_multimedia_noticia_destacada .views-field-view-1').appendTo('.views_slideshow_main');
			}

			// function wrapper to image element
			$('img').each(function() {
				//adding wrapper [figure] to images
				$(this).wrap('<figure></figure>');
			});
			//get a page size
			var pageSize = $(window).width();

			if (pageSize > 992) {socialDesktop(); }else {socialMobile(); }

			/*
			* get function socialMobile();
			* this function is used for add class to social align horizontal items
			*/
			function socialMobile(){
				if($('.align-social-vertical').hasClass('social-botton')){$('.align-social-vertical').removeClass('social-botton'); }
				if($('.align-social-vertical').hasClass('social-fixed')){$('.align-social-vertical').removeClass('social-fixed'); }
				if($('.align-social-vertical').hasClass('social-initial')){$('.align-social-vertical').removeClass('social-initial'); }
				$(".content-desktop").css("margin-left", "inherit");
				$('.align-social-vertical').addClass('social-mobile');
			}
			/*
			* get function socialDesktop();
			* this function is used for add class to social align vertical items
			*/
			function socialDesktop() {
				if($('.align-social-vertical').hasClass('social-mobile')){$('.align-social-vertical').removeClass('social-mobile');	}
				$('.align-social-vertical').addClass('content-desktop');
				var margen =  $(".container-node").offset();
				if (margen != null) {
					margen = margen['left']-$(".content-desktop").width();
				}
				$(".content-desktop").css("margin-left", margen);
			}

			$(window).resize(function(event) {
				var a = $(window).width();
				if (a > 991) {socialDesktop(); }else {socialMobile(); }
			});
			// this scroll is used for added data Social widget
			$(window).scroll(function() {
				var pageSize = $(window).width();
				if (pageSize > 991) {socialScrollDesktop(); }else {socialScrollMobile(); }
			});

			/*
			* get function socialScrollDesktop();
			* this function is used for move the items from widget Social
			*/
			function socialScrollDesktop(){
				var validation = $('body').find('.align-social-vertical');
				if (validation.length > 0){
							var margen =  $(".container-node").offset();
							if (margen != null) {
								margen = margen['left']-$(".content-desktop").width();
							}

							var panel = $('.align-social-vertical').parents('.panels-bootstrap-region').attr('id');
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

									$(".content-desktop").css("margin-left", margen);

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

									$(".content-desktop").css("margin-left", margen);


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

									$(".content-desktop").css("margin-left", margen);
								}
							}
				}
			}
			/*
			* get function socialScrollMobile();
			* this function is used for move the items from widget Social
			*/
			function socialScrollMobile(){
				var validation = $('body').find('.social-mobile');
				if (validation.length > 0){
					$(panelId).css("background-color","red");
					var altoRerdes = $('.align-social-vertical').outerHeight(true);
					var menu_admin = $('#admin-menu').outerHeight(true);
					var menu_admin_height = $('#admin-menu').height();
					var menu_navigation = $('.navbar-header').outerHeight(true);

					var	panelId = '#'.concat($('.align-social-vertical').parents('.panels-bootstrap-region').attr('id'));
					var heightContent = $(panelId).height()-(menu_navigation+menu_admin);
					var scrollWindow = $(window).scrollTop();
					console.log(menu_admin);
					console.log(menu_navigation);
					var total =(menu_admin+menu_navigation+heightContent+$(panelId).offset().top)-(altoRerdes+20);

					if (scrollWindow < ($(panelId).offset().top - menu_admin_height) || scrollWindow > total) {
						if($('.social-mobile').hasClass('social-mobile-fixed')){
							$(".content-desktop").css("margin-left", "inherit");
							$('.social-mobile').removeClass('social-mobile-fixed');
						}
					}else {
						$(".content-desktop").css("margin-left", "inherit");
						$('.social-mobile').addClass('social-mobile-fixed');
						$('.social-mobile-fixed').css({
							top: menu_admin_height+menu_navigation
						});
					}
				}
			}
			//verified if exist data color attrib
			var color = $('.field-name-field-color-linea .field-item ').text();
			console.log("tests");
			console.log(color);
			//if color exist
			if (color !== null) {
				//adding border top
				color = color.replace('#','');
				console.log(color);
				$('#views_slideshow_swiper_componente_anuncios-block_1').find('.anuncios-conten').addClass('border-top-'+color);
				$('.swiper-pagination').addClass('pagination-'+color);
				$('#widget_pager_bottom_componente_anuncios-block_1 , #widget_pager_bottom_componente_eventos-block_3_1').addClass('pager-'+color);
				$('.anuncios-enlace').addClass('pager-'+color);

			}
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
					$('.imge-conten, .iframe-conten').addClass('object-fit');
					$('.imge-conten, .iframe-conten').each(function(idx, el){
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

					$('.view-eventos-decanatura .view-content').attr("style", "margin: 10px !important");

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
				$('.wrapper-galeria-home .gh-item').addClass('object-fit');
				$('.wrapper-galeria-home .gh-item').each(function(idx, el){
					var srcImg = $(el).find('img').prop('src');
					console.log( $(el).find('img'));
					$(el).css({'background-image': 'url(' + srcImg + ')'});
				});
			}
			// menu expandible de equipo que desactiva el scroll del body

			$('#btn-list-equipo').click(function(){
				$('body').toggleClass('scroll-off');
			});

			setTimeout(function(){if($('.view-componente-acordeon 	.quicktabs-wrapper').length > 0){quickTabsSlide();} },1000);
			function quickTabsSlide(){
				var $parent = $('.quicktabs-wrapper').parents('.view');
				var $containerQuick = $parent.find('.quicktabs-wrapper').prepend('<a href="#" class="next-pagination">></a><a href="#" class="prev-pagination"><</a>');
				var $element = $containerQuick.find('ul');
				var $containerEl = $element.width();
				var $items = $element.find('li').length;
				var $itemsWidth = $element.find('li').outerWidth(true);
				var $numberOnclick = $items/parseInt($containerEl/$itemsWidth);
				var $counterData = 0;
				$containerQuick.find('.next-pagination').on('click',function(e){
					e.preventDefault();
					if($counterData >= 0 && $counterData < $numberOnclick){
						$counterData++;
						$element.animate({scrollLeft: ($counterData*parseInt($containerEl/$itemsWidth))*($itemsWidth)}, 800);
					}
					if($counterData >= $numberOnclick){
					$counterData--;
					}
				});
				$containerQuick.find('.prev-pagination').on('click',function(e){
					e.preventDefault();
					if($counterData > 0 && $counterData < $numberOnclick){
						$counterData--;
						$element.animate({scrollLeft: ($counterData*parseInt($containerEl/$itemsWidth))*($itemsWidth)}, 800);
					}
				});
			}
			//view-componente-enlaces-item
			setTimeout(function(){if($('.view-componente-enlaces-item').length > 0){componentEnlacesSlide();} },1000);
			function componentEnlacesSlide(){
				var $parent = $('.view-componente-enlaces-item').find('.view');
				var $containerItems = $('.view-componente-enlaces-item').find('.view-content').parent().prepend('<a href="#" class="next-pagination">></a><a href="#" class="prev-pagination"><</a>');
				var $element = $('.view-componente-enlaces-item').find('.view-content');
				var $containerEl = $element.width();
				var $items = $element.find('.views-row').length;
				var $itemsWidth = $element.find('.views-row').outerWidth(true);
				var $numberOnclick = $items/parseInt($containerEl/$itemsWidth);
				var $counterData = 0;
				$containerItems.find('.next-pagination').on('click',function(e){
					e.preventDefault();
					if($counterData >= 0 && $counterData < $numberOnclick){
						$counterData++;
						$element.animate({scrollLeft: ($counterData*parseInt($containerEl/$itemsWidth))*($itemsWidth)}, 800);
					}
					if($counterData >= $numberOnclick){
					$counterData--;
					}
				});
				$containerItems.find('.prev-pagination').on('click',function(e){
					e.preventDefault();
					if($counterData > 0 && $counterData < $numberOnclick){
						$counterData--;
						$element.animate({scrollLeft: ($counterData*parseInt($containerEl/$itemsWidth))*($itemsWidth)}, 800);
					}
				});
			}
			setTimeout(function(){if($('.view-componente-carrusel-multimedia.view-id-componente_carrusel_multimedia').length > 0){componentPagersSwyper();} },1000);
			function componentPagersSwyper(){
				var $parent = $('.view-componente-carrusel-multimedia.view-id-componente_carrusel_multimedia').find('.views-slideshow-controls-bottom');
				var $containerQuick = $parent.prepend('<a href="#" class="next-pagination">></a><a href="#" class="prev-pagination"><</a>');
				var $element = $('.view-componente-carrusel-multimedia.view-id-componente_carrusel_multimedia').find('.views_slideshow_pager_field');
				var $containerEl = $element.width();
				var $items = $element.find('.views-slideshow-pager-field-item').length;
				var $itemsWidth = $element.find('.views-slideshow-pager-field-item').outerWidth(true);
				var $numberOnclick = $items/parseInt($containerEl/$itemsWidth);
				var $counterData = 0;
				setTimeout(function(){
					var $element = $('.view-componente-carrusel-multimedia.view-id-componente_carrusel_multimedia').find('.views_slideshow_pager_field');
					var $containerEl = $element.width();
					var $items = $element.find('.views-slideshow-pager-field-item').length;
					var $itemsWidth = $element.find('.views-slideshow-pager-field-item').outerWidth(true);
					var $numberOnclick = $items/parseInt($containerEl/$itemsWidth);
					var $widthTotal = $items*$itemsWidth;
					if($widthTotal < $containerEl){
						$parent.find('.next-pagination, .prev-pagination').css('display', 'none');
					}
				},1000)


				$parent.find('.next-pagination').on('click',function(e){
					e.preventDefault();
					if(($counterData >= 0 && $counterData < $numberOnclick) || ($counterData >= 0 && numberOnclick  == 1 && $counterData <= $numberOnclick)){
						$counterData++;
						$element.animate({scrollLeft: ($counterData*parseInt($containerEl/$itemsWidth))*($itemsWidth)}, 800);
					}
					if($counterData > 0 && $counterData >= $numberOnclick && $numberOnclick != 1){
						$counterData--;
					}
				});
				$parent.find('.prev-pagination').on('click',function(e){
					e.preventDefault();
					if($counterData > 0 && $counterData < $numberOnclick){
						$counterData--;
						$element.animate({scrollLeft: ($counterData*parseInt($containerEl/$itemsWidth))*($itemsWidth)}, 800);
					}
				});
			};
		}
	}
})(jQuery, Drupal);

