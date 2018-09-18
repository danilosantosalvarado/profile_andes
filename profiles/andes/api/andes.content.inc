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

function _import_eventos_bath($value){
      $node = entity_create('node', array('type' => 'eventos'));
      $node->uid = 1;
      $wrapper = entity_metadata_wrapper('node', $node);
      $wrapper->title->set($value['title_field_es']);
      $wrapper->status->set(1);  // published
      $wrapper->promote->set(0); // not promoted to front page
      $wrapper->language->set('es');
      $wrapper->body->set(array('value' => $value['body_es']));
      $wrapper->created->set(time());
      
      $date_es = explode("|", $value['field_fecha_eventos_es']);
          
      $date_start_es = new DateTime($date_es[false]); 
      $date_end_es = new DateTime($date_es[true]);
    
      $wrapper->field_fecha_eventos->set(array(
        'value'  => $date_start_es->format('Y-m-d'),
        'value2' => $date_end_es->format('Y-m-d'),
      ));
      
      $tid_event_es = taxonomy_get_term_by_name(trim($value['field_categoria_eventos_es']));
      $wrapper->field_categoria_eventos->set(key($tid_event_es));
      $link_es = explode("=", $value['field_agendar_es']);
      $wrapper->field_agendar->set(array('title' => $link_es[false], 'url' => $link_es[true]));
      $wrapper->field_destacado->set(trim($value['field_destacado']));
    
        $location = json_decode($value['field_lugar_es'],true);
        $wrapper->field_lugar->set(array(
            'lid' => $location[false]['lid'],
            'name' => '',
            'street' => '',
            'additional' => $location[false]['additional'],
            'city' => $location[false]['city'],
            'province' => $location[false]['province'],
            'postal_code' => '',
            'country' => $location[false]['country'],
            'latitude' => $location[false]['latitude'],
            'longitude' => $location[false]['longitude'],
            'source' => $location[false]['source'],
            'is_primary' => $location[false]['is_primary'],
            'locpick' => 
            array ('user_latitude' => $location[false]['locpick']['user_latitude'],'user_longitude' => $location[false]['locpick']['user_longitude']),
            'province_name' => $location[false]['province_name'],
            'country_name' => $location[false]['country_name'],
        ));

      
      foreach (json_decode($value['field_slider_principal_items_es'],true) as $key => $item) {
        $colletions = entity_create('field_collection_item', array('field_name' => 'field_slider_principal_items'));
        $colletions->setHostEntity('node',$node,'es');
        $wrapper_collections = entity_metadata_wrapper('field_collection_item',$colletions);
        $wrapper_collections->field_slider_ubicacion->set($item['field_slider_ubicacion']);
        $wrapper_collections->field_titulo->set($item['field_titulo']);
        $wrapper_collections->field_titulo_especiales->set(array('value' => $item['field_titulo_especiales']));
        $wrapper_collections->field_body->set(array('value' => $item['field_body']));

        $file = file_save_data(file_get_contents($item['field_image_banner']), 'public://'.basename($item['field_image_banner']));
        $wrapper_collections->field_image_banner->file->set($file);
      
        $file = file_save_data(file_get_contents($item['field_image_banner_mobile']), 'public://'.basename($item['field_image_banner_mobile']));
        $wrapper_collections->field_image_banner_mobile->file->set($file);
      
        $wrapper_collections->field_video_banner->set(array('input' => $item['field_video_banner']));

        $wrapper_collections->field_enlace_ver_mas->set(
            array('title' => $item['field_enlace_ver_mas']['title'], 'url' => $item['field_enlace_ver_mas']['url'])
        );
        $wrapper_collections->save();
      }

      
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
   
      $date_en = explode("|", $value['field_fecha_eventos_en']);
          
      $date_start_en = new DateTime($date_en[false]);
      $date_end_en = new DateTime($date_en[true]);
    
      $wrapper->field_fecha_eventos->set(array(
        'value'  => $date_start_en->format('Y-m-d'),
        'value2' => $date_end_en->format('Y-m-d'),
      ));

      $tid_event_en = taxonomy_get_term_by_name(trim($value['field_categoria_eventos_en']));
      $wrapper->field_categoria_eventos->set(key($tid_event_en));
      
      $link_en = explode("=", $value['field_agendar_en']);
      $wrapper->field_agendar->set(array('title' => $link_en[false], 'url' => $link_en[true]));
      $wrapper->field_destacado->set(trim($value['field_destacado']));

      $location = json_decode($value['field_lugar_en'],true);
      $wrapper->field_lugar->set(array(
          'lid' => $location[false]['lid'],
          'name' => '',
          'street' => '',
          'additional' => $location[false]['additional'],
          'city' => $location[false]['city'],
          'province' => $location[false]['province'],
          'postal_code' => '',
          'country' => $location[false]['country'],
          'latitude' => $location[false]['latitude'],
          'longitude' => $location[false]['longitude'],
          'source' => $location[false]['source'],
          'is_primary' => $location[false]['is_primary'],
          'locpick' => 
          array ('user_latitude' => $location[false]['locpick']['user_latitude'],'user_longitude' => $location[false]['locpick']['user_longitude']),
          'province_name' => $location[false]['province_name'],
          'country_name' => $location[false]['country_name'],
      ));
     
      foreach (json_decode($value['field_slider_principal_items_en'],true) as $key => $item) {
        $colletions = entity_create('field_collection_item', array('field_name' => 'field_slider_principal_items'));
        $colletions->setHostEntity('node',$node,'en');
        $wrapper_collections = entity_metadata_wrapper('field_collection_item',$colletions);
        $wrapper_collections->field_slider_ubicacion->set($item['field_slider_ubicacion']);
        $wrapper_collections->field_titulo->set($item['field_titulo']);
        $wrapper_collections->field_titulo_especiales->set(array('value' => $item['field_titulo_especiales']));
        $wrapper_collections->field_body->set(array('value' => $item['field_body']));

        $file = file_save_data(file_get_contents($item['field_image_banner']), 'public://'.basename($item['field_image_banner']));
        $wrapper_collections->field_image_banner->file->set($file);
      
        $file = file_save_data(file_get_contents($item['field_image_banner_mobile']), 'public://'.basename($item['field_image_banner_mobile']));
        $wrapper_collections->field_image_banner_mobile->file->set($file);
      
        $wrapper_collections->field_video_banner->set(array('input' => $item['field_video_banner']));
        
        $wrapper_collections->field_enlace_ver_mas->set(
            array('title' => $item['field_enlace_ver_mas']['title'], 'url' => $item['field_enlace_ver_mas']['url'])
        );
        $wrapper_collections->save();
      }

      $wrapper->save(); 
}
