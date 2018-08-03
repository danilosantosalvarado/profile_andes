<?php
/**
 * @file
 * block_slider_homes.bean.inc
 */

/**
 * Implements hook_bean_admin_ui_types().
 */
function block_slider_homes_bean_admin_ui_types() {
  $export = array();

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'sliders_homes';
  $bean_type->label = 'Sliders Homes';
  $bean_type->options = '';
  $bean_type->description = '';
  $export['sliders_homes'] = $bean_type;

  return $export;
}
