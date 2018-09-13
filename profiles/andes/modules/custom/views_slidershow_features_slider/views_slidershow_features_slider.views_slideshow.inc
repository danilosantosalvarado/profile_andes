<?php

/**
 * @file
 * Views Slideshow hook implementations.
 */

/**
 * Implements hook_views_slideshow_slideshow_info().
 */
function views_slidershow_features_slider_views_slideshow_slideshow_info() {
  $options = array(
    'views_slidershow_features_slider' => array(
      'name' => t('Feature Carousel'),
      'accepts' => array(
        'goToSlide',
        'nextSlide',
        'pause',
        'play',
        'previousSlide',
      ),
      'calls' => array(
        'transitionBegin',
        'transitionEnd',
        'goToSlide',
        'pause',
        'play',
        'nextSlide',
        'previousSlide',
      ),
    ),
  );

  // @todo figure out which options to add

  return $options;
}

/**
 * Implements hook_views_slideshow_option_definition().
 */
function views_slidershow_features_slider_views_slideshow_option_definition() {
  // Default options for Feature Carousel
  $options['views_slidershow_features_slider'] = array(
    'contains' => array(
      'largeFeatureWidth' => array('default' => 0),
      'largeFeatureHeight' => array('default' => 0),
      'smallFeatureWidth' => array('default' => .5),
      'smallFeatureHeight' => array('default' => .5),
      'topPadding' => array('default' => 15),
      'sidePadding' => array('default' => 20),
      'smallFeatureOffset' => array('default' => 30),
      'startingFeature' => array('default' => 1),
      'carouselSpeed' => array('default' => 1000),
      'autoPlay' => array('default' => 50),
      'pauseOnHover' => array('default' => true),
      'stopOnHover' => array('default' => false),
      'trackerIndividual' => array('default' => false),
      'trackerSummation' => array('default' => false),
      'preload' => array('default' => true),
      'displayCutoff' => array('default' => 0),
      'animationEasing' => array('default' => 'swing'),
      'leftButtonTag' => array('default' => '.carousel-left'),
      'rightButtonTag' => array('default' => '.carousel-right'),
      'captionBelow' => array('default' => false),
    ),
  );

  return $options;
}

// /**
//  * Implements hook_init().
//  */
// function views_slidershow_features_slider_views_slideshow_init($options) {
//   dpm($options);
//   // drupal_add_js(array('tbwa' => array('name' => 'juan')), array('type' => 'setting'));
//   // drupal_add_js(drupal_get_path('module', 'tbwa') . '/js/script.js');
// }

function _views_slidershow_features_slider_validate_integer_non_negative($element, &$form_state) {
  $value = $element['#value'];
  if ($value !== '' && (!is_numeric($value) || $value < 0)) {
    // || intval($value) != $value
    form_error($element, t('%name must be a non-negative integer.', array('%name' => $element['#title'])));
  }
}

function _views_slidershow_features_slider_validate_directions($element, &$form_state) {
  $value = $element['#value'];
  $directions = array('horizontal', 'vertical');
  if (!in_array($value, $directions)) {
    form_error($element, t('%name must be either %dirs.', array(
      '%name' => $element['#title'],
      '%dirs' => "'" . implode("' or '", $directions) . "'",
    )));
  }
}

/**
 * Configuration form within the Views Slideshow settings pane
 */
function views_slidershow_features_slider_views_slideshow_slideshow_type_form(&$form, &$form_state, &$view) {
  // For a full list of options
  // @see https://www.tbwacolombia.com

  $form['views_slidershow_features_slider']['largeFeatureWidth'] = array(
    '#type' => 'textfield',
    '#element_validate' => array('_views_slidershow_features_slider_validate_integer_non_negative'),
    '#description' => t(''),
  );
  $form['views_slidershow_features_slider']['largeFeatureHeight'] = array(
    '#type' => 'textfield',
    '#element_validate' => array('_views_slidershow_features_slider_validate_integer_non_negative'),
    '#description' => t(''),
  );
  $form['views_slidershow_features_slider']['smallFeatureWidth'] = array(
    '#type' => 'textfield',
    '#element_validate' => array('_views_slidershow_features_slider_validate_integer_non_negative'),
    '#description' => t(''),
  );
  $form['views_slidershow_features_slider']['smallFeatureHeight'] = array(
    '#type' => 'textfield',
    '#element_validate' => array('_views_slidershow_features_slider_validate_integer_non_negative'),
    '#description' => t(''),
  );
  $form['views_slidershow_features_slider']['topPadding'] = array(
    '#type' => 'textfield',
    '#element_validate' => array('element_validate_integer_positive'),
    '#description' => t('how much to pad the top of the carousel'),
  );
  $form['views_slidershow_features_slider']['sidePadding'] = array(
    '#type' => 'textfield',
    '#element_validate' => array('element_validate_integer_positive'),
    '#description' => t('spacing between the sides of the container'),
  );
  $form['views_slidershow_features_slider']['smallFeatureOffset'] = array(
    '#type' => 'textfield',
    '#element_validate' => array('element_validate_integer_positive'),
    '#description' => t('the additional offset to pad the side features from the top of the carousel'),
  );
  $form['views_slidershow_features_slider']['startingFeature'] = array(
    '#type' => 'textfield',
    '#element_validate' => array('element_validate_integer_positive'),
    '#description' => t('indicates which feature to start the carousel at'),
  );
  $form['views_slidershow_features_slider']['carouselSpeed'] = array(
    '#type' => 'textfield',
    '#element_validate' => array('element_validate_integer_positive'),
    '#description' => t('speed in milliseconds it takes to rotate the carousel'),
  );
  $form['views_slidershow_features_slider']['autoPlay'] = array(
    '#type' => 'textfield',
    '#element_validate' => array('element_validate_integer_positive'),
    '#description' => t('time in milliseconds to set interval to autorotate the carousel set to zero to disable it, negative to go left'),
  );
  $form['views_slidershow_features_slider']['pauseOnHover'] = array(
    '#type' => 'checkbox',
    '#description' => t("with autoplay enabled, set this option to true to have the carousel pause rotating when a user hovers over any feature"),
  );
  $form['views_slidershow_features_slider']['stopOnHover'] = array(
    '#type' => 'checkbox',
    '#description' => t("with autoplay enabled, set this option to completely stop the autorotate functionality when a user hovers over any feature"),
  );
  $form['views_slidershow_features_slider']['trackerIndividual'] = array(
    '#type' => 'checkbox',
    '#description' => t("numbered blips can appear and be used to track the currently centered feature, as well as allow the user to click a number to move to that feature. Set to false to not process these at all and true to process and display them"),
  );
  $form['views_slidershow_features_slider']['trackerSummation'] = array(
    '#type' => 'checkbox',
    '#description' => t("a summation of the features can also be used to display an x Of y style of tracking this can be combined with the above option as well"),
  );
  $form['views_slidershow_features_slider']['preload'] = array(
    '#type' => 'checkbox',
    '#description' => t("true to preload all images in the carousel before displaying anything. If this is set to false, you will probably need to set a fixed width/height to prevent strangeness"),
  );
  $form['views_slidershow_features_slider']['displayCutoff'] = array(
    '#type' => 'textfield',
    '#element_validate' => array('_views_slidershow_features_slider_validate_integer_non_negative'),
    '#description' => t('Will only display this many features in the carousel set to zero to disable'),
  );
  $form['views_slidershow_features_slider']['animationEasing'] = array(
    '#type' => 'textfield',
    '#description' => t('an easing can be specified for the animation of the carousel'),
  );
  $form['views_slidershow_features_slider']['leftButtonTag'] = array(
    '#type' => 'textfield',
    '#description' => t('selector for the left arrow of the carousel'),
  );
  $form['views_slidershow_features_slider']['rightButtonTag'] = array(
    '#type' => 'textfield',
    '#description' => t('selector for the right arrow of the carousel'),
  );
  $form['views_slidershow_features_slider']['captionBelow'] = array(
    '#type' => 'checkbox',
    '#description' => t('display captions below the image instead of on top'),
  );

  $options = views_slidershow_features_slider_views_slideshow_option_definition()['views_slidershow_features_slider']['contains'];
  foreach (array_keys($options) as $key) {
    $title = ucfirst(strtolower(preg_replace('/([A-Z])/', ' $1', $key)));
    $current = $view->options['views_slidershow_features_slider'][$key];
    $default = $options[$key]['default'];
    $form['views_slidershow_features_slider'][$key]['#title'] = $title;
    $form['views_slidershow_features_slider'][$key]['#default_value'] = (!isset($current) || is_null($current)) ? $default : $current;
  }
}

/**
 * Implements hook_views_slideshow_options_form_validate().
 */
function views_slidershow_features_slider_views_slideshow_options_form_validate(&$form, &$form_state, &$view) {
  _views_slidershow_features_slider_remove_default_values($form_state['values']['style_options']['views_slidershow_features_slider']);
}

function _views_slidershow_features_slider_remove_default_values(&$values) {
  // Get default values.
  $default_values = views_slidershow_features_slider_views_slideshow_option_definition()['views_slidershow_features_slider']['contains'];
  foreach ($values as $key => $value) {
    // Check if default value exists for current key.
    if (isset($default_values[$key]) && isset($default_values[$key]['default'])) {
      $default_value = $default_values[$key]['default'];
      // Typecast user-inputted value to default value's type for same-type equality comparison.
      settype($value, gettype($default_value));
      if ($value === $default_value) {
        // Unset user-inputted value if it is the same as the default value.
        unset($values[$key]);
      }
    }
  }
  return $values;
}
