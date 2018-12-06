<?php
/**
 * @file
 * quictabs_list.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function quictabs_list_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "quicktabs" && $api == "quicktabs") {
    return array("version" => "1");
  }
}
