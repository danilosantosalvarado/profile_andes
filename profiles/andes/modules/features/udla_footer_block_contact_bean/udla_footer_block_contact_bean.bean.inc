<?php
/**
 * @file
 * udla_footer_block_contact_bean.bean.inc
 */

/**
 * Implements hook_bean_admin_ui_types().
 */
function udla_footer_block_contact_bean_bean_admin_ui_types() {
  $export = array();

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'bloque_footer_contacto';
  $bean_type->label = 'Bloque Footer Contacto';
  $bean_type->options = '';
  $bean_type->description = '';
  $export['bloque_footer_contacto'] = $bean_type;

  return $export;
}
