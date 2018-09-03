<?php
/**
 * @file
 * tc_layouts.features.inc
 */

/**
 * Implements hook_node_info().
 */
function tc_layouts_node_info() {
  $items = array(
    'layouts' => array(
      'name' => t('Layouts'),
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
