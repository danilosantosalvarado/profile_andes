<?php

/**
 * @file
 * Admin functions for the Minify HTML module.
 */

/**
 * Settings form callback.
 *
 * @param array $form
 *   Form array.
 * @param array $form_state
 *   Form state array.
 *
 * @return array
 *   Renderable form array.
 */
function minifyhtml_settings_form(array $form, array &$form_state) {
  $form = array();

  $form['minifyhtml_strip_comments'] = array(
    '#title'         => t('Strip comments from the source HTML'),
    '#description'   => t('If checked, strip HTML comments and multi-line comments in @script and @style tags.', array('@script' => '<script>', '@style' => '<style>')),
    '#type'          => 'checkbox',
    '#default_value' => variable_get('minifyhtml_strip_comments', TRUE),
  );

  return system_settings_form($form);
}
