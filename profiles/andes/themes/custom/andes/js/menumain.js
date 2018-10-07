(function ($) {
  Drupal.behaviors.menuMain = {
    attach: function (context, settings) {
      var docWidth = $(document).width(),
        $level1 = $('.tb-megamenu-menu-mega-menu .always-show ul.level-0 > li.level-1 > a'),
        $itemsNivel2 = $('.tb-megamenu-item.level-2.dropdown-submenu a.dropdown-toggle');

      /* wrapper para area segura  */
      $(".menu-soy-1").wrapAll("<div class='wrapper-menu-soy' />");
      $(".mega-menu-2").wrapAll("<div class='wrapper-mega-menu' />");
      $(".wrapper-menu-soy .menu-soy-1").wrapAll("<div class='container' />");
      $(".wrapper-mega-menu .mega-menu-2").wrapAll("<div class='container' />");

      /* cambio de idioma  se decide  que se muestre el select*/
      /* let arrayIdioma = $('#block-lang-dropdown-language .form-type-select .form-select option'), titleSelect = '';
      $('#block-lang-dropdown-language').append(
        "<div class='dropDown'></div>"
      );
      for (let index = 0; index < arrayIdioma.length; index++) {
        let element = arrayIdioma[index];
        if (element.selected == false){
          titleSelect =  element.text;
          className = 'dropDown-'+ index;
          dropDown(titleSelect, className)
          console.log();
        }
      } */
      function dropDown(titleSelect, className) {
        let clone = $('#block-lang-dropdown-language .dropDown').append(
          "<div class='item " + className + "'><a href=''>" + titleSelect + "</a></div>");
        return clone;
      }
      /*  add buscador */
      if (!$('.mega-menu-2').hasClass('barra-buscar')) {
        //console.log('true');
        $(".wrapper-mega-menu .container").append('<div class="barra-buscar mega-menu-2"><span>Cerrar</span></div>');
        $(".barra-buscar").click(function () {
          $(this).toggleClass('icon-close');
          $('#google-cse-results-searchbox-form input').attr('placeholder', 'Buscar');
          $('#block-google-cse-google-cse').toggleClass("buscador-open");
        });
      }
      /* add class varios elementos */
      /* cuando sea flotante a derecha clase necesaria */
      $(".float-right .row-fluid .tb-megamenu-column:nth-child(2)").addClass('nivel-right');
      /* Contenedor de imagen  */
      $('.container-menu-image').parents('.tb-megamenu-column').addClass('content-img').siblings('.tb-megamenu-column').addClass('content-nivel-1');
        /* hover finalizar las animaciones*/
      if (docWidth > 992) {

        $level1.hover(
          function () {
            $('body').addClass('dark-layer');
            $('.box-black').remove();
            $('.clone-nivel-2').remove();
            $('.clone-nivel-3').remove();
            $('.dropdown-toggle').removeClass('text-hover');
            removerClassBoxBlack();
            $('.clone-nivel-3').removeClass('active-clone2');
          }, function () {
            $(this).addClass('text-hover');
            console.log('remover');
            if ($level1.find('>.nav-child')){
              //$('body').removeClass('dark-layer');
            }
          }
        );

        /* Scroll menu cambio de colO r */
        $(window).scroll(function (event) {
          var scroll = $(window).scrollTop(),
            menu = $('.wrapper-mega-menu');
          if ( Drupal.settings.udla_blocks_alter != undefined) {
            Drupal.settings.udla_blocks_alter.background_color = (Drupal.settings.udla_blocks_alter.background_color != undefined) ? Drupal.settings.udla_blocks_alter.background_color : "";
            Drupal.settings.udla_blocks_alter.background_color_change = (Drupal.settings.udla_blocks_alter.background_color_change != undefined )? Drupal.settings.udla_blocks_alter.background_color_change : "";
            if (scroll > 10) {
              menu.removeClass(Drupal.settings.udla_blocks_alter.background_color);
              menu.addClass(Drupal.settings.udla_blocks_alter.background_color_change);
              $(".barra-buscar").removeClass('cerrar');
            }
            else {
              menu.removeClass(Drupal.settings.udla_blocks_alter.background_color_change);
              menu.addClass(Drupal.settings.udla_blocks_alter.background_color);
            }
          }
        });

        /* ciclo para el ancho de primer contenedor */
        $(".tb-megamenu-menu-mega-menu .tb-megamenu-item.level-1").each(function (key, value) {
          var offset = $(this).offset(),
            menuhover = $(this).find('>.nav-child');
            menutopSoy = $('.tb-megamenu-menu-menu-top-soy .tb-megamenu-item.level-1').find('>.nav-child'),
            offsettopSoy = $('.tb-megamenu-menu-menu-top-soy .tb-megamenu-item.level-1 a.dropdown-toggle').offset();
          menuhover.addClass('dark-layer')
          if (menuhover.parent('li').hasClass('level-1')) {
            menuhover.css({
              'margin-left': '-' + offset.left - 4 + 'px',
              'width': docWidth  +'px',
            })
          }
          /* remover el href en guia servicios add clase de para click*/
          menutopSoy.siblings('a').addClass('buttom-guia').removeAttr('href');
          if (menutopSoy.parent('li').hasClass('level-1')) {
            menutopSoy.addClass('nivel-1-top-soy')
            menutopSoy.css({
              'margin-left': '-' + (offsettopSoy.left) + 'px',
              'width': docWidth + 'px',
            })
          }
          let text  = menuhover.find('.level-2 a.dropdown-toggle').text();
          //console.log(text);
        });
        /* remueve la capa oscura del menu en el fondo */
        $('.dark-layer-hover').hover(
          function () {
          }, function () {
            $('body .main-container.container-fluid .region-content').removeClass('dark-layer');
          }
        );

        $('.wrapper-mega-menu .block-tb-megamenu .level-0 li').hover(
          function () {
            //console.log('in')
          }, function () {
            $('body .main-container.container-fluid .region-content').removeClass('dark-layer');
          }
        );

        $('.wrapper-menu-soy').hover(
          function () {
            $('body .main-container.container-fluid .region-content').removeClass('dark-layer');
          }, function () {
          }
        );

        $('.buttom-guia').on("click", function () {
          $(this).toggleClass('active').siblings('.nivel-1-top-soy').toggleClass('active');
        });

        /* retiro el atributo href  */
        $itemsNivel2.removeAttr('href');

        /* Nivel 2 se crea el box black */
        $('.level-2 > .dropdown-toggle').on("click", function () {
          /* remove de los clones */
          $('.box-black').remove();
          $('.clone-nivel-2').remove();
          /* se crea el box black */
          $(this).parents('.tb-megamenu-column').addClass('active-nivel-1').before("<div class='box-black' style='none'><p>" + $(this).text() + "</p></div>");
          /* clase padre para todo los clones */
          $('.box-black').parents('.row-fluid').addClass('parent-clone');
          /* hacemos el clone */
          var SubMenuClone = $(this).siblings().clone().addClass('clone-nivel-2');
          $(this).parents('.tb-megamenu-column').after(SubMenuClone);
          /* clase animacion de la imagen */
          //$('.parent-clone').find('.content-img').addClass('active-img');
          $('.parent-clone').find('.content-img').addClass('active-img').parents('.tb-megamenu-subnav').addClass('container-img');
          /* se crea para que poner clase que hace la animacion */
          setTimeout(function () {
            $('.box-black').addClass('active-box');
            $('.clone-nivel-2').addClass('active-clone');
          }, 1);
           /* pendiente verificar  o limpiar memoria*/
          var child = $(this).siblings('.nav-child').html();
          var item = $(this).parents('.level-1').find('.tb-megamenu-column-inner').html();
          /* pendiente verificar */
          /* cuando se da click en la box black */
          $('.box-black').click(function () {
            /* remover clases animacion de salida*/
            removerClassBoxBlack();
          });
          reBuildEl();
        });

        function removerClassBoxBlack() {
          $('.parent-clone').find('.content-img').removeClass('active-img');
          $('.box-black').removeClass('active-box');
          $('.clone-nivel-2').removeClass('active-clone');
          $('.tb-megamenu-column').removeClass('active-nivel-1');
        }

        function reBuildEl(){
          /* Animacio del nivel Nivel 3 */
          //console.log($('.level-3 a.dropdown-toggle'));
          $('.clone-nivel-2 .level-3 a.dropdown-toggle').on('click', function () {
            $('.clone-nivel-3').remove();
            //$('.box-black').parents('.row-fluid').addClass('parent-clone');
            $('.box-black p').text($(this).text());
            SubMenuCloneNivel3 = $(this).siblings('.nav-child').clone().addClass('clone-nivel-3');
            $(this).parents('.parent-clone').find('.tb-megamenu-column').after(SubMenuCloneNivel3).siblings('.active-clone').addClass('none');
            /* se crea para que poner clase que hace la animacion */
            setTimeout(function () {
              $('.clone-nivel-3').addClass('active-clone2');
            }, 1);

            $('.box-black').click(function () {
              /* remover clases animacion de salida*/
              $('.clone-nivel-3').removeClass('active-clone2');
            });
            //$('.clone-nivel-2 a.dropdown-toggle').removeAttr('href');
          });
        }
      }
      /* js para la version mobile */
      else {
         /* mobile */
        const
          classSelect = 'clone-select',
          classBlockClone = 'clone-mobile-block',
          $contentFather = $('.tb-megamenu-menu-mega-menu .always-show ul.level-0'),
          className = 'clone',
          itemMobil = $contentFather.find('.level-1  a'),
          /* calcula el alto menos la cabecera */
          heigthCalc = $(window).height()- 128;

        //console.log(heigthCalc)

        $contentFather.parents('.always-show').css('height' , heigthCalc + "px");

        /* scroll de  body   */
        $('.navbar-toggle').on("click", function () {
          $('body').toggleClass('not-scroll');
          $('.nav-child').removeClass('active-mobile');
        });
        $('.height-calc')
        itemMobil.siblings('.tb-megamenu-submenu').addClass('container-submenu')
        itemMobil.on("click", function () {
          let $this = $(this);
          $('.box-black-mobile').remove();
          //console.log($this);
          $this.siblings().addClass('active-mobile');
          $this.siblings('.tb-megamenu-submenu').find('>.mega-dropdown-inner').before("<div class='box-black-mobile' style='none'><p>" + $this.text() + "</p></div>");
          $('.box-black-mobile').click(function () {
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