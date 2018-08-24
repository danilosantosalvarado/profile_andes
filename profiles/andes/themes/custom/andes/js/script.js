(function ($) {

  // $(window).resize(function() {
  //   var docWidth = $(document).width();
  //    var data = {
  //     slidesPerView: ((docWidth >= 1024) ? 4 : ((docWidth > 768 && docWidth <= 1024) ? 3 : ((docWidth > 640 && docWidth <= 768) ? 2 : 1)) ),
  //     spaceBetween: 50,
  //   }
  //  //	var swiper = new Swiper("#"+jQuery('.view-componente-noticias .swiper-container-horizontal').attr('id'), data);
  // });

  Drupal.behaviors.menuMain = {
    attach: function (context, settings) {
      var docWidth      = $(document).width(),
          $level1  =       $('.tb-megamenu-item.level-1'),
          $itemsNivel2 = $('.tb-megamenu-item.level-2.dropdown-submenu a.dropdown-toggle');


      $level1.hover(function () {
        if(!this){
          console.log("hover");
        }
      /*   $(this).fadeOut(100);
        $(this).fadeIn(500); */
      });

      /* ciclo item de mega menu */
      if (docWidth >1200){

        /* Scroll menu  */
        $(window).scroll(function (event) {
          var scroll = $(window).scrollTop(),
            menu = $('.tb-megamenu-menu-mega-menu');
          if (scroll > 100) {
            menu.removeClass('black');
            menu.addClass('yellow');
          }
          else {
            menu.removeClass('yellow');
            menu.addClass('black');
          }
        });
        /* ciclo */
        $(".tb-megamenu-menu-mega-menu .tb-megamenu-item.level-1").each(function (key, value) {
          var offset         = $(this).offset(),
            menuhover = $(this).find('>.nav-child');
          if (menuhover.parent('li').hasClass('level-1')){
            menuhover.css({
              'margin-left': '-' + offset.left + 'px',
              'width': docWidth - 10 + 'px',
            })
          }
          $itemsNivel2.removeAttr('href');
          //
        });
        function dropdown(){
          /* Nivel3 */
          $('.active-clone .tb-megamenu-subnav a.dropdown-toggle').on('click', function(){
            $('.box-black').parents('.row-fluid').addClass('parent-clone');
            $('.box-black a').text('<' +$(this).text() );
            SubMenuCloneNivel3  = $(this).siblings('.nav-child').clone().addClass('clone-nivel-3');
            $(this).parents('.parent-clone').find('.active-clone').addClass('none').after(SubMenuCloneNivel3);
          });
          /* Nivel2 */
          $('.level-2 > .dropdown-toggle').on("click", function () {
            $('.box-black').remove();
            $('.active-clone').remove();
            $(this).parents('.tb-megamenu-column').before("<div class='box-black' style='none'><a> < " + $(this).text() + "</a></div>");
            var SubMenuClone = $(this).siblings().clone().addClass('active-clone');
            $(this).parents('.tb-megamenu-column').after(SubMenuClone);
            setTimeout(function () {
              $('.box-black').addClass('active-box').parents('.row-fluid').addClass('parent-clone');
              $('.parent-clone').find('.content-img').addClass('active-sub-nivel');
              $('.active-clone').addClass('efect')
            }, 100);
            /* salir */
            $('.box-black').click(function () {
              $('.box-black').removeClass('active-box');
              $('.nav-child.active').removeClass('active');
              $('ul.level-1.active').removeClass('active');
              $('.active-clone').remove();
              $('.clone-nivel-3').remove();
              $('.content-img').removeClass('active-sub-nivel')
              $('.active-clone').removeClass('efect')
            });
            dropdown();
          });
        }
        dropdown()
      }
      else{
        const
          classSelect = 'clone-select',
          classBlockClone = 'clone-mobile-block',
          $contentFather = $('.tb-megamenu-menu-mega-menu .always-show ul.level-0'),
          className = 'clone',
          itemMobil =  $contentFather.find('.level-1 > a.dropdown-toggle');
          itemMobilNivel = $contentFather.find('.level-2 > a.dropdown-toggle');


        itemMobil.on("click",  function () {
          $('.box-black').remove();
          let $this = $(this);
          $this.siblings().addClass('active-mobile');
          $this.siblings('.tb-megamenu-submenu').find('>.mega-dropdown-inner').before("<div class='box-black' style='none'><a> < " + $this.text() + "</a></div>");
          console.log($this);
          $('.box-black').click(function () {
            console.log($this);
            //$('.box-black').addClass('active-box').siblings('.content-img').removeClass('eve');
            //$('.box-black').removeClass('active-box'); /* nivel 2 animacion */
            $(this).parents('.active-mobile').removeClass('active-mobile'); /* nivel 2 animacion */

          });
        });

        itemMobilNivel.on("click", function () {
          $('.box-black').remove();
          let $this = $(this);
          $this.siblings().addClass('active-mobile');
          $this.siblings('.tb-megamenu-submenu').find('>.mega-dropdown-inner').before("<div class='box-black' style='none'><a> < " + $this.text() + "</a></div>");
          console.log($this);
          $('.box-black').click(function () {
            console.log($this);
            //$('.box-black').addClass('active-box').siblings('.content-img').removeClass('eve');
            //$('.box-black').removeClass('active-box'); /* nivel 2 animacion */
            $(this).parents('.active-mobile').removeClass('active-mobile'); /* nivel 2 animacion */

          });
        });


        itemMobilNivel.removeAttr('href');
        itemMobil.removeAttr('href');
        $contentFather.after("<div class='" + className + "'></div>");
        $contentFather.after("<div class='menu-soy' id='menu-soy'><span>Soy:</span><select name='' id='select-clone'><option>Elegir</option></select></div>");
        $contentFather.after("<div class='separador-menu'></div>");

        /* init */
        generatorData(className, classBlockClone, 'block')
        generatorData(className, classSelect, 'select')


        /* inicia el html insertado */
        function generatorData(className, typeClone, typeBlock){
          var data = $('#block-tb-megamenu-menu-menu-top-soy ul.tb-megamenu-nav.level-0 li.level-1.'+ typeClone +' a');
          loopsData(data, typeBlock);
        }
        /* recorre los objetos */
        function loopsData(data, typeBlock){
          let title = '', href = '', text = '', dataSelect = [];

          for (var i = 0; i < data.length; i += 1) {
            title = data[i].title;
            href = data[i].href;
            if (typeBlock == 'block'){
              //console.log(data[i]);
              cloneBlock(title, href);
            }
            if (typeBlock == 'select') {
              text = data[i].text;
              href = data[i].href;
              dataSelect[i] = {'text':text,'href':href};
            }
          }//endFor
          cloneSelect(dataSelect);
        }
        /* funcion Clone de bloques */
        function cloneBlock(title, href){
          let clone = $('.' + className).append(
            "<div class='" + className + "-block " + className + "-" + title.toLowerCase() + "'><a href='" + href + "'>" + title + "</a></div>");
          return clone;
        }
        /* clone select */
        function cloneSelect(obj) {
          for (i = 0; i < obj.length; i++) {
            let $htmloption = $('#select-clone').append('<option class="' + i + ' "value="' + obj[i].text + '" data-href="' + obj[i].href + '">' + obj[i].text + '</option>');
            //console.log(htmloption)
          }
          //return $htmloption;
        }
      }
    }
  };
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
	    slidesPerView: ((docWidth >= 1200) ? 4 : ((docWidth > 992 && docWidth <= 1200) ? 3 : ((docWidth > 549 && docWidth <= 992) ? 2 : 1)) ),
      spaceBetween: 20,
      swipeTo: 0,
    }
    // autoplay: {
    //   delay: 5000,
    // },
		if ($('.view-componente-noticias .swiper-container-horizontal').length > 0) {
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

}(jQuery));


