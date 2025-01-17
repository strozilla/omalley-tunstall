<?php

// Pages Covered: Blog Index

 use Timber\Post;
 use Timber\Timber;
 use Timber\PostQuery;

$context = Timber::context();
$timber_post = new Post();
$context['post'] = $timber_post;

$args = array(
    'post_type' => 'post',
    'posts_per_page' => 4,
    'orderby' => 'date',
    'order' => 'DESC',
);


$context['posts'] = new PostQuery($args);

Timber::render(array('page.twig'), $context);
