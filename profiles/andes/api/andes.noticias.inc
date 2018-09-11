<?php

function _import_noticias_batch($value){
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


function _import_material_estudio_batch($value){
      $node = entity_create('node', array('type' => 'materiales_de_estudio'));
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
      $wrapper_collections->save();
      $wrapper->save();
}
