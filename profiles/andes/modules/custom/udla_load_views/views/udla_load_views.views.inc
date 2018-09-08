<?php

/**
 * Implementation of hook_views_default_views().
 */
function udla_load_views_views_default_views() {
  $files = file_scan_directory(drupal_get_path('module', 'udla_load_views'). '/views_import', '/.*\.view$/'); 
  foreach ($files as $filepath => $file) {
    require $filepath;
    if (isset($view)) {
      $views[$view->name] = $view;
    }
  }
  return $views;
}