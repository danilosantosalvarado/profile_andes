(function ($, Drupal) {
Drupal.behaviors.LotusBehavior = {
  attach: function (context, settings) {
    
   
    var datos = Drupal.settings.udla_blocks_alter.data_ids;
    if (datos !== null) {
        $.each(datos, function(i, value) {
           var clases = $('.pane-'+value['info_block']).attr('class').split("background-");
           if (clases[1] != null) {
               $('.pane-'+value['info_block']).removeClass('background-'+clases[1].substr(0,6));
               $('.pane-'+value['info_block']).parents(' .panels-ipe-portlet-marker').css({'background': "url("+value['url_img']+") no-repeat", 'background-size': 'cover'});
           }else{
             $('.pane-'+value['info_block']).parents(' .panels-ipe-portlet-marker').css({'background': "url("+value['url_img']+") no-repeat", 'background-size': 'cover'});
           }
        });
    }
    
   
  }
};
})(jQuery, Drupal);
