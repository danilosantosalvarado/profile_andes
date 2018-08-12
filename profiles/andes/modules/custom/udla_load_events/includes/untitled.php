<?php

global $user;
$node = entity_create('node', array('type' => 'noticias'));
$node->uid = $user->uid;
$entity = entity_metadata_wrapper('node', $node);
$entity->title->set('Test node');






		$field_collection_item = entity_create('field_collection_item', array('field_name' => 'field_items_slider'));
		$field_collection_item->setHostEntity('node', $node);
		$field_collection_item->field_prueba['es']['value'] = "http://www.youtube.com/watch?v=1SqBdS0XkV4";
		$field_collection_item->save();
		$node->field_items_slider['es'][]['value'] = $field_collection_item->item_id; 
$entity->save();







	 global $user;
	 $node = entity_create('node', array('type' => 'noticias'));
	 $node->uid = $user->uid;
	 $entity = entity_metadata_wrapper('node', $node);
	 $entity->title->set('Test node');
	 $entity->body->set(array('value' => "<b>The second body.</b>"));
     $values = array();
     $values['field_name'] = 'field_items_slider';   
     $values['field_prueba'][LANGUAGE_NONE][0]['value']   = 'gONORREA';
     $field_entity = entity_create('field_collection_item', $values);
     $field_entity->setHostEntity('node', $node);
     $field_entity->save();






$entity = entity_create('node', array('type' => 'article'));
$wrapper = entity_metadata_wrapper('node', $entity);
$wrapper->title = 'title';
$wrapper->body->value = 'body value';
$wrapper->body->summary = 'summary';
$wrapper->body->format = 'full_html';
$wrapper->save();



// Multilenguaje


  $video = entity_create('node', array('type' => 'noticias'));
  $video->uid = 1;
  $w_video = entity_metadata_wrapper('node', $video);
  $w_video->title->set('Titulo en español');
  $w_video->status->set(1);  // published
  $w_video->promote->set(0); // not promoted to front page
  $w_video->language->set('es');
  $w_video->body->set(array('value' => 'Body Español'));
  $w_video->created->set(time());

  $colletions = entity_create('field_collection_item', array('field_name' => 'field_items_slider'));
  $colletions->setHostEntity('node',$video);
  $wrapper_slider = entity_metadata_wrapper('field_collection_item',$colletions);
  $wrapper_slider->field_prueba = 'Prueba Español';


  $handler = entity_translation_get_handler('node', $video);

  // Configuration about what to translate
  $translation = array(
    'translate' => 0,
    'status' => 1,
    'language' => 'en',
    'source' => 'es',
  );

  $handler->setTranslation($translation);
  $handler->saveTranslations();

  $w_video->language('en');
  $w_video->title_field->set('Titulo en ingles');
  $w_video->body->set(array('value' => 'Body English'));

  $wrapper_slider->save();
  $w_video->save();




