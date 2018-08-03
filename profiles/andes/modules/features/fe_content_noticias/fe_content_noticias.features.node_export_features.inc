<?php
/**
 * @file
 * fe_content_noticias.features.node_export_features.inc
 */

/**
 * Implements hook_node_export_features_default().
 */
function fe_content_noticias_node_export_features_default() {
  $node_export = array(
  'code_string' => 'array(
  (object) array(
      \'body\' => array(
        \'en\' => array(
          array(
            \'value\' => "<p>En noticias</p>\\r\\n",
            \'summary\' => \'\',
            \'format\' => \'filtered_html\',
            \'safe_value\' => "<p>En noticias</p>\\n",
            \'safe_summary\' => \'\',
          ),
        ),
        \'es\' => array(
          array(
            \'value\' => "<p>Es noticias</p>\\r\\n",
            \'summary\' => \'\',
            \'format\' => \'filtered_html\',
            \'safe_value\' => "<p>Es noticias</p>\\n",
            \'safe_summary\' => \'\',
          ),
        ),
      ),
      \'changed\' => NULL,
      \'cid\' => \'0\',
      \'comment\' => \'2\',
      \'comment_count\' => \'0\',
      \'created\' => NULL,
      \'data\' => NULL,
      \'entity_translation_handler_id\' => \'node-noticias-eid-1-1\',
      \'field_items_slider\' => array(),
      \'files\' => array(),
      \'language\' => \'es\',
      \'last_comment_name\' => NULL,
      \'last_comment_timestamp\' => NULL,
      \'last_comment_uid\' => \'1\',
      \'log\' => \'\',
      \'menu\' => NULL,
      \'name\' => \'root\',
      \'nid\' => NULL,
      \'node_export_drupal_version\' => \'7\',
      \'path\' => NULL,
      \'picture\' => \'0\',
      \'promote\' => \'1\',
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'revision_timestamp\' => NULL,
      \'revision_uid\' => \'1\',
      \'status\' => \'1\',
      \'sticky\' => \'0\',
      \'title\' => \'Es noticias\',
      \'title_field\' => array(
        \'en\' => array(
          array(
            \'value\' => \'En noticias\',
            \'format\' => NULL,
            \'safe_value\' => \'En noticias\',
          ),
        ),
        \'es\' => array(
          array(
            \'value\' => \'Es noticias\',
            \'format\' => NULL,
            \'safe_value\' => \'Es noticias\',
          ),
        ),
      ),
      \'title_original\' => \'Es noticias\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'translations\' => (object) array(
          \'original\' => \'es\',
          \'data\' => array(
            \'en\' => array(
              \'entity_type\' => \'node\',
              \'entity_id\' => \'1\',
              \'revision_id\' => \'1\',
              \'language\' => \'en\',
              \'source\' => \'es\',
              \'uid\' => \'1\',
              \'status\' => \'1\',
              \'translate\' => \'0\',
              \'created\' => \'1533276612\',
              \'changed\' => \'1533276612\',
            ),
            \'es\' => array(
              \'entity_type\' => \'node\',
              \'entity_id\' => \'1\',
              \'revision_id\' => \'1\',
              \'language\' => \'es\',
              \'source\' => \'\',
              \'uid\' => \'1\',
              \'status\' => \'1\',
              \'translate\' => \'0\',
              \'created\' => \'1533276591\',
              \'changed\' => \'1533276591\',
            ),
          ),
        ),
      \'type\' => \'noticias\',
      \'uid\' => \'1\',
      \'uuid\' => \'cd3bfaee-bd34-4f82-b00a-cc0a06856349\',
      \'vid\' => NULL,
      \'vuuid\' => \'9e379dbf-e567-433a-a6a1-17072ae3151f\',
    ),
)',
);
  return $node_export;
}
