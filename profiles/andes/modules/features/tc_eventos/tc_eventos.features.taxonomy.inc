<?php
/**
 * @file
 * tc_eventos.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function tc_eventos_taxonomy_default_vocabularies() {
  return array(
    'eventos' => array(
      'name' => 'Eventos',
      'machine_name' => 'eventos',
      'description' => 'Categorias de eventos',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
      'rdf_mapping' => array(
        'rdftype' => array(
          0 => 'skos:ConceptScheme',
        ),
        'name' => array(
          'predicates' => array(
            0 => 'dc:title',
          ),
        ),
        'description' => array(
          'predicates' => array(
            0 => 'rdfs:comment',
          ),
        ),
      ),
    ),
  );
}