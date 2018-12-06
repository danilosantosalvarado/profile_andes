<?php
/**
 * @file
 * tc_publicaciones.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function tc_publicaciones_field_group_info() {
  $field_groups = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_compra|node|publicaciones|form';
  $field_group->group_name = 'group_compra';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'publicaciones';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Compra',
    'weight' => '5',
    'children' => array(
      0 => 'field_boton_compra',
      1 => 'field_precio',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-compra field-group-fieldset',
        'required_fields' => 1,
        'id' => '',
      ),
    ),
  );
  $field_groups['group_compra|node|publicaciones|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_imagen_publicacion|node|publicaciones|form';
  $field_group->group_name = 'group_imagen_publicacion';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'publicaciones';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Imagen Publicación',
    'weight' => '1',
    'children' => array(
      0 => 'field_imagen',
      1 => 'field_imagen_mobile',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-imagen-publicacion field-group-fieldset',
        'required_fields' => 1,
        'id' => '',
      ),
    ),
  );
  $field_groups['group_imagen_publicacion|node|publicaciones|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_info_libro|node|publicaciones|form';
  $field_group->group_name = 'group_info_libro';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'publicaciones';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Información del libro',
    'weight' => '3',
    'children' => array(
      0 => 'field_autor',
      1 => 'field_caratula',
      2 => 'field_area_tematica',
      3 => 'field_formato',
      4 => 'field_editorial',
      5 => 'field_edicion',
      6 => 'field_isbn',
      7 => 'field_fecha_publicacion',
      8 => 'field_paginas',
      9 => 'field_disponibilidad',
      10 => 'field_idioma',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-info-libro field-group-fieldset',
        'required_fields' => 1,
        'id' => '',
      ),
    ),
  );
  $field_groups['group_info_libro|node|publicaciones|form'] = $field_group;

  // Translatables
  // Included for use with string extractors like potx.
  t('Compra');
  t('Imagen Publicación');
  t('Información del libro');

  return $field_groups;
}
