<?php
/**
 * @file
 * ct_noticias.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function ct_noticias_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'banner_nodes';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Banner Nodes';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['reset_button_label'] = 'Restablecer';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '5';
  $handler->display->display_options['style_plugin'] = 'slideshow';
  $handler->display->display_options['style_options']['slideshow_type'] = 'views_slideshow_cycle';
  $handler->display->display_options['style_options']['slideshow_skin'] = 'default';
  $handler->display->display_options['style_options']['skin_info'] = array(
    'class' => 'default',
    'name' => 'Predeterminado',
    'module' => 'views_slideshow',
    'path' => '',
    'stylesheets' => array(),
  );
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_pager']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_pager']['type'] = 'views_slideshow_pager_fields';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_pager']['views_slideshow_pager_fields_fields'] = array(
    'title' => 0,
    'field_image_banner' => 0,
    'field_video_banner' => 0,
  );
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_pager']['views_slideshow_jcarousel_pager_fields'] = array(
    'title' => 0,
    'field_image_banner' => 0,
    'field_video_banner' => 0,
  );
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_pager']['views_slideshow_jcarousel_pager_orientation'] = '0';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_pager']['views_slideshow_jcarousel_pager_scroll'] = '3';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_pager']['views_slideshow_jcarousel_pager_visible'] = '3';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_pager']['views_slideshow_jcarousel_pager_wrap'] = '';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_controls']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_controls']['type'] = 'views_slideshow_controls_text';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_slide_counter']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_xtra']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_xtra']['fields'] = array(
    'title' => 0,
    'field_image_banner' => 0,
    'field_video_banner' => 0,
  );
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_xtra']['display_delay'] = '850';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_xtra']['pause_after_mouse_move'] = '2000';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['enable'] = 1;
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['type'] = 'views_slideshow_pager_fields';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['views_slideshow_pager_fields_fields'] = array(
    'title' => 0,
    'field_image_banner' => 0,
    'field_video_banner' => 0,
  );
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['views_slideshow_jcarousel_pager_fields'] = array(
    'title' => 0,
    'field_image_banner' => 0,
    'field_video_banner' => 0,
  );
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['views_slideshow_jcarousel_pager_orientation'] = '0';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['views_slideshow_jcarousel_pager_scroll'] = '3';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['views_slideshow_jcarousel_pager_visible'] = '3';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['views_slideshow_jcarousel_pager_wrap'] = '';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_controls']['enable'] = 1;
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_controls']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_controls']['type'] = 'views_slideshow_controls_text';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_slide_counter']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_xtra']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_xtra']['fields'] = array(
    'title' => 0,
    'field_image_banner' => 0,
    'field_video_banner' => 0,
  );
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_xtra']['display_delay'] = '850';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_xtra']['pause_after_mouse_move'] = '2000';
  $handler->display->display_options['style_options']['views_slideshow_cycle']['timeout'] = '5000';
  $handler->display->display_options['style_options']['views_slideshow_cycle']['speed'] = '700';
  $handler->display->display_options['style_options']['views_slideshow_cycle']['delay'] = '0';
  $handler->display->display_options['style_options']['views_slideshow_cycle']['remember_slide_days'] = '1';
  $handler->display->display_options['style_options']['views_slideshow_cycle']['items_per_slide'] = '1';
  $handler->display->display_options['style_options']['views_slideshow_cycle']['wait_for_image_load_timeout'] = '3000';
  $handler->display->display_options['style_options']['views_slideshow_cycle']['cleartype'] = 0;
  $handler->display->display_options['style_options']['views_slideshow_cycle']['cleartypenobg'] = 0;
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Contenido: Items Slider (field_items_slider) */
  $handler->display->display_options['relationships']['field_items_slider_value']['id'] = 'field_items_slider_value';
  $handler->display->display_options['relationships']['field_items_slider_value']['table'] = 'field_data_field_items_slider';
  $handler->display->display_options['relationships']['field_items_slider_value']['field'] = 'field_items_slider_value';
  $handler->display->display_options['relationships']['field_items_slider_value']['delta'] = '-1';
  /* Campo: Contenido: Título */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_class'] = 'test-prueba';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  /* Campo: Field collection item: Tipo de item */
  $handler->display->display_options['fields']['field_tipo_item']['id'] = 'field_tipo_item';
  $handler->display->display_options['fields']['field_tipo_item']['table'] = 'field_data_field_tipo_item';
  $handler->display->display_options['fields']['field_tipo_item']['field'] = 'field_tipo_item';
  $handler->display->display_options['fields']['field_tipo_item']['relationship'] = 'field_items_slider_value';
  $handler->display->display_options['fields']['field_tipo_item']['exclude'] = TRUE;
  /* Campo: Campo: Image Banner */
  $handler->display->display_options['fields']['field_image_banner']['id'] = 'field_image_banner';
  $handler->display->display_options['fields']['field_image_banner']['table'] = 'field_data_field_image_banner';
  $handler->display->display_options['fields']['field_image_banner']['field'] = 'field_image_banner';
  $handler->display->display_options['fields']['field_image_banner']['relationship'] = 'field_items_slider_value';
  $handler->display->display_options['fields']['field_image_banner']['label'] = '';
  $handler->display->display_options['fields']['field_image_banner']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_image_banner']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_image_banner']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_image_banner']['settings'] = array(
    'image_style' => '',
    'image_link' => '',
  );
  /* Campo: Campo: Video Banner */
  $handler->display->display_options['fields']['field_video_banner']['id'] = 'field_video_banner';
  $handler->display->display_options['fields']['field_video_banner']['table'] = 'field_data_field_video_banner';
  $handler->display->display_options['fields']['field_video_banner']['field'] = 'field_video_banner';
  $handler->display->display_options['fields']['field_video_banner']['relationship'] = 'field_items_slider_value';
  $handler->display->display_options['fields']['field_video_banner']['label'] = '';
  $handler->display->display_options['fields']['field_video_banner']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_video_banner']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_video_banner']['click_sort_column'] = 'input';
  $handler->display->display_options['fields']['field_video_banner']['settings'] = array(
    'youtube_size' => '420x315',
    'youtube_width' => '',
    'youtube_height' => '',
    'youtube_autoplay' => 0,
    'youtube_loop' => 0,
    'youtube_showinfo' => 0,
    'youtube_controls' => 0,
    'youtube_autohide' => 0,
    'youtube_iv_load_policy' => 0,
  );
  /* Campo: Views: Views Conditional */
  $handler->display->display_options['fields']['views_conditional']['id'] = 'views_conditional';
  $handler->display->display_options['fields']['views_conditional']['table'] = 'views_conditional';
  $handler->display->display_options['fields']['views_conditional']['field'] = 'views_conditional';
  $handler->display->display_options['fields']['views_conditional']['label'] = '';
  $handler->display->display_options['fields']['views_conditional']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['views_conditional']['if'] = 'field_tipo_item';
  $handler->display->display_options['fields']['views_conditional']['condition'] = '1';
  $handler->display->display_options['fields']['views_conditional']['equalto'] = 'imagen';
  $handler->display->display_options['fields']['views_conditional']['then'] = '[field_image_banner]';
  $handler->display->display_options['fields']['views_conditional']['or'] = '[field_video_banner]';
  $handler->display->display_options['fields']['views_conditional']['strip_tags'] = 0;
  /* Sort criterion: Contenido: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Contenido: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['nid']['exception']['title'] = 'Todo';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'node';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
  /* Filter criterion: Contenido: Publicado */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;

  /* Display: Banner Nodes */
  $handler = $view->new_display('block', 'Banner Nodes', 'block');
  $translatables['banner_nodes'] = array(
    t('Master'),
    t('more'),
    t('Apply'),
    t('Restablecer'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('field collection item from field_items_slider'),
    t('Tipo de item'),
    t('Todo'),
    t('Banner Nodes'),
  );
  $export['banner_nodes'] = $view;

  return $export;
}
