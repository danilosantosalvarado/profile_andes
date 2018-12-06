<?php
/**
 * @file
 * block_slider_homes.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function block_slider_homes_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "bean_admin_ui" && $api == "bean") {
    return array("version" => "5");
  }
  if ($module == "page_manager" && $api == "pages_default") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function block_slider_homes_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}
