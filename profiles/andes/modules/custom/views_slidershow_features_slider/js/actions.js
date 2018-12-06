(function ($) {

	if (typeof jQuery.fn.live == 'undefined' || !(jQuery.isFunction(jQuery.fn.live))) {
		jQuery.fn.extend({
			live: function (event, callback) {
				if (this.selector) {
					jQuery(document).on(event, this.selector, callback);
				}
			}
		});
	}
	Drupal.behaviors.request = {
		attach: function (context, settings) {
			jQuery('.views_slidershow_features_slider_main').each(function(){
				var fullId = '#' + $(this).attr('id');
				var settings = Drupal.settings.viewsSlideshowFeatures[fullId];

				var opciones = new Array('pauseOnHover', 'stopOnHover', 'trackerIndividual', 'trackerSummation', 'preload', 'captionBelow');
				for (var i = 0; i < opciones.length; i++) {
					if(settings.options[opciones[i]] == undefined ){
						settings.options[opciones[i]] = false;
					}
				}
				
				var carousel = jQuery(".3d-carousel").featureCarousel(settings.options); 
			})           
		}
	};


}(jQuery));






