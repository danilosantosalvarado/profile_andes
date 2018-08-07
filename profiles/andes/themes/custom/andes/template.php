<?php
/**
 * @file
 * The primary PHP file for this theme.
 */

function andes_preprocess_page(&$vars, $hook) {
  if (true) {
    // drupal_add_js(drupal_get_path('theme', 'andes') . '/js/script.js');
    // $vars['scripts'] = drupal_get_js();
   }
}

// function andes_preprocess_tb_megamenu_item(&$vars) {
// 	//print_r($vars['item']):
// 	// die();
//   if (isset($vars['item']['link']['localized_options']['content']['image'])) {
//     $image = file_load($vars['item']['link']['localized_options']['content']['image']);
//   	if ($image->type == 'image') {
// 	    $content = array(
// 	      'file' => array(
// 	        '#theme' => 'image',
// 	        '#path' => $image->uri,
// 	        '#prefix' => '<div class="container-menu-image"><div class="image-menu">',
// 	        '#suffix' => '</div><div class="menu-title">'.$vars['item']['link']['title'].'</div></div>'
// 	      ),
// 	    );  
//       $vars['item']['link']['title'] =  drupal_render($content);
//   	}
//   	else if ($image->type == 'document'){
// 	    $file = file_load($vars['item']['link']['localized_options']['content']['image']);	
// 	    $vars['item']['link']['title'] = l($vars['item']['link']['title'], file_create_url($file->uri), array('query' => array('download' => '1')));
//   	}
//   }
// }