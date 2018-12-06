<?php

function social_share_configuration($form, &$form_state){
  $form['#attached']['css'][] = drupal_get_path('module', 'udla_simplified_social_share') . '/css/admin.css';
  $form['#attached']['js'][] = array(
    'data' => array('social_share' => variable_get('social_network','')),
    'type' => 'setting',
  );

  $form['#attached']['js'][] = drupal_get_path('module', 'udla_simplified_social_share') . '/js/social_admin.js';

  $form['social_list'] = array(
    '#type' => 'fieldset',
    '#title' => t('Select a social Network'),
    '#weight' => 0,
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['social_list']['social_network'] = array(
    '#type' => 'checkboxes',
    '#options' => array(
      'fb' => t('Facebook'),
      'tw' => t('Twitter'),
      'lnk' => t('Linkedin'),
      'gm' => t('Google +'),
    ),
    '#default_value' => variable_get('social_network',''),
    '#title' => t('What sharing networks do you want to show in the sharing widget?'),
    '#suffix' => '<div class="container-social-network" style="display:inline-block;"><ul class="social-network-list"></ul></div>'
  );

  $form['config_facebook_id'] = array(
    '#type' => 'textfield',
    '#title' => t('Facebook Id'),
    '#default_value' => variable_get('config_facebook_id', ''),
    '#size' => 120,
    '#maxlength' => 255,
    '#description' => t('The maximum number of links to display in the block.'),
    //'#required' => TRUE,
  );

  return system_settings_form($form);



}