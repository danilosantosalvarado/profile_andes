<?php

function _import_beans_batch($bean_content, $bean_name){
  module_load_include('module', 'bean');
  $bean = bean_create(array('type' => $bean_name));
  $bean_wrap = entity_metadata_wrapper('bean', $bean);
  $bean_wrap->label->set($bean_content['label']);
  $bean_wrap->title->set($bean_content['label']);
  _save_data_field_collection('field_slider_principal_items',"", $bean_content, $bean, "bean");
  $bean_wrap->save();
}