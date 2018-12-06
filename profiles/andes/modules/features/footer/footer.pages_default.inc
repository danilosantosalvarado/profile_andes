<?php
/**
 * @file
 * footer.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_pages().
 */
function footer_default_page_manager_pages() {
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
    'body_classes_to_remove' => 'dropdown-menu',
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
  $display->layout = 'twocol_stacked';
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
  $pane->pid = 'new-cf4c8868-bbad-4ac4-bb8f-ec02fc35f31f';
  $pane->panel = 'bottom';
  $pane->type = 'panels_mini';
  $pane->subtype = 'footer_panel';
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
  $pane->uuid = 'cf4c8868-bbad-4ac4-bb8f-ec02fc35f31f';
  $display->content['new-cf4c8868-bbad-4ac4-bb8f-ec02fc35f31f'] = $pane;
  $display->panels['bottom'][0] = 'new-cf4c8868-bbad-4ac4-bb8f-ec02fc35f31f';
  $pane = new stdClass();
  $pane->pid = 'new-3bd0cac6-4c7f-4c6d-b62e-274ac55bb227';
  $pane->panel = 'left';
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
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '3bd0cac6-4c7f-4c6d-b62e-274ac55bb227';
  $display->content['new-3bd0cac6-4c7f-4c6d-b62e-274ac55bb227'] = $pane;
  $display->panels['left'][0] = 'new-3bd0cac6-4c7f-4c6d-b62e-274ac55bb227';
  $pane = new stdClass();
  $pane->pid = 'new-2ade24ec-c0df-4ef8-88a2-c233f27a75e3';
  $pane->panel = 'top';
  $pane->type = 'block';
  $pane->subtype = 'tb_megamenu-main-menu';
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
  $pane->uuid = '2ade24ec-c0df-4ef8-88a2-c233f27a75e3';
  $display->content['new-2ade24ec-c0df-4ef8-88a2-c233f27a75e3'] = $pane;
  $display->panels['top'][0] = 'new-2ade24ec-c0df-4ef8-88a2-c233f27a75e3';
  $pane = new stdClass();
  $pane->pid = 'new-5c08df4a-209a-4599-bb87-12b8788f7d17';
  $pane->panel = 'top';
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
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = '5c08df4a-209a-4599-bb87-12b8788f7d17';
  $display->content['new-5c08df4a-209a-4599-bb87-12b8788f7d17'] = $pane;
  $display->panels['top'][1] = 'new-5c08df4a-209a-4599-bb87-12b8788f7d17';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = 'new-5c08df4a-209a-4599-bb87-12b8788f7d17';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['home'] = $page;

  return $pages;

}
