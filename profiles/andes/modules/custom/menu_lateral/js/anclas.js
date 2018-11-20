(function ($) {

	$( window ).on( "ready", function() {
		var atributo = [];
		var itemsPositionTop = [];
		var itemsPositionEnd= [];
		var idPosition = [];
		$(".menu-lateral").each(function(){
			var html = $(this).attr('id');
			var html = html.replace("-"," ");
			atributo.push('<li class="seccions"><a href="#'+$(this).attr('id')+'"><div><p class="seccion-text">'+Drupal.t(html)+'</p></div></a></li>');
			itemsPositionTop.push($(this).position().top);
			itemsPositionEnd.push($(this)[0].scrollHeight);
			idPosition.push($(this).attr('id'));
		});

		$(window).scroll(function (event) {
			var scroll = $(window).scrollTop();
			$('ul#render-menu-lateral li').removeClass('a-active');
			var $menu_admin = ($('#admin-menu').length > 0) ? $('#admin-menu').height() : 0 ;
			var $menu_navigation = ($('.region-navigation').length > 0  ) ? $('.region-navigation').height() : 0 ;
			$.each( itemsPositionTop, function( key, value ) {
				if (scroll >= value-$menu_navigation-$menu_admin && scroll <= (value+itemsPositionEnd[key]-$menu_navigation-$menu_admin)) {
					$('ul#render-menu-lateral li').eq(key).addClass('a-active');
				}
			});
		});
		for (var i = atributo.length - 1; i >= 0; i--) {
			$("#render-menu-lateral").prepend(atributo[i]);
		}

		$("#render-menu-lateral").append('<li class="l-chat"> <a href=""> <div> <p class="seccions"> Chat </p> </div></a></li>');


		// on-click

		$(function(){
			$('#render-menu-lateral a[href*=#]').click(function(e) {
				e.preventDefault();
				$("#render-menu-lateral li").removeClass("a-active");
				$(this).parent().addClass('a-active')
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		         && location.hostname == this.hostname) {
					var $target = $(this.hash);
					var $menu_admin = ($('#admin-menu').length > 0) ? $('#admin-menu').height() : 0 ;
					var $menu_navigation = ($('.region-navigation').length > 0  ) ? $('.region-navigation').height() : 0 ;
					$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
					if ($target.length) {
						var targetOffset = $target.offset().top-$menu_admin -  $menu_navigation;
						$('html,body').animate({scrollTop: targetOffset}, 2000);
						return false;
					}
				}
		   });
		});
	});
}(jQuery));
