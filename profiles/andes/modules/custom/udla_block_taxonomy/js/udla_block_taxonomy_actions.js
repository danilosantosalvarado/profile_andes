(function ($) {
	Drupal.behaviors.request = {
		attach: function (context, settings) {
      $('.first-item-form').html('');
      $('.level-li-active').parents('section').removeClass('level-container-disable');
      $('.level-li-active').parents('div.box-container').removeClass('level-box-disable');
      $('.children-active').parents('section').removeClass('level-container-disable');
      $('.children-active').parents('section').removeClass('level-box-disable');
      $('.level-li-active').parents('section').addClass('level-container-active');
      $('.level-li-active').parents('div.box-container').addClass('level-box-active');
      $('.children-active').parents('div.box-container').addClass('level-box-active');

      
      $('.item-level').on('click',function(e){
        e.preventDefault();
        console.log(window.location.href);
        tid = $(this).attr('itemid');
        $.redirectPost(window.location.pathname, {itemid: tid});
      });        
      $.extend(
        {
            redirectPost: function(location, args)
            {
                location = location.replace("#","");
                var form = '';
                $.each( args, function( key, value ) {
                    form += '<input type="hidden" name="'+key+'" value="'+value+'">';
                });
                $('<form class="first-item-form" action="'+location+'" method="POST">'+form+'</form>').appendTo('body').submit();
            }
        });
		}
	};


}(jQuery));






