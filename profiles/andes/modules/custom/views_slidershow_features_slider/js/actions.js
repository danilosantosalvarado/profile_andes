(function ($) {
	Drupal.behaviors.request = {
	    attach: function (context, settings) {
            console.log(Drupal.settings.tbwa.defecto.startingFeature.default);
            var carousel = jQuery(".3d-carousel").featureCarousel({     
                // largeFeatureWidth:500,
                // smallFeatureWidth:300,
                // largeFeatureHeight:300,
                // smallFeatureHeight:300,	     
                // sidePadding:150,
                // autoPlay:50,
                    
                largeFeatureWidth:Drupal.settings.tbwa.defecto.largeFeatureWidth.default, 
                largeFeatureHeight:Drupal.settings.tbwa.defecto.largeFeatureHeight.default, 
                smallFeatureWidth:Drupal.settings.tbwa.defecto.smallFeatureWidth.default,
                smallFeatureHeight:Drupal.settings.tbwa.defecto.smallFeatureHeight.default,
                topPadding:Drupal.settings.tbwa.defecto.topPadding.default,
                sidePadding:Drupal.settings.tbwa.defecto.sidePadding.default,
                smallFeatureOffset:Drupal.settings.tbwa.defecto.smallFeatureOffset.default,
                startingFeature:Drupal.settings.tbwa.defecto.startingFeature.default,
                carouselSpeed:Drupal.settings.tbwa.defecto.carouselSpeed.default,
                autoPlay:Drupal.settings.tbwa.defecto.autoPlay.default,
                pauseOnHover:Drupal.settings.tbwa.defecto.pauseOnHover.default,
                stopOnHover:Drupal.settings.tbwa.defecto.stopOnHover.default,
                trackerIndividual:Drupal.settings.tbwa.defecto.trackerIndividual.default, 
                trackerSummation:Drupal.settings.tbwa.defecto.trackerSummation.default,
                preload:Drupal.settings.tbwa.defecto.preload.default,
                displayCutoff:Drupal.settings.tbwa.defecto.displayCutoff.default,
                animationEasing:Drupal.settings.tbwa.defecto.animationEasing.default,
                leftButtonTag:Drupal.settings.tbwa.defecto.leftButtonTag.default,
                rightButtonTag:Drupal.settings.tbwa.defecto.rightButtonTag.default,
                captionBelow:Drupal.settings.tbwa.defecto.captionBelow.default,
                
            });
           
		}
    };


}(jQuery));






