<?php

function _get_social_networks(){
  //social_share_parent
  drupal_add_css(drupal_get_path('module', 'udla_simplified_social_share') . '/css/admin.css');
  //
  drupal_add_js(drupal_get_path('module', 'udla_simplified_social_share') . '/js/social_share.js');
  $parent = array(
    '#theme' => 'social_share_parent',
    '#social_share_items' => variable_get('social_network',''),
  );
  return drupal_render($parent);
}