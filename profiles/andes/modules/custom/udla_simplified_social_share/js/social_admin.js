(function ($) {
  Drupal.behaviors.socialAdmin = {
    attach: function (context, settings) {
      $data_svg = {};
      $data_svg.fb = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>facebook</title><path fill="#fff" d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path></svg>';
      $data_svg.tw = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>twitter</title><path fill="#fff" d="M32.003 6.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path></svg>';
      $data_svg.gm = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>google-plus</title><path fill="#fff" d="M10.181 14.547v3.494h5.775c-0.231 1.5-1.744 4.394-5.775 4.394-3.475 0-6.313-2.881-6.313-6.431s2.838-6.431 6.313-6.431c1.981 0 3.3 0.844 4.056 1.569l2.762-2.662c-1.775-1.656-4.075-2.662-6.819-2.662-5.631 0.006-10.181 4.556-10.181 10.188s4.55 10.181 10.181 10.181c5.875 0 9.775-4.131 9.775-9.95 0-0.669-0.075-1.181-0.163-1.688h-9.613z"></path><path fill="#fff" d="M32 14.253h-3v-3h-3v3h-3v3h3v3h3v-3h3z"></path></svg>';
      $data_svg.lnk = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>linkedin2</title><path fill="#fff" d="M12 11h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z"></path><path fill="#fff" d="M2 11h6v18h-6v-18z"></path><path fill="#fff" d="M8 6c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path></svg>';


      $.each( settings.social_share, function( key, value ) {
        if(value !=0){
          $('.social-network-list').append(
            $('<li class="social-item-'+value+'">').append(
              $data_svg[value]
            )
          );
        }
      });
      $('#edit-social-network input').on('click',function(){
         var value = $(this).val();
        if($('.social-network-list li.social-item-'+$(this).val()).length > 0){
          $('.social-network-list li.social-item-'+$(this).val()).remove();
        }else{
          $('.social-network-list').append(
            $('<li class="social-item-'+$(this).val()+'">').append(
              $data_svg[value]
              // $('<a>').attr('href','/user/messages').append(
              //     $('<span>').attr('class', 'tab').append("Message center")
              // )
            )
          );
        };
      });
    }
  }
}(jQuery));