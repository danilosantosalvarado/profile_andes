<?php
/**
 * @file
 * block_slider_homes.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_pages().
 */
function block_slider_homes_default_page_manager_pages() {
  $page = new stdClass();
  $page->disabled = FALSE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = 'home';
  $page->task = 'page';
  $page->admin_title = 'Home';
  $page->admin_description = '';
  $page->path = 'home';
  $page->access = array();
  $page->menu = array();
  $page->arguments = array();
  $page->conf = array(
    'admin_paths' => FALSE,
  );
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'page_home__panel';
  $handler->task = 'page';
  $handler->subtask = 'home';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Panel',
    'no_blocks' => 0,
    'pipeline' => 'ipe',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'panel',
    'access' => array(
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'boxton';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'top' => NULL,
      'left' => NULL,
      'right' => NULL,
      'bottom' => NULL,
      'middle' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '9c651569-933b-45a1-b393-bfb655935191';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'page_home__panel';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-953eff0e-580c-4d3b-969c-94cbac02e60e';
  $pane->panel = 'content_main';
  $pane->type = 'block';
  $pane->subtype = 'tb_megamenu-menu-menu-top-soy';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '953eff0e-580c-4d3b-969c-94cbac02e60e';
  $display->content['new-953eff0e-580c-4d3b-969c-94cbac02e60e'] = $pane;
  $display->panels['content_main'][0] = 'new-953eff0e-580c-4d3b-969c-94cbac02e60e';
  $pane = new stdClass();
  $pane->pid = 'new-24c3b965-bd50-4711-87d2-bc99d3c1a398';
  $pane->panel = 'content_main';
  $pane->type = 'block';
  $pane->subtype = 'tb_megamenu-menu-mega-menu';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = '24c3b965-bd50-4711-87d2-bc99d3c1a398';
  $display->content['new-24c3b965-bd50-4711-87d2-bc99d3c1a398'] = $pane;
  $display->panels['content_main'][1] = 'new-24c3b965-bd50-4711-87d2-bc99d3c1a398';
  $pane = new stdClass();
  $pane->pid = 'new-5c08df4a-209a-4599-bb87-12b8788f7d17';
  $pane->panel = 'content_main';
  $pane->type = 'block';
  $pane->subtype = 'views-slider_homes-block';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 2;
  $pane->locks = array();
  $pane->uuid = '5c08df4a-209a-4599-bb87-12b8788f7d17';
  $display->content['new-5c08df4a-209a-4599-bb87-12b8788f7d17'] = $pane;
  $display->panels['content_main'][2] = 'new-5c08df4a-209a-4599-bb87-12b8788f7d17';
  $pane = new stdClass();
  $pane->pid = 'new-3bd0cac6-4c7f-4c6d-b62e-274ac55bb227';
  $pane->panel = 'content_main';
  $pane->type = 'block';
  $pane->subtype = 'views-componente_noticias-block';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 3;
  $pane->locks = array();
  $pane->uuid = '3bd0cac6-4c7f-4c6d-b62e-274ac55bb227';
  $display->content['new-3bd0cac6-4c7f-4c6d-b62e-274ac55bb227'] = $pane;
  $display->panels['content_main'][3] = 'new-3bd0cac6-4c7f-4c6d-b62e-274ac55bb227';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = 'new-5c08df4a-209a-4599-bb87-12b8788f7d17';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['home'] = $page;

  return $pages;

}
