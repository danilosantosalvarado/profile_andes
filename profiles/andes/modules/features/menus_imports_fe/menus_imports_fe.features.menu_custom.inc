<?php

/**
 * @file
 * menus_imports_fe.features.menu_custom.inc
 */

/**
 * Implements hook_menu_default_menu_custom().
 */
function menus_imports_fe_menu_default_menu_custom() {
  $menus = array();

  // Exported menu: main-menu.
  $menus['main-menu'] = array(
    'menu_name' => 'main-menu',
    'title' => 'Menú principal',
    'description' => 'El menú <em>Principal</em> se usa en muchos sitios web para mostrar las secciones principales del sitio, generalmente en una barra de navegación superior.',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: management.
  $menus['management'] = array(
    'menu_name' => 'management',
    'title' => 'Management',
    'description' => 'El menú <em>Administrar</em> contiene enlaces a tareas administrativas.',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: menu-enlaces-de-interes.
  $menus['menu-enlaces-de-interes'] = array(
    'menu_name' => 'menu-enlaces-de-interes',
    'title' => 'Enlaces de interes',
    'description' => '',
    'language' => 'und',
    'i18n_mode' => 5,
  );
  // Exported menu: menu-mega-menu.
  $menus['menu-mega-menu'] = array(
    'menu_name' => 'menu-mega-menu',
    'title' => 'Mega Menu',
    'description' => '',
    'language' => 'und',
    'i18n_mode' => 5,
  );
  // Exported menu: menu-menu-top-soy.
  $menus['menu-menu-top-soy'] = array(
    'menu_name' => 'menu-menu-top-soy',
    'title' => 'Menu Top Soy',
    'description' => '',
    'language' => 'und',
    'i18n_mode' => 5,
  );
  // Exported menu: navigation.
  $menus['navigation'] = array(
    'menu_name' => 'navigation',
    'title' => 'Navegación',
    'description' => 'El menú de <em>Navegación</em> contiene enlaces para los visitantes al sitio. Algunos módulos agregan enlaces al menú de <em>Navegación</em> automáticamente.',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: user-menu.
  $menus['user-menu'] = array(
    'menu_name' => 'user-menu',
    'title' => 'User menu',
    'description' => 'El menú <em>Usuario</em> contiene enlaces relacionados con la cuenta del usuario, como el enlace \'Cerrar sesión\'.',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('El menú <em>Administrar</em> contiene enlaces a tareas administrativas.');
  t('El menú <em>Principal</em> se usa en muchos sitios web para mostrar las secciones principales del sitio, generalmente en una barra de navegación superior.');
  t('El menú <em>Usuario</em> contiene enlaces relacionados con la cuenta del usuario, como el enlace \'Cerrar sesión\'.');
  t('El menú de <em>Navegación</em> contiene enlaces para los visitantes al sitio. Algunos módulos agregan enlaces al menú de <em>Navegación</em> automáticamente.');
  t('Enlaces de interes');
  t('Management');
  t('Mega Menu');
  t('Menu Top Soy');
  t('Menú principal');
  t('Navegación');
  t('User menu');

  return $menus;
}
