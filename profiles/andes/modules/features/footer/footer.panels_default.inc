<?php
/**
 * @file
 * footer.panels_default.inc
 */

/**
 * Implements hook_default_panels_mini().
 */
function footer_default_panels_mini() {
  $export = array();

  $mini = new stdClass();
  $mini->disabled = FALSE; /* Edit this to true to make a default mini disabled initially */
  $mini->api_version = 1;
  $mini->name = 'footer_panel';
  $mini->category = 'Footer';
  $mini->admin_title = 'Footer Panel';
  $mini->admin_description = '';
  $mini->requiredcontexts = array();
  $mini->contexts = array();
  $mini->relationships = array();
  $display = new panels_display();
  $display->layout = 'threecol_25_50_25_stacked';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'left' => NULL,
      'right' => NULL,
      'top' => NULL,
      'bottom' => NULL,
      'middle' => NULL,
    ),
    'middle' => array(
      'style' => '0',
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '6f8a18ff-1388-4256-ac19-f9b0ca8dc27b';
  $display->storage_type = 'panels_mini';
  $display->storage_id = 'footer_panel';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-e557d4d2-938f-4f68-8fe4-82e3deb6cd60';
  $pane->panel = 'middle';
  $pane->type = 'block';
  $pane->subtype = 'menu-menu-footer---menu-central';
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
  $pane->uuid = 'e557d4d2-938f-4f68-8fe4-82e3deb6cd60';
  $display->content['new-e557d4d2-938f-4f68-8fe4-82e3deb6cd60'] = $pane;
  $display->panels['middle'][0] = 'new-e557d4d2-938f-4f68-8fe4-82e3deb6cd60';
  $display->hide_title = PANELS_TITLE_NONE;
  $display->title_pane = '0';
  $mini->display = $display;
  $export['footer_panel'] = $mini;

  return $export;
}
