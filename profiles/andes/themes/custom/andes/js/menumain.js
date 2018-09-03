(function ($) {
  Drupal.behaviors.menuMain = {
    attach: function (context, settings) {
      var docWidth = $(document).width(),
        $level1 = $('.tb-megamenu-item.level-1'),
        $itemsNivel2 = $('.tb-megamenu-item.level-2.dropdown-submenu a.dropdown-toggle');

        /* hover */
      $level1.hover(function () {
        if (!this) {
          console.log("hover");
        }
        /*   $(this).fadeOut(100);
          $(this).fadeIn(500); */
      });

      /* wrapper para area segura  */
      jQuery(".menu-soy-1").wrapAll("<div class='wrapper-menu-soy' />");
      jQuery(".mega-menu-2").wrapAll("<div class='wrapper-mega-menu' />");
      jQuery(".wrapper-menu-soy .menu-soy-1").wrapAll("<div class='container' />");
      jQuery(".wrapper-mega-menu .mega-menu-2").wrapAll("<div class='container' />");

      /*  add buscador */
      $(".wrapper-mega-menu .container").append('<div class="barra-buscar mega-menu-2"><span>Cerrar</span></div>');

      $(".barra-buscar").click(function () {
        console.log('test')
        $('#block-google-cse-google-cse').toggleClass("buscador-open");
      });
      /* ciclo item de mega menu */
      if (docWidth > 992) {
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
        var leftContainer = $('.wrapper-mega-menu .container').offset();
        /* ciclo */
        $(".tb-megamenu-menu-mega-menu .tb-megamenu-item.level-1").each(function (key, value) {
          var offset = $(this).offset(),
            menuhover = $(this).find('>.nav-child');
          if (menuhover.parent('li').hasClass('level-1')) {
            menuhover.css({
              'margin-left': '-' + offset.left + 'px',
              'width': docWidth + -14 +'px',
            })
          }
          //
        });
        $itemsNivel2.removeAttr('href');
        function dropdown() {
          /* Nivel3 */
         $('.active-clone .tb-megamenu-subnav a.dropdown-toggle').on('click', function () {
            console.log($(this));
            $('.clone-nivel-3').remove();
            //$('.box-black').parents('.row-fluid').addClass('parent-clone');
            $('.box-black p').text($(this).text());
            SubMenuCloneNivel3 = $(this).siblings('.nav-child').clone().addClass('clone-nivel-3');
            console.log(SubMenuCloneNivel3);
            $(this).parents('.parent-clone').find('.tb-megamenu-column').after(SubMenuCloneNivel3).siblings('.active-clone').addClass('none');
          });

          $('.level-2 > .dropdown-toggle').on("click", function () {
            $('.box-black').remove();
            $('.active-clone').remove();

            $(this).parents('.tb-megamenu-column').addClass('none').before("<div class='box-black' style='none'><p>" + $(this).text() + "</p></div>");

            $('.box-black').addClass('active-box').parents('.row-fluid').addClass('parent-clone');
            var SubMenuClone = $(this).siblings().clone().addClass('active-clone');
            $(this).parents('.tb-megamenu-column').after(SubMenuClone);

            $('.parent-clone').find('.content-img').addClass('active-img')
            setTimeout(function () {
              $('.box-black').addClass('active-box');
            }, 100);

            //$('.active-clone').siblings('.tb-megamenu-column').addClass('hidden');


            var child = $(this).siblings('.nav-child').html();
            var item = $(this).parents('.level-1').find('.tb-megamenu-column-inner').html();
            $('.box-black').click(function () {
              $(this).siblings('.tb-megamenu-column').removeClass('none')
              $('.parent-clone').find('.content-img').removeClass('active-img');
              $('.box-black').removeClass('active-box'); /* nivel 2 animacion */
              $('.nav-child.active').removeClass('active'); /* nivel 2 animacion */
              $('ul.level-1.active').removeClass('active'); /* nivel 1 animacion */
              $('.active-clone').remove();
              $('.clone-nivel-3').remove();
              $('.parent-clone').find('.tb-megamenu-column').removeClass('hidden');

            });
            dropdown();
          });
        }
        dropdown()
      }
      /* js mobile */
      else {
         /* mobile */
        const
          classSelect = 'clone-select',
          classBlockClone = 'clone-mobile-block',
          $contentFather = $('.tb-megamenu-menu-mega-menu .always-show ul.level-0'),
          className = 'clone',
          itemMobil = $contentFather.find('.level-1  a');


        /*  */
        $('.navbar-toggle').on("click", function () {
          $('body').toggleClass('not-scroll');
          $('.nav-child').removeClass('active-mobile');
        });
        itemMobil.on("click", function () {
          $('.box-black').remove();
          let $this = $(this);
          $this.siblings().addClass('active-mobile');
          $this.siblings('.tb-megamenu-submenu').find('>.mega-dropdown-inner').before("<div class='box-black' style='none'><p>" + $this.text() + "</p></div>");
          $('.box-black').click(function () {
            //$('.box-black').addClass('active-box').siblings('.content-img').removeClass('eve');
            //$('.box-black').removeClass('active-box'); /* nivel 2 animacion */
            $(this).parents('.active-mobile').removeClass('active-mobile'); /* nivel 2 animacion */

          });
        });

        itemMobil.removeAttr('href');
        $contentFather.after("<div class='" + className + "'></div>");
        $contentFather.after("<div class='menu-soy' id='menu-soy'><span>Soy:</span><select name='' id='select-clone'><option>Elegir</option></select></div>");
        $contentFather.after("<div class='separador-menu'></div>");

        /* init */
        generatorData(className, classBlockClone, 'block')
        generatorData(className, classSelect, 'select')


        /* inicia el html insertado */
        function generatorData(className, typeClone, typeBlock) {
          var data = $('#block-tb-megamenu-menu-menu-top-soy ul.tb-megamenu-nav.level-0 li.level-1.' + typeClone + ' a');
          loopsData(data, typeBlock);
        }
        /* recorre los objetos */
        function loopsData(data, typeBlock) {
          let title = '', href = '', text = '', dataSelect = [];

          for (var i = 0; i < data.length; i += 1) {
            title = data[i].title;
            href = data[i].href;
            if (typeBlock == 'block') {
              //console.log(data[i]);
              cloneBlock(title, href);
            }
            if (typeBlock == 'select') {
              text = data[i].text;
              href = data[i].href;
              dataSelect[i] = { 'text': text, 'href': href };
            }
          }//endFor
          cloneSelect(dataSelect);
        }
        /* funcion Clone de bloques */
        function cloneBlock(title, href) {
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
  }

}(jQuery));