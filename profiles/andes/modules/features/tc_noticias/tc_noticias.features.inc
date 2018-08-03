<?php
/**
 * @file
 * tc_noticias.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function tc_noticias_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "page_manager" && $api == "pages_default") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function tc_noticias_node_info() {
  $items = array(
    'noticias' => array(
      'name' => t('Noticias'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Título'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
