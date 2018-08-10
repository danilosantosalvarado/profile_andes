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
          $itemsNivel2  = $('.tb-megamenu-item.level-2.dropdown-submenu a');
      /* ciclo item de mega menu */
      if (docWidth >1200){
        console.log("if")
        $(".tb-megamenu-menu-mega-menu .tb-megamenu-item.level-1").each(function (key, value) {
          var offset         = $(this).offset(),
              menuhover = $(this).find('.container-submenu');
          if (menuhover.parent('li').hasClass('level-1')){
            menuhover.css({
              'margin-left': '-' + offset.left + 'px',
              'width': docWidth - 10 + 'px',
            })
          }
          $itemsNivel2.removeAttr('href');
          //
        });
        $(".tb-megamenu-menu-mega-menu .tb-megamenu-item.level-2.dropdown-submenu ").each(function (key, value) {
          var test = $(this).find('.tb-megamenu-subnav.level-2');
          //.tb - megamenu - subnav.level - 2
          console.log(test.children().length);
          test.css({
            'margin-top': '-'+ 32 * (key +1) +'px',
            'position': 'absolute',
          })
          //console.log(this);
          //console.log(offset);
        });
        $('.dropdown-toggle').on("click", function () {
          $('.box-black').remove();
          $(this).parents('.tb-megamenu-column').before("<div class='box-black'><a> < " + $(this).text() + "</a></div>");
          setTimeout(function () {
            $('.box-black').addClass('active-box').siblings('.content-img').addClass('active');
          }, 100);
          $(this).siblings('.nav-child').addClass('active'); /* nivel 2 animacion */
          $(this).parents('ul.level-1').addClass('active'); /* nivel 1 animacion */
          /* remover  */
          $('.box-black').click(function () {
            $('.box-black').addClass('active-box').siblings('.content-img').removeClass('eve');
            $('.box-black').removeClass('active-box'); /* nivel 2 animacion */
            $('.nav-child.active').removeClass('active'); /* nivel 2 animacion */
            $('ul.level-1.active').removeClass('active'); /* nivel 1 animacion */
          });
        });
      }
      else{

        const
          classSelect = 'clone-select',
          classBlockClone = 'clone-mobile-block',
          $contentFather = $('.tb-megamenu-menu-mega-menu .always-show ul.level-0'),
          className = 'clone';


        $contentFather.after("<div class='" + className + "'></div>");
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
          let title = '', href = '', text ='';

          var miObjeto = new Object(),
            objHref = "link",
            objText = "text";



          for (var i = 0; i < data.length; i += 1) {
            title = data[i].title;
            href = data[i].href;
            if (typeBlock == 'block'){
              //console.log(data[i]);
              cloneBlock(title, href);
            }
            if (typeBlock == 'select') {
         /*      console.log(data[i].text );
              console.log( data[i].href );
              console.log(data[i] ); */
             // let item ='';
              text = data[i].text;
              href = data[i].href;


              miObjeto.type = "clone";
              miObjeto["Fecha de creación"] = "Cadena con espacios y acento";
              miObjeto[objText] = text;
              miObjeto[objHref] = href;

              /* var obj = {
                item:[i]={
                  text: data[i].text,
                  href: data[i].href,
                }
              }; */
            }
          }//endFor
          obj=0;
          cloneSelect(obj)
          console.log(miObjeto);

        }
        /* funcion Clone de bloques */
        function cloneBlock(title, href){
          let clone = $('.' + className).append(
            "<div class='" + className + "-block " + className + "-" + title.toLowerCase() + "'><a href='" + href + "'>" + title + "</a></div>");
          return clone;
        }
        function cloneSelect(obj) {
          /* let cloneSelect = $('.' + className).append(
            "<div class='" + className + "-block " + className + "-" + title.toLowerCase() + "'><a href='" + href + "'>" + title + "</a></div>"); */
     /*      console.log(href );
          console.log(text); */
          //let htmloption = '<option value="' + text + '" data-href="'+href+'"></option>';
          //let htmlSelect = '<select name="" id="">'+htmloption+'</select >';
          console.log(obj);

          //return cloneSelect;
        }
      }
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
	    slidesPerView: ((docWidth >= 1200) ? 4 : ((docWidth > 992 && docWidth <= 1200) ? 3 : ((docWidth > 549 && docWidth <= 992) ? 2 : 1)) ),
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
    $(".view-banner-nodes .views-slideshow-controls-text-previous-processed, .view-banner-nodes .views-slideshow-controls-text-next-processed").on('click', function(event) {
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


