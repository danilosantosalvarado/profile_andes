<?php 
  if(!empty($social_share_items)){
?>
  <ul class="social-network-list">
<?php
  foreach ($social_share_items as $item_share) {
    if(is_string($item_share)){
?>
      <li class="social-item-<?php echo $item_share;?>">
        <?php
          $item_svg = array(
            '#theme' => 'social_share_svg_render',
            '#item_name' => $item_share,
          );
          echo drupal_render($item_svg);
       ?>
      </li>
<?php
    }
  }
?>
  </ul>
<?php
  }else{
    return "No se han configurado las redes sociales";
  }
?>
