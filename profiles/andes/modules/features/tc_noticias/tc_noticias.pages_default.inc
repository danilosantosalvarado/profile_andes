<?php
/**
 * @file
 * tc_noticias.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_handlers().
 */
function tc_noticias_default_page_manager_handlers() {
  $export = array();

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'node_view__panel_context_967a91d1-e55a-470b-9d6e-19b71a1cf594';
  $handler->task = 'node_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Noticias',
    'no_blocks' => 0,
    'pipeline' => 'ipe',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => '',
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'node_type',
          'settings' => array(
            'type' => array(
              'noticias' => 'noticias',
            ),
          ),
          'context' => 'argument_entity_id:node_1',
          'not' => FALSE,
        ),
      ),
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'threecol_25_50_25_stacked';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'top' => array(),
      'left' => NULL,
      'middle' => NULL,
      'right' => NULL,
      'bottom' => NULL,
    ),
    'top' => array(
      'style' => 'list',
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '9c5e3bb1-e99e-41dd-9743-e455063caf35';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'node_view__panel_context_967a91d1-e55a-470b-9d6e-19b71a1cf594';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-8f7e2696-4215-4f61-b43e-96caea38da6c';
  $pane->panel = 'middle';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:body';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'title',
    'formatter' => 'text_default',
    'delta_limit' => 0,
    'delta_offset' => '0',
    'delta_reversed' => FALSE,
    'formatter_settings' => array(),
    'context' => 'argument_entity_id:node_1',
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
  $pane->uuid = '8f7e2696-4215-4f61-b43e-96caea38da6c';
  $display->content['new-8f7e2696-4215-4f61-b43e-96caea38da6c'] = $pane;
  $display->panels['middle'][0] = 'new-8f7e2696-4215-4f61-b43e-96caea38da6c';
  $pane = new stdClass();
  $pane->pid = 'new-a83d7baa-8c1d-42b5-ae0b-963b4332856d';
  $pane->panel = 'top';
  $pane->type = 'node_title';
  $pane->subtype = 'node_title';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'link' => 0,
    'markup' => 'h1',
    'id' => '',
    'class' => '',
    'context' => 'argument_entity_id:node_1',
    'override_title' => 1,
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
  $pane->uuid = 'a83d7baa-8c1d-42b5-ae0b-963b4332856d';
  $display->content['new-a83d7baa-8c1d-42b5-ae0b-963b4332856d'] = $pane;
  $display->panels['top'][0] = 'new-a83d7baa-8c1d-42b5-ae0b-963b4332856d';
  $pane = new stdClass();
  $pane->pid = 'new-b3721af1-618c-409d-8f1a-df0e10ae70e4';
  $pane->panel = 'top';
  $pane->type = 'block';
  $pane->subtype = 'views-banner_nodes-block';
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
  $pane->css = array(
    'css_id' => '',
    'css_class' => '',
  );
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = 'b3721af1-618c-409d-8f1a-df0e10ae70e4';
  $display->content['new-b3721af1-618c-409d-8f1a-df0e10ae70e4'] = $pane;
  $display->panels['top'][1] = 'new-b3721af1-618c-409d-8f1a-df0e10ae70e4';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $export['node_view__panel_context_967a91d1-e55a-470b-9d6e-19b71a1cf594'] = $handler;

  return $export;
}
