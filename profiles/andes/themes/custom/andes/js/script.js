"use strict";
(function($) {

	// function galeria home
	jQuery(document).on("click", ".galeria-home", function() {
		var imageSrc = jQuery(this).parents(".box-modal").find("img").attr("src");
		jQuery(".modal-gallery-home").attr("src", imageSrc);
	});

	var SlideClass = "";
	var ParentSlideClass = "";
	var lastPosition = 0;
	var slideActive = "";
	var slideActivePosition = "";

	//add breidpoint news component.
	$(window).ready(function() {
		if($('.view-id-slider_homes').length > 0){
			ParentSlideClass = $('.view-id-slider_homes .field-content').children('div').eq(1).attr("class");
			$('.view-id-slider_homes').addClass(ParentSlideClass+"-container");
			$('.view-id-slider_homes .views-slideshow-simple-pager div').eq(0).addClass('active');
			slideActive = $('.view-id-slider_homes').find('li.swiper-slide-active').attr('id');
			slideActivePosition = $('#'+slideActive+' span.field-content').children('div').eq(1).attr('class');
			$('.view-id-slider_homes div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");

			SlideClass = slideActivePosition+"-control";
		}
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

	// Funcion breakpoint slider
	checkSize();
	$(window).resize(checkSize);
});

// Funcion breakpoint slider
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
// function actionClick(item, parentClass, swiperId, SliderBullet =1){
function actionClick(item, parentClass, swiperId, SliderBullet = 1){
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

	/**
	 * [listEvents description]
	 * @type {[type]}
	 */
	function slice(array, start, end) {
		var length = array == null ? 0 : array.length;
		if (!length) {
			return [];
		}
		start = start == null ? 0 : start
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
		var list = document.querySelectorAll('.view-eventos-decanatura .masonry-item');
		if (list.length == 0) {
			setTimeout(function(){listEvents()}, 200);
			return true;
		}
		eventsData.size = list.length;
		var partialEvents = chunk(list, 6);
		// var partialEvents = [list];

		partialEvents.map(function(ls, idx){
			var opt = ls.length;
			//console.log(ls);

			switch(opt){
				case 6:
					ls[0].classList.add('item-full');
					ls[1].classList.add('item-lg');
					ls[2].classList.add('item-sm');
					ls[3].classList.add('item-lg');
					ls[4].classList.add('item-sm');
					ls[5].classList.add('item-full');
				break;
				case 5:
					ls[0].classList.add('item-lg');
					ls[1].classList.add('item-sm');
					ls[2].classList.add('item-lg');
					ls[3].classList.add('item-sm');
					ls[4].classList.add('item-full');
				break;
				case 4:
					ls[0].classList.add('item-lg');
					ls[1].classList.add('item-sm');
					ls[2].classList.add('item-lg');
					ls[3].classList.add('item-sm');
				break;
				case 3:
					ls[0].classList.add('item-sm');
					ls[1].classList.add('item-sm');
					ls[2].classList.add('item-full');
				break;
				case 2:
					ls[0].classList.add('item-sm');
					ls[1].classList.add('item-sm');
				break;
				case 1:
					ls[0].classList.add('item-full');
				break;
			}
		});

	}

	function onEventsLoad(){
		var newSizeEvents = document.querySelectorAll('.view-eventos-decanatura .masonry-item').length;
		if( newSizeEvents != eventsData.size ){
			listEvents();
			eventsLoad();
		}else{
			setTimeout(function(){onEventsLoad()}, 200);
		}
	}

	function eventsLoad(){

		var btnLoadMore = document.querySelector('.view-eventos-decanatura .pager.pager-load-more a');
		if ( !btnLoadMore ) {
			setTimeout(function(){eventsLoad()}, 200);
			return false;
		}
		btnLoadMore.addEventListener('click', onEventsLoad, false);
	}

	eventsLoad();
	listEvents();


}(jQuery));


