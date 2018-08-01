(function ($) {

  $(window).resize(function() {
    var docWidth = $(document).width();
     var data = {
      slidesPerView: ((docWidth >= 1024) ? 4 : ((docWidth > 768 && docWidth <= 1024) ? 3 : ((docWidth > 640 && docWidth <= 768) ? 2 : 1)) ),
      spaceBetween: 50,
    }
   //	var swiper = new Swiper("#"+jQuery('.view-componente-noticias .swiper-container-horizontal').attr('id'), data);
  });

  Drupal.behaviors.menuMain = {
    attach: function (context, settings) {
      var docWidth      = $(document).width(),
          $itemsNivel2  = $('.tb-megamenu-item.level-2.dropdown-submenu a'),
          blockBlack    = '.tb-megamenu-submenu.dropdown-menu.mega-dropdown-menu.nav-child';

      $(".tb-megamenu-menu-mega-menu .tb-megamenu-item.level-1").each(function (key, value) {
        var offset      = $(this).offset(),
            menuhover = $(this).find('.nav-child');

        menuhover.css({
          'margin-left': '-'+offset.left+'px',
          'width': docWidth - 10 + 'px',
        })
        //
        $itemsNivel2.removeAttr('href');
        //console.log($('.tb-megamenu-item.level-2.dropdown-submenu'));
      });
      $itemsNivel2.on("click", function () {
        $itemsNivel2.text();
        $(blockBlack).removeClass('efect-block')
        $(this).siblings().addClass('efect-block');
        $('.tb-megamenu-menu-mega-menu .always-show').append("<div class='block-black'>here.....</div>")
        console.log($itemsNivel2.text());
        console.log($(this).siblings());
      });
    }
  };

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


