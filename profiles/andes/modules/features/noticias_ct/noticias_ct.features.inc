<?php
/**
 * @file
 * noticias_ct.features.inc
 */

/**
 * Implements hook_node_info().
 */
function noticias_ct_node_info() {
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
