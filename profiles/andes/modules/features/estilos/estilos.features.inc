<?php
/**
 * @file
 * estilos.features.inc
 */

/**
 * Implements hook_image_default_styles().
 */
function estilos_image_default_styles() {
  $styles = array();

  // Exported image style: componentes__430x255_.
  $styles['componentes__430x255_'] = array(
    'label' => 'componentes (430x255)',
    'effects' => array(
      3 => array(
        'name' => 'image_resize',
        'data' => array(
          'width' => 430,
          'height' => 255,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: componer_noticias_.
  $styles['componer_noticias_'] = array(
    'label' => 'componer noticias (416x258)',
    'effects' => array(
      2 => array(
        'name' => 'image_resize',
        'data' => array(
          'width' => 416,
          'height' => 258,
        ),
        'weight' => 2,
      ),
    ),
  );

  // Exported image style: publicaciones_des__343x500_.
  $styles['publicaciones_des__343x500_'] = array(
    'label' => 'publicaciones des (343x500)',
    'effects' => array(
      4 => array(
        'name' => 'image_resize',
        'data' => array(
          'width' => 343,
          'height' => 500,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}
