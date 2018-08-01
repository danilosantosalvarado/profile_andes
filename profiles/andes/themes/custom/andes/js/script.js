(function ($) {

	//add breidpoint news component.
	$(window).ready(function() {
    checkSize();
    $(window).resize(checkSize);
	});
	function checkSize(){
		var docWidth = $(document).width();
	 	var data = {
	    slidesPerView: ((docWidth >= 1024) ? 4 : ((docWidth > 768 && docWidth <= 1024) ? 3 : ((docWidth > 640 && docWidth <= 768) ? 2 : 1)) ),
	    spaceBetween: 20,
		}
		if ($('.view-componente-noticias .swiper-container-horizontal').length > 0) {
			setTimeout(function(){
				var swiper = new Swiper("#"+jQuery('.view-componente-noticias .swiper-container-horizontal').attr('id'), data);
			},50)
		}
	}

	//Slider home position, top, ring, botton, left. 
	$(window).load(function() {
		var SlideClass = "";
		$(".view-slider-homes .views-slideshow-controls-text-previous-processed, .view-slider-homes .views-slideshow-controls-text-next-processed").on('click', function(event) {
			var sibling  = $(this).parents('div.views-slideshow-controls-bottom').siblings().attr('id');
			var slideActive = $('#'+sibling).find('li.swiper-slide-active').attr('id');
			var slideActivePosition = $('#'+slideActive+' span.field-content').children('div').first().attr('class');
			if (SlideClass == "") {
				$(this).parents('div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
				SlideClass = slideActivePosition+"-control";
			}
			else{
				$(this).parents('div.views-slideshow-controls-bottom').removeClass(SlideClass);
				$(this).parents('div.views-slideshow-controls-bottom').addClass(slideActivePosition+"-control");
				SlideClass = slideActivePosition+"-control";
			}
		});	
	});
		
}(jQuery));


