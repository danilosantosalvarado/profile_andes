<?php
/**
 * @file
 * beans_types.bean.inc
 */

/**
 * Implements hook_bean_admin_ui_types().
 */
function beans_types_bean_admin_ui_types() {
  $export = array();

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'anuncios';
  $bean_type->label = 'Anuncios';
  $bean_type->options = '';
  $bean_type->description = '';
  $export['anuncios'] = $bean_type;

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'bloque_footer_contacto';
  $bean_type->label = 'Bloque Footer Contacto';
  $bean_type->options = '';
  $bean_type->description = '';
  $export['bloque_footer_contacto'] = $bean_type;

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'ranking_home';
  $bean_type->label = 'Ranking Home';
  $bean_type->options = '';
  $bean_type->description = '';
  $export['ranking_home'] = $bean_type;

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
