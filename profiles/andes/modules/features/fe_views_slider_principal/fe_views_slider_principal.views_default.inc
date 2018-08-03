<?php
/**
 * @file
 * fe_views_slider_principal.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function fe_views_slider_principal_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'slider_homes';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'bean';
  $view->human_name = 'Sliders Homes';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Sliders Homes';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'none';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['reset_button_label'] = 'Restablecer';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '5';
  $handler->display->display_options['style_plugin'] = 'slideshow';
  $handler->display->display_options['style_options']['slideshow_type'] = 'views_slideshow_swiper';
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
    'field_tipo_item' => 0,
    'field_image_banner' => 0,
    'field_video_banner' => 0,
    'field_titulo' => 0,
    'field_body' => 0,
    'field_enlace_ver_mas' => 0,
    'field_slider_ubicacion' => 0,
    'views_conditional' => 0,
  );
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_pager']['views_slideshow_jcarousel_pager_fields'] = array(
    'field_tipo_item' => 0,
    'field_image_banner' => 0,
    'field_video_banner' => 0,
    'field_titulo' => 0,
    'field_body' => 0,
    'field_enlace_ver_mas' => 0,
    'field_slider_ubicacion' => 0,
    'views_conditional' => 0,
  );
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_pager']['views_slideshow_jcarousel_pager_orientation'] = '0';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_pager']['views_slideshow_jcarousel_pager_scroll'] = '3';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_pager']['views_slideshow_jcarousel_pager_visible'] = '3';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_pager']['views_slideshow_jcarousel_pager_wrap'] = '';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_controls']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_controls']['hide_on_single_slide'] = 1;
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_controls']['type'] = 'views_slideshow_controls_text';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_slide_counter']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_xtra']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_xtra']['fields'] = array(
    'field_tipo_item' => 0,
    'field_image_banner' => 0,
    'field_video_banner' => 0,
    'field_titulo' => 0,
    'field_body' => 0,
    'field_enlace_ver_mas' => 0,
    'field_slider_ubicacion' => 0,
    'views_conditional' => 0,
  );
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_xtra']['display_delay'] = '850';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_xtra']['pause_after_mouse_move'] = '2000';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['master_pager'] = 1;
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['type'] = 'views_slideshow_pager_fields';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['views_slideshow_pager_fields_fields'] = array(
    'field_tipo_item' => 0,
    'field_image_banner' => 0,
    'field_video_banner' => 0,
    'field_titulo' => 0,
    'field_body' => 0,
    'field_enlace_ver_mas' => 0,
    'field_slider_ubicacion' => 0,
    'views_conditional' => 0,
  );
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['views_slideshow_jcarousel_pager_fields'] = array(
    'field_tipo_item' => 0,
    'field_image_banner' => 0,
    'field_video_banner' => 0,
    'field_titulo' => 0,
    'field_body' => 0,
    'field_enlace_ver_mas' => 0,
    'field_slider_ubicacion' => 0,
    'views_conditional' => 0,
  );
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['views_slideshow_jcarousel_pager_orientation'] = '0';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['views_slideshow_jcarousel_pager_scroll'] = '3';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['views_slideshow_jcarousel_pager_visible'] = '3';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['views_slideshow_jcarousel_pager_wrap'] = '';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_controls']['enable'] = 1;
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_controls']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_controls']['hide_on_single_slide'] = 1;
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_controls']['type'] = 'views_slideshow_controls_text';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_slide_counter']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_xtra']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_xtra']['fields'] = array(
    'field_tipo_item' => 0,
    'field_image_banner' => 0,
    'field_video_banner' => 0,
    'field_titulo' => 0,
    'field_body' => 0,
    'field_enlace_ver_mas' => 0,
    'field_slider_ubicacion' => 0,
    'views_conditional' => 0,
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
  $handler->display->display_options['style_options']['views_slideshow_swiper']['watchSlidesProgress'] = 1;
  $handler->display->display_options['style_options']['views_slideshow_swiper']['watchSlidesVisibility'] = 1;
  $handler->display->display_options['style_options']['views_slideshow_swiper']['effect'] = 'duplicate';
  $handler->display->display_options['style_options']['views_slideshow_swiper']['shortSwipes'] = 0;
  $handler->display->display_options['style_options']['views_slideshow_swiper']['longSwipes'] = 0;
  $handler->display->display_options['style_options']['views_slideshow_swiper']['noSwiping'] = 0;
  $handler->display->display_options['style_options']['views_slideshow_swiper']['noSwipingClass'] = '';
  $handler->display->display_options['style_options']['views_slideshow_swiper']['swipeHandler'] = '';
  $handler->display->display_options['style_options']['views_slideshow_swiper']['pagination'] = 'swiper-pagination';
  $handler->display->display_options['style_options']['views_slideshow_swiper']['paginationHide'] = 0;
  $handler->display->display_options['style_options']['views_slideshow_swiper']['paginationClickable'] = 'true';
  $handler->display->display_options['style_options']['views_slideshow_swiper']['nextButton'] = 'swiper-button-next';
  $handler->display->display_options['style_options']['views_slideshow_swiper']['prevButton'] = 'swiper-button-prev';
  $handler->display->display_options['style_options']['views_slideshow_swiper']['scrollbar'] = '';
  $handler->display->display_options['style_options']['views_slideshow_swiper']['scrollbarHide'] = 0;
  $handler->display->display_options['style_options']['views_slideshow_swiper']['keyboardControl'] = 1;
  $handler->display->display_options['style_options']['views_slideshow_swiper']['mousewheelControl'] = 1;
  $handler->display->display_options['style_options']['views_slideshow_swiper']['lazyLoadingInPrevNext'] = 1;
  $handler->display->display_options['style_options']['views_slideshow_swiper']['loop'] = 1;
  $handler->display->display_options['style_options']['views_slideshow_swiper']['loopedSlides'] = '';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Bloque: Slider principal Items (field_slider_principal_items) */
  $handler->display->display_options['relationships']['field_slider_principal_items_value']['id'] = 'field_slider_principal_items_value';
  $handler->display->display_options['relationships']['field_slider_principal_items_value']['table'] = 'field_data_field_slider_principal_items';
  $handler->display->display_options['relationships']['field_slider_principal_items_value']['field'] = 'field_slider_principal_items_value';
  $handler->display->display_options['relationships']['field_slider_principal_items_value']['delta'] = '-1';
  /* Relationship: Bloque: Entity translation: translations */
  $handler->display->display_options['relationships']['entity_translations']['id'] = 'entity_translations';
  $handler->display->display_options['relationships']['entity_translations']['table'] = 'bean';
  $handler->display->display_options['relationships']['entity_translations']['field'] = 'entity_translations';
  /* Campo: Field collection item: Tipo de item */
  $handler->display->display_options['fields']['field_tipo_item']['id'] = 'field_tipo_item';
  $handler->display->display_options['fields']['field_tipo_item']['table'] = 'field_data_field_tipo_item';
  $handler->display->display_options['fields']['field_tipo_item']['field'] = 'field_tipo_item';
  $handler->display->display_options['fields']['field_tipo_item']['relationship'] = 'field_slider_principal_items_value';
  $handler->display->display_options['fields']['field_tipo_item']['exclude'] = TRUE;
  /* Campo: Field collection item: Image Banner */
  $handler->display->display_options['fields']['field_image_banner']['id'] = 'field_image_banner';
  $handler->display->display_options['fields']['field_image_banner']['table'] = 'field_data_field_image_banner';
  $handler->display->display_options['fields']['field_image_banner']['field'] = 'field_image_banner';
  $handler->display->display_options['fields']['field_image_banner']['relationship'] = 'field_slider_principal_items_value';
  $handler->display->display_options['fields']['field_image_banner']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_image_banner']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_image_banner']['settings'] = array(
    'image_style' => '',
    'image_link' => '',
  );
  /* Campo: Field collection item: Video Banner */
  $handler->display->display_options['fields']['field_video_banner']['id'] = 'field_video_banner';
  $handler->display->display_options['fields']['field_video_banner']['table'] = 'field_data_field_video_banner';
  $handler->display->display_options['fields']['field_video_banner']['field'] = 'field_video_banner';
  $handler->display->display_options['fields']['field_video_banner']['relationship'] = 'field_slider_principal_items_value';
  $handler->display->display_options['fields']['field_video_banner']['exclude'] = TRUE;
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
  /* Campo: Field collection item: Titulo */
  $handler->display->display_options['fields']['field_titulo']['id'] = 'field_titulo';
  $handler->display->display_options['fields']['field_titulo']['table'] = 'field_data_field_titulo';
  $handler->display->display_options['fields']['field_titulo']['field'] = 'field_titulo';
  $handler->display->display_options['fields']['field_titulo']['relationship'] = 'field_slider_principal_items_value';
  $handler->display->display_options['fields']['field_titulo']['exclude'] = TRUE;
  /* Campo: Field collection item: Body */
  $handler->display->display_options['fields']['field_body']['id'] = 'field_body';
  $handler->display->display_options['fields']['field_body']['table'] = 'field_data_field_body';
  $handler->display->display_options['fields']['field_body']['field'] = 'field_body';
  $handler->display->display_options['fields']['field_body']['relationship'] = 'field_slider_principal_items_value';
  $handler->display->display_options['fields']['field_body']['label'] = 'Cuerpo';
  $handler->display->display_options['fields']['field_body']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_body']['alter']['max_length'] = '200';
  $handler->display->display_options['fields']['field_body']['alter']['trim'] = TRUE;
  /* Campo: Field collection item: Enlace Ver más */
  $handler->display->display_options['fields']['field_enlace_ver_mas']['id'] = 'field_enlace_ver_mas';
  $handler->display->display_options['fields']['field_enlace_ver_mas']['table'] = 'field_data_field_enlace_ver_mas';
  $handler->display->display_options['fields']['field_enlace_ver_mas']['field'] = 'field_enlace_ver_mas';
  $handler->display->display_options['fields']['field_enlace_ver_mas']['relationship'] = 'field_slider_principal_items_value';
  $handler->display->display_options['fields']['field_enlace_ver_mas']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_enlace_ver_mas']['click_sort_column'] = 'url';
  /* Campo: Field collection item: Slider Ubicación */
  $handler->display->display_options['fields']['field_slider_ubicacion']['id'] = 'field_slider_ubicacion';
  $handler->display->display_options['fields']['field_slider_ubicacion']['table'] = 'field_data_field_slider_ubicacion';
  $handler->display->display_options['fields']['field_slider_ubicacion']['field'] = 'field_slider_ubicacion';
  $handler->display->display_options['fields']['field_slider_ubicacion']['relationship'] = 'field_slider_principal_items_value';
  $handler->display->display_options['fields']['field_slider_ubicacion']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_slider_ubicacion']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_slider_ubicacion']['alter']['text'] = '[field_slider_ubicacion-value]';
  /* Campo: Views: Views Conditional */
  $handler->display->display_options['fields']['views_conditional']['id'] = 'views_conditional';
  $handler->display->display_options['fields']['views_conditional']['table'] = 'views_conditional';
  $handler->display->display_options['fields']['views_conditional']['field'] = 'views_conditional';
  $handler->display->display_options['fields']['views_conditional']['label'] = '';
  $handler->display->display_options['fields']['views_conditional']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['views_conditional']['if'] = 'field_tipo_item';
  $handler->display->display_options['fields']['views_conditional']['condition'] = '1';
  $handler->display->display_options['fields']['views_conditional']['equalto'] = 'imagen';
  $handler->display->display_options['fields']['views_conditional']['then'] = '[field_image_banner]
<div class=[field_slider_ubicacion]>
  <div class="title-slider-homes">
    [field_titulo]
  </div>
  <div class="body-slider-homes">
    [field_body] 
  </div>
  <div class="link-slider-homes">
    [field_enlace_ver_mas]
  </div>
</div>
<div class="swiper-pagination"></div>';
  $handler->display->display_options['fields']['views_conditional']['or'] = '[field_video_banner]
<div class=[field_slider_ubicacion]>
  <div class="title-slider-homes">
    [field_titulo]
  </div>
  <div class="body-slider-homes">
    [field_body] 
  </div>
  <div class="link-slider-homes">
    [field_enlace_ver_mas]
  </div>
</div>
<div class="swiper-pagination"></div>';
  $handler->display->display_options['fields']['views_conditional']['strip_tags'] = 0;
  /* Filter criterion: Bloque: Tipo */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'bean';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'sliders_homes' => 'sliders_homes',
  );
  /* Filter criterion: Bloque: Etiqueta */
  $handler->display->display_options['filters']['label']['id'] = 'label';
  $handler->display->display_options['filters']['label']['table'] = 'bean';
  $handler->display->display_options['filters']['label']['field'] = 'label';
  $handler->display->display_options['filters']['label']['value'] = 'Slider Home';
  /* Filter criterion: Entity translation: Idioma */
  $handler->display->display_options['filters']['language']['id'] = 'language';
  $handler->display->display_options['filters']['language']['table'] = 'entity_translation';
  $handler->display->display_options['filters']['language']['field'] = 'language';
  $handler->display->display_options['filters']['language']['relationship'] = 'entity_translations';
  $handler->display->display_options['filters']['language']['value'] = array(
    '***CURRENT_LANGUAGE***' => '***CURRENT_LANGUAGE***',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $translatables['slider_homes'] = array(
    t('Master'),
    t('Sliders Homes'),
    t('more'),
    t('Apply'),
    t('Restablecer'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('field collection item from field_slider_principal_items'),
    t('Translations'),
    t('Tipo de item'),
    t('Image Banner'),
    t('Video Banner'),
    t('Titulo'),
    t('Cuerpo'),
    t('Enlace Ver más'),
    t('Slider Ubicación'),
    t('[field_slider_ubicacion-value]'),
    t('Block'),
  );
  $export['slider_homes'] = $view;

  return $export;
}
