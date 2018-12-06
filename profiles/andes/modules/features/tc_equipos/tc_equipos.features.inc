<?php
/**
 * @file
 * tc_equipos.features.inc
 */

/**
 * Implements hook_node_info().
 */
function tc_equipos_node_info() {
  $items = array(
    'equipo_de_trabajo' => array(
      'name' => t('Equipo de trabajo'),
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
