<?php

define("EXCEL", 0);
define("CONTENT_TYPE", 'oportunidades_pais_mapa');

/**
 * Implements hook_form().
 */
function udla_load_events_form_import($form, &$form_state) {
	global $base_url;
    $form['#attributes'] = array('enctype' => 'multipart/form-data');
	$form['format'] = array(
      '#type' => 'item',
      '#title' => t('Format of import for Content Entity(Node)->Bundle(Noticias)'),
      '#value' => l('Excel', $base_url . '/'.  drupal_get_path('module', 'udla_load_events') . '/format/formato_oportunidades_mapa.xls'),
    );

	$form['file_upload'] = array(
	  '#title' => t('Please Submit Xls'),
	  '#type' => 'managed_file',
	  '#description' => t('The uploaded xls will be displayed on this page using the image style choosen below.'),
	  '#default_value' => variable_get('image_example_image_fid', ''),
	  '#upload_location' => 'public://import_content/',
	  "#upload_validators"  => array("file_validate_extensions" => array("xls xlsx")),
	);
    $form['submit'] = array(
        '#type' => 'submit',
        '#value' => 'Upload file'
    );
    return $form;
}

/**
 * Implements hook_form_submit().
 */

function udla_load_events_form_import_submit($form, &$form_state) {
	Global $user;    
	$file = file_load($form_state['input']['file_upload']['fid']);
	module_load_include('inc', 'phpexcel');
	$result = phpexcel_import(drupal_realpath($file->uri));
	 foreach ($result[false] as $key => $value) {
	 	  $node = entity_create('node', array('type' => 'noticias'));
		  $node->uid = 1;
		  $wrapper = entity_metadata_wrapper('node', $node);
		  $wrapper->title->set($value['title_field_es']);
		  $wrapper->status->set(1);  // published
		  $wrapper->promote->set(0); // not promoted to front page
		  $wrapper->language->set('es');
		  $wrapper->body->set(array('value' => $value['body_es']));
		  $wrapper->created->set(time());
		  // Wrapper Fielcollections Api.
		  $colletions = entity_create('field_collection_item', array('field_name' => 'field_items_slider'));
		  $colletions->setHostEntity('node',$node,'es');
		  $wrapper_collections = entity_metadata_wrapper('field_collection_item',$colletions);
		  if (!empty($value['field_image_banner_es'])) {
			  $name = basename($value['field_image_banner_es']);
			  $file = file_save_data(file_get_contents($value['field_image_banner_es']), 'public://'.$name);
			  $wrapper_collections->field_image_banner->file->set($file);
		}
		  $wrapper_collections->field_video_banner->set(array('input' => $value['field_video_banner_es']));
		  $wrapper_collections->save();
		  $handler = entity_translation_get_handler('node', $node);
		  // Configuration about what to translate
		  $translation = array(
		    'translate' => 0,
		    'status' => 1,
		    'language' => 'en',
		    'source' => 'es',
		  );
		  $handler->setTranslation($translation);
		  $handler->saveTranslations();
		  $wrapper->language('en');
		  $wrapper->title_field->set($value['title_field_en']);
		  $wrapper->body->set(array('value' => $value['body_en']));

		  $colletions = entity_create('field_collection_item', array('field_name' => 'field_items_slider'));
		  $colletions->setHostEntity('node',$node, 'en');
		  $wrapper_collections = entity_metadata_wrapper('field_collection_item',$colletions);
		  if (!empty($value['field_image_banner_es'])) {
			  $name = basename($value['field_image_banner_es']);
			  $file = file_save_data(file_get_contents($value['field_image_banner_es']), 'public://'.$name);
			  $wrapper_collections->field_image_banner->file->set($file);
		}
		  $wrapper_collections->field_video_banner->set(array('input' => $value['field_items_slider_en']));
		  $wrapper_collections->save();
		  $wrapper->save();
	 }
}