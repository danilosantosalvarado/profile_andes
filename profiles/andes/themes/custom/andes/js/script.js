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

}(jQuery));


