<?php
if (isset($item['link']['localized_options']['content']['image'])) {
  $image = file_load($item['link']['localized_options']['content']['image']);
  if ($image->type == 'image') {
    $content = array(
      'file' => array(
        '#theme' => 'image',
        '#path' => $image->uri,
        '#prefix' => '<div class="container-menu-image"><div class="image-menu">',
        '#suffix' => '</div><div class="menu-title">'.$item['link']['title'].'</div></div>'
      ),
    );  
    $item['link']['title'] =  drupal_render($content);
  }
  else if ($image->type == 'document'){
    $file = file_load($item['link']['localized_options']['content']['image']);  
    $item['link']['title'] = l($item['link']['title'], file_create_url($file->uri), array('query' => array('download' => '1')));
  }
}

?>
<li <?php print $attributes; ?> class="<?php print $classes; ?>">
  <a href="<?php print in_array($item['link']['href'], array('<nolink>')) ? "#" : url($item['link']['href'], $item['link']['options']); ?>" <?php echo drupal_attributes($item['link']['#attributes']); ?>>
    <?php if (!empty($item_config['xicon'])) : ?>
      <i class="<?php print $item_config['xicon']; ?>"></i>
    <?php endif; ?>
    <?php print t($item['link']['title']); ?>
    <?php if ($submenu && $block_config['auto-arrow']) : ?>
      <span class="caret"></span>
    <?php endif; ?>
    <?php if (!empty($item_config['caption'])) : ?>
      <span class="mega-caption"><?php print t($item_config['caption']); ?></span>
    <?php endif; ?>
  </a>

  <?php print $submenu ? $submenu : ""; ?>
</li>
