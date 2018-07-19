<?php

error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);
/**
 * Implements hook_form_alter().
 */
 function system_form_install_select_profile_form_alter(&$form, $form_state) {
   // select plato_tipico install profile by default
   foreach ($form['profile'] as $key => $element) {
     $form['profile'][$key]['#value'] = 'andes';
   }
 }