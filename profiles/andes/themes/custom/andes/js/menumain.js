(function ($) {
  Drupal.behaviors.menuMain = {
    attach: function (context, settings) {
      /* ----| Select clone of language change |----*/
      $(window).resize(function(event) {
        //$('.level-1').addClass('open');
        if ($(window).width() > 992) {
          menu = $('.navbar-header');
          menu.addClass(Drupal.settings.udla_blocks_alter.background_color_change);
        }else{
          // data-target=".nav-collapse"
        }
        resizeGoToInstitucional();
      });
      function resizeGoToInstitucional(){
        if($('.tb-megamenu-menu-menu-top-soy .level-0 li.level-1').length && ($(window).width() > 992 && $(window).width()< 1200)){
          $('.wrapper-menu-soy .container section').last().addClass('hidden');
        }else{
          $('.wrapper-menu-soy .container section').last().removeClass('hidden');
        }
      }
      $('#google-cse-results-searchbox-form input').attr('placeholder', Drupal.t('Buscar'));
      $('#google-cse-results-searchbox-form').keypress(function(e) {
        //e.preventDefault();
        if(e.which == 13) {
          $('#google-cse-results-searchbox-form #edit-query').val();
          window.location = Drupal.settings.basePath+Drupal.settings.pathPrefix + "search/google/"+$('#google-cse-results-searchbox-form #edit-query').val();
        }
      });
      function clone_select(){
        $select = $('.lang_dropdown_form select');
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
      }
      /* ----| End Select clone of language change |----*/
      var docWidth = $(document).width(),
      $dataId = 0,
      $levelNow = 0,
      $level1 = $('.tb-megamenu-menu-mega-menu .always-show ul.level-0 > li.level-1 > a'),
      $level1TopSoy = $('.tb-megamenu-menu-menu-top-soy .always-show ul.level-0 > li.level-1 > a'),
      $itemsNivel2 = $('.tb-megamenu-item.level-2.dropdown-submenu a.dropdown-toggle');
      /* wrapper para area segura  */
      $(".menu-soy-1").wrapAll("<div class='wrapper-menu-soy' />");
      $(".mega-menu-2").wrapAll("<div class='wrapper-mega-menu' />");
      $(".menu-buscar").wrapAll("<div class='wrapper-buscar-menu' />");
      $(".wrapper-menu-soy .menu-soy-1").wrapAll("<div class='container' />");
      $(".wrapper-mega-menu .mega-menu-2").wrapAll("<div class='container' />");
      $(".wrapper-buscar-menu .menu-buscar").wrapAll("<div class='container' />");

      /* Scroll menu cambio de color */
      $(window).scroll(function (event) {
        let scroll = $(window).scrollTop(),
            menu = $('.wrapper-mega-menu');
        if ( Drupal.settings.udla_blocks_alter !== undefined) {
          Drupal.settings.udla_blocks_alter.background_color = (Drupal.settings.udla_blocks_alter.background_color !== undefined) ? Drupal.settings.udla_blocks_alter.background_color : "";
          Drupal.settings.udla_blocks_alter.background_color_change = (Drupal.settings.udla_blocks_alter.background_color_change !== undefined )? Drupal.settings.udla_blocks_alter.background_color_change : "";
          if($(window).width() < 992){

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
      });

       /* hover finalizar las animaciones*/
       if (docWidth > 992) {
        var $menu_admin = ($('#admin-menu').length > 0) ? $('#admin-menu').height() : 0 ;
        var $menuTopSoy = ($('.region-navigation .wrapper-mega-menu ').length > 0  ) ? $('.region-navigation .wrapper-mega-menu').height() : 0 ;
        var $menuMegaMenu = ($('.region-navigation .wrapper-menu-soy').length > 0  ) ? $('.region-navigation .wrapper-menu-soy').height() : 0 ;
        $height_menu = $menu_admin+$menuTopSoy+$menuMegaMenu;
        $('body > .container-fluid.main-container').css({'margin-top': ($height_menu)});

        /*  add buscador */
        if (!$('.mega-menu-2').hasClass('barra-buscar')) {
          $('.wrapper-mega-menu .nav-collapse').parent().append('<div class="barra-buscar mega-menu-2"><span>Cerrar</span></div>');
          $('.wrapper-buscar-menu').hide();
          $(".barra-buscar").click(function () {
            $(this).toggleClass('icon-close');
            $('.wrapper-buscar-menu').toggleClass('active');
            $('#google-cse-results-searchbox-form input').attr('placeholder', 'Buscar');
            $('#block-google-cse-google-cse').toggleClass("buscador-open");
            if(jQuery('.buscador-open').length > 0){
              $('.wrapper-buscar-menu').slideDown('slow');
            }else{
              $('.wrapper-buscar-menu').slideUp('slow');
            }
          });
        }
        clone_select();
        $level1.hover(
          function () {
            $dataId = $(this).parent().attr('data-id');
            // $('body').addClass('dark-layer');
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
        $('.container-menu-image').parents('.tb-megamenu-column').addClass('content-img').siblings('.tb-megamenu-column').addClass('content-nivel-1');
        childrenEvent(".tb-megamenu-column .dropdown-toggle");

        function childrenEvent( $class){
          $($class).on("click", function (e) {
            e.preventDefault();
            $level = $(this).parent().attr('data-level');
            $levelNow = $level;
            $dataIdLocal = $(this).parent().attr('data-id');
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
                  childrenEvent(".container-items .dropdown-toggle");
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
            childrenEvent(".container-items .dropdown-toggle");
            $('.menu-container-data').addClass('active');
          });
        }
      }else{
        $('.navbar-toggle').attr('data-target', '#navbar-collapse, .nav-collapse');
        $('.menuIstance-processed').css('display','none');

        //$('#navbar-collapse .nav-collapse').css('top',90);
        $('.container-menu-image').parents('.tb-megamenu-column').addClass('content-img').siblings('.tb-megamenu-column').addClass('content-nivel-1');
        $level1.on('click',
          function (e) {
            e.preventDefault();
            $dataId = $(this).parent().attr('data-id');
            $('body').addClass('dark-layer');
            $('.dropdown-toggle').removeClass('text-hover');
            $('.menu-container-data active').remove();
            $('.menu-container-data').remove();
            $("li.active-nivel-1").removeClass('active-nivel-1');
            $level = $(this).parent().attr('data-level');
            $levelNow = $level;
            $dataIdLocal = $(this).parent().attr('data-id');
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
              childrenEvent(".container-items .dropdown-toggle");

            }
          }
        );
        $level1TopSoy.on('click',function(e){
          e.preventDefault();
          $dataId = $(this).parent().attr('data-id');
          $('body').addClass('dark-layer');
          $('.dropdown-toggle').removeClass('text-hover');
          $('.menu-container-data active').remove();
          $('.menu-container-data').remove();
          $("li.active-nivel-1").removeClass('active-nivel-1');
          $level = $(this).parent().attr('data-level');
          $levelNow = $level;
          $dataIdLocal = $(this).parent().attr('data-id');
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
            childrenEvent(".container-items .dropdown-toggle");
          }
        });
        // childrenEvent(".tb-megamenu-nav .dropdown-toggle");
        function childrenEvent( $class){
          $($class).on("click", function (e) {
            e.preventDefault();
            $level = $(this).parent().attr('data-level');
            $levelParent = $level-1;
            $levelNow = $level;
            $dataIdLocal = $(this).parent().attr('data-id');
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
            childrenEvent(".container-items .dropdown-toggle");
            if( $('.data-menu .data-level-'+$level).length == 0){
              $('.data-menu').append('<div class="data-level-'+$level+'"></div>');
              $('.data-level-'+$level).text($(this).text());
              $('.data-level-'+$level).attr('data-id', $dataIdLocal);
            }else{
              $('.data-level-'+$level).text($(this).text());
              $('.data-level-'+$level).attr('data-id', $dataIdLocal);

            }
          });
        }
        var contentLength = $('.region-navigation .wrapper-mega-menu .view-id-logos_header .view-content div.views-row').length;
        if(contentLength == 1){
          $('.navbar-header button').wrapAll("<div class='wrapper-header-color' />");
          var content = $('.region-navigation .wrapper-mega-menu .view-id-logos_header .view-content .views-row .field-content').html();
          $('.wrapper-header-color').prepend(content);
        }else if(contentLength == 2){
          $('.navbar-header button').wrapAll("<div class='wrapper-header-color' />");
          var content = $('.region-navigation .wrapper-mega-menu .view-id-logos_header .view-content .field-content').first().html();
          $('.wrapper-header-color').prepend(content);
          $('.navbar-header').prepend("<div class='wrapper-header-up' />");
          var contentb = $('.region-navigation .wrapper-mega-menu .view-id-logos_header .view-content .views-row .field-content').last().html();
          $('.wrapper-header-up').prepend(contentb);
        }
        $selectTopSoyItems =$('.wrapper-menu-soy li.level-1').not('.dropdown').not('.menu-destacado');
        $secondSelect = $('#block-lang-dropdown-language');
        $('.wrapper-menu-soy').append('<div class="container-select-language"><span class="title-language">'+Drupal.t($secondSelect.find('.block-title').text())+'</span>'+$secondSelect.find('form').parent().html()+'</div>');

        $.each( $selectTopSoyItems, function( k, v ) {
          console.log(k);
          $element = $(this).find('a');
          if(k == 0){
            $('.wrapper-menu-soy').append('<div class="container-select-top-soy"><span class="title-top-soy">'+Drupal.t($element.text())+'</span><select class="select-top-soy"><option value="">'+Drupal.t('Elegir')+'</option></select></div>');
          }else{
            $('.select-top-soy').append($('<option>', {value: $element.attr('href'), text: $element.text()}));
          }
        });
        if($('.select-top-soy').length > 0){
          $('.select-top-soy').on('change',function(){
            window.location.replace(Drupal.t(this.value));
          });
        }
        $('.container-select-language select').on('change', function(){
          $(this).parents('form').submit();
        });
        $selectDestacadosItems =$('.wrapper-menu-soy li.level-1.menu-destacado');
        $.each( $selectDestacadosItems, function( k, v ) {
          console.log(k);
          console.log($(this));
          if(k == 0){
          $('.wrapper-menu-soy').append('<div class="container-destacados"><div class="menu-destacado">'+$(this).html()+'</div></div>');
          }else{
          $('.container-destacados').append('<div class="menu-destacado">'+$(this).html()+"</div>");
          }
        });
      }
      resizeGoToInstitucional();
      function animateLevelNext($level){
          $inner = $(".region-navigation .menu-container-data.active.level-"+$level);
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
      function animateLevelPrevious($level, $levelNow){
        $inner = $(".region-navigation .menu-container-data.active.level-"+$levelNow);
        $inner.animate({left: "100%"}, "slide" );
        $inner.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function(e) {
          $(".menu-container-data.level-"+$levelNow).removeClass('active');
        });
    }
    // $height_menu = $('.navbar-header').outerHeight();
    // $height_menu_desktop = $('.navbar-collapse .region-navigation .wrapper-menu-soy').outerHeight() + $('.navbar-collapse .region-navigation .wrapper-mega-menu').outerHeight();
    // $('#navbar-collapse').css({'top': $height_menu});
    // $('body > .container-fluid.main-container').css({'margin-top': $height_menu_desktop });
    $('.navbar-toggle').on('click',function(){
        $('body').toggleClass('active-menu');
        if($(this).attr('aria-expanded') == undefined || $(this).attr('aria-expanded') == false){
          $(this).attr('aria-expanded',true);
        }else{
          $(this).attr('aria-expanded',false);
          // $('#navbar-collapse').css({'top': ''});
        }
      });
    }
  }

}(jQuery));