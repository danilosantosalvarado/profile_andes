<?php
  if(isset($_POST['itemid'])){
    $items_parents = taxonomy_get_parents_all($_POST['itemid']);
    $parents_list = array();
    foreach ($items_parents as $parents) {
      $parents_list[] = $parents->tid;
    }
    $items_children = taxonomy_get_children($_POST['itemid']);
    foreach ($items_children as $children) {
      $children_list[] = $children->tid;
    }
  }

?>
<div class="box-level-<?php echo $level."-".$parent;?> box-container level-box-disable">
    <ul>
    <?php foreach ($items as $tid => $name_tax) { ?>
      <li class="level-li<?php echo (in_array($tid,$parents_list)) ?  "-active": "";?> <?php echo (in_array($tid,$children_list)) ? ' children-active': ""; ?>">
        <button type="button" itemid="<?php echo $tid;?>" class="item-level level-<?php echo $level;?>"><?php echo (module_exists('entity_translation')) ?  $name_tax :t($name_tax);?></button>
      </li>
    <?php }?>
    </ul>
</div>