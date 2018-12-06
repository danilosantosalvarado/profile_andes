<?php
/**
 * @file
 * udla_footer_block_contact_bean.ds.inc
 */

/**
 * Implements hook_ds_layout_settings_info().
 */
function udla_footer_block_contact_bean_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'bean|bloque_footer_contacto|default';
  $ds_layout->entity_type = 'bean';
  $ds_layout->bundle = 'bloque_footer_contacto';
  $ds_layout->view_mode = 'default';
  $ds_layout->layout = 'ds_2col_stacked';
  $ds_layout->settings = array(
    'regions' => array(
      'header' => array(
        0 => 'field_imagen',
        1 => 'field_image_sublogo',
      ),
      'left' => array(
        2 => 'field_direccion',
        3 => 'field_ciudad_pais',
        4 => 'field_zipcode',
      ),
      'right' => array(
        5 => 'field_telefono',
      ),
    ),
    'fields' => array(
      'field_imagen' => 'header',
      'field_image_sublogo' => 'header',
      'field_direccion' => 'left',
      'field_ciudad_pais' => 'left',
      'field_zipcode' => 'left',
      'field_telefono' => 'right',
    ),
    'classes' => array(),
    'wrappers' => array(
      'header' => 'div',
      'left' => 'div',
      'right' => 'div',
      'footer' => 'div',
    ),
    'layout_wrapper' => 'div',
    'layout_attributes' => '',
    'layout_attributes_merge' => 1,
    'layout_link_attribute' => '',
    'layout_link_custom' => '',
    'layout_disable_css' => 0,
  );
  $export['bean|bloque_footer_contacto|default'] = $ds_layout;

  return $export;
}
