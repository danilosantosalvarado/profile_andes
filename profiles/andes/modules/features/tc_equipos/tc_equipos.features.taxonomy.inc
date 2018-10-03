<?php
/**
 * @file
 * tc_equipos.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function tc_equipos_taxonomy_default_vocabularies() {
  return array(
    'categoria_equipos_trabajo' => array(
      'name' => 'Categoría equipos de trabajo',
      'machine_name' => 'categoria_equipos_trabajo',
      'description' => '',
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