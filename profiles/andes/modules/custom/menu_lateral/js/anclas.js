(function ($) {

	$( window ).on( "ready", function() {
		var atributo = [];
		$(".menu-lateral").each(function(){
			var html = $(this).attr('id');
			var html = html.replace("-"," ");			

			atributo.push('<li class="seccions"><a href="#'+$(this).attr('id')+'"><div><p class="seccion-text">'+html+'</p></div></a></li>');
  		   
		});

		for (var i = atributo.length - 1; i >= 0; i--) {
			$("#render-menu-lateral").prepend(atributo[i]);
		}
		
		$("#render-menu-lateral").append('<li class="l-chat"> <a href=""> <div> <p class="seccions"> Chat </p> </div></a></li>');


		// on-click

		$(function(){
		     $('a[href*=#]').click(function() {
				$("#render-menu-lateral li").removeClass("a-active");
				$(this).parent().addClass('a-active')
		     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		         && location.hostname == this.hostname) {
		             var $target = $(this.hash);
		         	$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
		             if ($target.length) {
		                 var targetOffset = $target.offset().top;
		                 $('html,body').animate({scrollTop: targetOffset}, 2000);
		                 return false;
		            }
		       }
		   });
		});

    });





}(jQuery));
