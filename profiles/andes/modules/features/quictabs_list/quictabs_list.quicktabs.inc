<?php
/**
 * @file
 * quictabs_list.quicktabs.inc
 */

/**
 * Implements hook_quicktabs_default_quicktabs().
 */
function quictabs_list_quicktabs_default_quicktabs() {
  $export = array();

  $quicktabs = new stdClass();
  $quicktabs->disabled = FALSE; /* Edit this to true to make a default quicktabs disabled initially */
  $quicktabs->api_version = 1;
  $quicktabs->machine_name = 'quicktabs_especiales';
  $quicktabs->ajax = 0;
  $quicktabs->hide_empty_tabs = FALSE;
  $quicktabs->default_tab = 0;
  $quicktabs->title = 'Quicktabs Especiales';
  $quicktabs->tabs = array(
    0 => array(
      'vid' => 'componente_especiales',
      'display' => 'especiales_recientes',
      'args' => '',
      'use_title' => 0,
      'title' => 'Recientes',
      'weight' => '-100',
      'type' => 'view',
    ),
    1 => array(
      'vid' => 'componente_especiales',
      'display' => 'especiales_visitas',
      'args' => '',
      'use_title' => 0,
      'title' => 'Más Vistas',
      'weight' => '-99',
      'type' => 'view',
    ),
  );
  $quicktabs->renderer = 'quicktabs';
  $quicktabs->style = 'default';
  $quicktabs->options = array();

  // Translatables
  // Included for use with string extractors like potx.
  t('Más Vistas');
  t('Quicktabs Especiales');
  t('Recientes');

  $export['quicktabs_especiales'] = $quicktabs;

  return $export;
}
