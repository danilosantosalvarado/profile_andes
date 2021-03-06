<?php

/**
 * @file
 * estilos_de_imagen.features.inc
 */

/**
 * Implements hook_image_default_styles().
 */
function estilos_de_imagen_image_default_styles() {
  $styles = array();

  // Exported image style: anuncios__639_x_182_.
  $styles['anuncios__639_x_182_'] = array(
    'label' => 'anuncios (639 x 182)',
    'effects' => array(
      5 => array(
        'name' => 'image_resize',
        'data' => array(
          'width' => 639,
          'height' => 182,
        ),
        'weight' => 1,
      ),
    ),
  );

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

  // Exported image style: detacado_hori_noticia.
  $styles['detacado_hori_noticia'] = array(
    'label' => 'detacado hori noticia',
    'effects' => array(
      19 => array(
        'name' => 'image_resize',
        'data' => array(
          'width' => 648,
          'height' => 363,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: equipo_de_trabajo__195x195_.
  $styles['equipo_de_trabajo__195x195_'] = array(
    'label' => 'equipo de trabajo (1000x1000)',
    'effects' => array(
      20 => array(
        'name' => 'image_resize',
        'data' => array(
          'width' => 1000,
          'height' => 1000,
        ),
        'weight' => 2,
      ),
    ),
  );

  // Exported image style: layout_2__542x310_.
  $styles['layout_2__542x310_'] = array(
    'label' => 'Layout 2 (542x310)',
    'effects' => array(
      9 => array(
        'name' => 'image_resize',
        'data' => array(
          'width' => 542,
          'height' => 310,
        ),
        'weight' => 1,
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

  // Exported image style: ranking-home__275x275_.
  $styles['ranking-home__275x275_'] = array(
    'label' => 'ranking-home (275x275)',
    'effects' => array(
      7 => array(
        'name' => 'image_resize',
        'data' => array(
          'width' => 275,
          'height' => 275,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}
