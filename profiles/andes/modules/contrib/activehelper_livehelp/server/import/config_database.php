<?php

if ( !defined( '__CONFIG_DATABASE_INC' ) ) {
	define( '__CONFIG_DATABASE_INC', 1 );
	define( 'DS', DIRECTORY_SEPARATOR );

	include_once('constants.php');
	include_once('jlhconst.php');

	define( "DB_HOST", "localhost" );
	define( "DB_USER", "root" );
	define( "DB_PASS", "paco25" );
	define( "DB_NAME", "drupal" );

	$table_prefix = '';
	$table_prefix = $table_prefix . 'livehelp_';
}

?>