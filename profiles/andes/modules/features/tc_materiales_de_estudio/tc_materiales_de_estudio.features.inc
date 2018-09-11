<?php
/**
 * @file
 * tc_materiales_de_estudio.features.inc
 */

/**
 * Implements hook_node_info().
 */
function tc_materiales_de_estudio_node_info() {
  $items = array(
    'materiales_de_estudio' => array(
      'name' => t('Materiales de Estudio'),
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
