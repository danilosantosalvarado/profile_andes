<?php
/**
 * @file
 * footer.features.menu_custom.inc
 */

/**
 * Implements hook_menu_default_menu_custom().
 */
function footer_menu_default_menu_custom() {
  $menus = array();

  // Exported menu: menu-footer---menu-central.
  $menus['menu-footer---menu-central'] = array(
    'menu_name' => 'menu-footer---menu-central',
    'title' => 'FOOTER - MENU CENTRAL',
    'description' => '',
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('FOOTER - MENU CENTRAL');

  return $menus;
}
