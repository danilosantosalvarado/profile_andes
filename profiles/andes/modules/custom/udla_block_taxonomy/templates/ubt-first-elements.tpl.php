<?php
  if(isset($_POST['itemid'])){
    $items_parents = taxonomy_get_parents_all($_POST['itemid']);
    $parents_list = array();
    foreach ($items_parents as $parents) {
      $parents_list[] = $parents->tid;
    }
  }
?>
<section class="box-level-0 ">
    <ul>
    <?php foreach ($items as $tid => $name_tax) { ?>
      <li class="level-li<?php echo (in_array($tid,$parents_list)) ?  "-active": "";?>" >
        <button type="button" itemid="<?php echo $tid;?>" class="item-level level-0"><?php echo (module_exists('entity_translation')) ?  $name_tax :t($name_tax);?></button>
      </li>
    <?php }?>
    </ul>
</section>