<?php
/**
 * @file
 * tc_eventos.features.inc
 */

/**
 * Implements hook_node_info().
 */
function tc_eventos_node_info() {
  $items = array(
    'eventos' => array(
      'name' => t('Eventos'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
