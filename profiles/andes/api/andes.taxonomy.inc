<?php

/**
 * Implements andes_import_taxonomy().
 */

require_once(drupal_get_path('module', 'taxonomy_csv') . '/taxonomy_csv.api.inc');
module_load_include('inc', 'taxonomy_csv', 'import/taxonomy_csv.import.api');

function andes_import_taxonomy() {
  $noticias = array (
    'import_format' => 'polyhierarchy',
    'translate_by' => 'name',
    'translate_languages' => array (),
    'keep_order' => 1,
    'source_choice' => 'url',
    'filter_format' => 'plain_text',
    'filter_format_custom' => 'none',
    'check_line' => 1,
    'check_utf8' => 1,
    'locale_custom' => '',
    'vocabulary_target' => 'existing',
    'vocabulary_id' => 2,
    'i18n_mode' => 0,
    'language' => 'und',
    'delete_terms' => 0,
    'check_hierarchy' => 1,
    'set_hierarchy' => '2',
    'update_or_ignore' => 'update',
    'result_stats' => 'result_stats',
    'result_terms' => 'result_terms',
    'result_level' => 'categorias_noticia',
    'result_type' => 'by_message',
    'delimiter' => ',',
    'enclosure' => '"',
    'vocabulary_language' => 'und',
    'file' => (object)(array(
       'filename' => 'noticias.csv',
       'filepath' => getcwd().'/profiles/andes/taxonomys/noticias.csv',
       'filesize' => 214,
    )),
    'url' => getcwd().'/profiles/andes/taxonomys/noticias.csv',
    'check_options' => false,
    'result_display' => true,
  );

  taxonomy_csv_vocabulary_import($noticias);
  
  $area_tematica = array (
    'import_format' => 'polyhierarchy',
    'translate_by' => 'name',
    'translate_languages' => array (),
    'keep_order' => 1,
    'source_choice' => 'url',
    'filter_format' => 'plain_text',
    'filter_format_custom' => 'none',
    'check_line' => 1,
    'check_utf8' => 1,
    'locale_custom' => '',
    'vocabulary_target' => 'existing',
    'vocabulary_id' => 3,
    'i18n_mode' => 0,
    'language' => 'und',
    'delete_terms' => 0,
    'check_hierarchy' => 1,
    'set_hierarchy' => '2',
    'update_or_ignore' => 'update',
    'result_stats' => 'result_stats',
    'result_terms' => 'result_terms',
    'result_level' => 'area_tematica',
    'result_type' => 'by_message',
    'delimiter' => ',',
    'enclosure' => '"',
    'vocabulary_language' => 'und',
    'file' => (object)(array(
       'filename' => 'area_tematica.csv',
       'filepath' => getcwd().'/profiles/andes/taxonomys/area_tematica.csv',
       'filesize' => 214,
    )),
    'url' => getcwd().'/profiles/andes/taxonomys/area_tematica.csv',
    'check_options' => false,
    'result_display' => true,
  );
  taxonomy_csv_vocabulary_import($area_tematica);

  
  $editorial = array (
    'import_format' => 'polyhierarchy',
    'translate_by' => 'name',
    'translate_languages' => array (),
    'keep_order' => 1,
    'source_choice' => 'url',
    'filter_format' => 'plain_text',
    'filter_format_custom' => 'none',
    'check_line' => 1,
    'check_utf8' => 1,
    'locale_custom' => '',
    'vocabulary_target' => 'existing',
    'vocabulary_id' => 4,
    'i18n_mode' => 0,
    'language' => 'und',
    'delete_terms' => 0,
    'check_hierarchy' => 1,
    'set_hierarchy' => '2',
    'update_or_ignore' => 'update',
    'result_stats' => 'result_stats',
    'result_terms' => 'result_terms',
    'result_level' => 'editorial',
    'result_type' => 'by_message',
    'delimiter' => ',',
    'enclosure' => '"',
    'vocabulary_language' => 'und',
    'file' => (object)(array(
       'filename' => 'editorial.csv',
       'filepath' => getcwd().'/profiles/andes/taxonomys/editorial.csv',
       'filesize' => 214,
    )),
    'url' => getcwd().'/profiles/andes/taxonomys/editorial.csv',
    'check_options' => false,
    'result_display' => true,
  );
  taxonomy_csv_vocabulary_import($editorial);

  $eventos = array (
    'import_format' => 'polyhierarchy',
    'translate_by' => 'name',
    'translate_languages' => array (),
    'keep_order' => 1,
    'source_choice' => 'url',
    'filter_format' => 'plain_text',
    'filter_format_custom' => 'none',
    'check_line' => 1,
    'check_utf8' => 1,
    'locale_custom' => '',
    'vocabulary_target' => 'existing',
    'vocabulary_id' => 5,
    'i18n_mode' => 0,
    'language' => 'und',
    'delete_terms' => 0,
    'check_hierarchy' => 1,
    'set_hierarchy' => '2',
    'update_or_ignore' => 'update',
    'result_stats' => 'result_stats',
    'result_terms' => 'result_terms',
    'result_level' => 'eventos',
    'result_type' => 'by_message',
    'delimiter' => ',',
    'enclosure' => '"',
    'vocabulary_language' => 'und',
    'file' => (object)(array(
       'filename' => 'eventos.csv',
       'filepath' => getcwd().'/profiles/andes/taxonomys/eventos.csv',
       'filesize' => 214,
    )),
    'url' => getcwd().'/profiles/andes/taxonomys/eventos.csv',
    'check_options' => false,
    'result_display' => true,
  );
  taxonomy_csv_vocabulary_import($eventos);


  $footer_top = array (
    'import_format' => 'polyhierarchy',
    'translate_by' => 'name',
    'translate_languages' => array (),
    'keep_order' => 1,
    'source_choice' => 'url',
    'filter_format' => 'plain_text',
    'filter_format_custom' => 'none',
    'check_line' => 1,
    'check_utf8' => 1,
    'locale_custom' => '',
    'vocabulary_target' => 'existing',
    'vocabulary_id' => 6,
    'i18n_mode' => 0,
    'language' => 'und',
    'delete_terms' => 0,
    'check_hierarchy' => 1,
    'set_hierarchy' => '2',
    'update_or_ignore' => 'update',
    'result_stats' => 'result_stats',
    'result_terms' => 'result_terms',
    'result_level' => 'footer_top',
    'result_type' => 'by_message',
    'delimiter' => ',',
    'enclosure' => '"',
    'vocabulary_language' => 'und',
    'file' => (object)(array(
       'filename' => 'footer_top.csv',
       'filepath' => getcwd().'/profiles/andes/taxonomys/footer_top.csv',
       'filesize' => 214,
    )),
    'url' => getcwd().'/profiles/andes/taxonomys/footer_top.csv',
    'check_options' => false,
    'result_display' => true,
  );
  taxonomy_csv_vocabulary_import($footer_top);


  $formato = array (
    'import_format' => 'polyhierarchy',
    'translate_by' => 'name',
    'translate_languages' => array (),
    'keep_order' => 1,
    'source_choice' => 'url',
    'filter_format' => 'plain_text',
    'filter_format_custom' => 'none',
    'check_line' => 1,
    'check_utf8' => 1,
    'locale_custom' => '',
    'vocabulary_target' => 'existing',
    'vocabulary_id' => 7,
    'i18n_mode' => 0,
    'language' => 'und',
    'delete_terms' => 0,
    'check_hierarchy' => 1,
    'set_hierarchy' => '2',
    'update_or_ignore' => 'update',
    'result_stats' => 'result_stats',
    'result_terms' => 'result_terms',
    'result_level' => 'formato',
    'result_type' => 'by_message',
    'delimiter' => ',',
    'enclosure' => '"',
    'vocabulary_language' => 'und',
    'file' => (object)(array(
       'filename' => 'formato.csv',
       'filepath' => getcwd().'/profiles/andes/taxonomys/formato.csv',
       'filesize' => 214,
    )),
    'url' => getcwd().'/profiles/andes/taxonomys/formato.csv',
    'check_options' => false,
    'result_display' => true,
  );
  taxonomy_csv_vocabulary_import($formato);


  $lateral_items = array (
    'import_format' => 'polyhierarchy',
    'translate_by' => 'name',
    'translate_languages' => array (),
    'keep_order' => 1,
    'source_choice' => 'url',
    'filter_format' => 'plain_text',
    'filter_format_custom' => 'none',
    'check_line' => 1,
    'check_utf8' => 1,
    'locale_custom' => '',
    'vocabulary_target' => 'existing',
    'vocabulary_id' => 8,
    'i18n_mode' => 0,
    'language' => 'und',
    'delete_terms' => 0,
    'check_hierarchy' => 1,
    'set_hierarchy' => '2',
    'update_or_ignore' => 'update',
    'result_stats' => 'result_stats',
    'result_terms' => 'result_terms',
    'result_level' => 'lateral_items',
    'result_type' => 'by_message',
    'delimiter' => ',',
    'enclosure' => '"',
    'vocabulary_language' => 'und',
    'file' => (object)(array(
       'filename' => 'lateral_items.csv',
       'filepath' => getcwd().'/profiles/andes/taxonomys/lateral_items.csv',
       'filesize' => 214,
    )),
    'url' => getcwd().'/profiles/andes/taxonomys/lateral_items.csv',
    'check_options' => false,
    'result_display' => true,
  );
  taxonomy_csv_vocabulary_import($lateral_items);


  $redes_sociales = array (
    'import_format' => 'polyhierarchy',
    'translate_by' => 'name',
    'translate_languages' => array (),
    'keep_order' => 1,
    'source_choice' => 'url',
    'filter_format' => 'plain_text',
    'filter_format_custom' => 'none',
    'check_line' => 1,
    'check_utf8' => 1,
    'locale_custom' => '',
    'vocabulary_target' => 'existing',
    'vocabulary_id' => 9,
    'i18n_mode' => 0,
    'language' => 'und',
    'delete_terms' => 0,
    'check_hierarchy' => 1,
    'set_hierarchy' => '2',
    'update_or_ignore' => 'update',
    'result_stats' => 'result_stats',
    'result_terms' => 'result_terms',
    'result_level' => 'redes_sociales',
    'result_type' => 'by_message',
    'delimiter' => ',',
    'enclosure' => '"',
    'vocabulary_language' => 'und',
    'file' => (object)(array(
       'filename' => 'redes_sociales.csv',
       'filepath' => getcwd().'/profiles/andes/taxonomys/redes_sociales.csv',
       'filesize' => 214,
    )),
    'url' => getcwd().'/profiles/andes/taxonomys/redes_sociales.csv',
    'check_options' => false,
    'result_display' => true,
  );
  taxonomy_csv_vocabulary_import($redes_sociales);

  $tipo_layout = array (
    'import_format' => 'polyhierarchy',
    'translate_by' => 'name',
    'translate_languages' => array (),
    'keep_order' => 1,
    'source_choice' => 'url',
    'filter_format' => 'plain_text',
    'filter_format_custom' => 'none',
    'check_line' => 1,
    'check_utf8' => 1,
    'locale_custom' => '',
    'vocabulary_target' => 'existing',
    'vocabulary_id' => 10,
    'i18n_mode' => 0,
    'language' => 'und',
    'delete_terms' => 0,
    'check_hierarchy' => 1,
    'set_hierarchy' => '2',
    'update_or_ignore' => 'update',
    'result_stats' => 'result_stats',
    'result_terms' => 'result_terms',
    'result_level' => 'tipo_layout',
    'result_type' => 'by_message',
    'delimiter' => ',',
    'enclosure' => '"',
    'vocabulary_language' => 'und',
    'file' => (object)(array(
       'filename' => 'tipo_layout.csv',
       'filepath' => getcwd().'/profiles/andes/taxonomys/tipo_layout.csv',
       'filesize' => 214,
    )),
    'url' => getcwd().'/profiles/andes/taxonomys/tipo_layout.csv',
    'check_options' => false,
    'result_display' => true,
  );
  taxonomy_csv_vocabulary_import($tipo_layout);

}