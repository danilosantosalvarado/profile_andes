(function ($) {
  Drupal.behaviors.menuMain = {
    attach: function (context, settings) {
      var docWidth = $(document).width(),
      $dataId = 0,
      $levelNow = 0;
      /* ----| End Select clone of language change |----*/
      var $level1 = $('.tb-megamenu-menu-mega-menu .always-show ul.level-0 > li.level-1 > a'),
      $level1TopSoy = $('.tb-megamenu-menu-menu-top-soy .always-show ul.level-0 > li.level-1 > a'),
      $itemsNivel2 = $('.tb-megamenu-item.level-2.dropdown-submenu a.dropdown-toggle');
      $('.region-navigation', context).once('mainmenu-behavior', function () {
        /* wrapper para area segura  */
        $(".menu-soy-1").wrapAll("<div class='wrapper-menu-soy' />");
        $(".mega-menu-2").wrapAll("<div class='wrapper-mega-menu' />");
        $("#block-google-cse-google-cse.menu-buscar").wrapAll("<div class='wrapper-buscar-menu' />");
        $(".wrapper-menu-soy .menu-soy-1").wrapAll("<div class='container' />");
        $(".wrapper-mega-menu .mega-menu-2").wrapAll("<div class='container' />");

       /* modified data for language*/
        var currentlang = jQuery('html').attr('lang');
        var $search = (currentlang == 'es')  ? 'Buscar': (currentlang == 'en') ? 'Search': "";
        $('#google-cse-results-searchbox-form input').attr('placeholder', Drupal.t($search));
        $('#google-cse-results-searchbox-form').keypress(function(e) {
          //e.preventDefault();
          if(e.which == 13) {
            $('#google-cse-results-searchbox-form #edit-query').val();
            window.location = Drupal.settings.basePath+Drupal.settings.pathPrefix + "search/google/"+$('#google-cse-results-searchbox-form #edit-query').val();
          }
        });
        $('#google-cse-results-searchbox-form button:submit').on('click',function(e) {
          e.preventDefault();
          $('#google-cse-results-searchbox-form #edit-query').val();
          window.location = Drupal.settings.basePath+Drupal.settings.pathPrefix + "search/google/"+$('#google-cse-results-searchbox-form #edit-query').val();
        });
        /*End data language*/

        initDesktopMenu();
        getEventsClickDesktop();
        initMobileMenu();
        getEventsClickMobile();
        resizeGoToInstitucional();
        if(docWidth > 992){
          clearItemsfromMobile();
        }
        $('.container-language').click(function(e) {
          e.stopPropagation();
          if($('.select-options').hasClass('active')){
            $('.select-options').removeClass('active');
          }else{
            $('.select-options').addClass('active');
          }
        });
        $(document).click(function() {
          $('.select-options').removeClass('active');
        });

        /*Function resizeGoToInstitucional() */
        function resizeGoToInstitucional(){
          if($('.tb-megamenu-menu-menu-top-soy .level-0 li.level-1').length && ($(window).width() > 992 && $(window).width()< 1200)){
            $('.wrapper-menu-soy .container section').last().addClass('hidden');
          }else{
            $('.wrapper-menu-soy .container section').last().removeClass('hidden');
          }
        }
        /*End Function resizeGoToInstitucional() */

        /*init Resize*/
        $(window).resize(function(event) {
          if ($(window).width() > 992) {
            clearItemsfromMobile();
          }
          else{
            $('.wrapper-buscar-menu').show();
            initMobileMenu();
          }
          resizeGoToInstitucional();
        });
        /* INIT Functions used for Desktop */
        function clearItemsfromMobile(){
          $(".container-language").show();
          if($('.container-select-language').length> 0)
            $('.container-select-language').html('');

          if($('.container-select-top-soy').length> 0)
            $('.container-select-top-soy').html('');

          if($('.container-destacados').length> 0)
            $('.container-destacados').html('');

          if($('.container-select-language').length> 0)
            $('.container-select-language').html('');

          if($('.menu-container-data').length> 0)
          $('.menu-container-data').remove();

          $('.navbar-collapse.collapse').removeAttr( 'style' );
          $('.wrapper-buscar-menu').removeAttr( 'style' );
        }
        //Funcion de calculo de menu y wrapper seccion de buscar.
        function initDesktopMenu(){
          var menu = $('.navbar-header');
          menu.addClass(Drupal.settings.udla_blocks_alter.background_color_change);

          var $menuMegaMenu = ($('.region-navigation.mainmenu-behavior-processed').length > 0 ) ? $('.mainmenu-behavior-processed').outerHeight(true) : 0 ;
          var $searchData = ($('.wrapper-buscar-menu').length > 0) ? $('.wrapper-buscar-menu').outerHeight(true) : 0;

          // Funcion que calcula el alto del menu para, darle un margin-top a la region-content
          if($(window).width() > 992){
            setTimeout(function(){
              var $height_menu_desktop = $('.navbar-collapse .region-navigation .wrapper-menu-soy').outerHeight(true) + $('.navbar-collapse .region-navigation .wrapper-mega-menu').outerHeight(true);
              var $menu_admin = $('#admin-menu').length > 0;
              var $heigth_menu_admin = $('#admin-menu').outerHeight(true);
              if($menu_admin === true) {
                var $suma = $height_menu_desktop + $heigth_menu_admin;
                $('body > div.container-fluid.main-container').css({'margin-top': $height_menu_desktop + $heigth_menu_admin - 2});
              }else {
                $('body > div.container-fluid.main-container').css({'margin-top': $height_menu_desktop - 1});
              }
            },1290);
          }

          $(".wrapper-buscar-menu #block-google-cse-google-cse.menu-buscar").wrapAll("<div class='container' />");
          cloneSelect();

          $('.container-menu-image').parents('.tb-megamenu-column').addClass('content-img').siblings('.tb-megamenu-column').addClass('content-nivel-1');
          childrenEvent(".tb-megamenu-column .dropdown-toggle", "desktop");
          colorChange();
        }
        // Despliege de menu, click al button de buscar
        function getEventsClickDesktop(){
          if (!$('.mega-menu-2').hasClass('barra-buscar')) {
            $('.wrapper-mega-menu .nav-collapse').parent().append('<div class="barra-buscar mega-menu-2"><span>Cerrar</span></div>');
            $('.wrapper-buscar-menu').hide();
            $(".barra-buscar").click(function () {
              $(this).toggleClass('icon-close');
              $('.wrapper-buscar-menu').toggleClass('active');
              $('#block-google-cse-google-cse').toggleClass("buscador-open");
              if(jQuery('.buscador-open').length > 0){
                $('.wrapper-buscar-menu').slideDown('slow');
              }else{
                $('.wrapper-buscar-menu').slideUp('slow');
              }
            });
          }
          $level1.hover(
            function () {
              $dataId = $(this).parent().attr('data-id');
              $('.dropdown-toggle').removeClass('text-hover');
              $('.menu-container-data active').remove();
              $('.menu-container-data').remove();
              $("div.active-nivel-1").removeClass('active-nivel-1');
            },
            function () {
              $(this).addClass('text-hover');
              if ($level1.find('>.nav-child')){
                $('body').removeClass('dark-layer');
              }
            }
          );
        }
        //Clone se select a uno custom, para aplicar style personalozado
        function cloneSelect(){
          if($('.container-language').length == 0){
            var $select = $('.lang_dropdown_form select');
            $select.parent('.form-item').append('<div class="container-language"></div><ul class="select-options"></ul>');
            $select.children().each(function(index, value){
              if($(this).attr('selected') != undefined){
                $('.container-language').html('<div>'+$(this).text().substring(0, 3)+'</div>');
              }else{
                $('.select-options').html('<li id="'+$(this).val()+'"><a href="#">'+$(this).text()+'</a></li>');
                $('.select-options li').click(function(e) {
                  jQuery(".lang_dropdown_form select").val($(this).attr('id')).trigger('change');
                });
              }
            })
          }
        }
        //Funcion de cambio de color de fondo de menu y seccion de busqueda.
        function colorChange(){
          /* Scroll menu cambio de color */
          $(window).scroll(function (event) {
            if($(window).width() > 992){
              let scroll = $(window).scrollTop(),
              menu = $('.wrapper-mega-menu');
              if ( Drupal.settings.udla_blocks_alter !== undefined) {
                Drupal.settings.udla_blocks_alter.background_color = (Drupal.settings.udla_blocks_alter.background_color !== undefined) ? Drupal.settings.udla_blocks_alter.background_color : "";
                Drupal.settings.udla_blocks_alter.background_color_change = (Drupal.settings.udla_blocks_alter.background_color_change !== undefined )? Drupal.settings.udla_blocks_alter.background_color_change : "";
                Drupal.settings.udla_blocks_alter.text_color = (Drupal.settings.udla_blocks_alter.text_color !== undefined )? Drupal.settings.udla_blocks_alter.text_color : "";
                if(Drupal.settings.udla_blocks_alter.text_color != ""){
                  $('.view-logos-header p svg path').css('fill', Drupal.settings.udla_blocks_alter.color_svg);
                  $('.view-logos-header .views-row-last').css('border-left-color', Drupal.settings.udla_blocks_alter.color_svg);
                }
                else if (scroll > 10) {
                  menu.removeClass(Drupal.settings.udla_blocks_alter.background_color);
                  menu.addClass(Drupal.settings.udla_blocks_alter.background_color_change);
                  $(".barra-buscar").removeClass('cerrar');
                }
                else {
                  menu.removeClass(Drupal.settings.udla_blocks_alter.background_color_change);
                  menu.addClass(Drupal.settings.udla_blocks_alter.background_color);
                }
              }
            }
          });
        }
        /*END Functions used for Desktop */

        /* INIT Functions used for Mobile */
        function initMobileMenu(){
          //$(".container-language").hide();
          // $(".select-options").hide();
          $('.wrapper-mega-menu').removeClass(Drupal.settings.udla_blocks_alter.background_color_change);
          $('.navbar-toggle').attr('data-target', '#navbar-collapse, .nav-collapse');
          $('.menuIstance-processed').css('display','none');
          $('.container-menu-image').parents('.tb-megamenu-column').addClass('content-img').siblings('.tb-megamenu-column').addClass('content-nivel-1');
          var contentLength = $('.region-navigation .wrapper-mega-menu .view-id-logos_header .view-content div.views-row').length;
          // Wrappers de los button de desplige de menu.
          if(contentLength == 1){
            if($('.wrapper-header-color').length == 0)
              $('.navbar-header button').wrapAll("<div class='wrapper-header-color' />");

            if($('.wrapper-header-color').html() == ""){
              var content = $('.region-navigation .wrapper-mega-menu .view-id-logos_header .view-content .views-row .field-content').html();
              $('.wrapper-header-color').prepend(content);
            }
          }else if(contentLength == 2){
            if($('.wrapper-header-color').length == 0)
              $('.navbar-header button').wrapAll("<div class='wrapper-header-color' />");

            if($('.wrapper-header-color').children().length == 1){
              var content = $('.region-navigation .wrapper-mega-menu .view-id-logos_header .view-content .field-content').first().html();
              $('.wrapper-header-color').prepend(content);
            }

            if($('.wrapper-header-up').length == 0)
              $('.navbar-header').prepend("<div class='wrapper-header-up' />");

            if($('.wrapper-header-up').html() == ""){
              // console.log("seeeee");
              var contentb = $('.region-navigation .wrapper-mega-menu .view-id-logos_header .view-content .views-row .field-content').last().html();
              // console.log('contentb');
              $('.wrapper-header-up').prepend(contentb);

            }
          }
          //Replica de selec de idioma ("Ingles, Español").
          if($('.container-select-language').length == 0){
            var $secondSelect = $('#block-lang-dropdown-language');
            $('.wrapper-menu-soy').append('<div class="container-select-language"><span class="title-language">'+Drupal.t($secondSelect.find('.block-title').text())+'</span>'+$secondSelect.find('form').parent().html()+'</div>');
          }
          //Al no detectar la clase, no permita que la funcion se ejecute una segunda vez
          if($('.container-select-language').html() == ''){
            $('.navbar-header').addClass(Drupal.settings.udla_blocks_alter.background_color_change);
            $('.container-select-language').html('<span class="title-language">'+Drupal.t($secondSelect.find('.block-title').text())+'</span>'+$secondSelect.find('form').parent().html());
            $('.container-select-language select').on('change', function(){
              $(this).parents('form').submit();
            });
          }
          //Replica de menu tod soy nivel 1 en option.
          var $selectTopSoyItems =$('.wrapper-menu-soy li.level-1').not('.dropdown').not('.menu-destacado');
          if($('.container-select-top-soy').length == 0){
            $.each( $selectTopSoyItems, function( k, v ) {
              var $element = $(this).find('a');
              if(k == 0){
                $('.wrapper-menu-soy').append('<div class="container-select-top-soy"><span class="title-top-soy">'+Drupal.t($element.text())+'</span><select class="select-top-soy"><option value="">'+Drupal.t('Elegir')+'</option></select></div>');
              }else{
                $('.select-top-soy').append($('<option>', {value: $element.attr('href'), text: $element.text()}));
              }
            });
          }
          //Al no detectar la clase, no permita que la funcion se ejecute una segunda vez
          if($('.container-select-top-soy').html() == ''){
            $.each( $selectTopSoyItems, function( k, v ) {
              var  $element = $(this).find('a');
              if(k == 0){
                $('.container-select-top-soy').append('<span class="title-top-soy">'+Drupal.t($element.text())+'</span><select class="select-top-soy"><option value="">'+Drupal.t('Elegir')+'</option></select>');
              }else{
                $('.select-top-soy').append($('<option>', {value: $element.attr('href'), text: $element.text()}));
              }
            });
            $('.select-top-soy').on('change',function(){
               window.location.replace(Drupal.t(this.value));
            });
          }
          //Medir el heidth de menu, cuando el menu esta recojido, margin top de la region content.
          if($(window).width() < 992){
            var  $height_menu = $('.navbar-header').outerHeight();
            var  $height_menu_desktop = $('.navbar-collapse .region-navigation .wrapper-menu-soy').outerHeight() + $('.navbar-collapse .region-navigation .wrapper-mega-menu').outerHeight();
            $('#navbar-collapse').css("cssText", "margin-top: "+$height_menu+"px !important;");
            if($('.navbar-header .wrapper-header-color').length >0){
              $('body > div.container-fluid.main-container').css({'margin-top': $height_menu - 1 });
            }else{
              $('body > div.container-fluid.main-container').css({'margin-top': $height_menu_desktop });
            }
          }
          //Copiar los enlaces que estan destacados en el menu.
          if($('.container-destacados').length == 0){
            var $selectDestacadosItems =$('.wrapper-menu-soy li.level-1.menu-destacado');
            $.each( $selectDestacadosItems, function( k, v ) {
              if(k == 0){
                $('.wrapper-menu-soy').append('<div class="container-destacados"><div class="menu-destacado">'+$(this).html()+'</div></div>');
              }else{
                $('.container-destacados').append('<div class="menu-destacado">'+$(this).html()+"</div>");
              }
            });
            // Enalace volver a intucional clone mobil, validacion si existe en el menu
            if($('#block-views-logos-header-block-2 .view-id-logos_header .field-content').length > 0){
              jQuery('.container-destacados').append('<div class="menu-destacado">'+jQuery('#block-views-logos-header-block-2 .view-id-logos_header .field-content').html()+"</div>");
            }
          }
          //Al no detectar la clase, no permita que la funcion se ejecute una segunda vez
          if($('.container-destacados').html() == ''){
            var  $selectDestacadosItems =$('.wrapper-menu-soy li.level-1.menu-destacado');
            $.each( $selectDestacadosItems, function( k, v ) {
              if(k == 0){
                $('.container-destacados').append('<div class="menu-destacado">'+$(this).html()+'</div>');
              }else{
                $('.container-destacados').append('<div class="menu-destacado">'+$(this).html()+"</div>");
              }
            });
          }
          // getEventsClickMobile();
        }
        //Funcionalidad mobil de opcion de idioma y soy
        function getEventsClickMobile(){
          //cambio de idioma en la url.
          $('.container-select-language select').on('change', function(){
            if($(window).width() < 992){
              $(this).parents('form').submit();
            }
          });
          //Oculta todo el body cuando el menu esta desplegado.
          $('.wrapper-header-color .navbar-toggle').on('click',function(){
            if($(window).width() < 992){
              $('body').toggleClass('active-menu');
              if($(this).attr('aria-expanded') == undefined || $(this).attr('aria-expanded') == 'false'){
                $(this).attr('aria-expanded',true);
              }else{
                $(this).attr('aria-expanded',false);
              }
            }
          });
          //Selec primer nivel de menu soy cambia la url al cambiar la opcion.
          $('.select-top-soy').on('change',function(){
            if($(window).width() < 992){
              window.location.replace(Drupal.t(this.value));
            }
          });
          //Despliege del primer nivel de wrapper-mega-menu.
          $level1.on('click',function(e) {
            e.preventDefault();
            if($(window).width() < 992){
              var  $dataId = $(this).parent().attr('data-id');
              $('body').addClass('dark-layer');
              $('.dropdown-toggle').removeClass('text-hover');
              $('.menu-container-data active').remove();
              $('.menu-container-data').remove();
              $("li.active-nivel-1").removeClass('active-nivel-1');
              var  $level = $(this).parent().attr('data-level');
              var  $levelNow = $level;
              var  $dataIdLocal = $(this).parent().attr('data-id');
              if($('.menu-container-data').length == 0){
                $(this).parent().addClass('active-nivel-1');
                var $nextMenu = $(".active-nivel-1").find(".tb-megamenu-column-inner").html();
                $('.region-navigation').prepend("<div class='menu-container-data active level-"+$level+"'><div class='data-menu' style='display: none;'></div><div class='box-black' box-id='"+$dataIdLocal+"' box-level='"+$level+"'><p>" + $(this).text() + "</p></div><div class= 'container-items'>"+$nextMenu+"</div></div>");
                if($nextMenu == undefined){
                  var $nextMenu = $(".active-nivel-1").find(".tb-megamenu-column-inner").html();
                }
                $('.container-items').html($nextMenu);
                if( $('.data-menu .data-level-'+$level).length == 0){
                  $('.data-menu').append('<div class="data-level-'+$level+'"></div>');
                  $('.data-level-'+$level).text($(this).text());
                  $('.data-level-'+$level).attr('data-id', $dataIdLocal);
                }else{
                  $('.data-level-'+$level).text($(this).text());
                  $('.data-level-'+$level).attr('data-id', $dataIdLocal);
                }
                animateLevelNext($level);
                $('.menu-container-data.active .box-black').on('click', function(e){
                  e.preventDefault();
                  var $levelBox = $(this).attr('box-level');
                  var $IdBox = $(this).attr('box-id');
                  var $boxParent = $levelBox-1;
                  if($boxParent ==  0){
                    $('.menu-container-data.level-'+$boxParent).addClass('active');
                    animateLevelPrevious($boxParent,$levelBox);
                  }else{
                    $('.menu-container-data.level-'+$boxParent).addClass('active');
                    animateLevelPrevious($boxParent,$levelBox);
                  }
                });
                childrenEvent(".container-items .dropdown-toggle", 'mobile');
              }
            }
          });
          //Despliege del Guia de Servicios nivel de wrapper-menu-soy.
          $level1TopSoy.on('click',function(e) {
            if($(window).width() < 992) {
              var  $dataId = $(this).parent().attr('data-id');
              $('body').addClass('dark-layer');
              $('.dropdown-toggle').removeClass('text-hover');
              $('.menu-container-data active').remove();
              $('.menu-container-data').remove();
              $("li.active-nivel-1").removeClass('active-nivel-1');
              var $level = $(this).parent().attr('data-level');
              var $levelNow = $level;
              var $dataIdLocal = $(this).parent().attr('data-id');
              if($('.menu-container-data').length == 0){
                $(this).parent().addClass('active-nivel-1');
                var $nextMenu = $(".active-nivel-1").find('.content-nivel-1 .tb-megamenu-column-inner').html()
                $('.region-navigation').prepend("<div class='menu-container-data active level-"+$level+"'><div class='data-menu' style='display: none;'></div><div class='box-black' box-id='"+$dataIdLocal+"' box-level='"+$level+"'><p>" + $(this).text() + "</p></div><div class= 'container-items'>"+$nextMenu+"</div></div>");
                if($nextMenu == undefined){
                  var $nextMenu = $(".active-nivel-1").find(".tb-megamenu-column-inner").html();
                }
                $('.container-items').html($nextMenu);
                animateLevelNext($level);
                $('.menu-container-data.active .box-black').on('click', function(e){
                  e.preventDefault();
                  var $levelBox = $(this).attr('box-level');
                  var $IdBox = $(this).attr('box-id');
                  var $boxParent = $levelBox-1;
                  if($boxParent ==  0){
                    $('.menu-container-data.level-'+$boxParent).addClass('active');
                    animateLevelPrevious($boxParent,$levelBox);
                  }else{
                    $('.menu-container-data.level-'+$boxParent).addClass('active');
                    animateLevelPrevious($boxParent,$levelBox);
                  }
                });
                if( $('.data-menu .data-level-'+$level).length == 0){
                  $('.data-menu').append('<div class="data-level-'+$level+'"></div>');
                  $('.data-level-'+$level).text($(this).text());
                  $('.data-level-'+$level).attr('data-id', $dataIdLocal);
                }else{
                  $('.data-level-'+$level).text($(this).text());
                  $('.data-level-'+$level).attr('data-id', $dataIdLocal);

                }
                childrenEvent(".container-items .dropdown-toggle", 'mobile');
              }
            }
          });
        }
        //Animacion de despliege nivel 2.
        function animateLevelNext($level){
          var $inner = $(".region-navigation .menu-container-data.active.level-"+$level);
          if ($inner.position().left == 0) {
            $inner.animate({left: "-100%"}, 'slide' );
          }else {
            $inner.animate({left:0},'slide');
          }
          $inner.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
          function(e) {
            $(".menu-container-data.level-"+$levelParent).removeClass('active');
          });
        }
        //Animacion de repliege de nivel 2.
        function animateLevelPrevious($level, $levelNow){
          var $inner = $(".region-navigation .menu-container-data.active.level-"+$levelNow);
          $inner.animate({left: "100%"}, "slide" );
          $inner.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
          function(e) {
            $(".menu-container-data.level-"+$levelNow).removeClass('active');
          });
        }
        /*END Functions used for Mobile */

        /*INIT Functions used for hibrid Desktop/Mobile */
        function childrenEvent( $class, $type){
          switch ($type) {
            case 'desktop':
              $($class).on("click", function (e) {
                e.preventDefault();
                var  $level = $(this).parent().attr('data-level');
                var  $levelNow = $level;
                var $dataIdLocal = $(this).parent().attr('data-id');
                if($('.menu-container-data').length == 0){
                  var $nextMenu = $("li[data-id='"+$dataId+"']").find("li[data-id='"+$dataIdLocal+"'] .tb-megamenu-column-inner").html();
                  $(this).parents('.tb-megamenu-column').addClass('active-nivel-1').before("<div class='menu-container-data'><div class='data-menu' style='display: none;'></div><div class='box-black' box-id='"+$dataIdLocal+"' box-level='"+$level+"'><p>" + $(this).text() + "</p></div><div class= 'container-items'>"+$nextMenu+"</div></div>");
                  $('.container-menu-image').toggleClass('active');
                  $(' .box-black').on('click', function(e){
                    e.preventDefault();
                    var $levelBox = $(this).attr('box-level');
                    var $IdBox = $(this).attr('box-id');
                    var $boxParent = $levelBox-1;
                    if($boxParent ==  1){
                      $('.menu-container-data').removeClass('active');
                      $("div.active-nivel-1").removeClass('active-nivel-1');
                      $('.container-items').html('');
                    }else if($boxParent> 1){
                      $boxLabel = $('.data-level-'+$boxParent).text();
                      $('.box-black p').text($boxLabel);
                      $('.box-black').attr('box-level',$boxParent);
                      $levelParent = $('.data-level-'+$boxParent).attr('data-id');
                      var $nextMenu = $(".active-nivel-1").find("li[data-id='"+$levelParent+"'] .tb-megamenu-column-inner").html();
                      $('.container-items').html($nextMenu);
                      childrenEvent(".container-items .dropdown-toggle", "desktop");
                    }
                  });
                }else{
                  $(this).parents('.tb-megamenu-column').addClass('active-nivel-1');
                  var $nextMenu = $(".active-nivel-1").find("li[data-id='"+$dataIdLocal+"'] .tb-megamenu-column-inner").html();
                  $('.container-items').html($nextMenu);
                  $('.box-black').attr('box-level',$level);
                  $('.box-black p').text($(this).text());
                  $('.data-level-'+$level).text($(this).text());
                  $('.data-level-'+$level).attr('data-id', $dataIdLocal);
                }
                if($nextMenu == undefined){
                  var $nextMenu = $(".active-nivel-1").find("li[data-id='"+$dataIdLocal+"'] .tb-megamenu-column-inner").html();
                }
                $('.container-items').html($nextMenu);
                if( $('.data-menu .data-level-'+$level).length == 0){
                  $('.data-menu').append('<div class="data-level-'+$level+'"></div>');
                  $('.data-level-'+$level).text($(this).text());
                  $('.data-level-'+$level).attr('data-id', $dataIdLocal);
                }else{
                  $('.data-level-'+$level).text($(this).text());
                  $('.data-level-'+$level).attr('data-id', $dataIdLocal);

                }
                childrenEvent(".container-items .dropdown-toggle", "desktop");
                $('.menu-container-data').addClass('active');
              });
              /*Init Alter dark layer */
              $('.tb-megamenu-nav.level-0 .level-1.dropdown').mouseover(function(e){
                $('body').addClass('dark-layer');
              });
              $('.tb-megamenu-nav.level-0 .level-1.dropdown').mouseout(function(e){
                $('body').removeClass('dark-layer');
              });
              /*End Alter dark layer */
            break;
            case 'mobile':
              $($class).on("click", function (e) {
                e.preventDefault();
                var $level = $(this).parent().attr('data-level');
                var $levelParent = $level-1;
                var $levelNow = $level;
                var $dataIdLocal = $(this).parent().attr('data-id');
                $(this).parents('.tb-megamenu-column').addClass('active-nivel-1');
                var $nextMenu = $(".active-nivel-1").find("li[data-id='"+$dataIdLocal+"'] .tb-megamenu-column-inner").html();
                if ($level > 0 &&$(".menu-container-data.level-"+$level).length == 0 || $(".menu-container-data.level-"+$level) == undefined){
                  $('.region-navigation').append("<div class='menu-container-data active level-"+$level+"'><div class='data-menu' style='display: none;'></div><div class='box-black' box-id='"+$dataIdLocal+"' box-level='"+$level+"'><p>" + $(this).text() + "</p></div><div class= 'container-items'>"+$nextMenu+"</div></div>");
                  $('.menu-container-data.active.level-'+$level+' .box-black').on('click', function(e){
                    e.preventDefault();
                    var $levelBox = $(this).attr('box-level');
                    var $IdBox = $(this).attr('box-id');
                    var $boxParent = $levelBox-1;
                    if($boxParent ==  0){
                      //$('.menu-container-data.level-'+$levelBox).removeClass('active');
                      $('.menu-container-data.level-'+$boxParent).addClass('active');
                      animateLevelPrevious($boxParent,$levelBox);
                    }else{
                      $('.menu-container-data.level-'+$boxParent).addClass('active');
                      animateLevelPrevious($boxParent,$levelBox);
                    }
                  });
                  animateLevelNext($level);

                }else if($level > 0){
                  $('.menu-container-data level-'+$level).remove();
                  $('.region-navigation').append("<div class='menu-container-data active level-"+$level+"'><div class='data-menu' style='display: none;'></div><div class='box-black' box-id='"+$dataIdLocal+"' box-level='"+$level+"'><p>" + $(this).text() + "</p></div><div class= 'container-items'>"+$nextMenu+"</div></div>");
                  $('.menu-container-data.active.level-'+$level+' .box-black').on('click', function(e){
                    e.preventDefault();
                    var $levelBox = $(this).attr('box-level');
                    var $IdBox = $(this).attr('box-id');
                    var $boxParent = $levelBox-1;
                    if($boxParent ==  0){
                      //$('.menu-container-data.level-'+$levelBox).removeClass('active');
                      $('.menu-container-data.level-'+$boxParent).addClass('active');
                      animateLevelPrevious($boxParent,$levelBox);
                    }else{
                      $('.menu-container-data.level-'+$boxParent).addClass('active');
                      animateLevelPrevious($boxParent,$levelBox);
                    }
                  });
                  animateLevelNext($level);
                }
                childrenEvent(".container-items .dropdown-toggle", "mobile");
                if( $('.data-menu .data-level-'+$level).length == 0){
                  $('.data-menu').append('<div class="data-level-'+$level+'"></div>');
                  $('.data-level-'+$level).text($(this).text());
                  $('.data-level-'+$level).attr('data-id', $dataIdLocal);
                }else{
                  $('.data-level-'+$level).text($(this).text());
                  $('.data-level-'+$level).attr('data-id', $dataIdLocal);

                }
              });
            break;
            default:
            break;
          }
        }
        /*END Functions used for hibrid desktop/mobile */
      });
    }
  }

}(jQuery));