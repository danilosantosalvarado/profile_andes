<?php
function _get_taxonomy_render($vid) {
  $taxonomy_childrens = taxonomy_get_tree($vid);
  $taxonomy_by_levels = _reorder_taxonomies_by_levels($taxonomy_childrens);
  
  $load_first_level = _first_level_load($taxonomy_by_levels[0]);
  $load_first_level .= _others_level_load($taxonomy_by_levels);
  return $load_first_level;
}
function _reorder_taxonomies_by_levels($taxonomies){
  $taxonomies_group = array();
  $parents = array();
  foreach ($taxonomies as $taxonomy) {
    $parent = array_shift($taxonomy->parents);
    if($parent != 0){
      $taxonomies_group[$taxonomy->depth][$parent][$taxonomy->tid] = $taxonomy->name;
    }else{
      $taxonomies_group[$taxonomy->depth][$taxonomy->tid] = $taxonomy->name;
    }
  }

  drupal_add_js(drupal_get_path('module', 'udla_block_taxonomy') . '/js/udla_block_taxonomy_actions.js');
  drupal_add_css(drupal_get_path('module', 'udla_block_taxonomy') . '/css/udla_block_taxonomy.css');
  return $taxonomies_group;
}

function _first_level_load($taxonomies){
  return theme('first_elements_taxonomy', array('items' =>$taxonomies));
}

function _others_level_load($taxonomies){
  $containers = "";
  foreach ($taxonomies as $level => $values) {
    if ($level !=0) {
      $items_div = "";
      foreach ($values as $key => $value) {
        $items_div .= theme('others_elements_taxonomy', array('level' =>  $level, 'items' => $value, 'parent' => $key));
      }
      
      $containers .= theme('others_container_taxonomy', array('level' => $level,'items' => $items_div));
    }
  }
  return $containers;
}