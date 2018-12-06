(function ($) {
  Drupal.behaviors.socialshare = {
    attach: function (context, settings) {

        // Share Facebook 
        $('.social-item-fb').click(function(event) {
          var win=window.open('https://www.facebook.com/sharer/sharer.php?u='+document.URL,'facebook-share-dialog','width=626,height=436');
          return win
        });
        // Share twitter
        $('.social-item-tw').click(function(event) {
          var win=window.open('https://twitter.com/share?u='+document.URL,'Twitter-share','width=626,height=436');
          return win
        });
        // Share linkedin
        $('.social-item-lnk').click(function(event) {
          var win=window.open('https://www.linkedin.com/shareArticle?mini=true&url='+document.URL,'linkedin-Share','width=626,height=436');
          return win
        });
        // Share google +
        $('.social-item-gm').click(function(event) {
          var win=window.open('https://plus.google.com/share?url='+document.URL,'Google-Plus-Share','width=626,height=436');
          return win
        });
        
      }
    }
  
}(jQuery));
